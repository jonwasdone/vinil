import { useState } from 'react';
import { PlayerProvider } from '@/app/context/PlayerContext';
import { Sidebar } from '@/app/components/Sidebar';
import { PlayerBar } from '@/app/components/PlayerBar';
import { HomePage } from '@/app/pages/HomePage';
import { LibraryPage } from '@/app/pages/LibraryPage';
import { AlbumDetailPage } from '@/app/pages/AlbumDetailPage';
import { NowPlayingPage } from '@/app/pages/NowPlayingPage';
import { UploadPage } from '@/app/pages/UploadPage';
import { SearchPage } from '@/app/pages/SearchPage';
import { SettingsPage } from '@/app/pages/SettingsPage';

type Page = 'home' | 'library' | 'upload' | 'search' | 'settings' | 'album' | 'now-playing';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedAlbumId, setSelectedAlbumId] = useState<string | null>(null);
  const [showNowPlaying, setShowNowPlaying] = useState(false);

  const handleNavigate = (page: string) => {
    if (page === 'album') return;
    setCurrentPage(page as Page);
    setShowNowPlaying(false);
  };

  const handleNavigateToAlbum = (albumId: string) => {
    setSelectedAlbumId(albumId);
    setCurrentPage('album');
    setShowNowPlaying(false);
  };

  const handleBackFromAlbum = () => {
    setCurrentPage('library');
    setSelectedAlbumId(null);
  };

  const handleOpenNowPlaying = () => {
    setShowNowPlaying(true);
  };

  const handleCloseNowPlaying = () => {
    setShowNowPlaying(false);
  };

  return (
    <PlayerProvider>
      <div className="flex flex-col h-screen" style={{ background: 'var(--bg-primary)' }}>
        <div className="flex flex-1 overflow-hidden pb-[90px]">
          {/* Sidebar */}
          {!showNowPlaying && <Sidebar currentPage={currentPage} onNavigate={handleNavigate} />}

          {/* Page Content */}
          {!showNowPlaying && (
            <div className="flex-1 flex flex-col overflow-hidden">
              {currentPage === 'home' && <HomePage onNavigateToAlbum={handleNavigateToAlbum} />}
              {currentPage === 'library' && <LibraryPage onNavigateToAlbum={handleNavigateToAlbum} />}
              {currentPage === 'upload' && <UploadPage />}
              {currentPage === 'search' && <SearchPage onNavigateToAlbum={handleNavigateToAlbum} />}
              {currentPage === 'settings' && <SettingsPage onBack={() => setCurrentPage('home')} />}
              {currentPage === 'album' && selectedAlbumId && (
                <AlbumDetailPage albumId={selectedAlbumId} onBack={handleBackFromAlbum} />
              )}
            </div>
          )}

          {/* Now Playing Page (Full Screen) */}
          {showNowPlaying && <NowPlayingPage onBack={handleCloseNowPlaying} />}
        </div>

        {/* Player Bar (Always Visible) */}
        {!showNowPlaying && <PlayerBar onOpenNowPlaying={handleOpenNowPlaying} />}
      </div>
    </PlayerProvider>
  );
}
