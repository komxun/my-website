/**
 * Central site configuration.
 *
 * Edit the values here to update the brand, navigation and social links
 * across the whole site in one place.
 */

export const site = {
  name: "Komsun Tamanakijprasart",
  brand: "KOMSUN T",
  role: "Aerospace & Autonomous Vehicle Engineer",
  description:
    "Aerospace engineer specialising in UAV autonomy, swarm intelligence, guidance, navigation and control.",
  // Stable CV path — overwrite this file on updates so the link never breaks.
  cv: "/Komsun_Tamanakijprasart_CV.pdf",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Research", href: "/research/" },
  { label: "Projects", href: "/projects/" },
  { label: "Software", href: "/software/" },
  { label: "Knowledge", href: "/knowledge/" },
  { label: "Videos", href: "/videos/" },
];

/** Social / external profiles. Leave `href` empty ("") to hide a link. */
export const socials = [
  { label: "GitHub", href: "https://github.com/komxun" },
  { label: "YouTube", href: "https://www.youtube.com/@komxun" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/komsun-tamanakijprasart-5a82709b/" },
  { label: "Email", href: "mailto:komxun@gmail.com" },
].filter((s) => s.href);
