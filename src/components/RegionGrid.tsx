import { Region } from "../data/regions";
import RegionCard from "./RegionCard";

interface RegionGridProps {
  regions: Region[];
}

export default function RegionGrid({
  regions,
}: RegionGridProps) {
  if (regions.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed p-12 text-center">

        <div className="text-4xl">
          🌍
        </div>

        <h2 className="mt-4 text-xl font-semibold">
          No regions found
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Try exploring another part of the world.
        </p>

      </div>
    );
  }

  return (
    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

      {regions.map((region) => (
        <RegionCard
          key={region.id}
          region={region}
        />
      ))}

    </div>
  );
}