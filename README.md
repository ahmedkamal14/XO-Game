# XO Game

This repository contains a **Tic-Tac-Toe** (XO) game built with modern web technologies. The game offers an engaging and interactive experience, allowing two players to compete against each other. It features a sleek, responsive design and incorporates various React hooks and state management techniques to ensure a smooth and enjoyable gaming experience.

![XO Game Preview](snip.png)

## Features

- **Two-Player Mode:** Allows two players to compete against each other on the same device.
- **Score Tracking:** Keeps track of the scores for both players, as well as the number of draws.
- **Responsive Design:** Ensures the game is fully responsive, providing an optimal user experience across different devices and screen sizes.
- **Interactive User Interface:** Incorporates smooth animations and hover effects to enhance user engagement.
- **Local Storage:** Persists game data, including the board state and scores, even after the page is refreshed or closed.

## Technologies Used

- **React:** JavaScript library for building user interfaces, providing the foundation for the game's components and interactions.
- **Vite:** Lightning-fast build tool and development server, offering an efficient and streamlined development experience.
- **Tailwind CSS:** Utility-first CSS framework used to style the game with minimal effort, ensuring a clean and modern design.
- **React Hooks:** Utilizes hooks like `useState` for managing component state and `useContext` for sharing state across multiple components.
- **Local Storage:** The `useLocalStorage` hook from the `react-use` library is used to store the game's board and score data, preserving the game state between sessions.
- **ESLint:** Ensures code quality and consistency by identifying and fixing JavaScript errors and potential issues.

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ahmedkamal14/XO-Game.git
   cd XO-Game
2. **Install Dependencies:**

   ```bash
   npm install
3. **Run the Development Server:**

    ```bash
    npm run dev
    
## How It Works

- **Game Context:** The game uses a React context to manage the state of the game board, player turns, and scores. This context is shared across components, making it easy to update and access game state globally.
- **Local Storage Integration:** The game state, including the board array and player scores, is saved to local storage using the `useLocalStorage` hook. This ensures that players can resume their game even if they refresh the page or close the browser.
- **Responsive Layout:** Tailwind CSS is used to create a responsive layout, ensuring the game looks great on any device, from mobile phones to desktop monitors.

## Deployment

This project is deployed on GitHub Pages. You can view the live site at: [XO Game](https://ahmedkamal14.github.io/XO-Game/).

## Contribution

Feel free to fork this repository and submit pull requests. Contributions are welcome and appreciated!
