import { useQuasar } from "quasar";
import { getCurrentInstance, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

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

export const useUser = () => {
  const { saveInStorage, getFromStorage } = useSessionStorage();
  const app = getCurrentInstance();

  const USER_KEY = "user";
  const usernameRef = ref(null);

  const loadSavedUser = () => {
    const user = getFromStorage(USER_KEY);
    app.appContext.config.globalProperties.$loggedUser = user;
    usernameRef.value = user;
  };

  const deleteUser = () => {
    saveInStorage(USER_KEY, null);
    usernameRef.value = null;
    app.appContext.config.globalProperties.$loggedUser = null;
  };

  const newUser = () => {
    if (!!app && !!usernameRef.value) {
      app.appContext.config.globalProperties.$loggedUser = usernameRef.value;
      saveInStorage(USER_KEY, usernameRef.value);
    }
  };

  return { newUser, loadSavedUser, usernameRef, deleteUser };
};
