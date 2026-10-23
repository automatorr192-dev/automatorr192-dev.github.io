import { useEffect } from 'react'
import { INSTAGRAM, TELEGRAM, TELEGRAM_LABEL } from '../data/projects'
import { playEntrance } from './entrance'
import './hero.css'

const lines = ['САЙТЫ', 'ПРИЛОЖЕНИЯ', 'ИИ-АГЕНТЫ']

const links = [
  ['#works', 'Работы'],
  ['#about', 'Обо мне'],
  ['#contact', 'Связаться'],
]

export function Hero() {
  useEffect(() => {
    playEntrance()
  }, [])

  return (
    <header className="hero">
      <div className="hero__photo" role="presentation">
        <img src="./hero.webp" width="736" height="957" alt="" fetchPriority="high" />
      </div>
      <div className="grid" aria-hidden="true">
        {Array.from({ length: 48 }, (_, i) => <i key={i} />)}
      </div>

      <address className="contact small">
        <a href={TELEGRAM}>{TELEGRAM_LABEL}</a>
        <a href={INSTAGRAM}>Instagram @automatorrr</a>
      </address>

      <nav className="nav" aria-label="Разделы">
        {links.map(([href, label], i) => (
          <a key={href} href={href} className={`s${i + 1}`}><span className="rv">{label}</span></a>
        ))}
      </nav>
      <div className="rule" aria-hidden="true" />

      <h1 className="hl" aria-label="Сайты, приложения, ИИ-агенты">
        {lines.map(line => (
          <span className="hl__line" aria-hidden="true" key={line}>
            <span className="hl__clip"><span className="hl__track">{line}</span></span>
          </span>
        ))}
      </h1>
    </header>
  )
}
