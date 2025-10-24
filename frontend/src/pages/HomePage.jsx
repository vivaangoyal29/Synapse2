import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-base-200 relative overflow-hidden">
      {/* Dark overlay outside chat window */}
      <div className="absolute inset-0 bg-neutral-900/20 z-0" />
      {/* Left doodle - dark green, yellow */}
      <svg
        className="absolute top-1/4 left-0 w-48 h-96 pointer-events-none z-0"
        viewBox="0 0 192 384"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M40 40 Q96 0 152 40 T152 160" stroke="#065f46" strokeWidth="8" fill="none" opacity="0.7" />
        <circle cx="60" cy="320" r="32" fill="#facc15" opacity="0.5" />
        <rect x="20" y="260" width="60" height="20" rx="10" fill="#065f46" opacity="0.5" />
      </svg>
      {/* Right doodle - dark pink, yellow */}
      <svg
        className="absolute top-1/4 right-0 w-48 h-96 pointer-events-none z-0"
        viewBox="0 0 192 384"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M152 40 Q96 0 40 40 T40 160" stroke="#be185d" strokeWidth="8" fill="none" opacity="0.7" />
        <circle cx="132" cy="320" r="32" fill="#facc15" opacity="0.5" />
        <rect x="112" y="260" width="60" height="20" rx="10" fill="#be185d" opacity="0.5" />
      </svg>
      {/* Top doodle - dark green, pink */}
      <svg
        className="absolute left-1/2 -translate-x-1/2 top-0 w-96 h-24 pointer-events-none z-0"
        viewBox="0 0 384 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="60" cy="48" rx="40" ry="16" fill="#065f46" opacity="0.5" />
        <ellipse cx="320" cy="48" rx="40" ry="16" fill="#be185d" opacity="0.5" />
        <rect x="170" y="20" width="44" height="12" rx="6" fill="#facc15" opacity="0.7" />
      </svg>
      {/* Bottom doodle - dark green, pink */}
      <svg
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-96 h-24 pointer-events-none z-0"
        viewBox="0 0 384 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="60" cy="48" rx="40" ry="16" fill="#be185d" opacity="0.5" />
        <ellipse cx="320" cy="48" rx="40" ry="16" fill="#065f46" opacity="0.5" />
        <rect x="170" y="64" width="44" height="12" rx="6" fill="#facc15" opacity="0.7" />
      </svg>
      <div className="flex items-center justify-center pt-20 px-4 relative z-10">
        <div className="bg-base-100 rounded-lg shadow-xl w-full max-w-6xl h-[calc(100vh-8rem)] ring-1 ring-white/10">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
