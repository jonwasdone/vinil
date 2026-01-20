export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  albumId: string;
  duration: number;
  quality: 'FLAC' | 'WAV' | 'MP3' | '320kbps';
  artworkUrl: string;
  genre?: string;
  year?: number;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  artworkUrl: string;
  year: number;
  genre: string;
  trackCount: number;
  duration: number;
  quality: string;
  tracks: Track[];
}

export interface Playlist {
  id: string;
  name: string;
  trackCount: number;
  artworkUrl: string;
  tracks: string[];
}

export const mockAlbums: Album[] = [
  {
    id: 'album-1',
    title: 'Midnight Dreams',
    artist: 'Tame Impala',
    artworkUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
    year: 2023,
    genre: 'Electronic',
    trackCount: 12,
    duration: 2847,
    quality: 'FLAC 24-bit',
    tracks: []
  },
  {
    id: 'album-2',
    title: 'Urban Echoes',
    artist: 'The Sonic Collective',
    artworkUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
    year: 2022,
    genre: 'Hip Hop',
    trackCount: 15,
    duration: 3245,
    quality: 'FLAC 24-bit',
    tracks: []
  },
  {
    id: 'album-3',
    title: 'Analog Waves',
    artist: 'Vintage Keys',
    artworkUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop',
    year: 2024,
    genre: 'Jazz',
    trackCount: 10,
    duration: 2456,
    quality: 'FLAC 24-bit',
    tracks: []
  },
  {
    id: 'album-4',
    title: 'Neon Nights',
    artist: 'Synthwave Dreams',
    artworkUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop',
    year: 2023,
    genre: 'Synthwave',
    trackCount: 8,
    duration: 1989,
    quality: 'FLAC 16-bit',
    tracks: []
  },
  {
    id: 'album-5',
    title: 'Acoustic Sessions',
    artist: 'Maya Stone',
    artworkUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
    year: 2023,
    genre: 'Folk',
    trackCount: 11,
    duration: 2678,
    quality: 'FLAC 24-bit',
    tracks: []
  },
  {
    id: 'album-6',
    title: 'Electric Pulse',
    artist: 'Circuit Breakers',
    artworkUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop',
    year: 2024,
    genre: 'EDM',
    trackCount: 13,
    duration: 3124,
    quality: 'WAV',
    tracks: []
  },
  {
    id: 'album-7',
    title: 'Velvet Lounge',
    artist: 'Blue Note Trio',
    artworkUrl: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=400&h=400&fit=crop',
    year: 2022,
    genre: 'Jazz',
    trackCount: 9,
    duration: 2234,
    quality: 'FLAC 24-bit',
    tracks: []
  },
  {
    id: 'album-8',
    title: 'Bass & Breaks',
    artist: 'DJ Rhythm',
    artworkUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    year: 2024,
    genre: 'Drum & Bass',
    trackCount: 14,
    duration: 3456,
    quality: 'FLAC 24-bit',
    tracks: []
  },
  {
    id: 'album-9',
    title: 'Golden Hour',
    artist: 'Sunset Sessions',
    artworkUrl: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400&h=400&fit=crop',
    year: 2023,
    genre: 'Chillwave',
    trackCount: 10,
    duration: 2567,
    quality: 'FLAC 16-bit',
    tracks: []
  },
  {
    id: 'album-10',
    title: 'Underground',
    artist: 'Metro Collective',
    artworkUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=400&fit=crop',
    year: 2024,
    genre: 'Techno',
    trackCount: 12,
    duration: 3012,
    quality: 'WAV',
    tracks: []
  }
];

export const mockTracks: Track[] = [
  {
    id: 'track-1',
    title: 'Ethereal Dreams',
    artist: 'Tame Impala',
    album: 'Midnight Dreams',
    albumId: 'album-1',
    duration: 245,
    quality: 'FLAC',
    artworkUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
    genre: 'Electronic',
    year: 2023
  },
  {
    id: 'track-2',
    title: 'Neon Lights',
    artist: 'Tame Impala',
    album: 'Midnight Dreams',
    albumId: 'album-1',
    duration: 198,
    quality: 'FLAC',
    artworkUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
    genre: 'Electronic',
    year: 2023
  },
  {
    id: 'track-3',
    title: 'City Rhythm',
    artist: 'The Sonic Collective',
    album: 'Urban Echoes',
    albumId: 'album-2',
    duration: 223,
    quality: 'FLAC',
    artworkUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
    genre: 'Hip Hop',
    year: 2022
  },
  {
    id: 'track-4',
    title: 'Vinyl Soul',
    artist: 'Vintage Keys',
    album: 'Analog Waves',
    albumId: 'album-3',
    duration: 267,
    quality: 'FLAC',
    artworkUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop',
    genre: 'Jazz',
    year: 2024
  },
  {
    id: 'track-5',
    title: 'Midnight Cruise',
    artist: 'Synthwave Dreams',
    album: 'Neon Nights',
    albumId: 'album-4',
    duration: 289,
    quality: 'FLAC',
    artworkUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop',
    genre: 'Synthwave',
    year: 2023
  }
];

export const mockPlaylists: Playlist[] = [
  {
    id: 'playlist-1',
    name: 'Late Night Vibes',
    trackCount: 24,
    artworkUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200&h=200&fit=crop',
    tracks: ['track-1', 'track-2', 'track-5']
  },
  {
    id: 'playlist-2',
    name: 'Focus Flow',
    trackCount: 18,
    artworkUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop',
    tracks: ['track-3', 'track-4']
  },
  {
    id: 'playlist-3',
    name: 'Weekend Mix',
    trackCount: 32,
    artworkUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop',
    tracks: ['track-1', 'track-3', 'track-5']
  }
];

// Populate albums with tracks
mockAlbums[0].tracks = [mockTracks[0], mockTracks[1]];
mockAlbums[1].tracks = [mockTracks[2]];
mockAlbums[2].tracks = [mockTracks[3]];
mockAlbums[3].tracks = [mockTracks[4]];

export const formatDuration = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const formatTotalDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  if (hours > 0) {
    return `${hours} hr ${mins} min`;
  }
  return `${mins} min`;
};
