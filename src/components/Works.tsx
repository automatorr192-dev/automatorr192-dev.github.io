import { projects, type Project } from '../data/projects'
import './sections.css'

function Media({ project }: { project: Project }) {
  const { media } = project
  const srcset = media.widths.map(w => `./${media.src}-${w}.webp ${w}w`).join(', ')
  return (
    <figure className="work__frame">
      <img
        src={`./${media.src}-${media.widths[media.widths.length - 1]}.webp`}
        srcSet={srcset}
        sizes="(max-width: 900px) 100vw, 38vw"
        width={media.w}
        height={media.h}
        alt={media.alt}
        loading="lazy"
        decoding="async"
      />
    </figure>
  )
}

export function Works() {
  return (
    <section id="works" className="section" aria-labelledby="works-title">
      <div className="section__head" data-reveal>
        <h2 id="works-title" className="section__title">Работы</h2>
        <p className="section__count">{projects.length} проектов</p>
        <p className="section__intro">
          Каждый проект можно открыть: сайты и мини-аппы по ссылке, боты в Telegram.
        </p>
      </div>

      <ol className="works">
        {projects.map((p, i) => (
          <li className="work" key={p.id} data-reveal>
            <div className="work__id">
              <span className="work__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="work__name">{p.name}</h3>
              <p className="work__kind">{p.kind}</p>
              <p className={`work__status${p.demo || p.bot ? ' is-live' : ''}`}>{p.demo || p.bot ? 'Живое демо' : 'Демо скоро'}</p>
            </div>
            <div className="work__text">
              <dl>
                <dt>Задача</dt>
                <dd>{p.task}</dd>
                <dt>Решение</dt>
                <dd>{p.solution}</dd>
                {p.note && (
                  <>
                    <dt>Важно</dt>
                    <dd>{p.note}</dd>
                  </>
                )}
              </dl>
              <p className="work__stack">{p.stack}</p>
            </div>
            <div className="work__side">
              <Media project={p} />
              <p className="work__links">
                {p.demo && <a className="btn btn--light" href={p.demo}>Открыть демо</a>}
                {p.bot && <a className="btn btn--light" href={p.bot}>Открыть в Telegram</a>}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
