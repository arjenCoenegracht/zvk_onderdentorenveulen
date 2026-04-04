<template>
  <div
    class="modal-backdrop modal-backdrop--image"
    role="dialog"
    aria-modal="true"
    :aria-label="image.alt || 'Vergrote afbeelding'"
    @click.self="$emit('close')"
  >
    <article class="modal-card modal-card--image">
      <div class="modal-card__header">
        <div>
          <p class="section-kicker">Foto</p>
          <h2>Vergrote afbeelding</h2>
        </div>

        <button type="button" class="modal-close" @click="$emit('close')">
          Sluiten
        </button>
      </div>

      <div class="modal-card__content modal-card__content--image">
        <div class="modal-card__image-wrap modal-card__image-wrap--lightbox">
          <img
            :src="image.src"
            :alt="image.alt"
            class="modal-card__image modal-card__image--lightbox"
          />
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: {
    src: string;
    alt: string;
  };
}>();

defineEmits<{
  (event: 'close'): void;
}>();
</script>
