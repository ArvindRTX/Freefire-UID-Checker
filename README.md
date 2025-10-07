# 🔥 Freefire-UID-Checker

![Free Fire Lookup Screenshot](https://via.placeholder.com/800x450/120A2F/00ffcc?text=Freefire-UID-Checker+Screenshot)
*Replace this with an actual screenshot of your deployed site!*

A dynamic and visually engaging web application designed to help you quickly retrieve essential Free Fire player information. Simply input a player's Unique ID (UID) and their server region, and the app will display their in-game Nickname, Level, Region, and Signature.

Built with a strong Free Fire aesthetic in mind, this tool features a dark, futuristic design with animated backgrounds, glowing UI elements, and custom gaming-inspired fonts to provide an immersive user experience.

## ✨ Features

* **Player Information Retrieval**: Fetches and displays a player's:
    * Nickname
    * Level
    * Region
    * Signature
* **Server Region Selection**: Supports multiple Free Fire server regions.
* **Immersive UI**:
    * Dark, futuristic theme with glowing cyan accents.
    * Animated grid and starfield background for a dynamic feel.
    * Subtle floating foreground particles.
    * Custom gaming fonts (`Orbitron`, `Share Tech Mono`).
* **Responsive Design**: Optimized for various screen sizes.
* **Loading & Error Handling**: Provides visual feedback during data fetching and clear error messages.

## 🚀 Quickstart (Using the Hosted API)

To get this frontend running quickly:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/ArvindRTX/Freefire-UID-Checker.git](https://github.com/YOUR_USERNAME/Freefire-UID-Checker.git)
    cd Freefire-UID-Checker
    ```
2.  **Open `index.html`:**
    Simply open the `index.html` file in your web browser. That's it!
    The frontend is configured to use a hosted Free Fire API endpoint by default.

## ⚙️ Backend API Requirement

This frontend requires a Free Fire API backend to fetch player data. By default, it uses a publicly hosted API:

`https://freefire-api-six.vercel.app/get_player_personal_show?server={region}&uid={uid}`

If you wish to run your own backend:

1.  **Set up your Free Fire API server.**
2.  **Update the API endpoint** in the inline script in `index.html` to point to your local or self-hosted API URL:

    ```javascript
    const apiUrl = `YOUR_BACKEND_API_URL/get_player_personal_show?server=${server.toLowerCase()}&uid=${uid}`;
    ```

## 🛠️ Technologies Used

* **HTML5**: Structure of the web page.
* **CSS3**: Styling, animations, and responsive design.
* **JavaScript (ES6+)**: Dynamic content, API requests, and UI interactions.
* **Google Fonts**: `Orbitron` and `Share Tech Mono` for distinct typography.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements, new features, or bug fixes, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.
