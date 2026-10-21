import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-gray-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <h2 className="text-xl font-bold">
              TravelExplorer
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-400">
              Discover destinations, explore new cultures
              and plan your next adventure.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Explore
            </h3>

            <div className="mt-4 flex flex-col gap-2 text-sm text-gray-400">

              <Link href="/destinations">
                Destinations
              </Link>

              <Link href="/region">
                Regions
              </Link>

              <Link href="/about">
                About
              </Link>

            </div>
          </div>

          <div>
            <h3 className="font-semibold">
              Travel Smarter
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Explore travel information and discover
              destinations that match your interests.
            </p>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-sm text-gray-500">
          © 2026 TravelExplorer. Built with Next.js.
        </div>

      </div>

    </footer>
  );
}