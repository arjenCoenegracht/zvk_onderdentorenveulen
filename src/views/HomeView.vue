<template>
  <div class="home-page">
    <section class="hero-home">
      <div class="hero-home__bg"></div>
      <div class="hero-home__orbs" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="hero-home__mesh" aria-hidden="true"></div>
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

      </div>

      <a
        v-if="!hasScrolled"
        href="#home-next-section"
        class="scroll-mark scroll-mark--prominent"
        aria-label="Scroll naar beneden"
      >
        <span>Scroll</span>
        <div></div>
      </a>
    </section>

    <section id="home-next-section" class="stats-strip">
      <div class="stats-strip__hero">
        <span>Volgende match</span>
        <strong>{{ nextMatch ? formatMatchTitle(nextMatch.title) : 'Nog niet bekend' }}</strong>
        <small>{{ nextMatch ? `${formatShortDate(nextMatch.date)} - ${nextMatch.time}` : 'Hou de agenda in de gaten' }}</small>
      </div>
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
              Een bende gasten uit de regio Heers die nog altijd dromen van een profcarrière,
              al is de kans groter dat we ooit ontdekt worden aan de toog dan op het veld.
              <br />
              <br />
              In de zaal is het plan simpel: achteraan alles dichtgooien, in balverlies samen
              panikeren en vooraan hopen op een toevalstreffer, een afgeweken bal of een flits
              van klasse die niemand zag aankomen.
            </p>
            <p>
              Techniek zit er soms in, conditie meestal niet. Maar zolang er hard genoeg geroepen
              wordt alsof we weten waar we mee bezig zijn en niet iedereen al na twee minuten
              met de handen op de knieën staat, mogen we eigenlijk niet klagen.
            </p>
          </div>

          <aside class="notice-panel focus-panel">
            <p class="section-kicker">DE ODT-MENTALITEIT</p>
            <div class="focus-stack">
              <article v-for="item in clubValues" :key="item" class="focus-item">
                <span></span>
                <p>{{ item }}</p>
              </article>
            </div>
          </aside>
        </div>

        <div class="team-gallery">
          <div class="team-gallery__cta">
            <RouterLink class="button button-primary" to="/spelers">
              Bekijk de spelerskern
            </RouterLink>
          </div>
          <article class="team-gallery__item team-gallery__item--large">
            <img
              :src="teamPhotoOne"
              alt="Teamfoto van ZVK Onder Den Toren Veulen"
              class="js-lightbox-trigger"
            />
          </article>
          <article class="team-gallery__item">
            <img
              :src="teamPhotoTwo"
              alt="Tweede teamfoto van ZVK Onder Den Toren Veulen"
              class="js-lightbox-trigger"
            />
          </article>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="container home-grid-two">
        <div class="panel panel--soft home-info-panel">
          <SectionTitle
            eyebrow="Komt eraan"
            title="Agenda"
            description="De komende momenten op en rond de club."
          />

          <div class="home-panel-action">
            <RouterLink class="button button-primary" to="/competitie">
              Bekijk alle wedstrijden
            </RouterLink>
          </div>

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

        <div class="panel panel--red home-info-panel">
          <SectionTitle
            eyebrow="Stand"
            title="Klassement"
            description="Een snelle blik op de top van de reeks."
          />

          <div class="home-panel-action home-panel-action--top">
            <RouterLink class="button button-primary" to="/competitie">
              Bekijk volledige klassement
            </RouterLink>
          </div>

          <div class="table-wrap">
            <table class="standings-table">
              <thead>
                <tr>
                  <th class="standings-table__rank">#</th>
                  <th>Ploeg</th>
                  <th>GP</th>
                  <th>Pts</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="row in homeStandings"
                  :key="row.team"
                  :class="{ 'is-team-row': row.team === currentTeamStanding.team }"
                >
                  <td class="standings-table__rank">{{ row.position }}</td>
                  <td>{{ row.team }}</td>
                  <td>{{ row.played }}</td>
                  <td>{{ row.points }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <section class="section-block section-block--dark">
      <div class="container">
        <SectionTitle
          eyebrow="Naast het veld"
          title="Meer dan alleen voetbal"
          description="Ook buiten de lijnen leeft ODT verder, met uitstapjes en partners die de club mee dragen."
        />

        <div class="home-grid-two home-grid-two--showcase">
          <div class="panel panel--soft home-info-panel">
            <SectionTitle
              eyebrow="Laatste uitstap"
              title="Eindhoven"
              description="Van ontbijt tot groepsfoto: Eindhoven was de laatste uitstap van ODT en kreeg meteen een eigen album."
            />

            <div class="home-panel-action home-panel-action--top">
              <RouterLink to="/uitstapjes" class="button button-primary">
                Bekijk alle uitstapjes
              </RouterLink>
            </div>

            <article class="home-showcase-feature">
              <div class="home-showcase-feature__image-wrap">
                <img
                  :src="eindhovenGroupImage"
                  alt="Groepsfoto van ODT tijdens de uitstap naar Eindhoven"
                  class="home-showcase-feature__image js-lightbox-trigger"
                />
              </div>
            </article>
          </div>

          <div class="panel panel--red home-info-panel home-info-panel--sponsors">
            <SectionTitle
              eyebrow="Partners"
              title="Hoofdsponsors"
              description="Dankzij deze partners blijft ODT draaien, op en naast het veld."
            />

            <div class="home-panel-action home-panel-action--top">
              <RouterLink to="/sponsors" class="button button-primary">
                Bekijk alle sponsors
              </RouterLink>
            </div>

            <div class="home-sponsor-highlights">
              <article
                v-for="sponsor in featuredSponsors"
                :key="sponsor.name"
                class="home-sponsor-highlights__item"
                :data-accent="sponsor.accent"
              >
                <div v-if="sponsor.image" class="home-sponsor-highlights__image-wrap">
                  <img
                    :src="sponsor.image"
                    :alt="`Logo van ${sponsor.name}`"
                    :class="[
                      'home-sponsor-highlights__image',
                      'js-lightbox-trigger',
                      {
                        'home-sponsor-highlights__image--garage-kar': sponsor.name === 'Garage Kar',
                        'home-sponsor-highlights__image--nijs-chris': sponsor.name === 'Nijs Chris',
                      },
                    ]"
                  />
                </div>
                <p>{{ sponsor.name }}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="container">
        <SectionTitle
          eyebrow="Transfers"
          title="Nieuwe versterking"
          description="De nieuwste transfer richting Onder Den Toren Veulen."
        />

        <div class="transfer-grid">
          <article v-for="item in transfers" :key="item.name" class="transfer-card">
            <div class="transfer-card__image-wrap">
              <img
                :src="item.image"
                :alt="`Transferfoto van ${item.name}`"
                class="transfer-card__image js-lightbox-trigger"
              />
            </div>

            <div class="transfer-card__body">
              <p class="section-kicker">{{ item.direction }}</p>
              <h3>{{ item.headline }}</h3>
              <p>{{ item.note }}</p>
              <button
                type="button"
                class="button button-primary transfer-card__button"
                @click="selectedTransfer = item"
              >
                Bekijk volledig artikel
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="social-band">
      <div class="container social-band__inner">
        <div class="social-band__copy">
          <p class="section-kicker">Socials</p>
          <h2>Nog wat meer ODT meepikken?</h2>
        </div>

        <div class="social-links" aria-label="Sociale media van ZVK Onder Den Toren Veulen">
          <a
            class="social-links__link"
            href="https://www.facebook.com/p/ZVK-Onder-Den-Toren-Veulen-61581038627597/"
            target="_blank"
            rel="noreferrer"
            aria-label="Bezoek de Facebook-pagina van ZVK Onder Den Toren Veulen"
          >
            <span class="social-links__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path
                  d="M13.5 21v-7h2.4l.4-3h-2.8V9.2c0-.9.2-1.5 1.5-1.5H16V5.1c-.2 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.3V11H8.8v3h2.3v7h2.4Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span>ZVK Onder Den Toren Veulen</span>
          </a>

          <a
            class="social-links__link"
            href="https://www.instagram.com/zvk_onderdentoren_veulen/"
            target="_blank"
            rel="noreferrer"
            aria-label="Bezoek de Instagrampagina van ZVK Onder Den Toren Veulen"
          >
            <span class="social-links__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path
                  d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm9.55 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 1.8A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span>@zvk_onderdentoren_veulen</span>
          </a>
        </div>
      </div>
    </section>

    <div
      v-if="selectedTransfer"
      class="modal-backdrop"
      @click.self="selectedTransfer = null"
    >
      <article class="modal-card">
        <div class="modal-card__header">
          <div>
            <p class="section-kicker">{{ selectedTransfer.direction }}</p>
            <h2>{{ selectedTransfer.headline }}</h2>
          </div>
          <button type="button" class="modal-close" @click="selectedTransfer = null">
            Sluiten
          </button>
        </div>

        <div class="modal-card__content">
          <div class="modal-card__image-wrap">
            <img
              :src="selectedTransfer.image"
              :alt="`Transferfoto van ${selectedTransfer.name}`"
              class="modal-card__image modal-card__image--transfer"
            />
          </div>

          <div class="modal-card__panel">
            <h3>{{ selectedTransfer.name }}</h3>
            <p v-for="paragraph in selectedTransfer.article" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import SectionTitle from '@/components/SectionTitle.vue';
import { agenda, clubValues, sponsors, standings, teamName, transfers } from '@/data/clubData';
import type { TransferUpdate } from '@/types';
import logoImage from '@/assets/branding/ODT_LOGO.svg';
import teamPhotoOne from '@/assets/teamfotos/Teamfoto.jpg';
import teamPhotoTwo from '@/assets/teamfotos/Teamfoto2.jpg';
import eindhovenGroupImage from '@/assets/trips/eindhoven/Eindhoven_foto_groep.jpg';

const normalizeTeamName = (value: string) =>
  value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();

const teamAliases = ['onder de toren veulen', 'zvk odt', teamName];

const currentTeamStanding =
  standings.find((row) =>
    teamAliases.some((alias) => normalizeTeamName(row.team).includes(normalizeTeamName(alias))),
  ) ?? standings[0];

const homeStandings = standings.slice(0, 5);
const featuredSponsors = sponsors.filter((sponsor) => sponsor.category === 'Hoofdsponsor');
const selectedTransfer = ref<TransferUpdate | null>(null);
const hasScrolled = ref(false);

const handleScroll = () => {
  hasScrolled.value = window.scrollY > 24;
};

watch(selectedTransfer, (value) => {
  document.body.classList.toggle('has-modal-open', Boolean(value));
  document.body.classList.toggle('has-transfer-modal', Boolean(value));
});

onBeforeUnmount(() => {
  document.body.classList.remove('has-modal-open');
  document.body.classList.remove('has-transfer-modal');
  window.removeEventListener('scroll', handleScroll);
});

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
});

const toMatchDateTime = (date: string, time: string) => new Date(`${date}T${time}:00`);

const nextMatch =
  [...agenda]
    .sort((a, b) => toMatchDateTime(a.date, a.time).getTime() - toMatchDateTime(b.date, b.time).getTime())
    .find((item) => toMatchDateTime(item.date, item.time).getTime() >= Date.now()) ?? null;

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('nl-BE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

const formatShortDate = (date: string) =>
  new Intl.DateTimeFormat('nl-BE', {
    day: 'numeric',
    month: 'long',
  }).format(new Date(date));

const formatMatchTitle = (title: string) => title.replace(' vs. ', ' - ');
</script>
