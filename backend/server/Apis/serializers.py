from rest_framework import serializers
from .models import Song, TopTrack


class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = "__all__"


class TopTrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = TopTrack   
        fields = "__all__"     