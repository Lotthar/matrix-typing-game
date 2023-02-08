import { ref, computed } from "vue";
import { useGameStore } from "stores/game";
import { storeToRefs } from "pinia";
import useWords from "./useWords";

const possibleSpeeds = [12, 9, 6, 3];

export default () => {
  const gameStore = useGameStore();
  const { addNewWordToScreen, loadAllWords } = useWords();
  const { timeRemaining, speed, screenWords } = storeToRefs(gameStore);

  const countdownIntervalId = ref(null);
  const wordsIntervalId = ref(null);

  const startGame = () => {
    loadAllWords();
    activateStartCountDown(1000, gameFinished);
    startGeneratingWords();
  };

  const activateStartCountDown = (interval, finishGameCallback) => {
    countdownIntervalId.value = setInterval(() => {
      if (timeRemaining.value > 0) timeRemaining.value -= 1;
      else finishGameCallback();
    }, interval);
  };

  const startGeneratingWords = () => {
    wordsIntervalId.value = setInterval(
      () => addNewWordToScreen(),
      120 * speed.value
    );
  };

  const gameFinished = () => {
    clearInterval(countdownIntervalId.value);
    clearInterval(wordsIntervalId.value);
    screenWords.value = [];
  };

  return {
    startGame,
  };
};
