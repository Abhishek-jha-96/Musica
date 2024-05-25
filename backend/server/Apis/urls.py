from django.urls import path
from Apis.views import Songlist, Top3Track, TrackVoteUpdate

urlpatterns = [
    path('songs/', Songlist.as_view()),
    path('toptracks/', Top3Track.as_view()),
    path('trackvote/<int:pk>/', TrackVoteUpdate.as_view()),
]