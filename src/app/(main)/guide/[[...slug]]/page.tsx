import { notFound } from "next/navigation";
import Link from "next/link";
import GuideGrid from "@/components/GuideGrid";
import { guides } from "../../../../data/guide";

interface GuidePageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function GuidePage({
  params,
}: GuidePageProps) {
  const { slug } = await params;

  /*
   * /guide
   */

  if (!slug || slug.length === 0) {
    return (
      <div className="bg-white">

        {/* Hero */}

        <section className="border-b bg-gray-50">

          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Travel Guide
            </p>

            <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-gray-950 md:text-6xl">
              Travel smarter. Explore better.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
              Practical guides to help you plan your trip,
              manage your budget, pack smarter and travel
              safely.
            </p>

          </div>

        </section>


        {/* Guide Cards */}

        <section className="mx-auto max-w-7xl px-6 py-14">

          <div className="mb-10">

            <p className="text-sm text-gray-500">
              {guides.length} guides
            </p>

            <h2 className="mt-1 text-3xl font-bold">
              Travel Resources
            </h2>

          </div>

          <GuideGrid
            guides={guides}
          />

        </section>


        {/* CTA */}

        <section className="bg-gray-950">

          <div className="mx-auto max-w-4xl px-6 py-16 text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Start exploring
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Ready to discover your next destination?
            </h2>

            <Link
              href="/destinations"
              className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-gray-950 transition hover:bg-blue-600 hover:text-white"
            >
              Explore Destinations
            </Link>

          </div>

        </section>

      </div>
    );
  }


  /*
   * /guide/[slug]
   */

  const guideSlug = slug[0];

  const guide = guides.find(
    (item) => item.slug === guideSlug
  );

  if (!guide) {
    notFound();
  }


  return (
    <article>

      {/* Guide Hero */}

      <section className="border-b bg-gray-50">

        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">

          <Link
            href="/guide"
            className="text-sm font-medium text-gray-500 hover:text-blue-600"
          >
            ← Back to Travel Guide
          </Link>

          <div className="mt-10">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
              {guide.icon}
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-blue-600">
              {guide.category}
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 md:text-6xl">
              {guide.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {guide.description}
            </p>

            <p className="mt-4 text-sm text-gray-500">
              {guide.readTime}
            </p>

          </div>

        </div>

      </section>


      {/* Guide Content */}

      <section className="mx-auto max-w-4xl px-6 py-14">

        {/* Introduction */}

        <div className="rounded-2xl bg-blue-50 p-6 md:p-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Introduction
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-700">
            {guide.introduction}
          </p>

        </div>


        {/* Sections */}

        <div className="mt-14 space-y-12">

          {guide.sections.map(
            (section, index) => (

              <section
                key={section.title}
              >

                <div className="flex gap-4">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-950 text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  <div>

                    <h2 className="text-2xl font-bold">
                      {section.title}
                    </h2>

                    <p className="mt-4 leading-8 text-gray-600">
                      {section.content}
                    </p>

                  </div>

                </div>

              </section>

            )
          )}

        </div>


        {/* Tips */}

        <section className="mt-16">

          <h2 className="text-2xl font-bold">
            Quick Tips
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            {guide.tips.map(
              (tip, index) => (

                <div
                  key={tip}
                  className="rounded-xl border p-5"
                >

                  <div className="flex gap-3">

                    <span className="font-bold text-blue-600">
                      {index + 1}
                    </span>

                    <p className="text-sm leading-6 text-gray-600">
                      {tip}
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        </section>


        {/* Checklist */}

        <section className="mt-16 rounded-2xl border bg-gray-50 p-6 md:p-8">

          <h2 className="text-2xl font-bold">
            Travel Checklist
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">

            {guide.checklist.map(
              (item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white p-4"
                >

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm text-green-700">
                    ✓
                  </span>

                  <span className="text-sm text-gray-700">
                    {item}
                  </span>

                </div>

              )
            )}

          </div>

        </section>


        {/* Back */}

        <div className="mt-12 border-t pt-8">

          <Link
            href="/guide"
            className="font-semibold text-blue-600 hover:text-blue-800"
          >
            ← View all travel guides
          </Link>

        </div>

      </section>

    </article>
  );
}