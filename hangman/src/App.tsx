import { useCallback, useEffect, useState } from "react"
import { HangmanDrawing } from "./HangmanDrawing"
import { HangmanWord } from "./HangmanWord"
import { Keyboard } from "./Keyboard"
import words from "./wordList.json"

// function to get a random word from the wordList.json file
function getWord() {
    return words[Math.floor(Math.random() * words.length)]
}

function App() {
    // set initial state for the word to guess and guessed letters using useState
    const [wordToGuess, setWordToGuess] = useState(getWord)
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])

    // get list of incorrect letters by comparing guessed letters to the word to guess
    const incorrectLetters = guessedLetters.filter(
        letter => !wordToGuess.includes(letter)
    )

    // determine if the player has lost or won
    const isLoser = incorrectLetters.length >= 6
    const isWinner = wordToGuess
        .split("")
        .every(letter => guessedLetters.includes(letter))

    // define a function to add guessed letters to the list of guessed letters
    const addGuessedLetter = useCallback(
        (letter: string) => {
            // if the letter has already been guessed, or the game is over, don't add it
            if (guessedLetters.includes(letter) || isLoser || isWinner) return

            // add the letter to the list of guessed letters
            setGuessedLetters(currentLetters => [...currentLetters, letter])
        },
        // add the dependencies for useCallback to ensure the function is only created once
        [guessedLetters, isWinner, isLoser]
    )

    // add event listener to handle keyboard input for guessing letters
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key
            // only allow lowercase letters to be guessed
            if (!key.match(/^[a-z]$/)) return

            e.preventDefault()
            // add the guessed letter to the list of guessed letters
            addGuessedLetter(key)
        }

        document.addEventListener("keypress", handler)

        // remove the event listener when the component unmounts
        return () => {
            document.removeEventListener("keypress", handler)
        }
    }, [guessedLetters]) // add guessedLetters as a dependency so the useEffect hook is called whenever it changes

    // add event listener to handle keyboard input for starting a new game
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key
            // only start a new game if the Enter key is pressed
            if (key !== "Enter") return

            e.preventDefault()
            // reset the guessed letters and get a new word to guess
            setGuessedLetters([])
            setWordToGuess(getWord())
        }

        document.addEventListener("keypress", handler)

        // remove the event listener when the component unmounts
        return () => {
            document.removeEventListener("keypress", handler)
        }
    }, []) // no dependencies needed since this effect should only run once when the component mounts

    // render the game interface


  return (
      <div
          style={{
            maxWidth: "800px",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            margin: "0 auto",
            alignItems: "center",
          }}
      >
        <div style={{ fontSize: "2rem", textAlign: "center" }}>
          {isWinner && "Winner! - Refresh to try again"}
          {isLoser && "Nice Try - Refresh to try again"}
        </div>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord
            reveal={isLoser}
            guessedLetters={guessedLetters}
            wordToGuess={wordToGuess}
        />
        <div style={{ alignSelf: "stretch" }}>
          <Keyboard
              disabled={isWinner || isLoser}
              activeLetters={guessedLetters.filter(letter =>
                  wordToGuess.includes(letter)
              )}
              inactiveLetters={incorrectLetters}
              addGuessedLetter={addGuessedLetter}
          />
        </div>
      </div>
  )
}

export default App