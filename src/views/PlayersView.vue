<template>
  <div class="page">
    <section class="inner-hero inner-hero--players">
      <div class="container inner-hero__grid">
        <div>
          <p class="section-kicker">De mannen</p>
          <h1 class="inner-title">Onze kern.</h1>
          <p class="inner-copy">
            Wie er bijloopt in rood en zwart, met de cijfers van dit seizoen erbij.
          </p>
        </div>

        <aside class="inner-sidebox">
          <p class="section-kicker">Kern</p>
          <strong>{{ squadPlayers.length }} spelers</strong>
          <span>Van keeper tot pivot</span>
        </aside>
      </div>
    </section>

    <section class="section-block section-block--dark">
      <div class="container">
        <div class="players-grid">
          <article v-for="player in squadPlayers" :key="player.name" class="squad-card squad-card--styled">
            <div class="player-photo-wrap">
              <img
                v-if="player.image"
                :src="player.image"
                :alt="`Spelerfoto van ${player.name}`"
                class="player-photo"
              />
              <div v-else class="player-photo player-photo--placeholder" aria-hidden="true">
                <div class="player-photo__silhouette"></div>
                <span class="player-photo__number">{{ player.number }}</span>
              </div>
            </div>

            <div class="squad-card__top">
              <div class="shirt-number">{{ player.number }}</div>
              <div>
                <h3>{{ player.name }}</h3>
                <p class="player-role">{{ player.position }}</p>
              </div>
            </div>

            <div class="stats-mini-grid" v-if="player.customStats?.length">
              <div v-for="stat in player.customStats" :key="stat.label" class="mini-stat">
                <span>{{ stat.label }}</span>
                <strong>{{ stat.value }}</strong>
              </div>
            </div>

            <div v-else class="stats-mini-grid">
              <div class="mini-stat">
                <span>Matchen</span>
                <strong>{{ player.matches }}</strong>
              </div>
              <div class="mini-stat">
                <span>Goals</span>
                <strong>{{ player.goals }}</strong>
              </div>
              <div class="mini-stat">
                <span>Assists</span>
                <strong>{{ player.assists }}</strong>
              </div>
              <div class="mini-stat">
                <span>MOTM</span>
                <strong>{{ player.playerOfTheMatch }}</strong>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { squadPlayers } from '@/data/clubData';
</script>
