import { ref, computed } from "vue";

const possibleSpeeds = [12, 9, 6, 3];

export default () => {
  const score = ref(0);
  const bestScore = ref(0);
  const speed = ref(12);
  const timeRemaining = ref(30);
  const countdownId = ref(null);

  const startGame = () => {
    activateStartCountDown(1000, gameFinished);
  };

  const activateStartCountDown = (interval, finishGameCallback) => {
    setInterval(() => {
      if (timeRemaining.value > 0) timeRemaining.value -= 1;
      else finishGameCallback();
    }, interval);
  };

  const gameFinished = () => {
    clearInterval(countdownId.value);
  };

  return {
    startGame,
    timeRemaining,
    score,
    bestScore,
    speed,
  };
};
