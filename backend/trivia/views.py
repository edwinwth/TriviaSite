from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import TriviaCategory, TriviaQuestion
from .serializers import TriviaQuestionSerializer, TriviaCategorySerializer
from rest_framework.views import APIView
from django.http import Http404
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics


# Create your views here.


def index(request):
    return HttpResponse("Trivia Index.")


class QuestionList(APIView):
    def get(self, request, format=None):
        questions = TriviaQuestion.objects.all()
        serializer = TriviaQuestionSerializer(questions, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TriviaQuestionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class QuestionDetail(APIView):

    def get_object(self, pk):
        try:
            return TriviaQuestion.objects.get(pk=pk)
        except TriviaQuestion.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        trivia_question = self.get_object(pk)
        serializer = TriviaQuestionSerializer(trivia_question)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        trivia_question = self.get_object(pk)
        serializer = TriviaQuestionSerializer(trivia_question, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        trivia_question = self.get_object(pk)
        trivia_question.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CategoryList(APIView):
    def get(self, request):
        categories = TriviaCategory.objects.all()
        serializer = TriviaCategorySerializer(categories, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = TriviaCategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CategoryDetail(APIView):
    def get_category(self, pk):
        try:
            return TriviaCategory.objects.get(pk=pk)
        except TriviaCategory.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        trivia_category = self.get_category(pk)
        serializer = TriviaCategorySerializer(trivia_category)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        trivia_category = self.get_category(pk)
        serializer = TriviaCategorySerializer(trivia_category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        trivia_category = self.get_category(pk)
        trivia_category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
