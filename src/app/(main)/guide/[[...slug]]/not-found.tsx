import Link from "next/link";

export default function GuideNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">

      <p className="text-6xl font-bold text-gray-200">
        404
      </p>

      <h1 className="mt-4 text-3xl font-bold">
        Guide not found
      </h1>

      <p className="mt-4 text-gray-600">
        The travel guide you're looking for doesn't exist.
      </p>

      <Link
        href="/guide"
        className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
      >
        View Travel Guides
      </Link>

    </div>
  );
}