import { defineStore } from "pinia";
import { playErrorSound } from "src/service/util";

export const useWordStore = defineStore("words", {
  state: () => ({
    screenWords: [],
    allWords: [],
  }),

  getters: {},

  actions: {
    async loadAllWords() {
      const loadResponse = await fetch("/words.txt");
      const wordsText = await loadResponse.text();
      this.allWords = wordsText.split("\n");
    },

    scoreIfCorrect(word, increaseScoreClbc) {
      if (!!word) {
        if (this.checkIfWordIsNotOnScreen(word)) playErrorSound();
        else {
          increaseScoreClbc(word);
          this.removeWordFromScreen(word);
        }
      }
    },

    checkIfWordIsNotOnScreen(word) {
      const screenWord = this.screenWords.find((obj) => obj.word === word);
      if (!!screenWord && screenWord.active) return false;
      return true;
    },

    addNewWordToScreen() {
      this.screenWords.push({ word: this.getRandomWord(), active: true });
    },
    removeWordFromScreen(word) {
      let screenWord = this.screenWords.find((obj) => obj.word === word);
      if (!!screenWord) screenWord.active = false;
    },
    getRandomWord() {
      const randomWordIndex = Math.round(Math.random() * this.allWords.length);
      return this.allWords[randomWordIndex];
    },
  },
});
