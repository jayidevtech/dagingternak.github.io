<script setup>
import { siteProfile } from '../../data/site'
</script>

<template>
  <footer id="kontak" class="mt-20 border-t border-brand-100 bg-white/90 dark:border-brand-900 dark:bg-[#161112]/90">
    <div class="section-shell py-10">
      <h3 class="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">{{ siteProfile.brandName }}</h3>
      <p class="mt-2 max-w-xl text-slate-600 dark:text-slate-300">{{ siteProfile.tagline }}</p>
      <p class="mt-4 text-sm text-slate-600 dark:text-slate-300">{{ siteProfile.address }} • {{ siteProfile.openHours }}</p>
    </div>
  </footer>
</template>
