import Link from "next/link";
import {
  BENEFITS,
  EXAMPLES,
  FAQ,
  INCLUDED,
  NOT_INCLUDED,
  PAINS,
  PHOTO_CREDITS,
  PRICE,
  STEPS,
} from "@/lib/presenca-digital";
import { ExamplesTabs } from "./examples-tabs";
import { HeroDemo } from "./hero-demo";
import { SiteDesktop, SitePhone } from "./previews";
import { WhatsappLink } from "./whatsapp-link";
import styles from "./landing.module.css";

export function Hero() {
  const slides = EXAMPLES.map((example, i) => ({
    slug: example.slug,
    chip: example.chip,
    name: example.name,
    segment: example.segment,
    desktop: <SiteDesktop slug={example.slug} priority={i === 0} />,
    phone: <SitePhone slug={example.slug} />,
  }));

  return (
    <section className={styles.hero} id="topo" aria-labelledby="titulo-hero">
      <div className={styles.wrap}>
        <span className={styles.eyebrow}>DaBi Presença Digital</span>
        <h1 id="titulo-hero">
          Seu negócio merece um site <em>à altura</em> do seu trabalho.
        </h1>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.lede}>
              Criamos sites profissionais para apresentar seus serviços, fortalecer sua presença
              digital e facilitar o contato com clientes pelo WhatsApp.
            </p>
            <div className={styles.ctaRow}>
              <WhatsappLink location="hero" className={`${styles.btn} ${styles.btnPrimary}`}>
                Quero meu site
              </WhatsappLink>
              <a
                className={`${styles.btn} ${styles.btnGhost}`}
                href="#exemplos"
                data-track="example_click"
                data-label="ver_exemplos"
                data-location="hero"
              >
                Ver exemplos
              </a>
            </div>
            <ul className={styles.facts}>
              <li>
                <b>{PRICE.total}</b>
                <span>valor de lançamento</span>
              </li>
              <li>
                <b>{PRICE.eta}</b>
                <span>prazo-alvo de entrega</span>
              </li>
              <li>
                <b>2 × {PRICE.half}</b>
                <span>entrada e saldo antes da publicação</span>
              </li>
            </ul>
          </div>
          <HeroDemo slides={slides} />
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <section className={`${styles.section} ${styles.problem}`} aria-labelledby="titulo-problema">
      <div className={styles.wrap}>
        <span className={styles.eyebrow}>Para quem atende pelo celular</span>
        <h2 id="titulo-problema" className={styles.title}>
          Informação espalhada faz o cliente desistir de perguntar.
        </h2>
        <ul className={styles.pain}>
          {PAINS.map((pain) => (
            <li key={pain.title}>
              <strong>{pain.title}</strong>
              <span>{pain.text}</span>
            </li>
          ))}
        </ul>
        <p className={styles.resolve}>
          Um site reúne essas respostas em um endereço só. O cliente se informa sozinho e chama você
          no WhatsApp já sabendo o que procura.
        </p>
      </div>
    </section>
  );
}

export function Benefits() {
  return (
    <section className={`${styles.section} ${styles.benefits}`} aria-labelledby="titulo-beneficios">
      <div className={styles.wrap}>
        <span className={styles.eyebrow}>O que muda no dia a dia</span>
        <h2 id="titulo-beneficios" className={styles.title}>
          Um lugar seu, organizado e fácil de compartilhar.
        </h2>
        <div className={styles.benGrid}>
          <article className={styles.benLead}>
            <div>
              <h3>Contato facilitado</h3>
              <p>
                Botões diretos para o WhatsApp em cada seção, com a mensagem inicial já preenchida.
                Menos passos entre o interesse e a conversa.
              </p>
            </div>
            <div className={styles.chat} aria-hidden="true">
              <p className={styles.bubble}>Olá! Vi o site de vocês e queria saber o valor da escova.</p>
              <p className={`${styles.bubble} ${styles.bubbleMe}`}>
                Oi! A escova começa em R$ 70. Posso ver um horário para você?
              </p>
            </div>
          </article>
          <div className={styles.benList}>
            {BENEFITS.map((benefit) => (
              <article key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Examples() {
  const items = EXAMPLES.map((example) => ({
    ...example,
    desktop: <SiteDesktop slug={example.slug} />,
    phone: <SitePhone slug={example.slug} />,
  }));

  return (
    <section className={`${styles.section} ${styles.dark}`} id="exemplos" aria-labelledby="titulo-exemplos">
      <div className={styles.wrap}>
        <div className={styles.exHead}>
          <div>
            <span className={styles.eyebrow}>Exemplos de sites</span>
            <h2 id="titulo-exemplos" className={styles.title}>
              Veja como seu site pode ficar.
            </h2>
          </div>
          <p className={styles.lede} style={{ margin: 0 }}>
            Quatro segmentos, quatro identidades. Cada site abaixo é um projeto demonstrativo, criado
            pela DaBi Tech.
          </p>
        </div>
        <ExamplesTabs items={items} />
        <p className={styles.credit}>
          Fotos ilustrativas do Unsplash (licença gratuita): {PHOTO_CREDITS}. Nos sites dos clientes
          entram as fotos do próprio negócio.
        </p>
      </div>
    </section>
  );
}

export function Included() {
  return (
    <section className={`${styles.section} ${styles.included}`} id="incluido" aria-labelledby="titulo-incluido">
      <div className={styles.wrap}>
        <span className={styles.eyebrow}>O que está no pacote</span>
        <h2 id="titulo-incluido" className={styles.title}>
          Escopo claro desde o primeiro contato.
        </h2>
        <div className={styles.cols}>
          <div className={styles.col}>
            <h3>Incluído</h3>
            <ul>
              {INCLUDED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={`${styles.col} ${styles.colNo}`}>
            <h3>Fora do pacote</h3>
            <ul>
              {NOT_INCLUDED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className={`${styles.section} ${styles.how}`} id="como-funciona" aria-labelledby="titulo-como">
      <div className={styles.wrap}>
        <span className={styles.eyebrow}>Como funciona</span>
        <h2 id="titulo-como" className={styles.title}>
          Três etapas, sem burocracia.
        </h2>
        <ol className={styles.steps}>
          {STEPS.map((step) => (
            <li key={step.title} className={styles.step}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Investment() {
  return (
    <section className={styles.section} id="investimento" aria-labelledby="titulo-investimento">
      <div className={styles.wrap}>
        <span className={styles.eyebrow}>Investimento</span>
        <h2 id="titulo-investimento" className={styles.title}>
          Um valor fechado pelo desenvolvimento.
        </h2>
        <div className={styles.priceBox}>
          <div className={styles.priceMain}>
            <p className={styles.priceName}>DaBi Presença Digital</p>
            <div className={styles.amount}>
              <sup>R$</sup>797
              <span className={styles.srOnly}> reais</span>
            </div>
            <p className={styles.priceNote}>
              Preço promocional de lançamento, sujeito às condições comerciais vigentes.
            </p>
            <div className={styles.split}>
              <div>
                <b>{PRICE.half}</b>
                <span>na contratação</span>
              </div>
              <div>
                <b>{PRICE.half}</b>
                <span>antes da publicação</span>
              </div>
            </div>
            <WhatsappLink location="investimento" className={`${styles.btn} ${styles.btnCyan}`}>
              Solicitar proposta
            </WhatsappLink>
          </div>
          <div className={styles.priceSide}>
            <h3>Principais itens</h3>
            <ul>
              <li>Site de página única, até seis seções</li>
              <li>Até oito serviços e 12 imagens</li>
              <li>WhatsApp, redes sociais e localização</li>
              <li>SEO básico e publicação</li>
              <li>Uma rodada de ajustes</li>
            </ul>
            <p className={styles.fine}>
              <strong>Prazo-alvo:</strong> {PRICE.eta} após recebermos todos os materiais e a entrada,
              mediante confirmação de disponibilidade.
            </p>
            <p className={styles.fine}>Domínio e eventual hospedagem são custos separados.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className={`${styles.section} ${styles.faq}`} id="duvidas" aria-labelledby="titulo-faq">
      <div className={`${styles.wrap} ${styles.faqGrid}`}>
        <div>
          <span className={styles.eyebrow}>Perguntas frequentes</span>
          <h2 id="titulo-faq" className={styles.title}>
            Antes de chamar, tire suas dúvidas.
          </h2>
        </div>
        <div>
          {FAQ.map((item, i) => (
            <details key={item.q} name="faq" open={i === 0}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className={`${styles.section} ${styles.final}`} id="contato" aria-labelledby="titulo-final">
      <div className={`${styles.wrap} ${styles.finalGrid}`}>
        <div>
          <span className={styles.eyebrow}>Vamos começar</span>
          <h2 id="titulo-final">Vamos colocar seu negócio no lugar que ele merece?</h2>
        </div>
        <div>
          <p className={styles.lede}>
            Conte sobre sua empresa e descubra como podemos criar uma apresentação digital
            profissional para você.
          </p>
          <WhatsappLink location="final" className={`${styles.btn} ${styles.btnWhite}`}>
            Conversar com a DaBi Tech
          </WhatsappLink>
          <p className={styles.finalSmall}>
            Abre o WhatsApp com a mensagem já preenchida: +55 41 98887-5659.
          </p>
        </div>
      </div>
    </section>
  );
}

export function LandingFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.wrap} ${styles.footerInner}`}>
        <span>© DaBi Tech, Digital Solutions</span>
        <Link href="/">Voltar ao site institucional</Link>
      </div>
    </footer>
  );
}

export function StickyCta() {
  return (
    <div className={styles.sticky}>
      <WhatsappLink location="barra_fixa" className={`${styles.btn} ${styles.btnPrimary}`}>
        Quero meu site
      </WhatsappLink>
    </div>
  );
}
