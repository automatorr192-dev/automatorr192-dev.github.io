import { useRef, useState, type MouseEvent } from 'react'
import { INSTAGRAM, TELEGRAM, TELEGRAM_LABEL } from '../data/projects'
import './menu.css'

const links = [
  ['#works', 'Работы'],
  ['#about', 'Обо мне'],
  ['#contact', 'Связаться'],
]

export function Menu() {
  const dialog = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)

  const show = () => {
    dialog.current!.showModal()
    setOpen(true)
  }

  const go = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const hash = e.currentTarget.hash
    dialog.current!.close()
    document.querySelector(hash)!.scrollIntoView()
    history.pushState(null, '', hash)
  }

  return (
    <>
      <button type="button" className="menu" aria-haspopup="dialog" aria-expanded={open} aria-controls="menu-panel" onClick={show}>
        <span>Меню</span>
      </button>
      <dialog
        id="menu-panel"
        ref={dialog}
        className="panel"
        aria-label="Меню"
        onClose={() => setOpen(false)}
        onClick={e => e.target === dialog.current && dialog.current.close()}
      >
        <button type="button" className="panel__close" onClick={() => dialog.current!.close()}>
          <span>Закрыть</span>
        </button>
        <nav className="panel__nav" aria-label="Разделы">
          {links.map(([href, label], i) => (
            <a key={href} href={href} onClick={go}>
              <span className="panel__num">0{i + 1}</span>
              {label}
            </a>
          ))}
        </nav>
        <p className="panel__contacts">
          <a href={TELEGRAM}>{TELEGRAM_LABEL}</a>
          <a href={INSTAGRAM}>Instagram @automatorrr</a>
        </p>
      </dialog>
    </>
  )
}
