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
            <img
              :src="sponsor.image"
              :alt="`Sponsorbeeld van ${sponsor.name}`"
              :class="[
                'sponsor-card__image',
                {
                  'sponsor-card__image--pleintje': sponsor.name === 'T Pleintje',
                  'sponsor-card__image--odt-cafe': sponsor.name === 'Onder den Toren',
                },
              ]"
            />
          </div>
          <p class="section-kicker">{{ sponsor.category }}</p>
          <h3>{{ sponsor.name }}</h3>
          <p>{{ sponsor.description }}</p>
          <button
            type="button"
            class="text-link sponsor-card__button"
            @click="selectedSponsor = sponsor"
          >
            Meer over deze partner
          </button>
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

    <div
      v-if="selectedSponsor"
      class="modal-backdrop"
      role="dialog"
      aria-modal="true"
      :aria-label="`Meer info over ${selectedSponsor.name}`"
      @click.self="selectedSponsor = null"
    >
      <div class="modal-card">
        <div class="modal-card__header">
          <div>
            <p class="section-kicker">{{ selectedSponsor.category }}</p>
            <h2>{{ selectedSponsor.name }}</h2>
          </div>

          <button
            type="button"
            class="modal-close"
            aria-label="Sluit informatievenster"
            @click="selectedSponsor = null"
          >
            Sluiten
          </button>
        </div>

        <div class="modal-card__content">
          <div
            v-if="selectedSponsor.image"
            class="modal-card__image-wrap"
          >
            <img
              :src="selectedSponsor.image"
              :alt="`Sponsorbeeld van ${selectedSponsor.name}`"
              :class="[
                'modal-card__image',
                {
                  'modal-card__image--pleintje': selectedSponsor.name === 'T Pleintje',
                  'modal-card__image--odt-cafe': selectedSponsor.name === 'Onder den Toren',
                },
              ]"
            />
          </div>

          <div class="modal-card__meta">
            <div class="modal-meta-item">
              <span>Adres</span>
              <strong>{{ selectedSponsor.details?.address ?? 'Nog niet ingevuld' }}</strong>
            </div>
            <div class="modal-meta-item">
              <span>Contact</span>
              <strong>{{ selectedSponsor.details?.contact ?? 'Nog niet ingevuld' }}</strong>
            </div>
            <div class="modal-meta-item">
              <span>Openingsuren</span>
              <strong>{{ selectedSponsor.details?.hours ?? 'Nog niet ingevuld' }}</strong>
            </div>
          </div>

          <div class="panel panel--soft modal-card__panel">
            <h3>Over Deze Partner</h3>
            <p
              v-for="(paragraph, index) in formatSponsorText(selectedSponsor.details?.extraInfo ?? selectedSponsor.description)"
              :key="`${selectedSponsor.name}-${index}`"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { sponsors } from '@/data/clubData';
import type { Sponsor } from '@/types';

const selectedSponsor = ref<Sponsor | null>(null);

const formatSponsorText = (text: string) =>
  text
    .split('\n\n')
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
</script>
