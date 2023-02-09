import { defineStore } from "pinia";

export const useGameStore = defineStore("game", {
  state: () => ({
    score: 0,
    bestScore: 0,
    speed: 12,
    timeRemaining: 30,
    countdownIntervalId: null,
    wordsIntervalId: null,
  }),

  getters: {},

  actions: {
    async startGame(loadWordsClbc, resetGameClbc, addWordClbc) {
      await loadWordsClbc();
      this.activateStartCountDown(1000, () => this.gameFinished(resetGameClbc));
      this.startGeneratingWords(addWordClbc);
    },

    activateStartCountDown(interval, finishGameClbc) {
      this.countdownIntervalId = setInterval(() => {
        if (this.timeRemaining > 0) this.timeRemaining -= 1;
        else finishGameClbc();
      }, interval);
    },

    startGeneratingWords(addWordClbc) {
      this.wordsIntervalId = setInterval(() => addWordClbc(), 120 * this.speed);
    },

    gameFinished(resetGameClbc) {
      clearInterval(this.countdownIntervalId);
      clearInterval(this.wordsIntervalId);
      this.updateBestScoreIfBeaten();
      resetGameClbc();
    },

    updateBestScoreIfBeaten() {
      if (this.bestScore < this.score) this.bestScore = this.score;
    },

    increaseScore(word) {
      this.score += word.length;
    },
  },
});
