from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Picture(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    pic = models.ImageField(upload_to=f"user-images/{user}/pics/%Y/")

    def __str__(self):
        return self.pic.path

    class Meta:
        ordering = ["-id"]

class ProfilePic(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    pic = models.ImageField(upload_to=f"user-images/{user}/profile")

    def __str__(self):
        return self.pic.path
