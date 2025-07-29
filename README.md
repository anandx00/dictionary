# Dictionary Web App 📖

A clean, simple, and responsive dictionary web application built with vanilla HTML, CSS, and JavaScript. This app provides a straightforward and intuitive interface for users to look up English word definitions, parts of speech, and pronunciations. It fetches data from the free and open-source DictionaryAPI, making it a reliable tool for students, writers, and English language learners.

The primary goal of this project is to offer a fast and accessible dictionary experience without the clutter of ads or unnecessary features, focusing purely on providing clear and accurate linguistic information.

## Screenshot

![Dictionary App Screenshot](./assets/screenshot.png)

*(**Note:** To add your own screenshot, take a picture of your running application and save it as `screenshot.png` inside your `assets` folder. A good screenshot showcases the app's clean UI after a successful word search.)*

## Features

This application is built with a focus on core functionality and user experience.

-   **Dynamic Word Search:** Look up any English word in real-time. The interface is designed to be fast and responsive, providing immediate feedback to the user.
-   **Detailed Definitions:** View clear, concise definitions categorized by part of speech (e.g., noun, verb, adjective). This grouping helps users quickly find the exact meaning they are looking for and understand how a word functions in different grammatical contexts.
-   **Phonetic Spelling:** See the phonetic transcription for each word. This is an essential feature for anyone learning English pronunciation or for clarifying the correct way to say a word.
-   **Audio Pronunciation:** Listen to the word's pronunciation with a single click (where available). Hearing the word spoken helps solidify understanding and improves speaking skills.
-   **Responsive Design:** The application features a clean and modern UI that works smoothly on both desktop and mobile devices. The layout adapts gracefully to different screen sizes, ensuring a seamless experience everywhere.
-   **Direct Source Link:** Includes a link to the Wiktionary source for each entry. This provides an extra layer of trust and allows curious users to dive deeper into the word's etymology and usage.


## Getting Started

To get a local copy up and running, follow these simple steps. No complex build tools or dependencies are required.

1.  **Clone the repository:**
    This command downloads a copy of the project's files to your local machine.
    ```sh
    git clone [https://github.com/anandx00/dictionary.git](https://github.com/anandx00/dictionary.git)
    ```

2.  **Navigate to the project directory:**
    This command moves you into the newly created project folder.
    ```sh
    cd dictionary
    ```

3.  **Open the `dictionary.html` file** in your favorite web browser. You can do this by double-clicking the file in your file explorer or by using a live server extension (like Live Server in VS Code) for a better development experience.

## Technologies Used

This project is built with fundamental web technologies, making it lightweight, fast, and easy to maintain.

-   **HTML5:** Used for the structure and semantic content of the application. Semantic tags like `<main>`, `<header>`, and `<footer>` are used for better accessibility and SEO.
-   **CSS3:** Used for all styling, layout, and responsiveness. Modern CSS features like Flexbox and Grid are used to create a robust and flexible layout.
-   **Vanilla JavaScript:** All client-side logic is written in plain JavaScript without any frameworks or libraries. This includes handling user input, manipulating the DOM, and managing API requests.
-   **Fetch API:** Used for making asynchronous HTTP requests to the dictionary API to retrieve word data in a modern and efficient way.

## API Reference

This project relies on the free and open-source **[DictionaryAPI](https://dictionaryapi.dev/)**. It's an excellent public service that provides free dictionary data without requiring an API key. A huge thanks to the developers and contributors for making this resource available.

## License

This project is distributed under the MIT License. See the `LICENSE` file for more information. This means you are free to use, modify, and distribute the code as you see fit.
