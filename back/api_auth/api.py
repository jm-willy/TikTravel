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
from api_auth.models import Picture
from back.settings import REDIRECT_BASE, DEBUG
from django.shortcuts import redirect

#########

# if DEBUG:
api = NinjaAPI(csrf=True, auth=django_auth, urls_namespace='api_auth')


@api.get("/hi")
def hello(request):
    # import logging
    # logging.warning(request.COOKIES)
    # logging.warning(request.META)
    # logging.warning('********************************************')
    return api.create_response(request, {'success': True, "message": "Hii, you're still logged in!", 'username': request.user.username}, status=200)

@api.get("/logout")
def log_out(request):
    logout(request)
    return redirect(REDIRECT_BASE)

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
    Picture.objects.update_or_create(user=request.user, pic=pic_file)
    return api.create_response(request, {'success': True,}, status=200)

