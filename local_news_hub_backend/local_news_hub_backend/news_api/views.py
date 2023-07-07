from rest_framework import generics as rest_generic_views
from rest_framework.response import Response


from local_news_hub_backend.news_api.models import News, Category, Comment
from local_news_hub_backend.news_api.serializers import CommentSerializer, NewsSerializer, CategorySerializer


class ListNewsApiView(rest_generic_views.ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer


class DetailsNewsView(rest_generic_views.RetrieveAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()

        # Increment the views_count field by one
        instance.views_count += 1

        # Save the updated instance
        instance.save()

        serializer = self.get_serializer(instance)
        return Response(serializer.data)


class ListCategoriesApiView(rest_generic_views.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CommentCreateAPIView(rest_generic_views.CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer