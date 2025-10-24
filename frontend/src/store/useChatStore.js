import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";
import axios from "axios";

// ✅ Virtual Gemini User
const GEMINI_USER = {
  _id: "gemini-ai",
  fullName: "Gemini AI",
  email: "gemini@ai.com",
  profilePic: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
  createdAt: new Date().toISOString(),
};

// ✅ Load Gemini messages from localStorage
const loadGeminiMessages = () => {
  try {
    const saved = localStorage.getItem("gemini-messages");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Failed to load Gemini messages:", error);
    return [];
  }
};

// ✅ Save Gemini messages to localStorage
const saveGeminiMessages = (messages) => {
  try {
    localStorage.setItem("gemini-messages", JSON.stringify(messages));
  } catch (error) {
    console.error("Failed to save Gemini messages:", error);
  }
};

export const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  // === USERS ===
  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/users");
      // ✅ Add Gemini user at the top of the list
      set({ users: [GEMINI_USER, ...res.data] });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch users");
    } finally {
      set({ isUsersLoading: false });
    }
  },

  setSelectedUser: (selectedUser) => {
    set({ selectedUser, messages: [] }); // Clear messages when switching users
  },

  // === MESSAGES ===
  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      // ✅ If Gemini is selected, load from localStorage
      if (userId === "gemini-ai") {
        const geminiMessages = loadGeminiMessages();
        set({ messages: geminiMessages, isMessagesLoading: false });
        return;
      }

      const res = await axiosInstance.get(`/messages/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch messages");
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  sendMessage: async (messageData) => {
    const { selectedUser, messages } = get();
    const { authUser } = useAuthStore.getState();

    try {
      // ✅ Handle Gemini messages differently
      if (selectedUser._id === "gemini-ai") {
        // Add user's message immediately
        const userMessage = {
          _id: Date.now().toString(),
          senderId: authUser._id,
          text: messageData.text,
          image: messageData.image,
          createdAt: new Date().toISOString(),
        };

        // Add a Gemini placeholder so the UI shows "Thinking..." while we wait
        const placeholderId = `gemini-temp-${Date.now()}`;
        const geminiPlaceholder = {
          _id: placeholderId,
          senderId: "gemini-ai",
          text: "Thinking...",
          createdAt: new Date().toISOString(),
          isPlaceholder: true,
        };

        const updatedMessages = [...messages, userMessage, geminiPlaceholder];
        set({ messages: updatedMessages });
        saveGeminiMessages(updatedMessages); // ✅ Save to localStorage

        // Call Gemini API
        try {
          // Use axiosInstance so production uses relative "/api" (axiosInstance baseURL handles env)
          const res = await axiosInstance.post("/gemini", {
            message: messageData.text,
            chatId: selectedUser._id,
          });

          // Replace the placeholder with Gemini's real reply
          const geminiMessage = {
            _id: (Date.now() + 1).toString(),
            senderId: "gemini-ai",
            text: res.data.text,
            createdAt: new Date().toISOString(),
          };

          const finalMessages = get().messages.map((m) =>
            m._id === placeholderId ? geminiMessage : m
          );
          set({ messages: finalMessages });
          saveGeminiMessages(finalMessages); // ✅ Save to localStorage
        } catch (error) {
          toast.error("Failed to get Gemini response");

          const errorMessage = {
            _id: (Date.now() + 1).toString(),
            senderId: "gemini-ai",
            text: "Sorry, I couldn't process that request.",
            createdAt: new Date().toISOString(),
          };

          const errorMessages = get().messages.map((m) =>
            m._id === placeholderId ? errorMessage : m
          );
          set({ messages: errorMessages });
          saveGeminiMessages(errorMessages); // ✅ Save to localStorage
        }
        return;
      }

      // ✅ Regular user messages (original logic)
      const res = await axiosInstance.post(
        `/messages/send/${selectedUser._id}`,
        messageData
      );
      set({ messages: [...messages, res.data] });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send message");
    }
  },

  // === ADD MESSAGE DIRECTLY ===
  addMessage: (message) => {
    const { messages, selectedUser } = get();
    const updatedMessages = [...messages, message];
    set({ messages: updatedMessages });
    
    // ✅ If Gemini chat, save to localStorage
    if (selectedUser?._id === "gemini-ai") {
      saveGeminiMessages(updatedMessages);
    }
  },

  // ✅ Clear Gemini chat history
  clearGeminiMessages: () => {
    const { selectedUser } = get();
    if (selectedUser?._id === "gemini-ai") {
      set({ messages: [] });
      localStorage.removeItem("gemini-messages");
      toast.success("Gemini chat history cleared");
    }
  },

  // === SOCKET SUBSCRIPTIONS ===
  subscribeToMessages: () => {
    const { selectedUser, addMessage } = get();
    if (!selectedUser || selectedUser._id === "gemini-ai") return; // ✅ Don't subscribe for Gemini

    const socket = useAuthStore.getState().socket;

    socket.on("newMessage", async (newMessage) => {
      const isMessageFromSelectedUser = newMessage.senderId === selectedUser._id;
      if (isMessageFromSelectedUser) {
        addMessage(newMessage);
      }
    });
  },

  unsubscribeFromMessages: () => {
    const socket = useAuthStore.getState().socket;
    socket.off("newMessage");
  },
}));