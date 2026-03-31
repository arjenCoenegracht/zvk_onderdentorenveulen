<template>
  <div class="page">
    <section class="inner-hero inner-hero--sponsors">
      <div class="container inner-hero__grid">
        <div>
          <p class="section-kicker">Sponsors</p>
          <h1 class="inner-title">Partners van de club.</h1>
          <p class="inner-copy">
            Zonder deze mensen en zaken is er geen ploegavond, geen uitrusting en geen clubwerking.
          </p>
        </div>

        <aside class="inner-sidebox">
          <p class="section-kicker">Dankzij</p>
          <strong>{{ sponsors.length }} partners</strong>
          <span>mee achter ODT</span>
        </aside>
      </div>
    </section>

    <section class="section-block">
      <div class="container sponsor-grid sponsor-grid--wide">
        <article
          v-for="sponsor in sponsors"
          :key="sponsor.name"
          class="sponsor-card sponsor-card--styled"
          :data-accent="sponsor.accent"
        >
          <div v-if="sponsor.image" class="sponsor-card__image-wrap">
            <img :src="sponsor.image" :alt="`Sponsorbeeld van ${sponsor.name}`" class="sponsor-card__image" />
          </div>
          <p class="section-kicker">{{ sponsor.category }}</p>
          <h3>{{ sponsor.name }}</h3>
          <p>{{ sponsor.description }}</p>
          <a href="#" class="text-link">Meer over deze partner</a>
        </article>
      </div>
    </section>

    <section class="section-block section-block--dark">
      <div class="container">
        <div class="callout callout--tight">
          <h3>De partners hieronder helpen de club mee draaien, op en naast het veld.</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { sponsors } from '@/data/clubData';
</script>
