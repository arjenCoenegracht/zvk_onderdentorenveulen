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

    <main class="site-main" @click="handleMainImageClick">
      <RouterView />
    </main>

    <div
      v-if="lightboxImage"
      class="modal-backdrop modal-backdrop--image"
      role="dialog"
      aria-modal="true"
      :aria-label="lightboxImage.alt || 'Vergrote afbeelding'"
      @click.self="closeLightbox"
    >
      <article class="modal-card modal-card--image">
        <div class="modal-card__header">
          <div>
            <p class="section-kicker">Foto</p>
            <h2>Vergrote afbeelding</h2>
          </div>

          <button type="button" class="modal-close" @click="closeLightbox">
            Sluiten
          </button>
        </div>

        <div class="modal-card__content modal-card__content--image">
          <div class="modal-card__image-wrap modal-card__image-wrap--lightbox">
            <img
              :src="lightboxImage.src"
              :alt="lightboxImage.alt"
              class="modal-card__image modal-card__image--lightbox"
            />
          </div>
        </div>
      </article>
    </div>

    <footer class="site-footer">
      <div class="site-footer__inner">
        <div class="site-footer__brand">
          <strong>ZVK Onder Den Toren Veulen</strong>
          <span>Heers, Belgie</span>
        </div>

        <nav class="site-footer__links" aria-label="Footer navigatie">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/competitie">Wedstrijden</RouterLink>
          <RouterLink to="/spelers">Spelers</RouterLink>
          <RouterLink to="/sponsors">Sponsors</RouterLink>
          <RouterLink to="/spotlight">MOTM</RouterLink>
          <RouterLink to="/uitstapjes">Uitstapjes</RouterLink>
        </nav>

        <p class="site-footer__copy">&copy; 2026 ZVK ODT</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { RouterLink, RouterView } from 'vue-router';
import logoImage from '@/assets/branding/ODT_LOGO.svg';

const route = useRoute();
const isMobileMenuOpen = ref(false);
const lightboxImage = ref<{ src: string; alt: string } | null>(null);

watch(
  () => route.fullPath,
  () => {
    isMobileMenuOpen.value = false;
    lightboxImage.value = null;
  },
);

watch(lightboxImage, (value) => {
  document.body.classList.toggle('has-modal-open', Boolean(value));
  document.body.classList.toggle('has-image-lightbox', Boolean(value));
});

const closeLightbox = () => {
  lightboxImage.value = null;
};

const handleMainImageClick = (event: MouseEvent) => {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  const image = target.closest('img.js-lightbox-trigger');

  if (!(image instanceof HTMLImageElement)) {
    return;
  }

  if (image.closest('.nav-logo, .modal-close')) {
    return;
  }

  lightboxImage.value = {
    src: image.currentSrc || image.src,
    alt: image.alt || 'Vergrote afbeelding',
  };
};

watch(
  () => lightboxImage.value,
  (value) => {
    if (!value) {
      return;
    }

    isMobileMenuOpen.value = false;
  },
);

onBeforeUnmount(() => {
  document.body.classList.remove('has-modal-open');
  document.body.classList.remove('has-image-lightbox');
});
</script>
