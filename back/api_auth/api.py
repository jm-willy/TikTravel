from ninja import NinjaAPI, File
from ninja.files import UploadedFile
from ninja import Form
from ninja import Schema
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib.auth import logout
from django.contrib.sessions.backends.db import SessionStore
from django.core.exceptions import PermissionDenied
from ninja.security import django_auth
import vue_view.views
from models import Picture

#########
api = NinjaAPI(csrf=True)


@api.get("/hi")
def hello(request):
    return "Hiii (auth)"

@api.get("/logout", auth=django_auth)
def log_out(request):
    logout(request)
    return vue_view.views.vue_index(request)

@api.post("/change-password")
def sign(request, passw: int = Form(...)):
    user = request.user
    user.set_password(passw)
    user.save()
    return '200 OK'

from ninja import NinjaAPI, File
from ninja.files import UploadedFile

@api.post("/upload-pics")
def upload(request, pic_file: UploadedFile = File(...)): # atributo name del input tiene que ser igual a pic_file
    # user = User.objects.get(pk=request.user.id)
    Picture.objects.create(user=request.user, pic=pic_file)
    return '200 OK'

@api.post("/upload-profile-pic")
def upload(request, pic_file: UploadedFile = File(...)): # atributo name del input tiene que ser igual a pic_file
    # user = User.objects.get(pk=request.user.id)
    Picture.objects.update_or_create(user=request.user, pic=pic_file)
    return '200 OK'

