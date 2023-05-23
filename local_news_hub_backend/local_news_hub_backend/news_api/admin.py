from django.contrib import admin

from local_news_hub_backend.news_api.models import Category, Video, Tag, Comment, News, Image, Like


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'updated_at')


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ('title', 'image_url', 'news',)


@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ('youtube_url',)


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    pass


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('content', 'publication_date_and_time', 'news', 'name', 'email')


@admin.register(Like)
class LikeAdmin(admin.ModelAdmin):
    list_display = ('news', 'user',)


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        # 'description',
        # 'content',
        'published_at',
        'updated_at',
        # 'news_type',
        'category',
        # 'photos',
        # 'videos',
        # 'tags',
        # 'comments',
        # 'likes',
        # 'views_count',
    )
