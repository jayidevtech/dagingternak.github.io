<script setup>
import { siteProfile } from '../../data/site'
</script>

<template>
  <footer id="kontak" class="mt-20 border-t border-brand-100 bg-white/90 dark:border-brand-900 dark:bg-[#161112]/90">
    <div class="section-shell py-10">
      <h3 class="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">{{ siteProfile.brandName }}</h3>
      <p class="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">{{ siteProfile.tagline }}</p>
      <p class="mt-4 text-sm text-slate-600 dark:text-slate-300">{{ siteProfile.address }} • {{ siteProfile.openHours }}</p>
    </div>

    <!-- Copyright -->
    <div class="border-t border-brand-100 bg-white/90 py-4 text-center text-sm text-slate-500 dark:border-brand-900 dark:bg-[#161112]/90 dark:text-slate-400">
      <div class="section-shell flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 md:gap-4">
        <p>&copy; {{ new Date().getFullYear() }} {{ siteProfile.brandName }}. All rights reserved.</p>
        <p>Designed with ❤️ by <a href="https://jayidev.tech" target="_blank" class="font-semibold text-brand-700 hover:underline">JAYIDEVTECH</a></p>
      </div>
    </div>
  </footer>
</template>
