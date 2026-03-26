<script setup>
import { reactive, computed } from 'vue'
import SectionContainer from '../base/SectionContainer.vue'
import SectionHeading from '../base/SectionHeading.vue'
import { buildWhatsAppLink } from '../../utils/whatsapp'
import { trackAndNavigate } from '../../utils/analytics'
import { siteProfile } from '../../data/site'
import IconWa from '../../assets/wa.svg'

const form = reactive({
  name: '',
  product: 'Sapi',
  qty: '',
  note: '',
})

const errors = reactive({
  name: '',
  qty: '',
})

const summaryLines = computed(() => [
  `Nama: ${form.name || '-'}`,
  `Produk: ${form.product}`,
  `Jumlah: ${form.qty || '-'}`,
  `Catatan: ${form.note || '-'}`,
])

const whatsappHref = computed(() => {
  const message = [
    `Halo ${siteProfile.brandName}, saya ingin pesan daging.`,
    ...summaryLines.value,
  ].join('\n')

  return buildWhatsAppLink(siteProfile.whatsappNumber, message)
})

const isFormValid = computed(() => !errors.name && !errors.qty && form.name.trim() && form.qty.trim())

const validateField = (field) => {
  if (field === 'name') {
    errors.name = form.name.trim() ? '' : 'Nama wajib diisi.'
  }

  if (field === 'qty') {
    errors.qty = form.qty.trim() ? '' : 'Estimasi jumlah wajib diisi.'
  }
}

const submitToWhatsApp = () => {
  validateField('name')
  validateField('qty')

  if (!isFormValid.value) return

  trackAndNavigate(whatsappHref.value, 'order_submit', {
    source_section: 'order_form',
    product: form.product,
    qty_filled: Boolean(form.qty.trim()),
    note_filled: Boolean(form.note.trim()),
    city: siteProfile.city,
  })
}
</script>

<template>
  <SectionContainer>
    <section id="order" class="py-12">
      <SectionHeading
        label="Pemesanan Cepat"
        title="Isi Data Singkat, Lanjutkan ke WhatsApp"
      />
      <form class="card-panel mx-auto grid max-w-3xl gap-4 p-6 sm:grid-cols-2" @submit.prevent="submitToWhatsApp">
        <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
          Nama
          <input
            id="order-name"
            v-model="form.name"
            @blur="validateField('name')"
            type="text"
            required
            autocomplete="name"
            :aria-invalid="Boolean(errors.name)"
            :aria-describedby="errors.name ? 'order-name-error' : undefined"
            class="mt-2 w-full rounded-xl border border-brand-200 bg-white/90 px-3 py-2 text-slate-800 outline-none focus:border-brand-600 dark:border-brand-800 dark:bg-[#2a2021] dark:text-slate-100"
            placeholder="Nama Anda"
          />
          <span v-if="errors.name" id="order-name-error" class="mt-1 block text-xs text-brand-700 dark:text-brand-300">{{ errors.name }}</span>
        </label>
        <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
          Produk
          <select
            id="order-product"
            v-model="form.product"
            class="mt-2 w-full rounded-xl border border-brand-200 bg-white/90 px-3 py-2 text-slate-800 outline-none focus:border-brand-600 dark:border-brand-800 dark:bg-[#2a2021] dark:text-slate-100"
          >
            <option>Kambing/Domba</option>
            <option>Sapi</option>
            <option>Ayam</option>
          </select>
        </label>
        <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
          Estimasi Jumlah
          <input
            id="order-qty"
            v-model="form.qty"
            @blur="validateField('qty')"
            type="text"
            required
            autocomplete="off"
            :aria-invalid="Boolean(errors.qty)"
            :aria-describedby="errors.qty ? 'order-qty-error' : undefined"
            class="mt-2 w-full rounded-xl border border-brand-200 bg-white/90 px-3 py-2 text-slate-800 outline-none focus:border-brand-600 dark:border-brand-800 dark:bg-[#2a2021] dark:text-slate-100"
            placeholder="Contoh: 5 kg"
          />
          <span v-if="errors.qty" id="order-qty-error" class="mt-1 block text-xs text-brand-700 dark:text-brand-300">{{ errors.qty }}</span>
        </label>
        <label class="text-sm font-medium text-slate-700 dark:text-slate-200 sm:col-span-2">
          Catatan
          <textarea
            id="order-note"
            v-model="form.note"
            rows="3"
            autocomplete="off"
            class="mt-2 w-full rounded-xl border border-brand-200 bg-white/90 px-3 py-2 text-slate-800 outline-none focus:border-brand-600 dark:border-brand-800 dark:bg-[#2a2021] dark:text-slate-100"
            placeholder="Contoh: request potong dadu"
          ></textarea>
        </label>
        <div class="sm:col-span-2 rounded-2xl border border-brand-200/90 bg-brand-50/60 p-4 text-sm text-slate-700 dark:border-brand-800 dark:bg-brand-900/20 dark:text-slate-200">
          <p class="mb-2 font-semibold text-slate-900 dark:text-slate-100">Ringkasan Pesanan</p>
          <ul class="space-y-1">
            <li v-for="line in summaryLines" :key="line">{{ line }}</li>
          </ul>
        </div>
        <button
          type="submit"
          :disabled="!form.name.trim() || !form.qty.trim()"
          class="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800 disabled:cursor-not-allowed disabled:bg-brand-400"
        >
          <img :src="IconWa" alt="WhatsApp" class="inline-block h-5 w-5 mr-2" />
          Kirim ke WhatsApp
        </button>
      </form>
    </section>
  </SectionContainer>
</template>
