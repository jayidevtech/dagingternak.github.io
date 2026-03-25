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
        ? 'border border-brand-200 bg-white text-brand-800 hover:border-brand-500 hover:text-brand-700 dark:border-brand-800 dark:bg-brand-950/60 dark:text-brand-100 dark:hover:border-brand-500'
        : 'bg-brand-700 text-white hover:bg-brand-800'
    "
  >
    <slot />
  </a>
</template>
