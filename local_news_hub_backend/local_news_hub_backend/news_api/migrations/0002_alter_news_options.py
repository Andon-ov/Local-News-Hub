# Generated by Django 4.2.1 on 2023-05-18 08:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("news_api", "0001_initial"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="news",
            options={
                "ordering": ["published_at", "updated_at"],
                "verbose_name_plural": "News",
            },
        ),
    ]
