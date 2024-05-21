from rest_framework import serializers
from .models import Song, TopTrack


class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = "__all__"

    def create(self, validated_data):
        # Create the Song instance
        song = Song.objects.create(**validated_data)
        
        # Create the related TopTrack instance
        TopTrack.objects.create(song=song, play_count=0)
        
        # Return the created song instance
        return song



class TopTrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = TopTrack   
        fields = "__all__"     