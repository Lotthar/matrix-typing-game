import { ref, onMounted } from "vue";
import { playErrorSound } from "src/service/util";

export default () => {
  const allWords = ref(null);
  const screenWords = ref(null);

  onMounted(async () => {
    await loadAllWords();
  });

  const loadAllWords = async () => {
    const loadResponse = await fetch("/words.txt");
    const wordsText = await loadResponse.text();
    allWords.value = wordsText.split("\n");
  };

  const getWordScoreValue = (word) => {
    if (!!word && !!word.value) {
      if (checkIfWordIsNotOnScreen(word)) return 0;
      else return word.value.length;
    }
  };

  const checkIfWordIsNotOnScreen = (word) => {
    if (wordIsOnScreen(word)) return false;
    playErrorSound();
    return true;
  };

  const wordIsOnScreen = (word) => screenWords.value.includes(word);

  const addNewWordToScreen = () => screenWords.value.push(getRandomWord());

  const getRandomWord = () => {
    const randomWordIndex = Math.round(Math.random() * allWords.value.length);
    return allWords.value[randomWordIndex];
  };

  const getRandomWordPosition = () => Math.floor(Math.random() * 90 + 10);

  return { getWordScoreValue, getRandomWordPosition, addNewWordToScreen };
};
