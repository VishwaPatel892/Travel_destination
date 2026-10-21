"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-4xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-4 text-gray-600">
          We couldn't load this page.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white"
        >
          Try Again
        </button>

      </div>

    </div>
  );
}