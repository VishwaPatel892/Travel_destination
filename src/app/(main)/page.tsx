import Link from "next/link";
import Image from "next/image";
import { destinations } from "../../data/destination";

export default function HomePage() {
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <div>

      {/* Hero */}

      <section className="relative overflow-hidden bg-gray-950 text-white">

        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">

          <div className="max-w-3xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Explore the world
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Discover your next destination.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Explore beautiful places, discover new cultures
              and find inspiration for your next journey.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/destinations"
                className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
              >
                Explore Destinations
              </Link>

              <Link
                href="/region"
                className="rounded-xl border border-white/30 px-6 py-3 font-medium hover:bg-white/10"
              >
                Browse Regions
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* Featured */}

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-10">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Featured
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Popular destinations
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {featuredDestinations.map((destination) => (

            <Link
              key={destination.id}
              href={`/destinations/${destination.slug}`}
              className="group overflow-hidden rounded-2xl border bg-white shadow-sm"
            >

              <div className="relative h-64">

                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              <div className="p-5">

                <p className="text-sm text-gray-500">
                  {destination.country}
                </p>

                <h3 className="mt-1 text-xl font-semibold">
                  {destination.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {destination.shortDescription}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </section>

    </div>
  );
}