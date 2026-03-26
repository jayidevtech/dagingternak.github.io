const EVENT_CALLBACK_TIMEOUT_MS = 400

export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return false
  }

  window.gtag('event', eventName, params)
  return true
}

export function trackEventWithCallback(eventName, params = {}, callback, timeout = EVENT_CALLBACK_TIMEOUT_MS) {
  let called = false

  const done = () => {
    if (called) {
      return
    }
    called = true
    if (typeof callback === 'function') {
      callback()
    }
  }

  trackEvent(eventName, {
    ...params,
    event_callback: done,
  })

  window.setTimeout(done, timeout)
}

export function trackAndNavigate(url, eventName, params = {}, timeout = EVENT_CALLBACK_TIMEOUT_MS) {
  trackEventWithCallback(
    eventName,
    params,
    () => {
      window.location.href = url
    },
    timeout
  )
}