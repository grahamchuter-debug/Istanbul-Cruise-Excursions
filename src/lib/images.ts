export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: {
    base: "hero-home",
    src: `${B}/hero-home.jpg`,
    alt: "Hagia Sophia and Blue Mosque skyline above the Golden Horn at golden hour — Istanbul cruise port",
  },
  ogDefault: {
    base: "og-default",
    src: `${B}/og-default.jpg`,
    alt: "Istanbul Historic Peninsula with Hagia Sophia dome and minarets — cruise excursion planning",
  },
  logo: {
    base: "logo-mark",
    src: `${B}/logo-mark.svg`,
    alt: "Istanbul Cruise Excursions",
  },
  port: {
    base: "cruise-port",
    src: `${B}/cruise-port.jpg`,
    alt: "Galataport Istanbul cruise terminal on the Bosphorus waterfront",
  },
} as const;

export const subjectImages: Record<string, SiteImage> = {
  "hagia-sophia": { base: "hagia-sophia", src: `${B}/hagia-sophia.jpg`, alt: "Hagia Sophia dome and minarets in Istanbul's Historic Peninsula" },
  "blue-mosque": { base: "blue-mosque", src: `${B}/blue-mosque.jpg`, alt: "Blue Mosque courtyard and cascading domes in Sultanahmet" },
  "topkapi-palace": { base: "topkapi-palace", src: `${B}/topkapi-palace.jpg`, alt: "Topkapi Palace gates overlooking the Bosphorus" },
  "basilica-cistern": { base: "basilica-cistern", src: `${B}/basilica-cistern.jpg`, alt: "Illuminated columns inside the Basilica Cistern" },
  "grand-bazaar": { base: "grand-bazaar", src: `${B}/grand-bazaar.jpg`, alt: "Colourful lanterns and stalls in Istanbul's Grand Bazaar" },
  "spice-bazaar": { base: "spice-bazaar", src: `${B}/spice-bazaar.jpg`, alt: "Spice pyramids at Istanbul's Egyptian Spice Bazaar" },
  bosphorus: { base: "bosphorus", src: `${B}/bosphorus.jpg`, alt: "Bosphorus strait with mosques and waterfront palaces" },
  food: { base: "food", src: `${B}/food.jpg`, alt: "Turkish meze, kebabs and traditional dishes in Istanbul" },
  highlights: { base: "highlights", src: `${B}/highlights.jpg`, alt: "Istanbul skyline with Hagia Sophia and the Bosphorus" },
  walking: { base: "walking", src: `${B}/walking.jpg`, alt: "Walking across Galata Bridge from Galataport toward Sultanahmet" },
  "europe-asia": { base: "europe-asia", src: `${B}/europe-asia.jpg`, alt: "Bosphorus crossing between Europe and Asia in Istanbul" },
  planner: { base: "city-highlights", src: `${B}/city-highlights.jpg`, alt: "Planning an Istanbul cruise port day" },
  "city-highlights": { base: "city-highlights", src: `${B}/city-highlights.jpg`, alt: "Panoramic view over Istanbul's Historic Peninsula" },
  galataport: img("cruise-port", "Galataport Istanbul cruise terminal"),
  comparison: { base: "highlights", src: `${B}/highlights.jpg`, alt: "Istanbul cruise excursion comparison" },
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "istanbul-highlights-tour": "highlights",
  "hagia-sophia-and-blue-mosque-tour": "hagia-sophia",
  "topkapi-palace-tour": "topkapi-palace",
  "basilica-cistern-tour": "basilica-cistern",
  "grand-bazaar-and-spice-bazaar-tour": "grand-bazaar",
  "bosphorus-cruise": "bosphorus",
  "europe-and-asia-tour": "europe-asia",
  "istanbul-food-tour": "food",
  "private-istanbul-shore-excursion": "highlights",
  "istanbul-walking-tour": "walking",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "city-highlights");
}

export const excursionsHubImage = pick("highlights");

const guideImageKeys: Record<string, string> = {
  "hagia-sophia": "hagia-sophia",
  "blue-mosque": "blue-mosque",
  "topkapi-palace": "topkapi-palace",
  "basilica-cistern": "basilica-cistern",
  "grand-bazaar": "grand-bazaar",
  "spice-bazaar": "spice-bazaar",
  bosphorus: "bosphorus",
  food: "food",
  walking: "walking",
  "europe-asia": "europe-asia",
  highlights: "highlights",
  comparison: "comparison",
  "city-highlights": "city-highlights",
};

export function getGuideImage(key: string): SiteImage {
  return pick(guideImageKeys[key] ?? key);
}
