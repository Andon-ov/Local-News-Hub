# Generated by Django 4.2.1 on 2023-05-19 10:57

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("news_api", "0011_alter_news_comments"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="Likes",
            new_name="Like",
        ),
    ]