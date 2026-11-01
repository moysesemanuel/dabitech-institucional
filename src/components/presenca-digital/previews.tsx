import Image from "next/image";
import type { ExampleSlug } from "@/lib/presenca-digital";
import styles from "./previews.module.css";

// Mockups decorativos dos sites de exemplo (desktop e celular).
// Ficam fora da árvore de acessibilidade: o texto equivalente está nos cartões da página.

const URLS: Record<ExampleSlug, string> = {
  beleza: "studiolume.com.br",
  confeitaria: "docealvorada.com.br",
  automotivo: "brasaauto.com.br",
  residencial: "casaemordem.com.br",
};

function Photo({
  src,
  sizes,
  className,
  priority,
}: {
  src: string;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`${styles.pic} ${className ?? ""}`}>
      <Image
        src={`/presenca-digital/${src}.webp`}
        alt=""
        fill
        sizes={sizes}
        priority={priority}
        className={styles.img}
      />
    </div>
  );
}

const WIDE = "(min-width: 1024px) 560px, 92vw";
const THUMB = "(min-width: 1024px) 190px, 40vw";
const PHONE = "220px";

function Frame({ slug, children }: { slug: ExampleSlug; children: React.ReactNode }) {
  return (
    <div className={styles.dk} aria-hidden="true">
      <div className={styles.bar}>
        <i />
        <i />
        <i />
        <span>{URLS[slug]}</span>
      </div>
      <div className={`${styles.scr} ${styles[slug === "beleza" ? "lume" : slug === "confeitaria" ? "doce" : slug === "automotivo" ? "brasa" : "casa"]}`}>
        {children}
      </div>
    </div>
  );
}

export function SiteDesktop({ slug, priority = false }: { slug: ExampleSlug; priority?: boolean }) {
  if (slug === "beleza") {
    return (
      <Frame slug={slug}>
        <div className={styles.hero}>
          <Photo src="salao-ambiente" sizes={WIDE} className={styles.bg} priority={priority} />
          <div className={styles.nav}>
            <b>Lume</b>
            <span className={styles.links}>
              <span>Serviços</span>
              <span>Galeria</span>
              <span>Contato</span>
            </span>
            <span className={styles.pill}>Agendar</span>
          </div>
          <div className={styles.txt}>
            <small>Studio de beleza · Curitiba</small>
            <h4>
              Seu momento de cuidado, <em>com hora marcada.</em>
            </h4>
            <p>Cabelo, unhas e sobrancelha em um ambiente calmo, com produtos selecionados.</p>
            <span className={styles.pill}>Agendar pelo WhatsApp</span>
            <span className={styles.ghost}>Ver serviços</span>
          </div>
        </div>
        <div className={styles.mid}>
          <Photo src="salao-bancada" sizes={THUMB} className={styles.side} />
          <div>
            <small>Serviços</small>
            <h5>Cuidados que combinam com você</h5>
            <div className={styles.row}><b>Corte e escova</b><span>a partir de R$ 70</span></div>
            <div className={styles.row}><b>Manicure e pedicure</b><span>a partir de R$ 55</span></div>
            <div className={styles.row}><b>Design de sobrancelha</b><span>a partir de R$ 45</span></div>
          </div>
        </div>
        <div className={styles.foot}>Rua das Flores, 120 · Seg a Sáb, 9h às 19h · WhatsApp (41) 90000-0000</div>
      </Frame>
    );
  }

  if (slug === "confeitaria") {
    return (
      <Frame slug={slug}>
        <div className={styles.hero}>
          <div className={styles.left}>
            <div className={styles.nav}>
              <b>Doce Alvorada</b>
              <span className={styles.links}>
                <span>Cardápio</span>
                <span>Encomendas</span>
                <span>Contato</span>
              </span>
            </div>
            <div className={styles.t}>
              <h4>
                Doces feitos <em>por encomenda.</em>
              </h4>
              <p>Bolos, tortas e doces finos preparados no dia, para sua festa ou seu café.</p>
              <span className={styles.btn}>Fazer meu pedido</span>
            </div>
          </div>
          <div className={styles.photoWrap}>
            <Photo src="doce-bolo" sizes={WIDE} className={styles.photo} priority={priority} />
            <div className={styles.sticker}>Feito<br />à mão</div>
          </div>
        </div>
        <div className={styles.mid}>
          <h5>Os mais pedidos</h5>
          <div className={styles.cards}>
            <div className={styles.card}><Photo src="doce-tortas" sizes={THUMB} /><b>Tortas de frutas<span>R$ 12</span></b></div>
            <div className={styles.card}><Photo src="doce-folhados" sizes={THUMB} /><b>Folhados e bolos<span>R$ 9</span></b></div>
            <div className={styles.card}><Photo src="doce-cupcakes" sizes={THUMB} /><b>Cupcakes<span>R$ 8</span></b></div>
          </div>
        </div>
        <div className={styles.foot}>Encomendas pelo WhatsApp · Retirada em Curitiba · Ter a Dom, 9h às 18h</div>
      </Frame>
    );
  }

  if (slug === "automotivo") {
    return (
      <Frame slug={slug}>
        <div className={styles.hero}>
          <Photo src="auto-hero" sizes={WIDE} className={styles.bg} priority={priority} />
          <div className={styles.nav}>
            <b>BRASA</b>
            <span className={styles.links}>
              <span>Serviços</span>
              <span>Resultados</span>
              <span>Contato</span>
            </span>
            <span className={styles.btn}>Orçamento</span>
          </div>
          <div className={styles.txt}>
            <h4>
              Seu carro, <em>como novo.</em>
            </h4>
            <p>Lavagem detalhada, polimento e proteção da pintura, com agenda pelo WhatsApp.</p>
            <span className={styles.btn}>Pedir orçamento</span>
          </div>
        </div>
        <div className={styles.mid}>
          <h5>Nossos serviços</h5>
          <div className={styles.cards}>
            <div className={styles.card}><Photo src="auto-polimento" sizes={THUMB} /><b>Polimento<span>desde R$ 380</span></b></div>
            <div className={styles.card}><Photo src="auto-lavagem" sizes={THUMB} /><b>Lavagem detalhada<span>desde R$ 120</span></b></div>
            <div className={styles.card}><Photo src="auto-esportivo" sizes={THUMB} /><b>Proteção da pintura<span>sob consulta</span></b></div>
          </div>
        </div>
        <div className={styles.foot}>Seg a Sáb, 8h às 18h · Agende pelo WhatsApp</div>
      </Frame>
    );
  }

  return (
    <Frame slug={slug}>
      <div className={styles.nav}>
        <b>Casa em <i>Ordem</i></b>
        <span className={styles.links}>
          <span>Serviços</span>
          <span>Como funciona</span>
          <span>Contato</span>
        </span>
        <span className={styles.btn}>Pedir orçamento</span>
      </div>
      <div className={styles.hero}>
        <div>
          <span className={styles.tag}>Curitiba e região</span>
          <h4>
            Reparos e reformas <em>sem dor de cabeça.</em>
          </h4>
          <p>Pintura, hidráulica e pequenas obras com hora marcada e orçamento combinado antes de começar.</p>
          <span className={styles.btn}>Pedir orçamento no WhatsApp</span>
          <ul>
            <li>Orçamento pelo WhatsApp</li>
            <li>Hora marcada</li>
            <li>Seg a Sáb</li>
          </ul>
        </div>
        <div className={styles.photoWrap}>
          <Photo src="casa-varanda" sizes={WIDE} className={styles.photo} priority={priority} />
          <div className={styles.chip}><b>Pintura externa</b>serviço mais pedido</div>
        </div>
      </div>
      <div className={styles.mid}>
        <h5>O que resolvemos</h5>
        <div className={styles.cards}>
          <div className={styles.card}><Photo src="casa-pintura" sizes={THUMB} /><b>Pintura</b><span>Interna e externa</span></div>
          <div className={styles.card}><Photo src="casa-hidraulica" sizes={THUMB} /><b>Hidráulica</b><span>Vazamentos e reparos</span></div>
          <div className={styles.card}><Photo src="casa-reforma" sizes={THUMB} /><b>Pisos e revestimentos</b><span>Instalação e reforma</span></div>
        </div>
      </div>
      <div className={styles.foot}>Atendimento de segunda a sábado, das 8h às 18h · Peça seu orçamento pelo WhatsApp</div>
    </Frame>
  );
}

function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.phone} aria-hidden="true">
      <div className={styles.pscr}>{children}</div>
    </div>
  );
}

export function SitePhone({ slug }: { slug: ExampleSlug }) {
  if (slug === "beleza") {
    return (
      <PhoneShell>
        <div className={styles.pLume}>
          <div className={styles.hero}>
            <Photo src="salao-ambiente" sizes={PHONE} className={styles.bg} />
            <div className={styles.top}>Lume<i>☰</i></div>
            <div>
              <small>Studio de beleza</small>
              <div className={styles.h}>Seu momento de <em>cuidado.</em></div>
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.t}>Cabelo, unhas e sobrancelha com hora marcada.</div>
            <span className={styles.cta}>Agendar pelo WhatsApp</span>
            <div className={styles.r}><b>Corte e escova</b><span>R$ 70</span></div>
            <div className={styles.r}><b>Manicure</b><span>R$ 55</span></div>
          </div>
        </div>
      </PhoneShell>
    );
  }
  if (slug === "confeitaria") {
    return (
      <PhoneShell>
        <div className={styles.pDoce}>
          <div className={styles.top}>Doce Alvorada<i>☰</i></div>
          <div className={styles.h}>Doces feitos <em>por encomenda.</em></div>
          <div className={styles.t}>Bolos, tortas e doces finos preparados no dia.</div>
          <span className={styles.cta}>Fazer meu pedido</span>
          <Photo src="doce-bolo" sizes={PHONE} className={styles.ph} />
        </div>
      </PhoneShell>
    );
  }
  if (slug === "automotivo") {
    return (
      <PhoneShell>
        <div className={styles.pBrasa}>
          <div className={styles.hero}>
            <Photo src="auto-hero" sizes={PHONE} className={styles.bg} />
            <div className={styles.top}>BRASA<i>☰</i></div>
            <div>
              <div className={styles.h}>Seu carro, <em>como novo.</em></div>
              <span className={styles.cta}>Pedir orçamento</span>
            </div>
          </div>
          <div className={styles.rows}>
            <div>Polimento<span>desde R$ 380</span></div>
            <div>Lavagem<span>desde R$ 120</span></div>
          </div>
        </div>
      </PhoneShell>
    );
  }
  return (
    <PhoneShell>
      <div className={styles.pCasa}>
        <div className={styles.top}>Casa em Ordem<i>☰</i></div>
        <span className={styles.tg}>Curitiba e região</span>
        <div className={styles.h}>Reparos e reformas <em>sem dor de cabeça.</em></div>
        <div className={styles.t}>Pintura, hidráulica e pequenas obras com hora marcada.</div>
        <span className={styles.cta}>Pedir orçamento</span>
        <Photo src="casa-varanda" sizes={PHONE} className={styles.ph} />
      </div>
    </PhoneShell>
  );
}
