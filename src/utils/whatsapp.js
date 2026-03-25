export function buildWhatsAppLink(phoneNumber, message) {
  const normalized = phoneNumber.replace(/[^\d]/g, '')
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${normalized}?text=${encodedMessage}`
}
