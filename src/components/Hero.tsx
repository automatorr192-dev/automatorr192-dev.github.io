import { useEffect, useRef } from 'react'
import { INSTAGRAM, TELEGRAM, TELEGRAM_LABEL } from '../data/projects'
import { Menu } from './Menu'
import { Logo } from './Logo'
import { playEntrance } from './entrance'
import './hero.css'

const lines = ['САЙТЫ', 'ПРИЛОЖЕНИЯ', 'ИИ-АГЕНТЫ']

export function Hero() {
  const video = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.current!.removeAttribute('autoplay')
      video.current!.pause()
    }
    playEntrance()
  }, [])

  return (
    <header className="hero">
      <div className="hero__photo" role="presentation">
        <video ref={video} src="./hero.mp4" poster="./hero-poster.webp" autoPlay muted loop playsInline preload="auto" />
      </div>
      <div className="grid" aria-hidden="true">
        {Array.from({ length: 48 }, (_, i) => <i key={i} />)}
      </div>

      <a href="#top" className="logo" aria-label="Гриша — наверх"><Logo /></a>

      <p className="tagline small">
        <span>Гриша, AI-инженер.</span>
        <span>Сайты, боты и ИИ-автоматизации</span>
        <span>для малого бизнеса.</span>
      </p>

      <address className="contact small">
        <a href={TELEGRAM}>{TELEGRAM_LABEL}</a>
        <a href={INSTAGRAM}>Instagram @automatorrr</a>
      </address>

      <div className="actions">
        <Menu />
      </div>

      <ul className="services small" aria-label="Услуги">
        <li className="s1"><span className="rv">ИИ-автоматизация</span></li>
        <li className="s2"><span className="rv">Боты и мини-аппы</span></li>
        <li className="s3"><span className="rv">Сайты и лендинги</span></li>
      </ul>
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
