from django.contrib import admin
from .models import TriviaQuestion, TriviaCategory

# Register your models here.

admin.site.register(TriviaQuestion)
admin.site.register(TriviaCategory)
