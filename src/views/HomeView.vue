<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useSeo } from '../composables/useSeo'
import { siteProfile } from '../data/site'
import { trackEvent } from '../utils/analytics'
import SiteHeader from '../components/layout/SiteHeader.vue'
import SiteFooter from '../components/layout/SiteFooter.vue'
import HeroSection from '../components/sections/HeroSection.vue'
import CategorySection from '../components/sections/CategorySection.vue'
import BenefitsSection from '../components/sections/BenefitsSection.vue'
import PricingSection from '../components/sections/PricingSection.vue'
import TestimonialsSection from '../components/sections/TestimonialsSection.vue'
import FaqSection from '../components/sections/FaqSection.vue'
import OrderFormSection from '../components/sections/OrderFormSection.vue'
import CtaSection from '../components/sections/CtaSection.vue'

const formattedPhone = `+${siteProfile.whatsappNumber}`
const hasTrackedScroll75 = ref(false)

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: siteProfile.brandName,
  image: `${siteProfile.siteUrl}/og-cover.svg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteProfile.address,
    addressLocality: siteProfile.city,
    addressCountry: 'ID',
  },
  areaServed: siteProfile.city,
  telephone: formattedPhone,
  email: siteProfile.email,
  openingHours: siteProfile.openHours,
  url: siteProfile.siteUrl,
}

useSeo({
  title: `${siteProfile.brandName} | Reseller Daging Segar`,
  description: 'Reseller daging kambing, sapi, dan ayam broiler/negeri dengan harga publik dan pemesanan cepat via WhatsApp.',
  keywords: 'reseller daging, daging kambing, daging sapi, ayam broiler, ayam negeri, daging segar majalengka',
  canonicalUrl: siteProfile.siteUrl,
  image: `${siteProfile.siteUrl}/og-cover.svg`,
  schema: localBusinessSchema,
})

const trackScrollDepth = () => {
  if (hasTrackedScroll75.value) {
    return
  }

  const pageHeight = document.documentElement.scrollHeight
  if (!pageHeight) {
    return
  }

  const viewportBottom = window.scrollY + window.innerHeight
  const depthPercent = (viewportBottom / pageHeight) * 100

  if (depthPercent >= 75) {
    hasTrackedScroll75.value = true
    trackEvent('scroll_75', {
      page_path: window.location.pathname,
      page_title: document.title,
    })
    window.removeEventListener('scroll', trackScrollDepth)
  }
}

onMounted(() => {
  trackScrollDepth()
  window.addEventListener('scroll', trackScrollDepth, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', trackScrollDepth)
})
</script>

<template>
  <div>
    <a href="#main-content" class="skip-link">Lewati ke Konten Utama</a>
    <SiteHeader />
    <main id="main-content" tabindex="-1">
      <HeroSection />
      <CategorySection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <OrderFormSection />
      <CtaSection />
    </main>
    <SiteFooter />
  </div>
</template>
