from rest_framework import generics
from .models import Song, TopTrack
from .serializers import SongSerializer, TopTrackSerializer
# Create your views here.

class Songlist(generics.ListCreateAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer


class Top10Track(generics.ListAPIView):
    queryset = TopTrack.objects.all()
    serializer_class = TopTrackSerializer

class TrackCountUpdate(generics.RetrieveUpdateAPIView):
    queryset = TopTrack.objects.all()
    serializer_class = TopTrackSerializer