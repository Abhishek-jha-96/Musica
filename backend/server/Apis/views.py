from rest_framework import generics
from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from .models import Song
from .serializers import SongSerializer, Top3TrackSerializer, TrackVoteUpdateSerializer

# Create your views here.

class Songlist(generics.ListCreateAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer
    
class Top3Track(generics.ListAPIView):
    queryset = Song.objects.all()
    serializer_class = Top3TrackSerializer
    filter_backends = (DjangoFilterBackend, OrderingFilter)
    ordering_fields = ['votes']

    def get_queryset(self):
        queryset = super().get_queryset()
        # Apply ordering here to get top 3 tracks by votes
        return queryset.order_by('-votes')[:3]

class TrackVoteUpdate(generics.UpdateAPIView):
    queryset = Song.objects.all()
    serializer_class = TrackVoteUpdateSerializer