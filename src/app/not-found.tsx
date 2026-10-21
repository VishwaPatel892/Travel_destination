import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">

      <div className="text-center">

        <p className="text-7xl font-bold text-gray-200">
          404
        </p>

        <h1 className="mt-4 text-3xl font-bold">
          Page Not Found
        </h1>

        <p className="mt-3 text-gray-600">
          The page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white"
        >
          Go Home
        </Link>

      </div>

    </div>
  );
}