# Hangman Game

This is a simple Hangman game built using React. The game randomly selects a word from a list of words and the player must guess the word one letter at a time by clicking on the letters on a virtual keyboard. The game ends when the player either correctly guesses the word or runs out of incorrect guesses.

## How to Play

To play the game, simply start typing letters on your keyboard or click on the letters on the virtual keyboard. If the letter is part of the word, it will be revealed in the word. If the letter is not part of the word, the hangman drawing will progress one step closer to being fully drawn. The game ends when the player either correctly guesses the word or the hangman is fully drawn.

## Code Overview

The code is divided into several components:

- `App`: the main component that manages the state of the game and renders the other components
- `HangmanDrawing`: a component that renders the hangman drawing based on the number of incorrect guesses
- `HangmanWord`: a component that renders the word to guess and shows the letters that have been correctly guessed
- `Keyboard`: a component that renders the virtual keyboard and handles the user's input

The code also includes a `wordList.json` file that contains a list of words for the game to choose from.

## Running the Code

To run the code, first clone the repository to your local machine. Then, navigate to the root of the repository and run the following command to install the dependencies:

`npm install`

After the dependencies are installed, run the following command to start the development server:

This will start the game in your browser at `http://localhost:5173/`.

## Modifying the Code

Feel free to modify the code to add new features or change the appearance of the game. You can also add new words to the `wordList.json` file to increase the variety of words that the game can choose from.

## Credits

This game was created by [Devin Anderson].