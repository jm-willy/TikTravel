from django.contrib import admin

# Register your models here.

# con esto es posible que se puedan subir imagenes desde el /admin, sino pruba desde /api-auth/docs

from api_auth.models import Picture, ProfilePic

admin.site.register(Picture)
admin.site.register(ProfilePic)
