from django.contrib.auth.models import AbstractUser
from djongo import models

from main.managers import UserManager


class User(AbstractUser):
    username = None
    email = models.EmailField(
        unique=True,
    )

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


class Patient(models.Model):
    user_name = models.CharField(
        max_length=255,
    )

    class Meta:
        ordering = ['-id']


class Note(models.Model):
    user = models.ForeignKey(
        Patient,
        on_delete=models.CASCADE,
        related_name='user_note'
    )
    text = models.TextField(
        blank=False,
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    class Meta:
        ordering = ['-created_at']
