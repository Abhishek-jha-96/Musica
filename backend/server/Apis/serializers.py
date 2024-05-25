from rest_framework import serializers
from .models import Song


class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = "__all__"


class Top3TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = "__all__"

class TrackVoteUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Song
        fields = "__all__"        