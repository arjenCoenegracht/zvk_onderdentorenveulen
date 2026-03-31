<template>
  <div class="page">
    <section class="inner-hero inner-hero--spotlight">
      <div class="container inner-hero__grid">
        <div>
          <p class="section-kicker">Uitstapjes</p>
          <h1 class="inner-title">Momenten naast het veld.</h1>
          <p class="inner-copy">
            Hier verzamelen we de uitstapjes van ODT. Elke trip krijgt z'n eigen plekje,
            zodat we later makkelijk kunnen uitbreiden met onder meer de kerstmarkt.
          </p>
        </div>

        <aside class="inner-sidebox">
          <p class="section-kicker">Albums</p>
          <strong>1 uitstap live</strong>
          <span>Eindhoven staat klaar, kerstmarkt volgt binnenkort.</span>
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

        <article class="trip-card trip-card--placeholder">
          <div class="trip-card__image-wrap trip-card__image-wrap--placeholder">
            <div class="trip-placeholder">Kerstmarkt</div>
          </div>

          <div class="trip-card__body">
            <p class="section-kicker">Binnenkort</p>
            <h3>Kerstmarkt</h3>
            <p>
              Hier komt straks het volgende mapje bij. Zodra de foto's klaarstaan, kunnen we
              deze uitstap meteen op dezelfde manier toevoegen.
            </p>
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
