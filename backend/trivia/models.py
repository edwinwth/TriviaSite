import datetime

from django.db import models
from django.conf import settings


class TriviaCategory(models.Model):
    category_name = models.CharField(max_length=50)

    def __str__(self):
        return self.category_name


class TriviaQuestion(models.Model):
    question_text = models.CharField(max_length=250)
    answer_text = models.CharField(max_length=50)
    thumbs_up_count = models.IntegerField(default=0)
    thumbs_down_count = models.IntegerField(default=0)
    creation_date = models.DateTimeField("Creation Date", auto_now_add=True)
    trivia_category = models.ManyToManyField(TriviaCategory)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.question_text