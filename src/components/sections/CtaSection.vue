<script setup>
import SectionContainer from '../base/SectionContainer.vue'
import BaseButton from '../base/BaseButton.vue'
import { siteProfile } from '../../data/site'
import { buildWhatsAppLink } from '../../utils/whatsapp'

const ctaLink = buildWhatsAppLink(
  siteProfile.whatsappNumber,
  `Halo ${siteProfile.brandName}, saya siap order. Mohon info stok, harga terbaru, dan estimasi kirim.`
)
</script>

<template>
  <SectionContainer>
    <section class="py-14">
      <div class="card-panel rounded-[2rem] border-brand-700 bg-gradient-to-r from-brand-800 to-brand-700 p-8 text-white dark:border-brand-900">
        <p class="text-sm uppercase tracking-wide text-brand-100">Siap Kirim Hari Ini</p>
        <h2 class="mt-3 text-3xl font-semibold text-white">Kunci Stok dan Harga Hari Ini Sebelum Habis</h2>
        <p class="mt-3 max-w-2xl text-red-100">Kirim kebutuhan Anda sekarang, tim kami akan bantu rekomendasi produk dan estimasi kirim paling cepat.</p>
        <div class="mt-6">
          <BaseButton :href="ctaLink" variant="secondary">Chat WhatsApp Sekarang</BaseButton>
        </div>
      </div>
    </section>
  </SectionContainer>
</template>
