import { INSTAGRAM } from '../data/projects'

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="section__head" data-reveal>
        <h2 id="about-title" className="section__title">Обо мне</h2>
      </div>
      <div className="about" data-reveal>
        <p className="about__lead">
          Я Гриша, AI-инженер. Делаю для малого бизнеса сайты, Telegram-боты и ИИ-автоматизации: то, что снимает рутину с заявок, записи, ответов клиентам и разбора документов.
        </p>
        <div className="about__cols">
          <div>
            <h3 className="about__label">Как работаю</h3>
            <p>Пишу код вместе с ИИ, но держу инженерную планку. Каждый проект сначала показываю живым демо, потом считаем, сколько времени он экономит.</p>
          </div>
          <div>
            <h3 className="about__label">Где следить</h3>
            <p>В Instagram <a className="link" href={INSTAGRAM}>@automatorrr</a> разбираю ИИ-инструменты на реальных задачах бизнеса: что работает, сколько стоит и где подводит.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
