


from ninja import NinjaAPI
from ninja import Form
from ninja import Schema
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib.auth import logout
from django.contrib.sessions.backends.db import SessionStore
from django.core.exceptions import PermissionDenied
from ninja.security import django_auth
from back.settings import REDIRECT_BASE
from django.shortcuts import redirect
from django.db.utils import IntegrityError

api = NinjaAPI(csrf=False)
session = SessionStore()

@api.get("/hi")
def hello(request):
    return "Hiii (no auth) - " + repr(request)

# cada atributo name del input tiene que ser igual a lo que aparece abajo
class UserSignIn(Schema):
    usern: str = None
    passw: str = None
    email: str = None

@api.post("/sign") # 
def sign(request, user_in: UserSignIn = Form(...)):
    try:
        User.objects.create_user(username=user_in.usern, email=user_in.email, password=user_in.passw)
        return redirect(REDIRECT_BASE+'login')
    except IntegrityError:
        return api.create_response(request, {'success': False, "message": "User or email already registered"}, status=406)

# cada atributo name del input tiene que ser igual a lo que aparece abajo
class UserLogIn(Schema):
    usern: str = None
    passw: str = None
    
@api.post("/log")
def log(request, user_in: UserLogIn = Form(...)):
    try:
        user = authenticate(username=user_in.usern, password=user_in.passw)
        login(request, user)
        return api.create_response(request, {'success': True, "message": "Logged in!"}, status=200)
    except PermissionDenied:
        return api.create_response(request, {'success': False, "message": "Incorrect credentials"}, status=401)
    except AttributeError:
            try:
                User.objects.get(username=user_in.usern)
            except User.DoesNotExist:
                return api.create_response(request, {'success': False, "message": "Incorrect credentials"}, status=404)
    

from api_auth.models import Picture, ProfilePic

@api.get('/user-pics')
def user_pics(request, n: int):
    pics = Picture.objects.all()
    return {'pics_src': [i.url for i in pics]}

@api.get('/profile-pic')
def user_pic(request):
    pic = ProfilePic.objects.get(id=1)
    return {'profile_pic_src': pic.url}
