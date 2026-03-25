<script setup>
import { siteProfile } from '../../data/site'
import { useTheme } from '../../composables/useTheme'

const navItems = [
  { label: 'Produk', href: '#produk' },
  { label: 'Harga', href: '#harga' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Kontak', href: '#kontak' },
]

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-brand-100/80 bg-white/85 backdrop-blur dark:border-brand-900/70 dark:bg-[#151011]/85">
    <div class="section-shell flex items-center justify-between py-3">
      <a href="#" class="font-display text-lg font-bold text-slate-900 dark:text-slate-100">{{ siteProfile.brandName }}</a>
      <nav aria-label="Navigasi utama desktop" class="hidden items-center gap-5 text-sm font-medium text-slate-700 dark:text-slate-300 md:flex">
        <a v-for="item in navItems" :key="item.href" :href="item.href" class="transition hover:text-brand-700">
          {{ item.label }}
        </a>
      </nav>
      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="toggleTheme"
          :aria-label="theme === 'dark' ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'"
          class="min-h-11 rounded-full border border-brand-200 bg-brand-50/70 px-3 py-2 text-xs font-semibold text-brand-800 transition hover:border-brand-500 dark:border-brand-800 dark:bg-brand-900/40 dark:text-brand-100"
        >
          {{ theme === 'dark' ? 'Mode Terang' : 'Mode Gelap' }}
        </button>
        <a
          :href="`https://wa.me/${siteProfile.whatsappNumber}`"
          class="inline-flex min-h-11 items-center rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-800"
        >
          WhatsApp
        </a>
      </div>
    </div>
    <nav aria-label="Navigasi utama mobile" class="section-shell pb-3 md:hidden">
      <ul class="-mx-1 flex snap-x gap-2 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <li v-for="item in navItems" :key="item.href" class="snap-start">
          <a
            :href="item.href"
            class="inline-flex min-h-11 items-center rounded-full border border-brand-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 dark:border-brand-800 dark:bg-brand-950/60 dark:text-slate-200"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
