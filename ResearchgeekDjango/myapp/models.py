from django.db import models

class Publication(models.Model):
    title = models.CharField(max_length=200)
    authors = models.CharField(max_length=200)
    year = models.IntegerField()
    doi = models.URLField()
    # Add more fields as needed
