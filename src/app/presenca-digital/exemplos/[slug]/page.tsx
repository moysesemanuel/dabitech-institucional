import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExampleSiteView } from "@/components/presenca-digital/example-site";
import { LandingTracker } from "@/components/presenca-digital/tracker";
import { EXAMPLES, LANDING_PATH, type ExampleSlug } from "@/lib/presenca-digital";
import { EXAMPLE_SITES } from "@/lib/presenca-exemplos";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return EXAMPLES.map((example) => ({ slug: example.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const site = EXAMPLE_SITES[slug as ExampleSlug];
  if (!site) return {};
  return {
    title: site.title,
    description: site.description,
    alternates: { canonical: `${LANDING_PATH}/exemplos/${slug}` },
    // Projetos demonstrativos: não devem competir com a landing nos resultados de busca.
    robots: { index: false, follow: true },
  };
}

export default async function ExamplePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const site = EXAMPLE_SITES[slug as ExampleSlug];
  if (!site) notFound();

  return (
    <>
      <ExampleSiteView site={site} />
      <LandingTracker />
    </>
  );
}
