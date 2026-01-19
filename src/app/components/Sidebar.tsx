import { Home, Search, Library, Upload, Settings, Plus, Disc3 } from 'lucide-react';
import { mockPlaylists } from '@/app/data/mockData';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Sidebar = ({ currentPage, onNavigate }: SidebarProps) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'library', label: 'Library', icon: Library },
    { id: 'upload', label: 'Upload', icon: Upload },
  ];

  return (
    <div
      className="flex flex-col h-full"
      style={{
        width: '240px',
        background: 'var(--bg-secondary)',
        borderRight: '1px solid var(--border-default)',
      }}
    >
      {/* Logo and App Name */}
      <div className="flex items-center gap-3 p-6">
        <div
          className="flex items-center justify-center rounded-full"
          style={{
            width: '40px',
            height: '40px',
            background: 'var(--accent-primary)',
          }}
        >
          <Disc3 className="w-6 h-6" style={{ color: 'var(--text-on-accent)' }} />
        </div>
        <span className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
          VinylStream
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="w-full flex items-center gap-3 px-3 py-3 rounded-md transition-all relative"
              style={{
                background: isActive ? 'var(--bg-tertiary)' : 'transparent',
                color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'var(--bg-tertiary)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              {isActive && (
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-r"
                  style={{ background: 'var(--accent-primary)' }}
                />
              )}
              <Icon
                className="w-5 h-5"
                style={{
                  color: isActive ? 'var(--accent-primary)' : 'inherit',
                  strokeWidth: isActive ? 2.5 : 2,
                }}
              />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Playlists Section */}
      <div className="px-3 py-4 space-y-3">
        <div className="flex items-center justify-between px-3">
          <span
            className="text-xs uppercase font-semibold tracking-wider"
            style={{ color: 'var(--text-muted)' }}
          >
            Playlists
          </span>
        </div>
        <button
          className="w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors"
          style={{ color: 'var(--accent-primary)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--bg-tertiary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          <Plus className="w-4 h-4" />
          <span className="text-sm font-medium">New Playlist</span>
        </button>
        <div className="space-y-1 max-h-48 overflow-y-auto">
          {mockPlaylists.map((playlist) => (
            <button
              key={playlist.id}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-left"
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
              <img
                src={playlist.artworkUrl}
                alt={playlist.name}
                className="w-8 h-8 rounded"
              />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{playlist.name}</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {playlist.trackCount} tracks
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="p-4 space-y-4"
        style={{ borderTop: '1px solid var(--border-default)' }}
      >
        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
            style={{
              background: 'var(--accent-primary)',
              color: 'var(--text-on-accent)',
            }}
          >
            JD
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
              John Doe
            </div>
          </div>
          <button
            className="p-1.5 rounded-md transition-colors"
            onClick={() => onNavigate('settings')}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--bg-tertiary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <Settings className="w-5 h-5" style={{ color: 'var(--text-muted)' }} />
          </button>
        </div>

        {/* Storage Meter */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
              Storage
            </span>
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
              12.4 / 50 GB
            </span>
          </div>
          <div
            className="h-1.5 rounded-full overflow-hidden"
            style={{ background: 'var(--bg-deep)' }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: '24.8%',
                background: 'var(--accent-primary)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
