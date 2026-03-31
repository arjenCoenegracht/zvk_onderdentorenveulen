<template>
  <div class="home-page">
    <section class="hero-home">
      <div class="hero-home__bg"></div>
      <div class="hero-home__ball"></div>

      <div class="hero-home__inner">
        <div class="crest-block">
          <img
            :src="logoImage"
            alt="Logo ZVK Onder Den Toren Veulen"
            class="crest-logo"
          />
        </div>

        <p class="hero-tag">Zaalvoetbalclub</p>
        <h1 class="hero-title">
          Onder Den
          <span>Toren</span>
          Veulen
        </h1>
        <p class="hero-subtitle">Kleine goals, grote dorst.</p>

        <div class="hero-buttons">
          <RouterLink class="hero-button hero-button--solid" to="/competitie">
            Wedstrijden
          </RouterLink>
          <RouterLink class="hero-button hero-button--ghost" to="/spelers">
            Onze kern
          </RouterLink>
        </div>
      </div>

      <div class="scroll-mark">
        <span>Scroll</span>
        <div></div>
      </div>
    </section>

    <section class="stats-strip">
      <article v-for="stat in heroStats" :key="stat.label" class="stats-strip__item">
        <strong>{{ stat.value }}</strong>
        <span>{{ stat.label }}</span>
      </article>
      <article class="stats-strip__item">
        <strong>1</strong>
        <span>Ploeg</span>
      </article>
    </section>

    <section class="section-block section-block--dark">
      <div class="container">
        <div class="section-heading">
          <p class="section-kicker">Club</p>
          <h2>Meer dan gewoon een ploeg.</h2>
        </div>

        <div class="club-grid">
          <div class="club-text">
            <p>
              Wij zijn een hechte vriendengroep uit de regio Heers, verbonden door onze passie voor voetbal, teamspirit en plezier. Op het veld geven we alles, en ook naast het veld staat gezelligheid centraal.

Bij ons draait het om vriendschap, sfeer en samen mooie momenten beleven — van een stevige match tot een sterke derde helft.
              
            </p>
            <p>
              Op deze site vind je gewoon wat je nodig hebt: uitslagen, stand, spelers,
              sponsors en wie de voorbije weken het verschil maakte.
            </p>
          </div>

          <aside class="notice-panel focus-panel">
            <p class="section-kicker">Waar ODT voor staat</p>
            <div class="focus-stack">
              <article v-for="item in clubValues" :key="item" class="focus-item">
                <span></span>
                <p>{{ item }}</p>
              </article>
            </div>
          </aside>
        </div>

        <div class="team-gallery">
          <article class="team-gallery__item team-gallery__item--large">
            <img :src="teamPhotoOne" alt="Teamfoto van ZVK Onder Den Toren Veulen" />
          </article>
          <article class="team-gallery__item">
            <img :src="teamPhotoTwo" alt="Tweede teamfoto van ZVK Onder Den Toren Veulen" />
          </article>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="container home-grid-two">
        <div class="panel panel--soft">
          <SectionTitle
            eyebrow="Komt eraan"
            title="Agenda"
            description="De komende momenten op en rond de club."
          />

          <div class="agenda-list">
            <article v-for="item in agenda" :key="item.title" class="agenda-item">
              <span>{{ formatDate(item.date) }}</span>
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </article>
          </div>
        </div>

        <div class="panel panel--red">
          <SectionTitle
            eyebrow="Kort gezegd"
            title="Wat je hier meteen vindt"
            description="Geen overbodige ballast. Gewoon snel de juiste info."
          />

          <ul class="feature-list">
            <li>Resultaten en stand van de ploeg</li>
            <li>Volledige spelerskern met statistieken</li>
            <li>Sponsors en partners van de club</li>
            <li>Spelers die in de kijker staan</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section-block section-block--dark">
      <div class="container">
        <SectionTitle
          eyebrow="Transfers"
          title="Nieuwe versterking"
          description="De nieuwste transfer richting Onder Den Toren Veulen."
        />

        <div class="transfer-grid">
          <article v-for="item in transfers" :key="item.name" class="transfer-card">
            <div class="transfer-card__image-wrap">
              <img :src="item.image" :alt="`Transferfoto van ${item.name}`" class="transfer-card__image" />
            </div>

            <div class="transfer-card__body">
              <p class="section-kicker">{{ item.direction }}</p>
              <h3>{{ item.name }}</h3>
              <p>{{ item.note }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import SectionTitle from '@/components/SectionTitle.vue';
import { agenda, clubValues, heroStats, transfers } from '@/data/clubData';
import logoImage from '@/assets/branding/ODT_LOGO.svg';
import teamPhotoOne from '@/assets/teamfotos/Teamfoto.jpg';
import teamPhotoTwo from '@/assets/teamfotos/Teamfoto2.jpg';

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('nl-BE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
</script>
