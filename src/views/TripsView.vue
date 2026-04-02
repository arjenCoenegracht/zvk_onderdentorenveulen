<template>
  <div class="page">
    <section class="inner-hero inner-hero--spotlight">
      <div class="container inner-hero__grid">
        <div>
          <p class="section-kicker">Uitstapjes</p>
          <h1 class="inner-title">Momenten naast het veld.</h1>
          <p class="inner-copy">
            Hier verzamelen we de uitstapjes van ODT. Elke trip krijgt z'n eigen plekje,
            zodat alle herinneringen naast het veld mooi samen blijven.
          </p>
        </div>

        <aside class="inner-sidebox">
          <p class="section-kicker">Albums</p>
          <strong>1 uitstap live</strong>
          <span>Eindhoven staat klaar in het eerste album.</span>
        </aside>
      </div>
    </section>

    <section class="section-block section-block--dark">
      <div class="container trip-grid">
        <article class="trip-card">
          <div class="trip-card__image-wrap">
            <img
              :src="eindhovenGroupImage"
              alt="Groepsfoto van ODT tijdens de uitstap naar Eindhoven"
              class="trip-card__image"
            />
          </div>

          <div class="trip-card__body">
            <p class="section-kicker">Uitstap 01</p>
            <h3>Eindhoven</h3>
            <p>
              Van ontbijt tot groepsfoto: deze uitstap kreeg meteen een eigen album. Alles
              netjes samen op één plek, zoals het hoort.
            </p>
            <RouterLink to="/uitstapjes/eindhoven" class="button button-primary">
              Bekijk Eindhoven
            </RouterLink>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import eindhovenGroupImage from '@/assets/trips/eindhoven/Eindhoven_foto_groep.jpg';
</script>
