# Generated by Django 4.2.1 on 2023-05-22 18:43

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("news_api", "0012_rename_likes_like"),
    ]

    operations = [
        migrations.AlterField(
            model_name="news",
            name="content",
            field=ckeditor.fields.RichTextField(blank=True, null=True),
        ),
    ]
