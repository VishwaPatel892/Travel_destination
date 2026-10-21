import DestinationGrid from "@/components/DestinationGrid";
import { destinations } from "../../../data/destination";

export default function DestinationsPage() {
  return (
    <div className="bg-white">

      {/* Page Hero */}

      <section className="border-b bg-gray-50">

        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Explore the world
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-gray-950 md:text-6xl">
            Find your next destination
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
            Discover beautiful places, unique cultures, memorable
            experiences and destinations worth exploring.
          </p>

          {/* Search UI */}

          <div className="mt-8 max-w-2xl">

            <div className="flex items-center gap-3 rounded-2xl border bg-white px-5 py-4 shadow-sm">

              <span className="text-xl">
                🔍
              </span>

              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />

            </div>

          </div>

        </div>

      </section>


      {/* Destination Section */}

      <section className="mx-auto max-w-7xl px-6 py-14">

        {/* Heading */}

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>

            <p className="text-sm font-medium text-gray-500">
              {destinations.length} places to explore
            </p>

            <h2 className="mt-1 text-3xl font-bold tracking-tight text-gray-950">
              All Destinations
            </h2>

          </div>

          <select
            className="rounded-xl border bg-white px-4 py-3 text-sm text-gray-700 outline-none"
            defaultValue="popular"
          >
            <option value="popular">
              Most Popular
            </option>

            <option value="rating">
              Highest Rated
            </option>

            <option value="budget">
              Budget Friendly
            </option>
          </select>

        </div>


        {/* Filters */}

        <div className="mt-8 flex flex-wrap gap-3">

          <button className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white">
            All
          </button>

          <button className="rounded-full border px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Asia
          </button>

          <button className="rounded-full border px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Europe
          </button>

          <button className="rounded-full border px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
            North America
          </button>

          <button className="rounded-full border px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Budget Friendly
          </button>

        </div>


        {/* Cards */}

        <div className="mt-10">

          <DestinationGrid
            destinations={destinations}
          />

        </div>

      </section>

    </div>
  );
}