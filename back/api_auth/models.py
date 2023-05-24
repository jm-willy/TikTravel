from django.db import models
from django.contrib.auth.models import User

# Create your models here.

def get_img_upload_path(instance, filename):
    return f'{instance.user.username}/images/{filename}'

class Picture(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    pic = models.ImageField(upload_to=get_img_upload_path)

    def __str__(self):
        return self.pic.path

    class Meta:
        ordering = ["-id"]

class ProfilePic(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    pic = models.ImageField(upload_to=get_img_upload_path)

    def __str__(self):
        return self.pic.path
