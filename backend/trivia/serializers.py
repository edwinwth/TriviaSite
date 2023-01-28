from rest_framework import serializers
from .models import TriviaCategory, TriviaQuestion


class TriviaCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = TriviaCategory
        fields = '__all__'


class TriviaQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TriviaQuestion
        fields = ['id', 'question_text', 'answer_text', 'trivia_category', 'thumbs_up_count', 'thumbs_down_count',
                  'creation_date']
        read_only_fields = ['id', 'thumbs_up_count', 'thumbs_down_count', 'creation_date']
