<template>
  <div class="match-listing">
    <article v-for="match in matches" :key="match.key" class="match-line">
      <span class="match-line__date">{{ match.meta }}</span>
      <span class="match-line__team match-line__team--home match-line__team--primary">
        {{ match.homeTeam }}
      </span>
      <span class="match-line__score">{{ match.score }}</span>
      <span class="match-line__team match-line__team--secondary">
        {{ match.awayTeam }}
      </span>
      <span class="match-line__tag">{{ match.tag }}</span>
    </article>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  matches: Array<{
    key: string;
    meta: string;
    homeTeam: string;
    awayTeam: string;
    score: string;
    tag: string;
  }>;
}>();
</script>
