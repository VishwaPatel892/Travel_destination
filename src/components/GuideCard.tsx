import Link from "next/link";
import { Guide } from "@/types/guide";

interface GuideCardProps {
  guide: Guide;
}

export default function GuideCard({
  guide,
}: GuideCardProps) {
  return (
    <article className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Icon */}

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
        {guide.icon}
      </div>

      {/* Category */}

      <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-blue-600">
        {guide.category}
      </p>

      {/* Title */}

      <h2 className="mt-2 text-2xl font-bold text-gray-950">
        {guide.title}
      </h2>

      {/* Description */}

      <p className="mt-3 text-sm leading-6 text-gray-600">
        {guide.description}
      </p>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between border-t pt-5">

        <span className="text-xs text-gray-500">
          {guide.readTime}
        </span>

        <Link
          href={`/guide/${guide.slug}`}
          className="text-sm font-semibold text-gray-950 transition group-hover:text-blue-600"
        >
          Read Guide →
        </Link>

      </div>

    </article>
  );
}