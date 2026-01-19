import { ArrowLeft, Play, Heart, Download, MoreHorizontal, Music } from 'lucide-react';
import { mockAlbums, formatDuration, formatTotalDuration } from '@/app/data/mockData';
import { usePlayer } from '@/app/context/PlayerContext';
import { useState } from 'react';

interface AlbumDetailPageProps {
  albumId: string;
  onBack: () => void;
}

export const AlbumDetailPage = ({ albumId, onBack }: AlbumDetailPageProps) => {
  const { currentTrack, isPlaying, playTrack } = usePlayer();
  const [isLiked, setIsLiked] = useState(false);
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null);

  const album = mockAlbums.find((a) => a.id === albumId);

  if (!album) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p style={{ color: 'var(--text-muted)' }}>Album not found</p>
      </div>
    );
  }

  // Generate mock tracks for the album
  const albumTracks = Array.from({ length: album.trackCount }, (_, i) => ({
    id: `${album.id}-track-${i + 1}`,
    trackNumber: i + 1,
    title: `Track ${i + 1}`,
    artist: album.artist,
    album: album.title,
    albumId: album.id,
    duration: 180 + Math.floor(Math.random() * 120),
    quality: album.quality.includes('FLAC') ? 'FLAC' : 'MP3',
    artworkUrl: album.artworkUrl,
  }));

  const isCurrentAlbum = currentTrack?.albumId === albumId;

  return (
    <div className="flex-1 overflow-y-auto" style={{ paddingBottom: '120px' }}>
      {/* Hero Section with Gradient */}
      <div
        className="relative px-8 pt-8 pb-12"
        style={{
          background: `linear-gradient(180deg, rgba(245, 166, 35, 0.15) 0%, var(--bg-primary) 100%)`,
        }}
      >
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-8 px-3 py-2 rounded-md transition-colors"
          style={{ color: 'var(--text-secondary)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--bg-tertiary)';
            e.currentTarget.style.color = 'var(--text-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--text-secondary)';
          }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </button>

        <div className="flex items-end gap-8">
          {/* Album Art with Vinyl */}
          <div className="relative flex-shrink-0 group">
            <div className="relative">
              <img
                src={album.artworkUrl}
                alt={album.title}
                className="w-72 h-72 rounded-lg shadow-2xl"
                style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)' }}
              />
              {/* Vinyl edge peeking out */}
              <div
                className="absolute -right-3 top-8 bottom-8 w-8 rounded-r transition-all group-hover:w-12 group-hover:-right-4"
                style={{
                  background: 'var(--vinyl-black)',
                  borderTop: '3px solid var(--vinyl-highlight)',
                  borderBottom: '3px solid var(--vinyl-highlight)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)',
                }}
              />
            </div>
          </div>

          {/* Album Info */}
          <div className="flex-1 pb-4">
            <p
              className="text-xs uppercase tracking-wider font-semibold mb-3"
              style={{ color: 'var(--accent-primary)' }}
            >
              Album
            </p>
            <h1 className="mb-4" style={{ color: 'var(--text-primary)' }}>
              {album.title}
            </h1>
            <button
              className="mb-4 transition-colors hover:underline"
              style={{ color: 'var(--accent-primary)' }}
            >
              <h3>{album.artist}</h3>
            </button>
            <div className="flex items-center gap-2 mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
              <span>{album.genre}</span>
              <span>•</span>
              <span>{album.year}</span>
              <span>•</span>
              <span>{album.trackCount} tracks</span>
              <span>•</span>
              <span>{formatTotalDuration(album.duration)}</span>
            </div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-8"
              style={{
                background: 'var(--bg-tertiary)',
                color: 'var(--accent-primary)',
              }}
            >
              <Music className="w-3 h-3" />
              {album.quality}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => albumTracks[0] && playTrack(albumTracks[0] as any)}
                className="flex items-center gap-2 px-8 py-3 rounded-md transition-all hover:scale-105 active:scale-95"
                style={{
                  background: 'var(--accent-primary)',
                  color: 'var(--text-on-accent)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--accent-primary)';
                }}
              >
                <Play className="w-5 h-5" fill="var(--text-on-accent)" />
                <span className="font-semibold">Play All</span>
              </button>
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="p-3 rounded-md transition-colors"
                style={{
                  border: `1px solid ${isLiked ? 'var(--accent-primary)' : 'var(--border-default)'}`,
                  color: isLiked ? 'var(--accent-primary)' : 'var(--text-secondary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bg-tertiary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <Heart className="w-5 h-5" fill={isLiked ? 'var(--accent-primary)' : 'none'} />
              </button>
              <button
                className="p-3 rounded-md transition-colors"
                style={{
                  border: '1px solid var(--border-default)',
                  color: 'var(--text-secondary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bg-tertiary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <Download className="w-5 h-5" />
              </button>
              <button
                className="p-3 rounded-md transition-colors"
                style={{
                  color: 'var(--text-secondary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bg-tertiary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Track List */}
      <div className="px-8 py-6">
        <div
          className="rounded-lg overflow-hidden"
          style={{ background: 'var(--bg-secondary)' }}
        >
          {/* Header */}
          <div
            className="grid grid-cols-12 gap-4 px-6 py-3 text-xs uppercase tracking-wider"
            style={{
              background: 'var(--bg-tertiary)',
              color: 'var(--text-muted)',
            }}
          >
            <div className="col-span-1">#</div>
            <div className="col-span-7">Title</div>
            <div className="col-span-2">Duration</div>
            <div className="col-span-2">Quality</div>
          </div>

          {/* Tracks */}
          {albumTracks.map((track) => {
            const isCurrentTrack = currentTrack?.id === track.id;
            const isHovered = hoveredTrack === track.trackNumber;

            return (
              <div
                key={track.id}
                className="grid grid-cols-12 gap-4 px-6 py-4 items-center cursor-pointer group transition-all"
                style={{
                  background: isCurrentTrack ? 'var(--bg-tertiary)' : 'transparent',
                  borderLeft: `3px solid ${isCurrentTrack ? 'var(--accent-primary)' : 'transparent'}`,
                }}
                onClick={() => playTrack(track as any)}
                onMouseEnter={() => setHoveredTrack(track.trackNumber)}
                onMouseLeave={() => setHoveredTrack(null)}
                onMouseOver={(e) => {
                  if (!isCurrentTrack) {
                    e.currentTarget.style.background = 'var(--bg-tertiary)';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isCurrentTrack) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <div className="col-span-1">
                  {isCurrentTrack && isPlaying ? (
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-0.5 rounded-full animate-pulse"
                          style={{
                            height: `${8 + i * 2}px`,
                            background: 'var(--accent-primary)',
                            animationDelay: `${i * 0.1}s`,
                          }}
                        />
                      ))}
                    </div>
                  ) : isHovered ? (
                    <Play className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                  ) : (
                    <span
                      style={{
                        color: isCurrentTrack ? 'var(--accent-primary)' : 'var(--text-muted)',
                      }}
                    >
                      {track.trackNumber}
                    </span>
                  )}
                </div>
                <div className="col-span-7">
                  <div
                    className="font-medium"
                    style={{
                      color: isCurrentTrack ? 'var(--accent-primary)' : 'var(--text-primary)',
                    }}
                  >
                    {track.title}
                  </div>
                </div>
                <div className="col-span-2">
                  <span style={{ color: 'var(--text-secondary)' }}>
                    {formatDuration(track.duration)}
                  </span>
                </div>
                <div className="col-span-2">
                  <span
                    className="text-xs px-2 py-1 rounded"
                    style={{
                      background: 'var(--bg-deep)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {track.quality}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
