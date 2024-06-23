export interface ComponentProps {
  url: string;
  title: string;
}

export interface SongsProps {
  id: number;
  artists: string;
  song_name: string;
  cover_url: string;
  song_url: string;
  votes: number;
}

export interface AllSongsProps {
  artists: string;
  song_name: string;
  id: number;
  cover_url: string;
  song_url: string;
}