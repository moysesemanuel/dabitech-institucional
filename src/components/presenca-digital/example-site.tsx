import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { WA_LINK, LANDING_PATH } from "@/lib/presenca-digital";
import type { ExampleSite } from "@/lib/presenca-exemplos";
import styles from "./example-site.module.css";

function Photo({ name, sizes, className, priority }: { name: string; sizes: string; className?: string; priority?: boolean }) {
  return <Image src={`/presenca-digital/${name}.webp`} alt="" fill sizes={sizes} priority={priority} className={className} />;
}

export function ExampleSiteView({ site }: { site: ExampleSite }) {
  const { hero } = site;
  const anchors = ["#servicos", "#sobre", "#contato"];

  return (
    <div className={styles.site} style={site.theme as CSSProperties}>
      <div className={styles.demoBar}>
        <div className={styles.demoBarInner}>
          <span>Projeto demonstrativo criado pela DaBi Tech. Nome, preços e endereço são fictícios.</span>
          <span className={styles.demoLinks}>
            <Link href={`${LANDING_PATH}#exemplos`}>← Voltar aos exemplos</Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-track="whatsapp_click"
              data-location={`site_${site.slug}`}
            >
              Quero um site assim<span className="srOnly"> (abre em nova aba)</span>
            </a>
          </span>
        </div>
      </div>

      <header className={styles.top}>
        <div className={`${styles.wrap} ${styles.topInner}`}>
          <a className={styles.brand} href="#conteudo">{site.brand}</a>
          <nav className={styles.topNav} aria-label="Principal">
            {site.nav.map((label, i) => (
              <a key={label} href={anchors[i]}>{label}</a>
            ))}
          </nav>
          <a className={`${styles.btn} ${styles.btnSmall}`} href="#contato">{hero.cta}</a>
        </div>
      </header>

      <main id="conteudo">
        {hero.variant === "overlay" ? (
          <section className={`${styles.hero} ${styles.heroOverlay}`} aria-labelledby="hero-titulo">
            <Photo name={hero.image} sizes="100vw" className={styles.heroImg} priority />
            <div className={styles.wrap}>
              <span className={styles.kicker}>{hero.kicker}</span>
              <h1 id="hero-titulo" className={styles.heroTitle}>
                {hero.title} <em>{hero.em}</em>
              </h1>
              <p className={styles.heroText}>{hero.text}</p>
              <a className={styles.btn} href="#contato">{hero.cta}</a>
            </div>
          </section>
        ) : (
          <section className={`${styles.hero} ${styles.heroSplit}`} aria-labelledby="hero-titulo">
            <div className={styles.wrap}>
              <div>
                <span className={styles.kicker}>{hero.kicker}</span>
                <h1 id="hero-titulo" className={styles.heroTitle}>
                  {hero.title} <em>{hero.em}</em>
                </h1>
                <p className={styles.heroText}>{hero.text}</p>
                <a className={styles.btn} href="#contato">{hero.cta}</a>
              </div>
              <div className={styles.heroPhoto}>
                <Photo name={hero.image} sizes="(min-width: 760px) 520px, 92vw" className={styles.heroImg} priority />
              </div>
            </div>
          </section>
        )}

        <section id="servicos" className={styles.section} aria-labelledby="servicos-titulo">
          <div className={styles.wrap}>
            <span className={styles.kicker}>Serviços</span>
            <h2 id="servicos-titulo" className={styles.h2}>{site.servicesTitle}</h2>
            {site.servicesLayout === "cards" ? (
              <div className={styles.servicesCards}>
                {site.services.map((service) => (
                  <article key={service.name} className={styles.card}>
                    {service.image ? (
                      <div className={styles.cardPhoto}>
                        <Photo name={service.image} sizes="(min-width: 1024px) 360px, 92vw" className={styles.heroImg} />
                      </div>
                    ) : null}
                    <div className={styles.cardBody}>
                      <h3>{service.name}</h3>
                      <p>{service.text}</p>
                      <span className={styles.price}>{service.price}</span>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <ul className={styles.servicesList}>
                {site.services.map((service) => (
                  <li key={service.name}>
                    <h3>{service.name}</h3>
                    <span className={styles.price}>{service.price}</span>
                    <p>{service.text}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section id="sobre" className={`${styles.section} ${styles.about}`} aria-labelledby="sobre-titulo">
          <div className={`${styles.wrap} ${styles.aboutGrid}`}>
            <div>
              <span className={styles.kicker}>Sobre</span>
              <h2 id="sobre-titulo" className={styles.h2}>{site.about.title}</h2>
              <p>{site.about.text}</p>
            </div>
            <div className={styles.aboutPhoto}>
              <Photo name={site.about.image} sizes="(min-width: 760px) 520px, 92vw" className={styles.heroImg} />
            </div>
          </div>
        </section>

        {site.gallery.length > 0 ? (
          <section className={styles.section} aria-labelledby="galeria-titulo">
            <div className={styles.wrap}>
              <span className={styles.kicker}>Galeria</span>
              <h2 id="galeria-titulo" className={styles.h2}>Alguns resultados</h2>
              <div className={styles.gallery}>
                {site.gallery.map((name) => (
                  <div key={name} className={styles.gItem}>
                    <Photo name={name} sizes="(min-width: 1024px) 270px, 46vw" className={styles.heroImg} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section id="contato" className={`${styles.section} ${styles.contact}`} aria-labelledby="contato-titulo">
          <div className={`${styles.wrap} ${styles.contactGrid}`}>
            <div>
              <span className={styles.kicker}>Contato</span>
              <h2 id="contato-titulo" className={styles.h2}>{site.contactTitle}</h2>
              <p>{site.contactText}</p>
              <a
                className={styles.btn}
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp_click"
                data-location={`site_${site.slug}_contato`}
              >
                {site.contactCta}<span className="srOnly"> (abre em nova aba)</span>
              </a>
              <p className={styles.note}>Neste exemplo o botão abre o contato da DaBi Tech. No seu site, ele abre o WhatsApp do seu negócio.</p>
            </div>
            <div className={styles.info}>
              <h3>Horários</h3>
              <ul>
                {site.hours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <h3>Endereço</h3>
              <p>{site.address}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.foot}>
        <div className={styles.wrap}>© {site.brand}. Projeto demonstrativo da DaBi Tech.</div>
      </footer>
    </div>
  );
}
