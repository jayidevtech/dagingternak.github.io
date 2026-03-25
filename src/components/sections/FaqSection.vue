<script setup>
import SectionContainer from '../base/SectionContainer.vue'
import SectionHeading from '../base/SectionHeading.vue'
import { faqList } from '../../data/faq'
</script>

<template>
  <SectionContainer>
    <section id="faq" class="py-12">
      <SectionHeading label="FAQ" title="Pertanyaan yang Sering Ditanyakan" />
      <div class="space-y-3">
        <details v-for="item in faqList" :key="item.question" class="card-panel p-5">
          <summary class="cursor-pointer text-sm font-semibold text-slate-900 dark:text-slate-100">{{ item.question }}</summary>
          <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">{{ item.answer }}</p>
        </details>
      </div>
    </section>
  </SectionContainer>
</template>
