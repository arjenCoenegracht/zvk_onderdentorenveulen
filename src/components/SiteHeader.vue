<template>
  <header class="site-nav">
    <div class="site-nav__inner">
      <RouterLink to="/" class="nav-logo">
        <img :src="logoImage" alt="Logo ZVK Onder Den Toren Veulen" class="nav-logo__image" />
        <span class="nav-logo__text">
          <span>ZVK</span>
          <strong>ODT</strong>
        </span>
      </RouterLink>

      <button
        type="button"
        class="nav-toggle"
        :aria-expanded="isMobileMenuOpen"
        aria-controls="site-nav-links"
        aria-label="Open navigatiemenu"
        @click="$emit('toggle-menu')"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav id="site-nav-links" class="nav-links" :class="{ 'nav-links--open': isMobileMenuOpen }">
        <RouterLink v-for="item in navigationItems" :key="item.to" :to="item.to">
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import logoImage from '@/assets/branding/ODT_LOGO.svg';
import { navigationItems } from '@/data/navigation';

defineProps<{
  isMobileMenuOpen: boolean;
}>();

defineEmits<{
  (event: 'toggle-menu'): void;
}>();
</script>
