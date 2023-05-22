


from ninja import NinjaAPI
from ninja import Form
from ninja import Schema
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib.auth import logout
from django.contrib.sessions.backends.db import SessionStore
from django.core.exceptions import PermissionDenied
from ninja.security import django_auth

api = NinjaAPI(csrf=False)
session = SessionStore()

@api.get("/hi")
def hello(request):
    return "Hiii (no auth)"

# cada atributo name del input tiene que ser igual a lo que aparece abajo
class UserSignIn(Schema):
    usern: str = None
    passw: str = None
    email: str = None

@api.post("/sign")
def sign(request, user_in: UserSignIn = Form(...)):
    User.objects.create_user(username=user_in.usern, email=user_in.email, password=user_in.passw)
    # user = User.objects.create_user(username=user_in.usern, email=user_in.email, password=user_in.passw)
    # user.save()
    return '200 OK'

# cada atributo name del input tiene que ser igual a lo que aparece abajo
class UserLogIn(Schema):
    usern: str = None
    passw: str = None
    
@api.post("/log")
def log(request, user_in: UserLogIn = Form(...)):
    try:
        user = authenticate(username=user_in.usern, password=user_in.passw)
        login(request, user)
        return '200 OK'
    except PermissionDenied:
        return '401 Unauthorized'
    except AttributeError:
            try:
                User.objects.get(username=user_in.usern)
            except User.DoesNotExist:
                return '404 Not found'
    

from api_auth.models import Picture, ProfilePic

@api.get('/user-pics')
def user_pics(request, n: int):
    pics = Picture.objects.all()
    return {'pics_src': [i.url for i in pics]}

@api.get('/profile-pic')
def user_pic(request):
    pic = ProfilePic.objects.get(id=1)
    return {'profile_pic_src': pic.url}
