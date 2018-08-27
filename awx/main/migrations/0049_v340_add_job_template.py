# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-08-14 16:04
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0048_v340_split_jobs'),
    ]

    operations = [
        migrations.AddField(
            model_name='workflowjob',
            name='job_template',
            field=models.ForeignKey(blank=True,
                                    default=None,
                                    null=True,
                                    on_delete=django.db.models.deletion.SET_NULL,
                                    related_name='sharded_jobs', to='main.JobTemplate'),
        ),
    ]