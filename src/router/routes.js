const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "InitialPage",
        component: () => import("pages/InitialPage.vue"),
        default: true,
      },
      {
        path: "/game",
        name: "GamePage",
        component: () => import("pages/GamePage.vue"),
        default: true,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
