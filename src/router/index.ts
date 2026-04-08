import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CompetitionView from '@/views/CompetitionView.vue';
import PlayersView from '@/views/PlayersView.vue';
import SponsorsView from '@/views/SponsorsView.vue';
import SpotlightView from '@/views/SpotlightView.vue';
import TripsView from '@/views/TripsView.vue';
import EindhovenView from '@/views/EindhovenView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/home', redirect: '/' },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'ZVK Onder Den Toren Veulen | Zaalvoetbal',
        description:
          'Officiele website van ZVK Onder Den Toren Veulen met wedstrijden, spelers, sponsors en clubinfo.',
      },
    },
    {
      path: '/competitie',
      name: 'competition',
      component: CompetitionView,
      meta: {
        title: 'Wedstrijden en Klassement | ZVK Onder Den Toren Veulen',
        description:
          'Bekijk wedstrijden, uitslagen, agenda en klassement van ZVK Onder Den Toren Veulen.',
      },
    },
    {
      path: '/spelers',
      name: 'players',
      component: PlayersView,
      meta: {
        title: 'Spelerskern | ZVK Onder Den Toren Veulen',
        description:
          'Ontdek de spelers van ZVK Onder Den Toren Veulen, met onder meer Rune Paque, Milan Schroyen, Yoran Knaepen, Pedro Santos en meer.',
      },
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      component: SponsorsView,
      meta: {
        title: 'Sponsors en Partners | ZVK Onder Den Toren Veulen',
        description:
          'Bekijk de sponsors en partners van ZVK Onder Den Toren Veulen zoals Nijs Chris, Garage Kar, Hoydonckx en Jump Into Your Party.',
      },
    },
    {
      path: '/spotlight',
      name: 'spotlight',
      component: SpotlightView,
      meta: {
        title: 'MOTM en Spotlight | ZVK Onder Den Toren Veulen',
        description:
          'Bekijk de man of the match en spelers in de spotlight bij ZVK Onder Den Toren Veulen.',
      },
    },
    {
      path: '/uitstapjes',
      name: 'trips',
      component: TripsView,
      meta: {
        title: 'Uitstapjes | ZVK Onder Den Toren Veulen',
        description:
          'Ontdek uitstapjes, sfeerbeelden en momenten naast het veld van ZVK Onder Den Toren Veulen.',
      },
    },
    {
      path: '/uitstapjes/eindhoven',
      name: 'trip-eindhoven',
      component: EindhovenView,
      meta: {
        title: 'Eindhoven Uitstap | ZVK Onder Den Toren Veulen',
        description:
          'Fotos en sfeerbeelden van de uitstap naar Eindhoven van ZVK Onder Den Toren Veulen.',
      },
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
