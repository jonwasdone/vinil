import { ArrowLeft, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface SettingsPageProps {
  onBack: () => void;
}

export const SettingsPage = ({ onBack }: SettingsPageProps) => {
  const [streamQuality, setStreamQuality] = useState('lossless');
  const [preferLossless, setPreferLossless] = useState(true);

  const settingsCategories = [
    { id: 'account', label: 'Account' },
    { id: 'playback', label: 'Playback' },
    { id: 'quality', label: 'Audio Quality' },
    { id: 'storage', label: 'Storage' },
    { id: 'appearance', label: 'Appearance' },
    { id: 'shortcuts', label: 'Keyboard Shortcuts' },
    { id: 'about', label: 'About' },
  ];

  const [activeCategory, setActiveCategory] = useState('quality');

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Settings Sidebar */}
      <div
        className="flex flex-col self-stretch"
        style={{
          width: '240px',
          background: 'var(--bg-secondary)',
          borderRight: '1px solid var(--border-default)',
        }}
      >
        <div className="flex items-center gap-3 p-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </button>
        </div>

        <nav className="flex-1 space-y-1 relative">
          {settingsCategories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <div key={category.id} className="relative px-3">
                <button
                  onClick={() => setActiveCategory(category.id)}
                  className="w-full flex items-center gap-3 px-3 py-3 rounded-md text-left transition-all"
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
                  <span className="text-sm font-medium">{category.label}</span>
                </button>
                {isActive && (
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-r"
                    style={{ background: 'var(--accent-primary)' }}
                  />
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Settings Content */}
      <div className="flex-1 overflow-y-auto p-8">
        {activeCategory === 'quality' && (
          <div>
            <h1 className="mb-2" style={{ color: 'var(--text-primary)' }}>
              Audio Quality
            </h1>
            <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
              Control audio quality and streaming preferences
            </p>

            <div
              className="rounded-lg p-6 space-y-6"
              style={{ background: 'var(--bg-secondary)' }}
            >
              {/* Streaming Quality */}
              <div>
                <label className="block text-sm font-medium mb-3" style={{ color: 'var(--text-primary)' }}>
                  Streaming Quality
                </label>
                <select
                  value={streamQuality}
                  onChange={(e) => setStreamQuality(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-md transition-colors"
                  style={{
                    background: 'var(--bg-deep)',
                    border: '1px solid var(--border-default)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <option value="auto">Auto</option>
                  <option value="low">Low (96 kbps)</option>
                  <option value="normal">Normal (160 kbps)</option>
                  <option value="high">High (320 kbps)</option>
                  <option value="lossless">Lossless (FLAC)</option>
                </select>
              </div>

              {/* Download Quality */}
              <div>
                <label className="block text-sm font-medium mb-3" style={{ color: 'var(--text-primary)' }}>
                  Download Quality
                </label>
                <select
                  className="w-full px-4 py-2.5 rounded-md"
                  style={{
                    background: 'var(--bg-deep)',
                    border: '1px solid var(--border-default)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <option value="high">High (320 kbps)</option>
                  <option value="lossless">Lossless (FLAC)</option>
                </select>
              </div>

              {/* Toggle Switch */}
              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                    Prefer lossless when available
                  </div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    Automatically play highest quality audio
                  </div>
                </div>
                <button
                  onClick={() => setPreferLossless(!preferLossless)}
                  className="relative inline-flex items-center transition-all"
                  style={{
                    width: '48px',
                    height: '24px',
                    background: preferLossless ? 'var(--accent-primary)' : 'var(--bg-deep)',
                    borderRadius: '12px',
                  }}
                >
                  <div
                    className="absolute w-5 h-5 rounded-full transition-all"
                    style={{
                      background: 'var(--text-primary)',
                      transform: preferLossless ? 'translateX(26px)' : 'translateX(2px)',
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        )}

        {activeCategory === 'storage' && (
          <div>
            <h1 className="mb-2" style={{ color: 'var(--text-primary)' }}>
              Storage
            </h1>
            <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
              Manage your library storage
            </p>

            <div
              className="rounded-lg p-6"
              style={{ background: 'var(--bg-secondary)' }}
            >
              {/* Storage Chart */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                    Storage Used
                  </span>
                  <span className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                    23.4 GB <span style={{ color: 'var(--text-muted)' }}>of 100 GB</span>
                  </span>
                </div>
                <div
                  className="h-4 rounded-full overflow-hidden"
                  style={{ background: 'var(--bg-deep)' }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: '23.4%',
                      background: 'linear-gradient(90deg, var(--accent-primary) 0%, var(--accent-hover) 100%)',
                    }}
                  />
                </div>
              </div>

              {/* Storage Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span style={{ color: 'var(--text-secondary)' }}>Music Files</span>
                  <span style={{ color: 'var(--text-primary)' }}>18.7 GB</span>
                </div>
                <div className="flex items-center justify-between">
                  <span style={{ color: 'var(--text-secondary)' }}>Artwork & Metadata</span>
                  <span style={{ color: 'var(--text-primary)' }}>3.2 GB</span>
                </div>
                <div className="flex items-center justify-between">
                  <span style={{ color: 'var(--text-secondary)' }}>Cache</span>
                  <span style={{ color: 'var(--text-primary)' }}>1.5 GB</span>
                </div>
              </div>

              {/* Clear Cache Button */}
              <button
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md transition-all"
                style={{
                  border: '1px solid var(--error)',
                  color: 'var(--error)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(248, 113, 113, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <Trash2 className="w-5 h-5" />
                <span className="font-medium">Clear Cache</span>
              </button>
            </div>
          </div>
        )}

        {activeCategory === 'about' && (
          <div>
            <h1 className="mb-2" style={{ color: 'var(--text-primary)' }}>
              About VinylStream
            </h1>
            <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
              Version and application information
            </p>

            <div
              className="rounded-lg p-6 text-center"
              style={{ background: 'var(--bg-secondary)' }}
            >
              <div
                className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
                style={{ background: 'var(--accent-primary)' }}
              >
                <span className="text-3xl">🎵</span>
              </div>
              <h2 className="mb-2" style={{ color: 'var(--text-primary)' }}>
                VinylStream
              </h2>
              <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                Version 1.0.0
              </p>
              <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
                A personal music streaming application with professional audio quality and an
                intuitive interface inspired by classic vinyl records.
              </p>
            </div>
          </div>
        )}

        {/* Placeholder for other categories */}
        {!['quality', 'storage', 'about'].includes(activeCategory) && (
          <div>
            <h1 className="mb-2" style={{ color: 'var(--text-primary)' }}>
              {settingsCategories.find(c => c.id === activeCategory)?.label}
            </h1>
            <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
              Settings will be available soon
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
