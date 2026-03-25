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
        title="Pilih Produk Sesuai Kebutuhan"
        description="Produk unggulan kami siap kirim setiap hari untuk kebutuhan rumah tangga, UMKM, dan acara besar."
      />
      <div class="flex flex-col gap-5 md:flex-row md:flex-wrap md:justify-center">
        <article
          v-for="item in productCategories"
          :key="item.id"
          class="card-panel overflow-hidden p-5 md:w-[calc((100%-2.5rem)/3)]"
        >
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
          <p class="mt-4 text-sm font-semibold text-brand-700" v-if="!item.comingSoon">Cek estimasi harga di bawah</p>
          <p class="mt-4 text-sm font-semibold text-brand-700" v-else>Segera hadir!</p>
        </article>
      </div>
    </section>
  </SectionContainer>
</template>
