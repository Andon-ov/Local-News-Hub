from rest_framework import serializers

from local_news_hub_backend.news_api.models import News, Comment


class CommentSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.username')

    class Meta:
        model = Comment
        fields = ('text', 'user', 'publication_date_and_time',)


class NewsSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.title')
    images = serializers.SerializerMethodField()
    videos = serializers.SerializerMethodField()
    tags = serializers.SerializerMethodField()
    likes_count = serializers.SerializerMethodField()
    comments = CommentSerializer(many=True, source='news_comments', read_only=True)
    comments_count = serializers.SerializerMethodField()

    @staticmethod
    def get_images(obj):
        return [image.image_url for image in obj.related_images.all()]

    @staticmethod
    def get_videos(obj):
        return [video.youtube_url for video in obj.related_videos.all()]

    @staticmethod
    def get_tags(obj):
        return obj.tags.values_list('name', flat=True)

    @staticmethod
    def get_likes_count(obj):
        return obj.likes.count()

    @staticmethod
    def get_comments_count(obj):
        return obj.comments.count()

    class Meta:
        model = News
        fields = (
            'id',
            'title',
            'description',
            'content',
            'published_at',
            'updated_at',
            'news_type',
            'category_name',
            'views_count',
            'images',
            'videos',
            'tags',
            'likes_count',
            'comments',
            'comments_count',
        )

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        comments = representation.pop('comments', [])
        representation['comments_count'] = len(comments)
        return representation
