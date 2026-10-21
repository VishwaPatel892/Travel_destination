import Link from "next/link";
import { notFound } from "next/navigation";
import DestinationGrid from "@/components/DestinationGrid";
import { destinations } from "../../../../data/destination";
import { regions } from "../../../../data/regions";

interface RegionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function RegionPage({ params }: RegionPageProps) {
  const { slug } = await params;
  const region = regions.find((item) => item.slug === slug);

  if (!region) {
    notFound();
  }

  const regionDestinations = destinations.filter(
    (destination) => destination.continent === region.continent,
  );

  return (
    <div className="bg-white">
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <Link
            href="/region"
            className="text-sm font-medium text-gray-500 hover:text-blue-600"
          >
            ← All regions
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Explore by region
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 md:text-6xl">
            {region.name}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
            {region.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <p className="text-sm text-gray-500">
          {regionDestinations.length} destinations
        </p>
        <h2 className="mb-8 mt-1 text-3xl font-bold tracking-tight text-gray-950">
          Explore {region.name}
        </h2>
        <DestinationGrid destinations={regionDestinations} />
      </section>
    </div>
  );
}