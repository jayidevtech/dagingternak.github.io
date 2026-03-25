<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: 'primary',
  },
})
</script>

<template>
  <a
    :href="href"
    class="inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition sm:text-base"
    :class="
      variant === 'secondary'
        ? 'border border-brand-300 bg-brand-50 text-brand-900 hover:border-brand-600 hover:text-brand-800 dark:border-brand-600 dark:bg-brand-900/75 dark:text-brand-50 dark:hover:border-brand-400 dark:hover:text-white'
        : 'bg-brand-700 text-white hover:bg-brand-800'
    "
  >
    <slot />
  </a>
</template>
