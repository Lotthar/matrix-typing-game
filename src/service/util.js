import { useQuasar } from "quasar";

const wordColors = [
  "#22C626",
  "#007000",
  "#00A800",
  "#008A00",
  "#007300",
  "#00F000",
  "#00A800",
  "#348105",
  "#22C626",
  "#008A00",
  "#ACEE3E",
];

const randomArrayIndex = (array) => Math.floor(Math.random() * array.length);

export const playErrorSound = () => new Audio("/errorSound.mp3").play();

export const getRandomWordColor = () =>
  wordColors[randomArrayIndex(wordColors)];

export const getRandomWordPosition = () => Math.round(Math.random() * 100 + 10);

export const useSessionStorage = () => {
  const $q = useQuasar();

  const saveInStorage = (key, value) => $q.sessionStorage.set(key, value);

  const getFromStorage = (key) => $q.sessionStorage.getItem(key);

  return { saveInStorage, getFromStorage };
};
