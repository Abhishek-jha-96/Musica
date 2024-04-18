from django.db import models

# Create your models here.
class Song(models.Model):
    artists = models.CharField(max_length=250)
    song_name = models.CharField(max_length=200)
    cover_url = models.URLField()
    song_url = models.URLField()
    created_at = models.DateTimeField(auto_now=True)

    def total_play_count(self):
        return self.toptrack_set.aggregate(total_play_count=models.Sum('play_count'))['total_play_count'] or 0

class TopTrack(models.Model):
    song = models.ForeignKey(Song, on_delete=models.CASCADE)
    play_count = models.IntegerField(default=0)
