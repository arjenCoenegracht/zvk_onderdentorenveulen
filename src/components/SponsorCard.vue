<template>
  <article
    class="sponsor-card sponsor-card--styled"
    :data-accent="sponsor.accent"
    :data-sponsor="sponsor.name"
  >
    <div v-if="sponsor.image" class="sponsor-card__image-wrap">
      <img
        :src="sponsor.image"
        :alt="`Sponsorbeeld van ${sponsor.name}`"
        :class="imageClasses"
      />
    </div>
    <p class="section-kicker">{{ sponsor.category }}</p>
    <h3>{{ sponsor.name }}</h3>
    <p>{{ sponsor.description }}</p>
    <button
      type="button"
      class="text-link sponsor-card__button"
      @click="$emit('select', sponsor)"
    >
      Meer over deze partner
    </button>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Sponsor } from '@/types';

const props = defineProps<{
  sponsor: Sponsor;
}>();

defineEmits<{
  (event: 'select', sponsor: Sponsor): void;
}>();

const imageClasses = computed(() => [
  'sponsor-card__image',
  'js-lightbox-trigger',
  {
    'sponsor-card__image--pleintje': props.sponsor.name === 'T Pleintje',
    'sponsor-card__image--odt-cafe': props.sponsor.name === 'Onder den Toren',
  },
]);
</script>
