<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { siteProfile } from '../../data/site'
import { useTheme } from '../../composables/useTheme'
import { trackAndNavigate } from '../../utils/analytics'
import waIcon from '../../assets/wa.svg'

const navItems = [
  { label: 'Produk', href: '#produk' },
  { label: 'Harga', href: '#harga' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Order', href: '#order' },
]

const { theme, toggleTheme } = useTheme()
const isMobileMenuOpen = ref(false)
const activeNav = ref('')

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const setActiveByHash = () => {
  const { hash } = window.location
  if (navItems.some((item) => item.href === hash)) {
    activeNav.value = hash
    return
  }

  activeNav.value = ''
}

const setActiveByScroll = () => {
  const offset = 180
  const scrollPoint = window.scrollY + offset
  let current = ''

  navItems.forEach((item) => {
    const section = document.querySelector(item.href)
    if (!section) {
      return
    }

    const top = section.offsetTop
    const bottom = top + section.offsetHeight
    if (scrollPoint >= top && scrollPoint < bottom) {
      current = item.href
    }
  })

  if (!current) {
    const lastItem = navItems[navItems.length - 1]
    const lastSection = lastItem ? document.querySelector(lastItem.href) : null
    if (lastSection) {
      const lastBottom = lastSection.offsetTop + lastSection.offsetHeight
      if (scrollPoint >= lastBottom) {
        current = lastItem.href
      }
    }
  }

  activeNav.value = current
}

const handleNavClick = (href) => {
  activeNav.value = href
}

const handleHeaderWhatsAppClick = (sourceSection) => {
  trackAndNavigate(`https://wa.me/${siteProfile.whatsappNumber}`, 'wa_click', {
    source_section: sourceSection,
    city: siteProfile.city,
  })
}

onMounted(() => {
  setActiveByHash()
  setActiveByScroll()
  window.addEventListener('scroll', setActiveByScroll, { passive: true })
  window.addEventListener('hashchange', setActiveByHash)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', setActiveByScroll)
  window.removeEventListener('hashchange', setActiveByHash)
})
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-brand-100/80 bg-white/85 backdrop-blur dark:border-brand-900/70 dark:bg-[#151011]/85">
    <div class="section-shell flex items-center justify-between py-3">
      <a href="/" class="font-display text-lg font-bold text-slate-900 dark:text-slate-100">{{ siteProfile.brandName }}</a>
      <nav aria-label="Navigasi utama desktop" class="hidden items-center gap-5 text-sm font-medium text-slate-700 dark:text-slate-300 md:flex">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          @click="handleNavClick(item.href)"
          :aria-current="activeNav === item.href ? 'page' : undefined"
          class="rounded-full px-3 py-2 transition"
          :class="
            activeNav === item.href
              ? 'bg-brand-100 text-brand-900 dark:bg-brand-900/60 dark:text-brand-50'
              : 'hover:text-brand-700'
          "
        >
          {{ item.label }}
        </a>
      </nav>
      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="toggleTheme"
          :aria-label="theme === 'dark' ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'"
          class="inline-flex min-h-11 items-center rounded-full border border-brand-300 bg-brand-50/70 px-3 py-2 text-sm font-semibold text-brand-900 transition hover:border-brand-600 dark:border-brand-700 dark:bg-brand-900/55 dark:text-brand-50"
        >
          <span class="sr-only">{{ theme === 'dark' ? 'Mode terang' : 'Mode gelap' }}</span>
          <svg
            v-if="theme === 'dark'"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="h-5 w-5"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3c.37 0 .74.03 1.1.08A7 7 0 0 0 21 12.79z" />
          </svg>
        </button>
        <button
          type="button"
          @click="toggleMobileMenu"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-nav-menu"
          class="inline-flex min-h-11 items-center rounded-full border border-brand-300 bg-brand-50/70 px-3 py-2 text-sm font-semibold text-brand-900 transition hover:border-brand-600 dark:border-brand-700 dark:bg-brand-900/55 dark:text-brand-50 md:hidden"
        >
          <span class="sr-only">{{ isMobileMenuOpen ? 'Tutup menu' : 'Buka menu' }}</span>
          <svg
            v-if="!isMobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <a
          :href="`https://wa.me/${siteProfile.whatsappNumber}`"
          @click.prevent="handleHeaderWhatsAppClick('header_desktop')"
          class="hidden min-h-11 items-center rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-800 md:inline-flex"
        >
          <img :src="waIcon" alt="" aria-hidden="true" class="mr-2 h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </div>
    <nav
      id="mobile-nav-menu"
      aria-label="Navigasi utama mobile"
      class="fixed inset-x-0 top-[84px] z-40 px-4 sm:px-6 md:hidden"
      v-show="isMobileMenuOpen"
    >
      <div class="mx-auto w-full max-w-6xl rounded-2xl border border-brand-200/80 bg-white/95 p-3 shadow-soft dark:border-brand-800 dark:bg-brand-950/85">
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <li v-for="item in navItems" :key="item.href" class="min-w-0">
          <a
            :href="item.href"
            @click="handleNavClick(item.href); closeMobileMenu()"
            :aria-current="activeNav === item.href ? 'page' : undefined"
            class="inline-flex min-h-11 w-full items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold"
            :class="
              activeNav === item.href
                ? 'border-brand-500 bg-brand-700 text-white dark:border-brand-500 dark:bg-brand-700 dark:text-white'
                : 'border-brand-300 bg-brand-50/85 text-brand-900 dark:border-brand-700 dark:bg-brand-900/65 dark:text-brand-50'
            "
          >
            {{ item.label }}
          </a>
        </li>
        </ul>

        <a
          :href="`https://wa.me/${siteProfile.whatsappNumber}`"
          @click.prevent="handleHeaderWhatsAppClick('header_mobile')"
          @click="closeMobileMenu"
          class="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-brand-700 dark:bg-brand-900 px-4 py-2 text-sm font-semibold text-white dark:border-2 dark:border-brand-900 transition hover:bg-brand-800"
        >
          <img :src="waIcon" alt="" aria-hidden="true" class="mr-2 h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </nav>
  </header>
</template>
