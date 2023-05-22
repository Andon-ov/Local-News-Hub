from django.contrib.auth import get_user_model
from django.db import models

from ckeditor.fields import RichTextField

UserModel = get_user_model()


class Category(models.Model):
    TITLE_MAX_LENGTH = 255

    title = models.CharField(
        max_length=TITLE_MAX_LENGTH,
        blank=False,
        null=False
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    is_active = models.BooleanField(
        default=True,
        blank=False,
        null=False
    )

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['title', 'id']
        verbose_name_plural = 'Categories'


class Image(models.Model):
    TITLE_MAX_LENGTH = 255

    title = models.CharField(
        max_length=TITLE_MAX_LENGTH,
        blank=True,
        null=True
    )
    image_url = models.URLField()

    news = models.ForeignKey(
        'News',
        on_delete=models.CASCADE,
        related_name='related_images',
        blank=True,
        null=True
    )

    def __str__(self):
        return f"Image {self.pk}"


class Video(models.Model):
    TITLE_MAX_LENGTH = 255

    title = models.CharField(
        max_length=TITLE_MAX_LENGTH,
        blank=True,
        null=True
    )
    youtube_url = models.URLField()

    news = models.ForeignKey(
        'News',
        on_delete=models.CASCADE,
        related_name='related_videos',
        blank=True,
        null=True
    )

    def __str__(self):
        return f"Video {self.pk}"


class Tag(models.Model):
    NAME_MAX_LENGTH = 100

    name = models.CharField(
        max_length=NAME_MAX_LENGTH,
        blank=False,
        null=False
    )

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']


class Comment(models.Model):
    text = models.TextField(
        null=False,
        blank=False,
    )

    publication_date_and_time = models.DateTimeField(
        auto_now_add=True,
        blank=True,
        null=False,
    )
    news = models.ForeignKey(
        'News',
        on_delete=models.CASCADE,
        related_name='news_comments'
    )

    user = models.ForeignKey(
        UserModel,
        on_delete=models.CASCADE,
        null=False,
        blank=True,
    )

    def __str__(self):
        return self.text

    class Meta:
        ordering = ('-id',)


class Like(models.Model):
    user = models.ForeignKey(
        UserModel,
        on_delete=models.CASCADE
    )

    news = models.ForeignKey(
        'News',
        on_delete=models.CASCADE,
        null=False,
        blank=True,
        related_name='likes'
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    class Meta:
        ordering = ('-id',)


class News(models.Model):
    TITLE_MAX_LENGTH = 200
    NEWS_TYPE_MAX_LENGTH = 10
    TYPE_CHOICES = (
        ('hot', 'Hot'),
        ('normal', 'Normal'),
    )

    title = models.CharField(
        max_length=TITLE_MAX_LENGTH,
    )
    description = models.TextField(
        blank=True,
        null=True
    )
    content = RichTextField(
        blank=True,
        null=True
    )
    # content = models.TextField()

    published_at = models.DateTimeField()

    updated_at = models.DateTimeField(
        auto_now=True
    )
    news_type = models.CharField(
        max_length=NEWS_TYPE_MAX_LENGTH,
        choices=TYPE_CHOICES,
        default='normal'
    )

    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE
    )

    views_count = models.PositiveIntegerField(
        default=0
    )

    tags = models.ManyToManyField(
        Tag,
        blank=True,
    )

    comments = models.ManyToManyField(
        Comment,
        related_name='news_comments',
        blank=True,
    )

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['published_at', 'updated_at']
        verbose_name_plural = 'News'
