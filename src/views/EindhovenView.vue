<template>
  <div class="page">
    <section class="inner-hero inner-hero--spotlight">
      <div class="container inner-hero__grid">
        <div>
          <p class="section-kicker">Uitstapjes</p>
          <h1 class="inner-title">Eindhoven away.</h1>
          <p class="inner-copy">
            Niet alleen op het veld maken we herinneringen. Ook naast de matchen horen de
            uitstapjes erbij, en Eindhoven was er eentje voor het boekje.
          </p>
        </div>

        <aside class="inner-sidebox">
          <p class="section-kicker">Bestemming</p>
          <strong>Eindhoven</strong>
          <span>Van ontbijt tot groepsfoto en alles ertussenin.</span>
        </aside>
      </div>
    </section>

    <section class="section-block section-block--dark">
      <div class="container">
        <div class="trip-grid">
          <article v-for="tripPhoto in eindhovenPhotos" :key="tripPhoto.title" class="trip-card">
            <div class="trip-card__image-wrap">
              <img :src="tripPhoto.image" :alt="tripPhoto.alt" class="trip-card__image" />
            </div>

            <div class="trip-card__body">
              <p class="section-kicker">Eindhoven</p>
              <h3>{{ tripPhoto.title }}</h3>
              <p>{{ tripPhoto.description }}</p>
            </div>
          </article>
        </div>

        <div class="callout trip-summary">
          <h3>Zo'n dag waar de foto's nog eens extra bewijzen dat ODT meer is dan alleen voetbal.</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import eindhovenBreakfastImage from '@/assets/trips/eindhoven/Eindhoven_eten_stefan.jpg';
import eindhovenGroupImage from '@/assets/trips/eindhoven/Eindhoven_foto_groep.jpg';
import eindhovenMilanRobbeArjenImage from '@/assets/trips/eindhoven/Eindhoven_foto_Milan_Robbe_Arjen.jpg';
import eindhovenPedroImage from '@/assets/trips/eindhoven/Eindhoven_foto_pedro.jpg';
import eindhovenStefanGroupImage from '@/assets/trips/eindhoven/Eindhoven_foto_stefan_groep.jpg';
import eindhovenTowerImage from '@/assets/trips/eindhoven/Eindhoven_foto_toren.jpg';

const eindhovenPhotos = [
  {
    title: 'Stevige start',
    image: eindhovenBreakfastImage,
    alt: 'Stefan aan het ontbijt in Eindhoven',
    description:
      'De dag begon zoals het hoort: met een stevig ontbijt, voorzien door Onder Den Toren Veulen. Eerst goed eten, dan pas zien wat Eindhoven voor ons in petto heeft.',
  },
  {
    title: 'Nog eentje met Stefan',
    image: eindhovenStefanGroupImage,
    alt: 'Laatste groepsfoto met Stefan voor vertrek naar Eindhoven',
    description:
      'De laatste groepsfoto met Stefan, vlak voor we vertrokken naar Eindhoven. Zo\'n moment waarop iedereen er nog fris bijloopt en de goesting al van de gezichten spat.',
  },
  {
    title: 'Pedro in beeld',
    image: eindhovenPedroImage,
    alt: 'Pedro tijdens de uitstap naar Eindhoven',
    description:
      'Pedro mocht uiteraard niet ontbreken in het album. Altijd goed voor sfeer, een straffe blik in de camera en waarschijnlijk ook een opmerking die we niet gaan herhalen.',
  },
  {
    title: 'Volle bak samen',
    image: eindhovenGroupImage,
    alt: 'Groepsfoto van ODT in Eindhoven',
    description:
      'Een groepsfoto zoals we ze graag hebben: iedereen samen, goeie sfeer en dat typische ODT-gevoel dat zelfs op verplaatsing gewoon mee op de bus zit.',
  },
  {
    title: 'Mannen onder elkaar',
    image: eindhovenMilanRobbeArjenImage,
    alt: 'Milan, Robbe en Arjen in Eindhoven',
    description:
      'Ook de trio-foto mocht erbij. Milan, Robbe en Arjen tonen hier perfect hoe een uitstap eruitziet wanneer voetbal, vriendschap en een beetje ambiance samenkomen.',
  },
  {
    title: 'Eindhoven by night',
    image: eindhovenTowerImage,
    alt: 'Sfeerbeeld van Eindhoven tijdens de uitstap',
    description:
      'En natuurlijk ook nog een sfeerbeeld van de stad zelf. Eindhoven leverde niet alleen herinneringen op, maar ook een decor dat helemaal paste bij een topuitstap met de ploeg.',
  },
];
</script>
