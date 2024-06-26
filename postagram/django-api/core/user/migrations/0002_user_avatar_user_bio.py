# Generated by Django 4.2 on 2024-05-05 18:49

import core.user.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core_user", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="avatar",
            field=models.ImageField(
                blank=True, null=True, upload_to=core.user.models.user_directory_path
            ),
        ),
        migrations.AddField(
            model_name="user",
            name="bio",
            field=models.TextField(null=True),
        ),
    ]
