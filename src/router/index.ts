import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CompetitionView from '@/views/CompetitionView.vue';
import PlayersView from '@/views/PlayersView.vue';
import SponsorsView from '@/views/SponsorsView.vue';
import SpotlightView from '@/views/SpotlightView.vue';
import TripsView from '@/views/TripsView.vue';
import EindhovenView from '@/views/EindhovenView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/competitie', name: 'competition', component: CompetitionView },
    { path: '/spelers', name: 'players', component: PlayersView },
    { path: '/sponsors', name: 'sponsors', component: SponsorsView },
    { path: '/spotlight', name: 'spotlight', component: SpotlightView },
    { path: '/uitstapjes', name: 'trips', component: TripsView },
    { path: '/uitstapjes/eindhoven', name: 'trip-eindhoven', component: EindhovenView },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
