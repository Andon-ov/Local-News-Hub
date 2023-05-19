from rest_framework import generics as rest_generic_views

from local_news_hub_backend.news_api.models import News
from local_news_hub_backend.news_api.serializers import NewsSerializer


class ListNewsApiView(rest_generic_views.ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer


class DetailsNewsView(rest_generic_views.RetrieveAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
