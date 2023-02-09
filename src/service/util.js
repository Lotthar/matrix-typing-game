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

  const usernameRef = ref(null);

  const loadSavedUser = () => {
    app.appContext.config.globalProperties.$loggedUser = getFromStorage("user");
  };
  const newUser = () => {
    if (!!app && !!usernameRef.value) {
      app.appContext.config.globalProperties.$loggedUser = usernameRef.value;
      console.log(app.appContext.config.globalProperties.$loggedUser);
      saveInStorage("user", usernameRef.value);
    }
  };

  return { newUser, loadSavedUser, usernameRef };
};

export const useRoutesUtil = () => {
  const $route = useRoute();
  const $router = useRouter();

  const redirectToPage = (page, queryParams) => {
    if (!!page && page !== null)
      $router.push({ name: page, query: { ...queryParams } });
    else $router.push({ name: ProcessForms.ACTIVE_REQUESTS });
  };

  const getRouteQueryParam = (param) =>
    !!$route.query[param] ? $route.query[param] : null;

  return { redirectToPage, getRouteQueryParam, formatDateFromTimestamp };
};
