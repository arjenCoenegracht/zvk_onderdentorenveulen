<template>
  <section :class="['inner-hero', variantClass]">
    <div class="container inner-hero__grid">
      <div>
        <p class="section-kicker">{{ eyebrow }}</p>
        <h1 class="inner-title">{{ title }}</h1>
        <p class="inner-copy">{{ description }}</p>
        <slot name="content" />
      </div>

      <aside class="inner-sidebox">
        <p class="section-kicker">{{ sideEyebrow }}</p>
        <strong>{{ sideTitle }}</strong>
        <span>{{ sideDescription }}</span>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  eyebrow: string;
  title: string;
  description: string;
  sideEyebrow: string;
  sideTitle: string;
  sideDescription: string;
  variant?: string;
}>();

const variantClass = computed(() => (props.variant ? `inner-hero--${props.variant}` : ''));
</script>
