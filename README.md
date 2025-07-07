# Dolce Ana - Landing Page

![image](https://github.com/user-attachments/assets/ea4e0b05-9554-40b6-8926-8c17d0668fe6)


A simple and elegant landing page, inspired by the Linktree style, built with React to centralize all your important links.

➡️ **Check out the page:** https://dolceana.com/

## 🌟 About The Project

Inspired by the minimalist style of Linktree, this project provides a clean and straightforward page to introduce your followers to your entire digital ecosystem. Built with React, it's easily customizable and optimized for performance.

### ✨ Features

* **Clean & Minimalist Design:** Focused on readability and user experience.
* **Fully Responsive:** Perfectly adapts to mobile and desktop devices.
* **Easy to Customize:** Edit your data in a single place within the React components.
* **Reusable Components:** Modular structure thanks to React.
* **Optimized for Static Deployment:** Generates static HTML, CSS, and JS files ready for any static hosting provider.

### 🛠️ Built With

* **React**
* **HTML5**
* **CSS3**

## 🚀 Getting Started & Customization

To get a local copy up and running, you will need Node.js and npm installed.

1.  **Clone the repo:**
    ```sh
    git clone [https://github.com/](https://github.com/)Milan08S/Linktree-Dolce-Ana.git
    cd Linktree-Dolce-Ana
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Customize your information:**
    * Open the project in your code editor.
    * Navigate to the `public/` folder. Look for the main component where the links and profile info are defined.
    * Modify the data array or props to add your own links, text, and profile image. Example:

    ```javascript
    // Inside a file or directly in your component
       const profileData = {
          "profile": {
            "name": "Dolce Ana",
            "social_media": "@dolce_ana18",
            "backgroundColor": "#feb8cb"
          },
          "links": [
           {
              "id": 1,
              "title": "Instagram",
              "url": "https://www.instagram.com/dolce_ana18/",
              "icon": "../src/assets/instagram.svg"
            },
            {
              "id": 2,
              "title": "TikTok",
              "url": "https://www.tiktok.com/@dolce_ana18",
              "icon": "../src/assets/tiktok.svg"
            },
          ]
        }
    ```

4.  **Run the development server (optional):**
    To see your changes live as you edit.
    ```sh
    npm start
    ```

5.  **Build for production:**
    This command will create a `build` folder with all the static files needed for deployment.
    ```sh
    npm run build
    ```
    The contents of the `build` folder are what you should deploy to services like GitHub Pages, Vercel, or Netlify.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
