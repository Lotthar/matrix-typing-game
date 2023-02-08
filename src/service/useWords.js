import { ref, onMounted } from "vue";
import { useGameStore } from "stores/game";
import { storeToRefs } from "pinia";
import { playErrorSound } from "src/service/util";

export default () => {
  const gameStore = useGameStore();

  const { allWords, screenWords } = storeToRefs(gameStore);

  const loadAllWords = async () => {
    console.log("Loading words from file...");
    const loadResponse = await fetch("/words.txt");
    const wordsText = await loadResponse.text();
    allWords.value = wordsText.split("\n");
  };

  const getWordScoreValue = (word) => {
    if (!!word && !!word.value) {
      if (checkIfWordIsNotOnScreen(word.value)) return 0;
      else {
        removeWordFromScreen(word.value);
        return word.value.length;
      }
    }
  };

  const checkIfWordIsNotOnScreen = (word) => {
    const screenWord = screenWords.value.find((obj) => obj.word === word);
    if (!!screenWord && screenWord.active) return false;
    playErrorSound();
    return true;
  };

  const addNewWordToScreen = () =>
    screenWords.value.push({ word: getRandomWord(), active: true });

  const removeWordFromScreen = (word) => {
    let screenWord = screenWords.value.find((obj) => obj.word === word);
    if (!!screenWord) screenWord.active = false;
  };

  const getRandomWord = () => {
    const randomWordIndex = Math.round(Math.random() * allWords.value.length);
    return allWords.value[randomWordIndex];
  };

  const getRandomWordPosition = () => Math.round(Math.random() * 100 + 10);

  return {
    getRandomWord,
    getWordScoreValue,
    getRandomWordPosition,
    addNewWordToScreen,
    screenWords,
    removeWordFromScreen,
    loadAllWords,
  };
};
