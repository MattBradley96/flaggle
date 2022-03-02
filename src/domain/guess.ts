import { Direction } from "./geography";

export interface Guess {
  name: string;
  distance: number;
  direction: Direction;
}

export function loadAllGuesses(): Record<string, Guess[]> {
  const storedGuesses = localStorage.getItem("Flag_guesses");
  return storedGuesses != null ? JSON.parse(storedGuesses) : {};
}

export function saveGuesses(dayString: string, guesses: Guess[]): void {
  const allGuesses = loadAllGuesses();
  localStorage.setItem(
    "Flag_guesses",
    JSON.stringify({
      ...allGuesses,
      [dayString]: guesses,
    })
  );
}
