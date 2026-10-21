import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/types/destination";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({
  destination,
}: DestinationCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <Link href={`/destinations/${destination.slug}`}>

        <div className="relative h-64 overflow-hidden">

          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />

        </div>

      </Link>

      <div className="p-5">

        <div className="flex items-center justify-between">

          <span className="text-sm text-gray-500">
            {destination.country}
          </span>

          <span className="text-sm">
            ⭐ {destination.rating}
          </span>

        </div>

        <h2 className="mt-2 text-2xl font-bold">
          {destination.name}
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {destination.shortDescription}
        </p>

        <div className="mt-4 flex items-center justify-between">

          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
            {destination.budget}
          </span>

          <Link
            href={`/destinations/${destination.slug}`}
            className="font-medium text-blue-600 hover:text-blue-800"
          >
            View Details →
          </Link>

        </div>

      </div>

    </article>
  );
}