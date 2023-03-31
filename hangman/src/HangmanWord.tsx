// define the type for the HangmanWord component's props
type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean // the reveal prop is optional and defaults to false
}

// define the HangmanWord component
export function HangmanWord({ guessedLetters, wordToGuess, reveal= false }: HangmanWordProps) {

    // render the word to guess, showing guessed letters and hiding unguessed letters
    return (
        <div style={{
            display: "flex",
            gap: ".25em",
            fontSize: "6rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontFamily: "monospace",
        }}>
            {/* map over each letter in the word to guess */}
            {wordToGuess.split("").map((letter, index) => (
                // create a span element for each letter
                <span style={{ borderBottom: ".1em solid black" }} key={index}>
                    <span style = {{
                        // set the visibility of the letter to visible if it has been guessed or if reveal is true
                        visibility: guessedLetters.includes(letter) || reveal
                            ? "visible"
                            : "hidden",
                        // set the color of the letter to red if it is not guessed and reveal is true
                        color: !guessedLetters.includes(letter) && reveal ? "red" : "black",
                    }}>{letter}</span>
                </span>
            ))}
        </div>
    )
}