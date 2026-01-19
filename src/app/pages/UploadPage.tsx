import { Upload as UploadIcon, Image, X, Check } from 'lucide-react';
import { useState } from 'react';

export const UploadPage = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<Array<{
    name: string;
    size: string;
    progress: number;
    status: 'uploading' | 'complete';
  }>>([]);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    // Simulate file upload
    const mockFiles = [
      { name: 'Track 01.flac', size: '42.3 MB', progress: 100, status: 'complete' as const },
      { name: 'Track 02.flac', size: '38.7 MB', progress: 65, status: 'uploading' as const },
      { name: 'Track 03.flac', size: '45.1 MB', progress: 30, status: 'uploading' as const },
    ];
    setUploadedFiles(mockFiles);
  };

  return (
    <div className="flex-1 overflow-y-auto p-8" style={{ paddingBottom: '120px' }}>
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-2" style={{ color: 'var(--text-primary)' }}>
          Upload Music
        </h1>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          Add albums to your personal library
        </p>
      </div>

      {/* Upload Zone */}
      <div
        className="mb-8 flex flex-col items-center justify-center rounded-xl cursor-pointer transition-all"
        style={{
          height: '300px',
          background: isDragging ? 'rgba(245, 166, 35, 0.05)' : 'var(--bg-deep)',
          border: `2px dashed ${isDragging ? 'var(--accent-primary)' : 'var(--border-default)'}`,
          boxShadow: isDragging ? '0 0 24px rgba(245, 166, 35, 0.3)' : 'none',
        }}
        onDragEnter={handleDragEnter}
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <UploadIcon
          className="w-16 h-16 mb-4"
          style={{ color: isDragging ? 'var(--accent-primary)' : 'var(--text-muted)' }}
        />
        <p
          className="text-lg font-medium mb-2"
          style={{ color: isDragging ? 'var(--accent-primary)' : 'var(--text-primary)' }}
        >
          Drag & drop audio files here
        </p>
        <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
          or
        </p>
        <button
          className="px-6 py-2.5 rounded-md transition-all hover:scale-105"
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
          Browse Files
        </button>
        <p className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>
          Supports FLAC, WAV, ALAC, MP3, AAC, OGG
        </p>
      </div>

      {/* Upload Progress */}
      {uploadedFiles.length > 0 && (
        <div
          className="rounded-lg p-6"
          style={{ background: 'var(--bg-secondary)' }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 style={{ color: 'var(--text-primary)' }}>
              Uploading ({uploadedFiles.length} files)
            </h3>
          </div>
          <div className="space-y-3">
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-md"
                style={{ background: 'var(--bg-tertiary)' }}
              >
                <div
                  className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded"
                  style={{ background: 'var(--bg-deep)' }}
                >
                  {file.status === 'complete' ? (
                    <Check className="w-5 h-5" style={{ color: 'var(--success)' }} />
                  ) : (
                    <span className="text-xs" style={{ color: 'var(--accent-primary)' }}>
                      {file.progress}%
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium truncate" style={{ color: 'var(--text-primary)' }}>
                      {file.name}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {file.size}
                    </span>
                  </div>
                  <div
                    className="h-1 rounded-full overflow-hidden"
                    style={{ background: 'var(--bg-deep)' }}
                  >
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${file.progress}%`,
                        background: file.status === 'complete' ? 'var(--success)' : 'var(--accent-primary)',
                      }}
                    />
                  </div>
                </div>
                <button
                  className="p-1 rounded transition-colors"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--bg-secondary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <X className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Metadata Editor (shown after upload) */}
      {uploadedFiles.length > 0 && uploadedFiles.every(f => f.status === 'complete') && (
        <div
          className="mt-8 rounded-lg p-6"
          style={{ background: 'var(--bg-secondary)' }}
        >
          <h3 className="mb-6" style={{ color: 'var(--text-primary)' }}>
            Album Information
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 md:col-span-1">
              <div
                className="flex flex-col items-center justify-center rounded-lg cursor-pointer transition-colors"
                style={{
                  height: '200px',
                  border: '2px dashed var(--border-default)',
                  background: 'var(--bg-deep)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-default)';
                }}
              >
                <Image className="w-12 h-12 mb-2" style={{ color: 'var(--text-muted)' }} />
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Add Album Art
                </p>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 space-y-4">
              <div>
                <label className="block text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Album Title
                </label>
                <input
                  type="text"
                  placeholder="Enter album title"
                  className="w-full px-4 py-2 rounded-md transition-colors"
                  style={{
                    background: 'var(--bg-deep)',
                    border: '1px solid var(--border-default)',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Artist Name
                </label>
                <input
                  type="text"
                  placeholder="Enter artist name"
                  className="w-full px-4 py-2 rounded-md"
                  style={{
                    background: 'var(--bg-deep)',
                    border: '1px solid var(--border-default)',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Genre
                  </label>
                  <input
                    type="text"
                    placeholder="Genre"
                    className="w-full px-4 py-2 rounded-md"
                    style={{
                      background: 'var(--bg-deep)',
                      border: '1px solid var(--border-default)',
                      color: 'var(--text-primary)',
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Year
                  </label>
                  <input
                    type="number"
                    placeholder="2024"
                    className="w-full px-4 py-2 rounded-md"
                    style={{
                      background: 'var(--bg-deep)',
                      border: '1px solid var(--border-default)',
                      color: 'var(--text-primary)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 mt-6">
            <button
              className="px-6 py-2.5 rounded-md transition-colors"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bg-tertiary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Cancel
            </button>
            <button
              className="px-6 py-2.5 rounded-md transition-all hover:scale-105"
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
              Save to Library
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
