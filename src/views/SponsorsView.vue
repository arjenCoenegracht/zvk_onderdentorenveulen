<template>
  <div class="page">
    <section class="inner-hero inner-hero--sponsors">
      <div class="container inner-hero__grid">
        <div>
          <p class="section-kicker">Sponsors</p>
          <h1 class="inner-title">Partners van de club.</h1>
          <p class="inner-copy">
            Zonder deze mensen en zaken is er geen ploegavond, geen uitrusting en geen clubwerking.
          </p>
        </div>

        <aside class="inner-sidebox">
          <p class="section-kicker">Dankzij</p>
          <strong>{{ sponsors.length }} partners</strong>
          <span>mee achter ODT</span>
        </aside>
      </div>
    </section>

    <section class="section-block">
      <div class="container">
        <section
          v-for="group in sponsorGroups"
          :key="group.category"
          class="sponsor-section"
        >
          <div class="section-heading sponsor-section__heading">
            <div>
              <p class="section-kicker">{{ group.category }}</p>
              <h2>{{ group.title }}</h2>
            </div>
            <p>{{ group.description }}</p>
          </div>

          <div class="sponsor-grid sponsor-grid--wide">
            <article
              v-for="sponsor in sponsorsByCategory[group.category]"
              :key="sponsor.name"
              class="sponsor-card sponsor-card--styled"
              :data-accent="sponsor.accent"
              :data-sponsor="sponsor.name"
            >
              <div v-if="sponsor.image" class="sponsor-card__image-wrap">
                <img
                  :src="sponsor.image"
                  :alt="`Sponsorbeeld van ${sponsor.name}`"
                  :class="getSponsorImageClasses(sponsor.name)"
                />
              </div>
              <p class="section-kicker">{{ sponsor.category }}</p>
              <h3>{{ sponsor.name }}</h3>
              <p>{{ sponsor.description }}</p>
              <button
                type="button"
                class="text-link sponsor-card__button"
                @click="selectedSponsor = sponsor"
              >
                Meer over deze partner
              </button>
            </article>
          </div>
        </section>

        <section id="sponsor-form" class="sponsor-cta panel panel--red">
          <div class="sponsor-cta__intro">
            <p class="section-kicker">Samenwerken</p>
            <h2>Word sponsor van ODT</h2>
            <p>
              Vul hieronder kort je gegevens in en klik erna op open mail. Je kan ook het e-mail adres kopieren en zelf een mail uitschrijven.
            </p>
          </div>

          <form ref="sponsorFormElement" class="sponsor-cta__form" @submit.prevent="openSponsorMail">
            <label class="sponsor-cta__field">
              <span>Bedrijf of naam</span>
              <input v-model.trim="sponsorForm.name" type="text" name="name" required />
            </label>

            <label class="sponsor-cta__field">
              <span>E-mailadres</span>
              <input v-model.trim="sponsorForm.email" type="email" name="email" required />
            </label>

            <label class="sponsor-cta__field">
              <span>Telefoon</span>
              <input v-model.trim="sponsorForm.phone" type="tel" name="phone" />
            </label>

            <label class="sponsor-cta__field sponsor-cta__field--full">
              <span>Bericht</span>
              <textarea
                v-model.trim="sponsorForm.message"
                name="message"
                rows="5"
                placeholder="Vertel kort hoe je ODT graag wil steunen."
                required
              ></textarea>
            </label>

            <div class="sponsor-cta__actions">
              <button
                type="submit"
                class="button button-primary sponsor-cta__button"
              >
                Open mail
              </button>
              <button
                type="button"
                class="button button-secondary sponsor-cta__secondary"
                @click="copySponsorEmail"
              >
                {{ copyFeedback || 'Kopieer e-mail' }}
              </button>
            </div>
          </form>
        </section>
      </div>
    </section>

    <div
      v-if="selectedSponsor"
      class="modal-backdrop"
      role="dialog"
      aria-modal="true"
      :aria-label="`Meer info over ${selectedSponsor.name}`"
      @click.self="selectedSponsor = null"
    >
      <div class="modal-card">
        <div class="modal-card__header">
          <div>
            <p class="section-kicker">{{ selectedSponsor.category }}</p>
            <h2>{{ selectedSponsor.name }}</h2>
          </div>

          <button
            type="button"
            class="modal-close"
            aria-label="Sluit informatievenster"
            @click="selectedSponsor = null"
          >
            Sluiten
          </button>
        </div>

        <div class="modal-card__content">
          <div
            v-if="selectedSponsor.image"
            class="modal-card__image-wrap"
          >
            <img
              :src="selectedSponsor.image"
              :alt="`Sponsorbeeld van ${selectedSponsor.name}`"
              :class="getModalImageClasses(selectedSponsor.name)"
            />
          </div>

          <div class="modal-card__meta">
            <div class="modal-meta-item">
              <span>Adres</span>
              <strong>{{ selectedSponsor.details?.address ?? 'Nog niet ingevuld' }}</strong>
            </div>
            <div class="modal-meta-item">
              <span>Contact</span>
              <strong>{{ selectedSponsor.details?.contact ?? 'Nog niet ingevuld' }}</strong>
            </div>
            <div v-if="selectedSponsor.details?.website" class="modal-meta-item">
              <span>Website</span>
              <strong>
                <a
                  :href="toWebsiteUrl(selectedSponsor.details.website)"
                  target="_blank"
                  rel="noreferrer"
                  class="modal-meta-link"
                >
                  {{ selectedSponsor.details.website }}
                </a>
              </strong>
            </div>
          </div>

          <div class="panel panel--soft modal-card__panel">
            <h3>Over Deze Partner</h3>
            <p
              v-for="(paragraph, index) in formatSponsorText(selectedSponsor.details?.extraInfo ?? selectedSponsor.description)"
              :key="`${selectedSponsor.name}-${index}`"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, reactive, ref, watch } from 'vue';
import { sponsors } from '@/data/clubData';
import type { Sponsor } from '@/types';

const selectedSponsor = ref<Sponsor | null>(null);
const sponsorFormElement = ref<HTMLFormElement | null>(null);
const copyFeedback = ref('');
const sponsorForm = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
});

watch(selectedSponsor, (value) => {
  document.body.classList.toggle('has-modal-open', Boolean(value));
});

onBeforeUnmount(() => {
  document.body.classList.remove('has-modal-open');
});

const sponsorGroups = [
  {
    title: 'Hoofdsponsors',
    category: 'Hoofdsponsor',
    description: 'Deze partners geven ODT de grootste duw en zijn mee het fundament van de clubwerking.',
  },
  {
    title: 'Co-sponsors',
    category: 'Co-sponsor',
    description: 'Lokale sponsors die mee bouwen aan de sfeer, de omkadering en het dagelijkse leven rond de ploeg.',
  },
  {
    title: 'Tenuesponsors',
    category: 'Tenuesponsor',
    description: 'Deze partners geven ODT extra steun en zichtbaarheid, en horen mee bij de warme lokale omkadering van de club.',
  },
] as const;

const sponsorsByCategory = computed(() =>
  Object.fromEntries(
    sponsorGroups.map((group) => [
      group.category,
      sponsors.filter((sponsor) => sponsor.category === group.category),
    ]),
  ) as Record<string, Sponsor[]>,
);

const getSponsorImageClasses = (name: string) => [
  'sponsor-card__image',
  {
    'sponsor-card__image--pleintje': name === "'t Pleintje",
    'sponsor-card__image--nijs-chris': name === 'Nijs Chris',
    'sponsor-card__image--kim-knaepen': name === 'Kim Knaepen Tegelwerken',
    'sponsor-card__image--odt-cafe': name === 'Onder den Toren Veulen',
  },
];

const getModalImageClasses = (name: string) => [
  'modal-card__image',
  {
    'modal-card__image--pleintje': name === "'t Pleintje",
    'modal-card__image--nijs-chris': name === 'Nijs Chris',
    'modal-card__image--kim-knaepen': name === 'Kim Knaepen Tegelwerken',
    'modal-card__image--odt-cafe': name === 'Onder den Toren Veulen',
  },
];

const formatSponsorText = (text: string) =>
  text
    .split('\n\n')
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

const openSponsorMail = () => {
  if (!sponsorFormElement.value?.reportValidity()) {
    return;
  }

  const formData = new FormData(sponsorFormElement.value);
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  const subject = `Sponsoraanvraag ZVK ODT - ${name || 'website'}`;
  const body = [
    'Hallo ZVK ODT,',
    '',
    'Via de website wil ik graag meer info over sponsoring.',
    '',
    `Bedrijf of naam: ${name || '-'}`,
    `E-mailadres: ${email || '-'}`,
    `Telefoon: ${phone || '-'}`,
    '',
    'Bericht:',
    message || '-',
  ].join('\n');

  window.location.href = `mailto:info@zvk-onderdentorenveulen.be?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const copySponsorEmail = async () => {
  try {
    await navigator.clipboard.writeText('info@zvk-onderdentorenveulen.be');
    copyFeedback.value = 'Gekopieerd';
    window.setTimeout(() => {
      copyFeedback.value = '';
    }, 1800);
  } catch {
    copyFeedback.value = 'Kopieren mislukt';
    window.setTimeout(() => {
      copyFeedback.value = '';
    }, 1800);
  }
};

const toWebsiteUrl = (value: string) =>
  value.startsWith('http://') || value.startsWith('https://') ? value : `https://${value}`;
</script>
