/** Small formatting helpers shared across pages. */

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function formatYear(date: Date): string {
  return date.getFullYear().toString();
}

/** Rough reading time estimate from a Markdown body. */
export function readingTime(body: string | undefined): string {
  if (!body) return "1 min read";
  const words = body.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

/** Sort helper: newest first, with optional `order` field as a tie-breaker. */
export function byDateDesc<
  T extends { data: { date: Date; order?: number } }
>(a: T, b: T): number {
  const orderDiff = (b.data.order ?? 0) - (a.data.order ?? 0);
  if (orderDiff !== 0) return orderDiff;
  return b.data.date.valueOf() - a.data.date.valueOf();
}
