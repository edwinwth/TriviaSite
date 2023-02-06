from django.urls import path

from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('set-csrf/', views.set_csrf_token, name="set-csrf"),
    path('signup/', views.SignupView.as_view(), name="signup"),
    path('login/', views.LoginView.as_view(), name="login"),
    path('logout/', views.LogoutView.as_view(), name="logout"),
    path('test/', views.TestAuth.as_view())
]
urlpatterns = format_suffix_patterns(urlpatterns)