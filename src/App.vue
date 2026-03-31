<template>
  <div class="site-frame">
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
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav id="site-nav-links" class="nav-links" :class="{ 'nav-links--open': isMobileMenuOpen }">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/competitie">Wedstrijden</RouterLink>
          <RouterLink to="/spelers">Spelers</RouterLink>
          <RouterLink to="/sponsors">Sponsors</RouterLink>
          <RouterLink to="/spotlight">MOTM</RouterLink>
          <RouterLink to="/uitstapjes">Uitstapjes</RouterLink>
        </nav>
      </div>
    </header>

    <main class="site-main">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { RouterLink, RouterView } from 'vue-router';
import logoImage from '@/assets/branding/ODT_LOGO.svg';

const route = useRoute();
const isMobileMenuOpen = ref(false);

watch(
  () => route.fullPath,
  () => {
    isMobileMenuOpen.value = false;
  },
);
</script>
