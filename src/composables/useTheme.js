import { ref, onMounted } from 'vue'

const STORAGE_KEY = 'dagingternak-theme'

export function useTheme() {
  const theme = ref('light')

  const applyTheme = (value) => {
    const root = document.documentElement

    if (value === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    theme.value = value
    localStorage.setItem(STORAGE_KEY, value)
  }

  const toggleTheme = () => {
    applyTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  onMounted(() => {
    const saved = localStorage.getItem(STORAGE_KEY)

    if (saved === 'dark' || saved === 'light') {
      applyTheme(saved)
      return
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    applyTheme(prefersDark ? 'dark' : 'light')
  })

  return {
    theme,
    toggleTheme,
  }
}
