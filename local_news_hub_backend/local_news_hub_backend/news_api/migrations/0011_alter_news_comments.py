# Generated by Django 4.2.1 on 2023-05-18 19:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("news_api", "0010_alter_news_comments"),
    ]

    operations = [
        migrations.AlterField(
            model_name="news",
            name="comments",
            field=models.ManyToManyField(
                blank=True, related_name="news_comments", to="news_api.comment"
            ),
        ),
    ]
