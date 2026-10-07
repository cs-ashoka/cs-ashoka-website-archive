import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineCalendarMonth, MdOutlineImage } from "react-icons/md";
import { jetbrainsMono } from "@/utils/fonts";
import cn from "@/utils/cn";
import {
  getSortedPostsData,
  parseEventDate,
  formatEventDate,
  getAcademicYear,
  getCoverImage,
} from "@/lib/event-posts";

export const metadata: Metadata = {
  title: "Event recaps | CS Society @ Ashoka",
  description:
    "Recaps of CS Society events at Ashoka University, starting with this academic year.",
};

// Re-check once a day so "this year" rolls over in August without a redeploy.
export const revalidate = 86400;

// Events from this academic year that have happened (or are about to) but
// don't have a recap file yet. Each one shows as a red "recap coming" slot.
// Once you add the event's .mdx file in src/eventposts/, delete it from here.
const pendingRecaps = [
  { title: "CS Mixer 2026", note: "Recap goes up after the event." },
];

// The wall always shows at least this many slots, so it reads as a wall
// that fills up over the year.
const WALL_SLOTS = 8;

export default function EventsPage() {
  const currentYear = getAcademicYear(new Date());
  const recaps = getSortedPostsData();

  const thisYear = recaps.filter(
    (event) => getAcademicYear(parseEventDate(event.date)) === currentYear
  );
  const past = recaps.filter(
    (event) => getAcademicYear(parseEventDate(event.date)) !== currentYear
  );

  const filled = thisYear.length + pendingRecaps.length;
  const emptySlots = Math.max(WALL_SLOTS - filled, (4 - (filled % 4)) % 4);

  return (
    <main className="min-h-screen bg-background">
      {/* This year */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-60 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#e2e8f0 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 pt-14 md:pt-16 pb-16 md:pb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-10 md:mb-12">
            This year <span className="text-on-surface/60">·</span>{" "}
            <span className="tabular-nums">{currentYear}</span>
          </h1>

          <ul className="wall-fill grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {thisYear.map((event) => (
              <li key={event.slug}>
                <Link
                  href={`/events/${event.slug}`}
                  className="group relative block aspect-[7/4] overflow-hidden rounded-lg border border-border bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <Image
                    src={getCoverImage(event)}
                    alt=""
                    fill
                    unoptimized
                    sizes="(min-width: 768px) 25vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-2 bottom-2 rounded-md bg-surface/95 px-3 py-2 flex items-baseline justify-between gap-3">
                    <span className="font-semibold text-sm text-on-surface truncate group-hover:text-primary transition-colors">
                      {event.title}
                    </span>
                    <span
                      className={`${jetbrainsMono.className} text-[11px] text-secondary tabular-nums shrink-0`}
                    >
                      {formatEventDate(event.date)}
                    </span>
                  </div>
                </Link>
              </li>
            ))}

            {pendingRecaps.map((pending) => (
              <li
                key={pending.title}
                className="aspect-[7/4] rounded-lg border-2 border-dashed border-primary/60 bg-primary/[0.04] flex flex-col items-center justify-center text-center px-6"
              >
                <MdOutlineCalendarMonth className="text-3xl text-primary mb-3" aria-hidden />
                <p className="text-lg font-bold text-on-surface">{pending.title}</p>
                <span className="block w-6 h-px bg-on-surface/30 my-3" aria-hidden />
                <p
                  className={`${jetbrainsMono.className} text-secondary uppercase tracking-[0.18em] text-[11px] leading-relaxed max-w-[22ch]`}
                >
                  {pending.note}
                </p>
              </li>
            ))}

            {Array.from({ length: emptySlots }).map((_, i) => (
              <li
                key={`empty-${i}`}
                aria-hidden
                className={cn(
                  "aspect-[7/4] rounded-lg border border-dashed border-on-surface/20 items-center justify-center",
                  // Fewer empty frames on small screens: 1 on phones, 3 on tablets.
                  i === 0 && "flex",
                  i >= 1 && i < 3 && "hidden sm:flex",
                  i >= 3 && "hidden md:flex"
                )}
              >
                <MdOutlineImage className="text-5xl text-on-surface/10" />
              </li>
            ))}
          </ul>

          {thisYear.length === 0 && (
            <p className="sr-only">No recaps from {currentYear} yet.</p>
          )}
        </div>
      </section>

      {/* Past events */}
      {past.length > 0 && (
        <section className="border-t border-border">
          <div className="max-w-6xl mx-auto px-6 pt-10 pb-20">
            <h2
              className={`${jetbrainsMono.className} text-secondary uppercase tracking-[0.2em] text-xs mb-6`}
            >
              Past events
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8">
              {past.map((event) => (
                <li key={event.slug}>
                  <Link
                    href={`/events/${event.slug}`}
                    className="group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-surface-container">
                      <Image
                        src={getCoverImage(event)}
                        alt=""
                        fill
                        unoptimized
                        sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                        className="object-cover grayscale group-hover:grayscale-0 group-focus-visible:grayscale-0 transition-[filter] duration-500"
                      />
                    </div>
                    <h3 className="mt-3 text-sm md:text-[15px] font-semibold leading-snug line-clamp-2 text-on-surface group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p
                      className={`${jetbrainsMono.className} mt-1 text-xs text-secondary tabular-nums`}
                    >
                      {formatEventDate(event.date)}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
