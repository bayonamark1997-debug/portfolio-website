export const CALENDLY_URL = 'https://calendly.com/markevanderbayona/30min'

export function openCalendly() {
  const calendly = (window as unknown as { Calendly?: { initPopupWidget: (opts: { url: string }) => void } })
    .Calendly
  if (calendly) {
    calendly.initPopupWidget({ url: CALENDLY_URL })
  } else {
    window.open(CALENDLY_URL, '_blank')
  }
}
