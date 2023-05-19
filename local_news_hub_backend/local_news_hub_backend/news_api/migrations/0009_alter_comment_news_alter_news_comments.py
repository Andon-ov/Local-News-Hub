# Generated by Django 4.2.1 on 2023-05-18 16:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("news_api", "0008_news_comments_alter_comment_news"),
    ]

    operations = [
        migrations.AlterField(
            model_name="comment",
            name="news",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="news_comments",
                to="news_api.news",
            ),
        ),
        migrations.AlterField(
            model_name="news",
            name="comments",
            field=models.ManyToManyField(
                related_name="news_comments", to="news_api.comment"
            ),
        ),
    ]