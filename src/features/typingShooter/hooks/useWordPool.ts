import { useCallback, useRef } from "react";
import { WORDS } from "../constants/words";

export const useWordPool = () => {
  const availableWords = useRef<string[]>([...WORDS]);
  const usedWords = useRef<string[]>([]);

  const getRandomWord = useCallback((): string => {
    // If all words have been used, reset the pool
    if (availableWords.current.length === 0) {
      availableWords.current = [...usedWords.current];
      usedWords.current = [];
    }

    // Select a random word from available words
    const randomIndex = Math.floor(Math.random() * availableWords.current.length);
    const selectedWord = availableWords.current[randomIndex];

    // Move the word from available to used
    availableWords.current.splice(randomIndex, 1);
    usedWords.current.push(selectedWord);

    return selectedWord;
  }, []);

  const reset = useCallback(() => {
    availableWords.current = [...WORDS];
    usedWords.current = [];
  }, []);

  return { getRandomWord, reset };
};
