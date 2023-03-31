import styles from "./Keyboard.module.css"

// define the list of keys to display on the keyboard
const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

// define the type for the Keyboard component's props
type KeyboardProps = {
    disabled?: boolean
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}

// define the Keyboard component
export function Keyboard({
                             activeLetters,
                             inactiveLetters,
                             addGuessedLetter,
                             disabled = false,
                         }: KeyboardProps) {
    return (
        // create a grid to display the keyboard buttons
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
                gap: ".5rem",
            }}
        >
            {/* map over each key and create a button for each */}
            {KEYS.map(key => {
                // determine if the key is active or inactive
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return (
                    // create a button element for the key
                    <button
                        onClick={() => addGuessedLetter(key)}
                        // add classes based on whether the key is active or inactive
                        className={`${styles.btn} ${isActive ? styles.active : ""} ${
                            isInactive ? styles.inactive : ""
                        }`}
                        // disable the button if it is already active or inactive, or if the component is disabled
                        disabled={isInactive || isActive || disabled}
                        key={key}
                    >
                        {key}
                    </button>
                )
            })}
        </div>
    )
}