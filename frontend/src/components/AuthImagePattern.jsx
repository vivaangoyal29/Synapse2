const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-white p-12">
      <div className="max-w-md text-center">
        <div className="mb-6 relative">
          {/* Inline SVG illustration: two people chatting on phones */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 240 160"
            className="mx-auto h-48 w-full max-w-sm"
            role="img"
            aria-labelledby="chatIllustrationTitle"
          > 
            <title id="chatIllustrationTitle">Two people chatting on phones</title>
            <defs>
              <linearGradient id="skin1" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#fcd34d" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <linearGradient id="cloth1" x1="0" x2="1">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="cloth2" x1="0" x2="1">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>

            {/* Background */}
            <rect x="0" y="0" width="240" height="160" fill="#f8fafc" rx="16" />

            {/* Person 1 (left) */}
            <g transform="translate(40,40)">
              {/* Body */}
              <path d="M0 20c0-11 9-20 20-20s20 9 20 20v40h-40z" fill="url(#cloth1)" />
              {/* Head */}
              <circle cx="20" cy="20" r="16" fill="url(#skin1)" />
              {/* Phone */}
              <rect x="8" y="32" width="24" height="40" rx="3" fill="#1f2937" />
              <rect x="10" y="34" width="20" height="36" rx="2" fill="#f8fafc" />
              
              {/* Animated smile */}
              <path d="M14 20a1 1 0 0 0 12 0" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round">
                <animate attributeName="d" values="M14 20a1 1 0 0 0 12 0;M14 22a1 1 0 0 0 12 0;M14 20a1 1 0 0 0 12 0" dur="3s" repeatCount="indefinite" />
              </path>
            </g>

            {/* Person 2 (right) */}
            <g transform="translate(140,40)">
              {/* Body */}
              <path d="M0 20c0-11 9-20 20-20s20 9 20 20v40h-40z" fill="url(#cloth2)" />
              {/* Head */}
              <circle cx="20" cy="20" r="16" fill="url(#skin1)" />
              {/* Phone */}
              <rect x="8" y="32" width="24" height="40" rx="3" fill="#1f2937" />
              <rect x="10" y="34" width="20" height="36" rx="2" fill="#f8fafc" />
              
              {/* Animated smile */}
              <path d="M14 20a1 1 0 0 0 12 0" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round">
                <animate attributeName="d" values="M14 22a1 1 0 0 0 12 0;M14 20a1 1 0 0 0 12 0;M14 22a1 1 0 0 0 12 0" dur="3s" repeatCount="indefinite" begin="1.5s" />
              </path>
            </g>

            {/* Connection Lines */}
            <g stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" opacity="0.5">
              <path d="M100 60 L140 60">
                <animate attributeName="stroke-dashoffset" values="8;0" dur="1s" repeatCount="indefinite" />
              </path>
            </g>
          </svg>

          {/* Animated icons below the main SVG - mimic GIFs using SVG/CSS animations */}
          <div className="mt-4 flex items-center justify-center gap-4">
            {/* Typing dots (animated) */}
            <div className="flex items-center gap-1">
              <svg width="48" height="18" viewBox="0 0 48 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="9" r="4" fill="#60a5fa">
                  <animate attributeName="opacity" values="0.2;1;0.2" dur="1s" repeatCount="indefinite" begin="0s" />
                </circle>
                <circle cx="24" cy="9" r="4" fill="#60a5fa">
                  <animate attributeName="opacity" values="0.2;1;0.2" dur="1s" repeatCount="indefinite" begin="0.15s" />
                </circle>
                <circle cx="42" cy="9" r="4" fill="#60a5fa">
                  <animate attributeName="opacity" values="0.2;1;0.2" dur="1s" repeatCount="indefinite" begin="0.3s" />
                </circle>
              </svg>
            </div>

            {/* Flying paper plane */}
            <div className="w-12 h-8 relative">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path d="M2 21l20-9L2 3v7l14 2-14 2v7z" fill="#7c3aed" opacity="0.95">
                  <animateTransform attributeName="transform" type="translate" values="0 0;0 -6;0 0" dur="1.8s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>

            {/* Bouncing heart */}
            <div className="w-8 h-8">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path d="M12 21s-7-4.35-9-7.02C1.7 11.4 3.3 6 7.5 6c2.24 0 3.5 1.8 4.5 2.5C12.99 7.8 14.26 6 16.5 6 20.7 6 22.3 11.4 21 13.98 19 16.65 12 21 12 21z" fill="#ef4444">
                  <animateTransform attributeName="transform" type="scale" values="1;1.12;1" dur="1.2s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-3 text-base-content">{title}</h2>
        <p className="text-base-content/70">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
