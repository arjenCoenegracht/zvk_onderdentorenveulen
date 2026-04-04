<template>
  <article class="squad-card squad-card--styled">
    <div class="player-photo-wrap">
      <img
        v-if="player.image"
        :src="player.image"
        :alt="`Spelerfoto van ${player.name}`"
        :class="[
          'player-photo',
          {
            'player-photo--bipin': player.name === 'Bipin Naeten',
          },
        ]"
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

    <div class="stats-mini-grid">
      <div v-for="stat in playerStats" :key="stat.label" class="mini-stat">
        <span>{{ stat.label }}</span>
        <strong>{{ stat.value }}</strong>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { SquadPlayer } from '@/types';

const props = defineProps<{
  player: SquadPlayer;
}>();

const playerStats = computed(() =>
  props.player.customStats?.length
    ? props.player.customStats
    : [
        { label: 'Matchen', value: props.player.matches },
        { label: 'Goals', value: props.player.goals },
        { label: 'Assists', value: props.player.assists },
        { label: 'MOTM', value: props.player.playerOfTheMatch },
      ],
);
</script>
