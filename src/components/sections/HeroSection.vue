<script setup>
import BaseButton from '../base/BaseButton.vue'
import SectionContainer from '../base/SectionContainer.vue'
import { siteProfile } from '../../data/site'
import { buildWhatsAppLink } from '../../utils/whatsapp'

import waIcon from "../../assets/wa.svg"

const heroMessage = `Halo ${siteProfile.brandName}, saya ingin tanya stok dan harga daging hari ini.`
const waLink = buildWhatsAppLink(siteProfile.whatsappNumber, heroMessage)

const trustBadges = [
  { icon: '🔪', label: 'Potong Fresh Setiap Hari', desc: 'Daging dipotong pagi hari, dikirim dalam kondisi segar.' },
  { icon: '💰', label: 'Harga Transparan', desc: 'Estimasi harga tercantum, tidak ada biaya tersembunyi.' },
  { icon: '✂️', label: 'Bisa Custom Potongan', desc: 'Potongan sesuai permintaan untuk masak atau usaha.' },
  { icon: '⚡', label: 'Respons WA Cepat', desc: 'Order & tanya stok langsung dibalas via WhatsApp.' },
]
</script>

<template>
  <SectionContainer>
    <section class="grid gap-8 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:min-h-screen">
      <div>
        <span class="chip">Reseller Daging Segar</span>
        <h1 class="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
          Butuh Daging Segar untuk Kebutuhan Rumah, Usaha atau Acara? Stok Kami Siap Dikirim Setiap Hari!
        </h1>
        <p class="mt-4 max-w-xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
          {{ siteProfile.tagline }} Harga transparan, bisa custom potongan, dan respons order cepat via WhatsApp.
        </p>
        <div class="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <BaseButton :href="waLink" class="w-full sm:w-auto">
            <img :src="waIcon" alt="WhatsApp" class="inline-block h-5 w-5 mr-2" />
            Pesan via WhatsApp
          </BaseButton>
          <BaseButton href="#harga" variant="secondary" class="w-full sm:w-auto">Lihat Harga Produk</BaseButton>
        </div>
      </div>
      <div class="card-panel rounded-[2rem] border-brand-200 bg-gradient-to-br from-brand-50 to-rose-100 p-6 dark:border-brand-900 dark:from-brand-900/40 dark:to-rose-950/20">
        <!-- Stats row -->
        <div class="grid grid-cols-3 divide-x divide-brand-200 dark:divide-brand-800 mb-5">
          <div class="pr-4 text-center">
            <p class="text-2xl font-bold text-brand-700 dark:text-brand-400">50+</p>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-tight mt-0.5">Pelanggan aktif</p>
          </div>
          <div class="px-4 text-center">
            <p class="text-2xl font-bold text-brand-700 dark:text-brand-400">🛵</p>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-tight mt-0.5">Delivery ke rumah</p>
          </div>
          <div class="pl-4 text-center">
            <p class="text-2xl font-bold text-brand-700 dark:text-brand-400">🕓</p>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-tight mt-0.5">Buka setiap hari</p>
          </div>
        </div>
        <!-- Trust badges -->
        <ul class="space-y-2.5">
          <li v-for="badge in trustBadges" :key="badge.label" class="flex items-start gap-3">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/60 text-brand-700 dark:text-brand-300 text-base">
              {{ badge.icon }}
            </span>
            <div>
              <p class="text-sm font-semibold text-slate-800 dark:text-slate-100 leading-tight">{{ badge.label }}</p>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-snug">{{ badge.desc }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </SectionContainer>
</template>
