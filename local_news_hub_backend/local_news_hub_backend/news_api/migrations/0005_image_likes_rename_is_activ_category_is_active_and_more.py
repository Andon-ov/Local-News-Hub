# Generated by Django 4.2.1 on 2023-05-18 15:06

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("news_api", "0004_alter_news_comments_alter_news_description_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Image",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(blank=True, max_length=255, null=True)),
                ("image_url", models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name="Likes",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
            ],
            options={
                "ordering": ("-id",),
            },
        ),
        migrations.RenameField(
            model_name="category",
            old_name="is_activ",
            new_name="is_active",
        ),
        migrations.RemoveField(
            model_name="news",
            name="comments",
        ),
        migrations.RemoveField(
            model_name="news",
            name="likes",
        ),
        migrations.RemoveField(
            model_name="news",
            name="photos",
        ),
        migrations.RemoveField(
            model_name="news",
            name="tags",
        ),
        migrations.RemoveField(
            model_name="news",
            name="videos",
        ),
        migrations.AddField(
            model_name="video",
            name="news",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="related_videos",
                to="news_api.news",
            ),
        ),
        migrations.DeleteModel(
            name="Photo",
        ),
        migrations.AddField(
            model_name="likes",
            name="news",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="news_api.news"
            ),
        ),
        migrations.AddField(
            model_name="likes",
            name="user",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL
            ),
        ),
        migrations.AddField(
            model_name="image",
            name="news",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="related_images",
                to="news_api.news",
            ),
        ),
    ]