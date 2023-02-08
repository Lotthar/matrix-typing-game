import { defineStore } from "pinia";

export const useGameStore = defineStore("game", {
  state: () => ({
    score: 0,
    bestScore: 0,
    speed: 12,
    timeRemaining: 30,
    screenWords: [],
    allWords: [],
  }),

  getters: {},

  actions: {},
});
