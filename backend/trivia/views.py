from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django_filters.rest_framework import DjangoFilterBackend

from .models import TriviaCategory, TriviaQuestion
from .serializers import TriviaQuestionSerializer, TriviaCategorySerializer
from rest_framework.views import APIView
from django.http import Http404
from rest_framework.response import Response
from rest_framework import status, generics, filters
from rest_framework.pagination import PageNumberPagination


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 12
    page_size_query_param = 'page_size'
    max_page_size = 20

# Create your views here.


def index(request):
    return HttpResponse("Trivia Index.")


class QuestionList(generics.ListCreateAPIView):
    queryset = TriviaQuestion.objects.all()
    serializer_class = TriviaQuestionSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [filters.SearchFilter, DjangoFilterBackend]
    search_fields = ['question_text']
    filterset_fields = ['trivia_category']



class QuestionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TriviaQuestion.objects.all()
    serializer_class = TriviaQuestionSerializer


class CategoryList(generics.ListCreateAPIView):
    queryset = TriviaCategory.objects.all()
    serializer_class = TriviaCategorySerializer


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TriviaCategory.objects.all()
    serializer_class = TriviaCategorySerializer

"""
def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form
        return render(request, 'polls/details.html', {
            'question': question,
            'error_message': "You didn't select a choice.",
        })
    else:
        selected_choice.votes = F('votes') + 1
        selected_choice.save()
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
        return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))
"""
