import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/About.vue";
import Playlist from "../views/Playlist.vue";
import Contact from "../views/Contact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/playlist",
      component: Playlist,
    },
    {
      path: "/contact",
      component: Contact,
    },
  ],
});

export default router;
