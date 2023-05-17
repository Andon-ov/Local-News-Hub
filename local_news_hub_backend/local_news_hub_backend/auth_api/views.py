from django.contrib.auth import get_user_model
from rest_framework import generics as rest_generic_view, views as rest_views
from rest_framework.authtoken import models as authtoken_models
from rest_framework.authtoken import views as authtoken_views
from rest_framework.response import Response

from local_news_hub_backend.auth_api.serializers import CreateUserSerializer

UserModel = get_user_model()


class RegisterApiView(rest_generic_view.CreateAPIView):
    queryset = UserModel.objects.all()
    serializer_class = CreateUserSerializer


#  This i get from documentation
class LoginApiView(authtoken_views.ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = authtoken_models.Token.objects.get_or_create(user=user)
        return Response({
            '_id': user.pk,
            'username': user.username,
            'token': token.key,
        })


class LogoutApiView(rest_views.APIView):

    def get(self, request):
        return self.__perform_logout(request)

    def post(self, request):
        return self.__perform_logout(request)

    @staticmethod
    def __perform_logout(request):
        request.user.auth_token.delete()
        return Response({"message": "Successfully logged out."})
