/** Thumbnail + media helpers shared across components. */

const gradients = [
  "linear-gradient(135deg, #1D4ED8, #0B1120)",
  "linear-gradient(135deg, #F97316, #7C2D12)",
  "linear-gradient(135deg, #0EA5E9, #0B1120)",
  "linear-gradient(135deg, #8B5CF6, #1E1B4B)",
  "linear-gradient(135deg, #059669, #0B1120)",
  "linear-gradient(135deg, #DB2777, #1E1B4B)",
];

/** Deterministic gradient for a seed string (same seed → same gradient). */
export function gradientFor(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return gradients[hash % gradients.length];
}

/** Up to two uppercase initials from a title, for placeholder thumbnails. */
export function initials(s: string): string {
  return (
    s
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase())
      .join("") || "·"
  );
}

/**
 * Normalise a YouTube ID. Accepts a raw ID, an ID with a trailing query
 * (e.g. "abc123?si=..."), or a full watch/share URL, and returns just the ID.
 */
export function youTubeId(raw: string): string {
  const value = raw.trim();
  const urlMatch = value.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&/]+)/
  );
  if (urlMatch) return urlMatch[1];
  // Otherwise strip any query/fragment/path that got pasted along with the ID.
  return value.split(/[?&/#]/)[0];
}

export const youTubeThumbnail = (raw: string) =>
  `https://i.ytimg.com/vi/${youTubeId(raw)}/hqdefault.jpg`;

export const youTubeWatchUrl = (raw: string) =>
  `https://www.youtube.com/watch?v=${youTubeId(raw)}`;
