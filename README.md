# Synapse - Real-Time Chat Application 💬

![Synapse Chat App Screenshot](vivaangoyal29/synapse2/Synapse2-ab3ef3bb5819279e0241f4b70cd122aa2d146a55/frontend/public/screenshot-for-readme.png)

Nexus is a full-stack, real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js) with Socket.IO for instant messaging capabilities and integration with Google Gemini AI.

---

## ✨ Features

* **Real-Time Messaging:** Instant message delivery using Socket.IO.
* **User Authentication:** Secure signup and login functionality using JWT (JSON Web Tokens) stored in cookies.
* **Online User Status:** See which users are currently online.
* **Gemini AI Integration:** Chat directly with Google's Gemini AI for assistance or conversation.
* **Image Uploads:** Send images in chats, uploaded via Cloudinary.
* **Profile Updates:** Users can update their profile picture.
* **Theme Customization:** Choose from multiple themes provided by DaisyUI.
* **Emoji Picker:** Add emojis to your messages.
* **Responsive Design:** Works on different screen sizes.

---

## 🛠️ Tech Stack

* **Frontend:**
    * React
    * Vite
    * Tailwind CSS
    * DaisyUI
    * Zustand (State Management)
    * Axios
    * Socket.IO Client
    * Lucide React (Icons)
    * React Router DOM
    * React Hot Toast
    * Emoji Mart
* **Backend:**
    * Node.js
    * Express
    * MongoDB (with Mongoose)
    * Socket.IO
    * JWT (for Authentication)
    * bcryptjs (Password Hashing)
    * Cloudinary (Image Storage)
    * dotenv
    * cors
    * cookie-parser
    * Axios (for calling Gemini API)

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v18 or higher recommended)
* npm or yarn
* MongoDB instance (local or cloud like MongoDB Atlas)
* Cloudinary account
* Google Gemini API Key

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-directory>
    ```

2.  **Install backend dependencies:**
    ```bash
    cd backend
    npm install
    ```

3.  **Install frontend dependencies:**
    ```bash
    cd ../frontend
    npm install
    ```

4.  **Set up Environment Variables:**

    Create a `.env` file in the `backend` directory and add the following variables:

    ```env
    PORT=5001 # Or any port you prefer for the backend
    MONGODB_URI=<your_mongodb_connection_string>
    JWT_SECRET=<your_jwt_secret_key>
    NODE_ENV=development

    # Cloudinary Credentials
    CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
    CLOUDINARY_API_KEY=<your_cloudinary_api_key>
    CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>

    # Google Gemini API Key
    GEMINI_API_KEY=<your_gemini_api_key>

    # Frontend URL (for CORS) - Use http://localhost:5173 for local dev
    FRONTEND_URL=http://localhost:5173
    ```

    *(Optional)* Create a `.env` file in the `frontend` directory if you need to override the backend URL for the frontend API calls:
    ```env
    VITE_BACKEND_URL=http://localhost:5001
    ```

### Running the Application

1.  **Start the backend server:**
    ```bash
    cd backend
    npm run dev
    ```
    This will start the Node.js server, typically on `http://localhost:5001`.

2.  **Start the frontend development server:**
    Open a *new* terminal window:
    ```bash
    cd frontend
    npm run dev
    ```
    This will start the React application, typically on `http://localhost:5173`.

3.  Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Build & Deployment

### Build

To create a production build of the frontend:

```bash
cd frontend
npm run build
```

