import { GITHUB, INSTAGRAM, TELEGRAM } from '../data/projects'

export function Contact() {
  return (
    <>
      <section id="contact" className="section cta" aria-labelledby="contact-title">
        <h2 id="contact-title" className="cta__title" data-reveal>Есть задача?</h2>
        <div className="cta__body" data-reveal>
          <p>Опишите, что отнимает время. Разберём, что из этого можно отдать ИИ, и я покажу, как это будет выглядеть.</p>
          <p className="work__links">
            <a className="btn btn--light btn--big" href={TELEGRAM}>Написать в Telegram</a>
            <a className="btn btn--big" href={INSTAGRAM}>Instagram</a>
          </p>
        </div>
      </section>
      <footer className="footer">
        <span>© 2026 Гриша · @automatorrr</span>
        <a href={GITHUB}>GitHub</a>
      </footer>
    </>
  )
}
