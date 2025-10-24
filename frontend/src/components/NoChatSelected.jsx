import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50 relative overflow-hidden">
      {/* Background Doodles */}
  <div className="absolute inset-0 pointer-events-none opacity-20">
        {/* Top Left Doodle */}
  <svg className="absolute -top-8 -left-8 w-48 h-48 text-neutral-700" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="20" className="fill-none stroke-current stroke-2">
            <animate attributeName="r" values="20;22;20" dur="3s" repeatCount="indefinite" />
          </circle>
          <path d="M20,20 Q50,0 80,20" className="fill-none stroke-current stroke-2" strokeLinecap="round">
            <animate attributeName="d" values="M20,20 Q50,0 80,20;M20,20 Q50,10 80,20;M20,20 Q50,0 80,20" dur="5s" repeatCount="indefinite" />
          </path>
        </svg>
        
        {/* Top Right Doodle */}
  <svg className="absolute -top-4 -right-4 w-40 h-40 text-neutral-700" viewBox="0 0 100 100">
          <g className="opacity-75">
            <rect x="40" y="40" width="20" height="20" className="fill-none stroke-current stroke-2" rx="4">
              <animateTransform attributeName="transform" type="rotate" values="0 50 50;180 50 50;360 50 50" dur="8s" repeatCount="indefinite" />
            </rect>
            <rect x="35" y="35" width="30" height="30" className="fill-none stroke-current stroke-2" rx="6">
              <animateTransform attributeName="transform" type="rotate" values="0 50 50;-180 50 50;-360 50 50" dur="8s" repeatCount="indefinite" />
            </rect>
          </g>
        </svg>

        {/* Bottom Left Doodle */}
  <svg className="absolute -bottom-8 -left-8 w-48 h-48 text-neutral-700" viewBox="0 0 100 100">
          <path d="M30,50 Q50,30 70,50 T90,50" className="fill-none stroke-current stroke-2" strokeLinecap="round">
            <animate attributeName="d" values="M30,50 Q50,30 70,50 T90,50;M30,50 Q50,70 70,50 T90,50;M30,50 Q50,30 70,50 T90,50" dur="5s" repeatCount="indefinite" />
          </path>
          <circle cx="30" cy="50" r="4" className="fill-current">
            <animate attributeName="cy" values="50;52;50" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="70" cy="50" r="4" className="fill-current">
            <animate attributeName="cy" values="50;48;50" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>

        {/* Bottom Right Doodle */}
  <svg className="absolute -bottom-4 -right-4 w-40 h-40 text-neutral-700" viewBox="0 0 100 100">
          <g transform="translate(50,50)">
            <path d="M0,-20 L10,0 L0,20 L-10,0 Z" className="fill-none stroke-current stroke-2">
              <animateTransform attributeName="transform" type="rotate" values="0;360" dur="10s" repeatCount="indefinite" />
            </path>
            <path d="M0,-15 L7.5,0 L0,15 L-7.5,0 Z" className="fill-none stroke-current stroke-2">
              <animateTransform attributeName="transform" type="rotate" values="360;0" dur="10s" repeatCount="indefinite" />
            </path>
          </g>
        </svg>
      </div>

      <div className="max-w-md text-center space-y-6 relative">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-neutral-700/20 flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-neutral-700" />
              {/* Ripple Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-neutral-700/30 animate-ping" />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold">Welcome to Nexus!</h2>
        <p className="text-base-content/60">
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
