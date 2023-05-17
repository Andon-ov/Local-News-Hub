from django.urls import path

from local_news_hub_backend.auth_api.views import RegisterApiView, LoginApiView, LogoutApiView

urlpatterns = (
    path('register/', RegisterApiView.as_view(), name='api register user'),
    path('login/', LoginApiView.as_view(), name='api login user'),
    path('logout/', LogoutApiView.as_view(), name='api logout user'),
)
