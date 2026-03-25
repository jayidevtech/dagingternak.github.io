<script setup>
import SectionContainer from '../base/SectionContainer.vue'
import SectionHeading from '../base/SectionHeading.vue'
import { testimonials } from '../../data/testimonials'
</script>

<template>
  <SectionContainer>
    <section id="testimoni" class="py-12">
      <SectionHeading label="Testimoni" title="Ulasan Pelanggan" />
      <div class="grid gap-4 md:grid-cols-3">
        <article v-for="item in testimonials" :key="item.name" class="card-panel p-5">
          <p class="text-slate-700 dark:text-slate-200">"{{ item.quote }}"</p>
          <p class="mt-4 text-sm font-semibold text-slate-900 dark:text-slate-100">{{ item.name }}</p>
          <p class="text-sm text-slate-500 dark:text-slate-400">{{ item.role }}</p>
        </article>
      </div>
    </section>
  </SectionContainer>
</template>
