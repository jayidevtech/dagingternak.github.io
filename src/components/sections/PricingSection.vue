<script setup>
import SectionContainer from '../base/SectionContainer.vue'
import SectionHeading from '../base/SectionHeading.vue'
import { productPriceEstimates } from '../../data/products'
</script>

<template>
  <SectionContainer>
    <section id="harga" class="py-12">
      <SectionHeading
        label="Harga Publik"
        title="Estimasi Harga Hari Ini"
        description="Harga dapat berubah mengikuti pasar. Konfirmasi final saat order."
      />
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="item in productPriceEstimates" :key="item.name" class="card-panel p-5">
          <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">{{ item.name }}</h3>
          <p class="mt-3 text-2xl font-semibold text-brand-700">{{ item.price }}</p>
        </article>
      </div>
    </section>
  </SectionContainer>
</template>
