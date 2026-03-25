import { onMounted } from 'vue'

function upsertMeta(attribute, key, content) {
  if (!content) return

  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`)

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, key)
    document.head.appendChild(tag)
  }

  tag.setAttribute('content', content)
}

function upsertCanonical(url) {
  if (!url) return

  let link = document.head.querySelector('link[rel="canonical"]')

  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }

  link.setAttribute('href', url)
}

function upsertJsonLd(schema) {
  if (!schema) return

  let script = document.getElementById('ld-local-business')

  if (!script) {
    script = document.createElement('script')
    script.id = 'ld-local-business'
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }

  script.textContent = JSON.stringify(schema)
}

export function useSeo({ title, description, keywords, image, canonicalUrl, schema }) {
  onMounted(() => {
    if (title) document.title = title

    const currentUrl = canonicalUrl || window.location.href
    const currentImage = image || `${window.location.origin}/og-cover.svg`

    upsertMeta('name', 'description', description)
    upsertMeta('name', 'keywords', keywords)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', currentUrl)
    upsertMeta('property', 'og:image', currentImage)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', currentImage)

    upsertCanonical(currentUrl)
    upsertJsonLd(schema)
  })
}
