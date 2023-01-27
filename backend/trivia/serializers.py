from rest_framework import serializers
from .models import TriviaCategory, TriviaQuestion


class TriviaCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = TriviaCategory
        fields = '__all__'


class TriviaQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TriviaQuestion
        fields = '__all__'
