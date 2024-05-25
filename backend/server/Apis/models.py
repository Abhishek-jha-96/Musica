from django.db import models

# Create your models here.
class Song(models.Model):
    artists = models.CharField(max_length=250)
    song_name = models.CharField(max_length=200)
    cover_url = models.URLField()
    song_url = models.URLField()
    created_at = models.DateTimeField(auto_now=True)
    votes = models.PositiveBigIntegerField(default=0)

    