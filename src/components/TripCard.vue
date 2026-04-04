<template>
  <article class="trip-card">
    <div class="trip-card__image-wrap">
      <img :src="image" :alt="imageAlt" class="trip-card__image" />
    </div>

    <div class="trip-card__body">
      <p class="section-kicker">{{ eyebrow }}</p>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <slot />
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}>();
</script>
