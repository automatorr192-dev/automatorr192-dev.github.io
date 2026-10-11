declare global {
  interface Window { __auFailsafe?: number }
}

export function playEntrance() {
  const html = document.documentElement
  if (!html.classList.contains('is-entering')) return

  let done = false
  const finish = () => {
    if (done) return
    done = true
    html.classList.remove('is-entering', 'is-playing')
    clearTimeout(window.__auFailsafe)
  }

  const start = () => requestAnimationFrame(() => {
    html.classList.add('is-playing')
    const running = document.getAnimations().filter(a => a instanceof CSSAnimation && a.animationName.startsWith('au-'))
    Promise.all(running.map(a => a.finished)).then(finish, finish)
    setTimeout(finish, 2200)
  })

  Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1200))]).then(start)
}
