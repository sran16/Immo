import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import PublicationView from "@/views/PublicationView.vue";
import AnnouncementDetail from "@/views/AnnouncementDetailView.vue";
import AllAnnonces from "@/views/AllAnnoncesView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
