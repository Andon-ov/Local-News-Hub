# Generated by Django 4.2.1 on 2023-05-23 06:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        (
            "news_api",
            "0015_rename_text_comment_content_rename_user_comment_name_and_more",
        ),
    ]

    operations = [
        migrations.AddField(
            model_name="news",
            name="author",
            field=models.CharField(
                blank=True, default="EraTv", max_length=50, null=True
            ),
        ),
    ]
