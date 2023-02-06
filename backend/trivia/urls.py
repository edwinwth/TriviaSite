from django.urls import path

from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('', views.index, name='index'),
    path('question/', views.QuestionList.as_view()),
    path('question/<int:pk>/', views.QuestionDetail.as_view()),
    path('category/', views.CategoryList.as_view()),
    path('category/<int:pk>/', views.CategoryDetail.as_view()),
    path('auth/set-csrf/', views.set_csrf_token, name="set-csrf"),
    path('auth/login/', views.login_view, name="login"),
    path('auth/test/', views.TestAuth.as_view())
]
urlpatterns = format_suffix_patterns(urlpatterns)