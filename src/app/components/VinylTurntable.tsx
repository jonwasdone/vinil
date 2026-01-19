import { motion } from 'motion/react';
import { usePlayer } from '@/app/context/PlayerContext';

export const VinylTurntable = () => {
  const { currentTrack, isPlaying } = usePlayer();

  return (
    <div className="relative flex items-center justify-center">
      {/* Vinyl Record */}
      <motion.div
        className="relative"
        animate={{ rotate: isPlaying ? 360 : 0 }}
        transition={{
          duration: 1.8,
          repeat: isPlaying ? Infinity : 0,
          ease: 'linear',
        }}
      >
        {/* Outer vinyl disc with rose gold rim */}
        <div
          className="relative"
          style={{
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            background: 'var(--vinyl-black)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.7)',
          }}
        >
          {/* Rose gold rim */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: '4px solid var(--vinyl-highlight)',
              opacity: 0.6,
            }}
          />

          {/* Vinyl grooves - concentric circles */}
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: `${400 - i * 8}px`,
                height: `${400 - i * 8}px`,
                border: '1px solid',
                borderColor: i % 2 === 0 ? 'var(--vinyl-black)' : 'var(--vinyl-grooves)',
                opacity: 0.3,
              }}
            />
          ))}

          {/* Center label with album art */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden"
            style={{
              width: '140px',
              height: '140px',
              border: '3px solid var(--accent-primary)',
              boxShadow: '0 0 20px rgba(245, 166, 35, 0.4)',
            }}
          >
            {currentTrack?.artworkUrl ? (
              <img
                src={currentTrack.artworkUrl}
                alt={currentTrack.album}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-accent-primary">
                <svg
                  className="w-12 h-12 text-text-on-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Center spindle */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: '12px',
              height: '12px',
              background: '#0a0a0a',
              boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.8)',
            }}
          />

          {/* Subtle highlight on upper left */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              top: '10%',
              left: '15%',
              width: '100px',
              height: '100px',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
            }}
          />
        </div>
      </motion.div>

      {/* Tonearm */}
      <motion.div
        className="absolute"
        style={{
          right: '-80px',
          top: '50%',
          transformOrigin: 'right center',
        }}
        animate={{
          rotate: isPlaying ? -25 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      >
        {/* Tonearm pivot base */}
        <div
          className="absolute right-0 top-0 rounded-full"
          style={{
            width: '32px',
            height: '32px',
            background: 'var(--bg-tertiary)',
            border: '2px solid var(--border-default)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
          }}
        />

        {/* Tonearm */}
        <div
          className="absolute right-4 top-4"
          style={{
            width: '160px',
            height: '8px',
            background: 'linear-gradient(90deg, var(--tonearm-silver) 0%, var(--tonearm-dark) 100%)',
            borderRadius: '4px',
            transformOrigin: 'right center',
            transform: 'rotate(-15deg)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
          }}
        >
          {/* Headshell */}
          <div
            className="absolute -left-3 top-1/2 -translate-y-1/2"
            style={{
              width: '20px',
              height: '12px',
              background: 'var(--tonearm-dark)',
              borderRadius: '2px',
            }}
          >
            {/* Cartridge */}
            <div
              className="absolute -left-1 top-1/2 -translate-y-1/2"
              style={{
                width: '6px',
                height: '6px',
                background: 'var(--accent-primary)',
                borderRadius: '1px',
              }}
            />
          </div>
        </div>

        {/* Counterweight */}
        <div
          className="absolute right-8 top-0 rounded-full"
          style={{
            width: '16px',
            height: '16px',
            background: 'var(--tonearm-silver)',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          }}
        />
      </motion.div>

      {/* Ambient glow when playing */}
      {isPlaying && (
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            boxShadow: '0 0 80px rgba(245, 166, 35, 0.2)',
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
    </div>
  );
};
