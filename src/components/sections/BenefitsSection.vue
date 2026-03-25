<script setup>
import SectionContainer from '../base/SectionContainer.vue'
import SectionHeading from '../base/SectionHeading.vue'

const benefits = [
  {
    title: 'Sumber daging segar dari mitra terpercaya',
    desc: 'Kami bekerjasama langsung dengan peternak dan jagal lokal, sehingga kualitas dan kesegaran daging terjamin setiap harinya.',
  },
  {
    title: 'Bisa custom potongan sesuai menu',
    desc: 'Daging bisa dipotong sesuai kebutuhan masak Anda — potongan rendang, sate, semur, opor, atau sesuai resep usaha Anda.',
  },
  {
    title: 'Harga transparan untuk eceran dan partai',
    desc: 'Tidak ada harga tersembunyi. Estimasi harga tertera dan cocok untuk pembelian harian rumah tangga maupun partai besar.',
  },
  {
    title: 'Respon admin cepat via WhatsApp',
    desc: 'Tanya stok, konfirmasi order, atau minta quotation — admin kami siap merespons cepat via WhatsApp setiap hari.',
  },
]
</script>

<template>
  <SectionContainer>
    <section class="py-12">
      <SectionHeading label="Keunggulan" title="Kenapa Pelanggan Pilih Kami" />
      <div class="grid gap-4 md:grid-cols-2">
        <div v-for="item in benefits" :key="item.title" class="card-panel flex items-start gap-4 p-5">
          <span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/40">
            <svg class="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <div>
            <p class="font-semibold text-slate-800 dark:text-slate-100">{{ item.title }}</p>
            <p class="mt-1 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </SectionContainer>
</template>
