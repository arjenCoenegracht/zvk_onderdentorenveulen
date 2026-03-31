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

        <nav class="nav-links">
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
import { RouterLink, RouterView } from 'vue-router';
import logoImage from '@/assets/branding/ODT_LOGO.svg';
</script>
