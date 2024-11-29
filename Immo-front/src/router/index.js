import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import PublicationView from "@/views/PublicationView.vue";
import AnnouncementDetail from "@/views/AnnouncementDetailView.vue";
import AllAnnonces from "@/views/AllAnnoncesView.vue";
import SearchResults from "@/views/SearchResults.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },

  {
    path: "/publication",
    name: "publication",
    component: PublicationView,
  },
  {
    path: "/announcement/:id",
    name: "announcementDetail",
    component: AnnouncementDetail,
    props: true,
  },

  {
    path: "/announcements",
    name: "AllAnnonces",
    component: AllAnnonces,
  },
  {
    path: "/search",
    name: "SearchResults",
    component: SearchResults,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
