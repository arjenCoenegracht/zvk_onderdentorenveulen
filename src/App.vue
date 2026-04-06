<template>
  <div class="site-frame">
    <SiteHeader
      :is-mobile-menu-open="isMobileMenuOpen"
      @toggle-menu="isMobileMenuOpen = !isMobileMenuOpen"
    />

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

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import SiteFooter from '@/components/SiteFooter.vue';
import SiteHeader from '@/components/SiteHeader.vue';

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
