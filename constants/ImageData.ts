export interface ComponentProps {
  url: string;
  title: string;
}

export interface SongsProps {
  artists: string;
  song_name: string;
  cover_url: string;
  song_url: string;
}

export interface AllSongsProps {
  artists: string;
  song_name: string;
  id: number;
  cover_url: string;
  song_url: string;
}