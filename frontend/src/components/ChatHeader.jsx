import { X, Trash2 } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser, clearGeminiMessages } = useChatStore();
  const { onlineUsers } = useAuthStore();

  const isGemini = selectedUser._id === "gemini-ai";
  const isOnline = isGemini || onlineUsers.includes(selectedUser._id);

  return (
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="size-10 rounded-full relative">
              <img 
                src={selectedUser.profilePic || "/avatar.png"} 
                alt={selectedUser.fullName}
                className={isGemini ? "ring-2 ring-blue-500" : ""}
              />
              {isOnline && (
                <span
                  className={`absolute bottom-0 right-0 size-3 rounded-full ring-2 ring-base-100 ${
                    isGemini ? "bg-blue-500" : "bg-green-500"
                  }`}
                />
              )}
            </div>
          </div>

          <div>
            <h3 className="font-medium flex items-center gap-2">
              {selectedUser.fullName}
              {isGemini && (
                <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded">
                  AI
                </span>
              )}
            </h3>
            <p className={`text-sm ${isGemini ? "text-blue-400" : "text-base-content/70"}`}>
              {isOnline ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Clear chat button for Gemini */}
          {isGemini && (
            <button 
              onClick={clearGeminiMessages}
              className="btn btn-sm btn-ghost"
              title="Clear chat history"
            >
              <Trash2 size={18} />
            </button>
          )}
          
          {/* Close button */}
          <button onClick={() => setSelectedUser(null)}>
            <X />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatHeader;