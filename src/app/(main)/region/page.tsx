import RegionGrid from "@/components/RegionGrid";
import { regions } from "../../../data/regions";

export default function RegionsPage() {
  return (
    <div className="bg-white">

      {/* Hero */}

      <section className="border-b bg-gray-50">

        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Explore by region
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-gray-950 md:text-6xl">
            Discover the world by region
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
            From the ancient temples of Asia to the
            dramatic landscapes of Europe and Africa,
            explore destinations across the globe.
          </p>

        </div>

      </section>


      {/* Regions */}

      <section className="mx-auto max-w-7xl px-6 py-14">

        {/* Section heading */}

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">

          <div>

            <p className="text-sm text-gray-500">
              {regions.length} regions
            </p>

            <h2 className="mt-1 text-3xl font-bold tracking-tight text-gray-950">
              Choose a region
            </h2>

          </div>

          <p className="max-w-md text-sm leading-6 text-gray-500 md:text-right">
            Select a region to discover destinations,
            cultures, attractions and travel experiences.
          </p>

        </div>


        {/* Region cards */}

        <div className="mt-10">

          <RegionGrid
            regions={regions}
          />

        </div>

      </section>


      {/* Bottom CTA */}

      <section className="border-t bg-gray-950">

        <div className="mx-auto max-w-7xl px-6 py-16 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Ready to explore?
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Find your next destination
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Browse all destinations and find the perfect
            place for your next journey.
          </p>

          <a
            href="/destinations"
            className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-gray-950 transition hover:bg-blue-600 hover:text-white"
          >
            View All Destinations
          </a>

        </div>

      </section>

    </div>
  );
}