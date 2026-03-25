<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <header class="mx-auto mb-8 max-w-3xl text-center">
    <span v-if="label" class="chip">{{ label }}</span>
    <h2 class="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">{{ title }}</h2>
    <p v-if="description" class="mt-3 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
      {{ description }}
    </p>
  </header>
</template>
