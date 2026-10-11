import { useEffect } from 'react'
import { Hero } from './components/Hero'
import { Works } from './components/Works'
import { About } from './components/About'
import { Contact } from './components/Contact'
import './styles/global.css'

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        e.target.classList.add('is-in')
        io.unobserve(e.target)
      }
    }, { rootMargin: '0px 0px -12% 0px' })
    document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export function App() {
  useReveal()
  return (
    <>
      <Hero />
      <main>
        <Works />
        <About />
        <Contact />
      </main>
    </>
  )
}
