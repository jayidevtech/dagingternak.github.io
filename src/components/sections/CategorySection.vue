<script setup>
import SectionContainer from '../base/SectionContainer.vue'
import SectionHeading from '../base/SectionHeading.vue'
import { productCategories } from '../../data/products'
</script>

<template>
  <SectionContainer>
    <section id="produk" class="py-12">
      <SectionHeading
        label="Kategori Produk"
        title="Pilihan Daging Sesuai Kebutuhan"
        description="Produk unggulan kami siap kirim harian untuk kebutuhan rumah tangga, UMKM, dan acara besar."
      />
      <div class="grid gap-5 md:grid-cols-3">
        <article v-for="item in productCategories" :key="item.id" class="card-panel overflow-hidden p-5">
          <div class="mb-4 overflow-hidden rounded-2xl border border-brand-100/80 dark:border-brand-900/70">
            <img
              :src="item.image"
              :alt="`Foto ${item.name}`"
              loading="lazy"
              decoding="async"
              class="h-40 w-full object-cover"
            />
          </div>
          <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-100">{{ item.name }}</h3>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">{{ item.description }}</p>
          <p class="mt-4 text-sm font-semibold text-brand-700">{{ item.priceRange }}</p>
        </article>
      </div>
    </section>
  </SectionContainer>
</template>
