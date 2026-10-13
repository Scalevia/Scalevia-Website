// Central place for business details.
export const site = {
  name: "ScaleVia",
  url: "https://scalevia.net",
  email: "tech@scalevia.net",
  // International format, digits only. The first one is used for WhatsApp.
  phones: ["201283678910", "201210670664", "201090939386"],
  whatsapp: "201283678910",
  socials: {
    github: "https://github.com/Scalevia",
    linkedin: "",
    instagram: "",
    facebook: "",
    x: "",
  },
  cities: {
    ar: ["القاهرة", "الإسماعيلية", "بورسعيد"],
    en: ["Cairo", "Ismailia", "Port Said"],
  },
  techStack: [
    { name: "React", logo: "/tech/react.svg" },
    { name: "Next.js", logo: "/tech/nextjs.svg", invertInDark: true },
    { name: "Flutter", logo: "/tech/flutter.svg" },
    { name: "Node.js", logo: "/tech/nodejs.svg" },
    { name: "NestJS", logo: "/tech/nestjs.png" },
    { name: "Figma", logo: "/tech/figma.svg" },
  ],
};

// How many FAQ items the home page shows; the rest appear on the contact page.
export const HOME_FAQ_COUNT = 4;

export function whatsappLink(text?: string) {
  if (!site.whatsapp) return "/contact";
  const q = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${site.whatsapp}${q}`;
}

// "201283678910" → "+20 128 367 8910"
export function formatPhone(digits: string) {
  const m = digits.match(/^20(\d{3})(\d{3})(\d{4})$/);
  return m ? `+20 ${m[1]} ${m[2]} ${m[3]}` : `+${digits}`;
}
