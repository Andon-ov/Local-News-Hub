from django.urls import path

from local_news_hub_backend.news_api.views import CommentCreateAPIView, ListNewsApiView, DetailsNewsView, ListCategoriesApiView

urlpatterns = [
    path('', ListNewsApiView.as_view(), name='api list news'),

    path('<int:pk>/', DetailsNewsView.as_view(), name='api detail news'),

    path('categories/', ListCategoriesApiView.as_view(), name='api list categories'),
    
    path('comments/', CommentCreateAPIView.as_view(), name='api comment create'),
]
