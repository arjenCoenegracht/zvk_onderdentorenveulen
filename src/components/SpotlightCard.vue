<template>
  <article class="player-card player-card--styled spotlight-card">
    <div class="spotlight-card__image-wrap">
      <img
        v-if="player.image"
        :src="player.image"
        :alt="`MOTM-foto van ${player.name}`"
        :class="imageClasses"
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
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { SpotlightPlayer } from '@/types';

const props = defineProps<{
  player: SpotlightPlayer;
}>();

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const imageClasses = computed(() => [
  'spotlight-card__image',
  {
    'spotlight-card__image--robbe': props.player.name === 'Robbe Grosemans',
    'spotlight-card__image--yoran': props.player.name === 'Yoran Knaepen',
  },
]);
</script>
