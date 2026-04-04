<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__brand">
        <strong>ZVK Onder Den Toren Veulen</strong>
        <span>Heers, Belgie</span>
      </div>

      <nav class="site-footer__links" aria-label="Footer navigatie">
        <RouterLink v-for="item in navigationItems" :key="item.to" :to="item.to">
          {{ item.label }}
        </RouterLink>
      </nav>

      <p class="site-footer__copy">&copy; 2026 ZVK ODT</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { navigationItems } from '@/data/navigation';
</script>
