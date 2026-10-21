import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/types/destination";

interface DestinationDetailsProps {
  destination: Destination;
  relatedDestinations: Destination[];
}

export default function DestinationDetails({
  destination,
  relatedDestinations,
}: DestinationDetailsProps) {
  return (
    <article>

      {/* Hero */}

      <section className="relative h-[500px]">

        <Image
          src={destination.image}
          alt={destination.name}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-end">

          <div className="mx-auto w-full max-w-7xl px-6 pb-12 text-white">

            <p className="text-sm font-medium">
              {destination.country} · {destination.region}
            </p>

            <h1 className="mt-2 text-5xl font-bold md:text-6xl">
              {destination.name}
            </h1>

            <div className="mt-4 flex items-center gap-4">

              <span>
                ⭐ {destination.rating}
              </span>

              <span>
                {destination.budget}
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* Content */}

      <section className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-12 lg:grid-cols-3">

          {/* Main */}

          <div className="lg:col-span-2">

            <h2 className="text-3xl font-bold">
              About {destination.name}
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              {destination.description}
            </p>


            {/* Popular For */}

            <div className="mt-10">

              <h2 className="text-2xl font-bold">
                Popular For
              </h2>

              <div className="mt-4 flex flex-wrap gap-3">

                {destination.popularFor.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-700"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>


            {/* Attractions */}

            <div className="mt-12">

              <h2 className="text-2xl font-bold">
                Top Attractions
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">

                {destination.attractions.map(
                  (attraction, index) => (

                    <div
                      key={attraction}
                      className="rounded-xl border p-4"
                    >

                      <span className="mr-3 font-semibold text-blue-600">
                        0{index + 1}
                      </span>

                      {attraction}

                    </div>

                  )
                )}

              </div>

            </div>


            {/* Activities */}

            <div className="mt-12">

              <h2 className="text-2xl font-bold">
                Things To Do
              </h2>

              <ul className="mt-5 space-y-3">

                {destination.activities.map(
                  (activity) => (

                    <li
                      key={activity}
                      className="flex gap-3"
                    >
                      <span className="text-blue-600">
                        ✓
                      </span>

                      {activity}
                    </li>

                  )
                )}

              </ul>

            </div>

          </div>


          {/* Sidebar */}

          <aside>

            <div className="sticky top-24 rounded-2xl border bg-gray-50 p-6">

              <h2 className="text-xl font-bold">
                Travel Information
              </h2>

              <div className="mt-6 space-y-5">

                <div>
                  <p className="text-sm text-gray-500">
                    Best Time To Visit
                  </p>

                  <p className="mt-1 font-medium">
                    {destination.bestTimeToVisit}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Average Daily Cost
                  </p>

                  <p className="mt-1 font-medium">
                    ${destination.averageCostPerDay}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Budget Type
                  </p>

                  <p className="mt-1 font-medium">
                    {destination.budget}
                  </p>
                </div>

              </div>

            </div>

          </aside>

        </div>


        {/* Travel Tips */}

        <section className="mt-16">

          <h2 className="text-2xl font-bold">
            Travel Tips
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            {destination.travelTips.map(
              (tip, index) => (

                <div
                  key={tip}
                  className="rounded-xl border p-5"
                >

                  <span className="font-bold text-blue-600">
                    Tip {index + 1}
                  </span>

                  <p className="mt-2 text-gray-600">
                    {tip}
                  </p>

                </div>

              )
            )}

          </div>

        </section>


        {/* Related Destinations */}

        <section className="mt-16">

          <h2 className="text-2xl font-bold">
            You May Also Like
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">

            {relatedDestinations.map(
              (related) => (

                <Link
                  key={related.id}
                  href={`/destinations/${related.slug}`}
                  className="rounded-xl border p-5 transition hover:shadow-md"
                >

                  <h3 className="text-lg font-semibold">
                    {related.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {related.country}
                  </p>

                </Link>

              )
            )}

          </div>

        </section>

      </section>

    </article>
  );
}