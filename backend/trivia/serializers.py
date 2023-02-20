from rest_framework import serializers
from rest_framework.fields import CurrentUserDefault

from .models import TriviaCategory, TriviaQuestion


class TriviaCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = TriviaCategory
        fields = '__all__'


class TriviaQuestionSerializer(serializers.ModelSerializer):
    created_by = serializers.CharField(source='created_by.username', required=False)
    created_by_id = serializers.IntegerField(source='created_by.id', required=False)

    class Meta:
        model = TriviaQuestion
        fields = ['id', 'question_text', 'answer_text', 'trivia_category', 'thumbs_up_count', 'thumbs_down_count',
                  'creation_date', 'created_by', 'created_by_id']
        read_only_fields = ['id', 'thumbs_up_count', 'thumbs_down_count', 'creation_date', 'created_by',
                            'created_by_id']

    def create(self, validated_data):
        trivia_question = TriviaQuestion(
            question_text=self.validated_data['question_text'],
            answer_text=self.validated_data['answer_text'],
            created_by=validated_data['user'])
        trivia_question.save()
        trivia_question.trivia_category.set(self.validated_data['trivia_category'])
        return trivia_question
