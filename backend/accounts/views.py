from django.contrib.auth import login, logout
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import LoginSerializer, NewUserSerializer


# Create your views here.
@ensure_csrf_cookie
def set_csrf_token(request):
    return JsonResponse({"details": "CSRF cookie set"})


class SignupView(APIView):

    def post(self, request):
        user_serializer = NewUserSerializer(data=request.data)

        if User.objects.filter(username=request.data.get('username')).exists():
            return Response(data={'message': 'User already exists.'}, status=status.HTTP_400_BAD_REQUEST)

        if user_serializer.is_valid(raise_exception=True):
            user_serializer.save()
            return Response(data={'message': 'User created successfully.', 'user': user_serializer.data},
                            status=status.HTTP_201_CREATED)

        return Response(data={'message': user_serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):

    def post(self, request):
        serializer = LoginSerializer(data=self.request.data,
                                     context={'request': self.request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return Response(data={'username': user.username, 'user_id': user.id}, status=status.HTTP_202_ACCEPTED)


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        logout(request)
        return Response(None, status=status.HTTP_200_OK)


class TestAuth(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        content = {
            'user': str(request.user),  # `django.contrib.auth.User` instance.
            'auth': str(request.auth),  # None
        }
        return Response(content)