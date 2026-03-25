<script setup>
import BaseButton from '../base/BaseButton.vue'
import SectionContainer from '../base/SectionContainer.vue'
import { siteProfile } from '../../data/site'
import { buildWhatsAppLink } from '../../utils/whatsapp'

const heroMessage = `Halo ${siteProfile.brandName}, saya ingin tanya stok dan harga daging hari ini.`
const waLink = buildWhatsAppLink(siteProfile.whatsappNumber, heroMessage)
</script>

<template>
  <SectionContainer>
    <section class="grid gap-8 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
      <div>
        <span class="chip">Reseller Daging Segar</span>
        <h1 class="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          Butuh Daging Segar untuk Rumah, Usaha, atau Acara? Stok Siap Kirim Setiap Hari
        </h1>
        <p class="mt-4 max-w-xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
          {{ siteProfile.tagline }} Harga transparan, bisa custom potongan, dan respons order cepat via WhatsApp.
        </p>
        <div class="mt-8 flex flex-wrap items-center gap-3">
          <BaseButton :href="waLink">Pesan via WhatsApp</BaseButton>
          <BaseButton href="#produk" variant="secondary">Lihat Produk</BaseButton>
        </div>
      </div>
      <div class="card-panel h-72 rounded-[2rem] border-brand-200 bg-gradient-to-br from-brand-50 to-rose-100 p-6 dark:border-brand-900 dark:from-brand-900/40 dark:to-rose-950/20">
        <p class="text-sm font-semibold uppercase tracking-wide text-brand-700">Area {{ siteProfile.city }}</p>
        <p class="mt-3 text-2xl font-semibold text-slate-900 dark:text-slate-100">Fresh cut setiap hari</p>
        <p class="mt-3 text-slate-600 dark:text-slate-300">Placeholder visual hero untuk fase awal. Akan diganti foto produk utama di fase berikutnya.</p>
      </div>
    </section>
  </SectionContainer>
</template>
