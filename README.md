# InternPedia - Profile Management App

**Live Demo:** [https://internpedia-web.onrender.com/](https://internpedia-web.onrender.com/)

InternPedia is a full-stack profile management application designed to help users display their professional portfolios, skills, and projects in a visually appealing and interactive way.

![InternPedia Landing Page](https://via.placeholder.com/800x400?text=InternPedia+Screenshot)

## 🚀 Features

*   **Modern Interactive UI:** Sleek profile cards with hover effects, gradients, and responsive design.
*   **Profile Details:** Comprehensive view including Bio, Skills (tagged), Projects, and Visual Resume placeholders.
*   **Search & Filter:** (Planned) Efficiently find profiles based on skills or location.
*   **Admin Dashboard:** (Planned) Manage profiles and user data.

## 🛠️ Tech Stack

*   **Frontend:** Next.js 14, React, Tailwind CSS
*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB (Atlas)
*   **Deployment:** Render

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/abhilash-dev-glitch/ProfileManagement.git
    cd ProfileManagement
    ```

2.  **Install Dependencies:**
    *   **Server:**
        ```bash
        cd server
        npm install
        ```
    *   **Client:**
        ```bash
        cd ../client
        npm install
        ```

3.  **Environment Variables:**
    *   Create a `.env` file in `server/` with:
        ```
        MONGO_URI=your_mongodb_connection_string
        ```
    *   Create a `.env.local` file in `client/` with:
        ```
        NEXT_PUBLIC_API_URL=http://localhost:5000
        ```

4.  **Run Locally:**
    *   **Server:** `npm start` (in `server/`)
    *   **Client:** `npm run dev` (in `client/`)

## 🤝 Contributing

Contributions are welcome! Please fork the repo and submit a pull request.
