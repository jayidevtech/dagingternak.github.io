<script setup>
import SectionContainer from '../base/SectionContainer.vue'
import SectionHeading from '../base/SectionHeading.vue'

const benefits = [
  'Sumber daging segar dari mitra terpercaya',
  'Bisa custom potongan sesuai menu',
  'Harga transparan untuk eceran dan partai',
  'Respon admin cepat via WhatsApp',
]
</script>

<template>
  <SectionContainer>
    <section class="py-12">
      <SectionHeading label="Keunggulan" title="Kenapa Pelanggan Pilih Kami" />
      <div class="grid gap-4 md:grid-cols-2">
        <div v-for="item in benefits" :key="item" class="card-panel p-5 text-slate-700 dark:text-slate-200">
          {{ item }}
        </div>
      </div>
    </section>
  </SectionContainer>
</template>
