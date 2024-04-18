from django.urls import path
from Apis.views import Songlist, Top10Track, TrackCountUpdate

urlpatterns = [
    path('songs/', Songlist.as_view()),
    path('toptracks/', Top10Track.as_view()),
    path('trackCount/<int:pk>/', TrackCountUpdate.as_view()),
]