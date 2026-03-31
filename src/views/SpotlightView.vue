<template>
  <div class="page">
    <section class="inner-hero inner-hero--spotlight">
      <div class="container inner-hero__grid">
        <div>
          <p class="section-kicker">Man van de match</p>
          <h1 class="inner-title">Spelers van de week.</h1>
          <p class="inner-copy">
            De mannen die doorheen het seizoen de match echt naar zich toe trokken.
          </p>
        </div>

        <aside class="inner-sidebox">
          <p class="section-kicker">MOTM</p>
          <strong>Spelers van de week</strong>
          <span>De mannen die zich dit seizoen echt hebben laten zien.</span>
        </aside>
      </div>
    </section>

    <section class="section-block section-block--dark">
      <div class="container spotlight-grid">
        <article v-for="player in spotlightPlayers" :key="player.name" class="player-card player-card--styled spotlight-card">
          <div class="spotlight-card__image-wrap">
            <img
              v-if="player.image"
              :src="player.image"
              :alt="`MOTM-foto van ${player.name}`"
              class="spotlight-card__image"
            />
            <div v-else class="spotlight-card__fallback">{{ initials(player.name) }}</div>
          </div>

          <div class="spotlight-card__body">
            <div>
              <h3>{{ player.name }}</h3>
              <p class="player-role">{{ player.role }}</p>
            </div>

            <p class="player-highlight">{{ player.highlight }}</p>

            <div class="player-stat">
              <span>{{ player.statLabel }}</span>
              <strong>{{ player.statValue }}</strong>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { spotlightPlayers } from '@/data/clubData';

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
</script>
