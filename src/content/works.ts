export const disciplines = [
  "Games",
  "Art",
  "Music",
  "Hardware",
  "Video",
] as const;

export type Discipline = (typeof disciplines)[number];

export type WorkMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "youtube"; id: string; title: string }
  | { type: "audio"; src: string; title: string };

export type WorkLink = { label: string; href: string };

export type Work = {
  slug: string;
  title: string;
  year: string;
  role: string;
  disciplines: Discipline[];
  featured: boolean;
  featuredOrder?: number;
  tools: string[];
  summary: string;
  problem: string;
  made: string;
  outcome: string;
  cover: string;
  coverAlt: string;
  media: WorkMedia[];
  links: WorkLink[];
};

export const works: Work[] = [
  {
    slug: "ashline",
    title: "Ashline",
    year: "2025",
    role: "Director, systems, cinematics",
    disciplines: ["Games", "Art", "Video"],
    featured: true,
    featuredOrder: 1,
    tools: ["Unity", "Cinemachine", "Photoshop", "DaVinci Resolve"],
    summary:
      "A quiet infiltration game about crossing a burned city without raising the skyline.",
    problem:
      "Stealth fantasy usually shouts. Ashline needed tension that came from light, sound, and camera — the same language a trailer would later have to sell.",
    made:
      "I owned the vertical slice: encounter pacing, cover language, a locked-off cinematic grammar, and a one-minute playable intro that doubles as the teaser.",
    outcome:
      "The slice is the application piece: a complete loop a producer can play, plus stills and an edit that match the in-engine look.",
    cover: "/covers/ashline.jpg",
    coverAlt: "Letterboxed still of a dim, smoke-washed interior.",
    media: [
      {
        type: "image",
        src: "/covers/ashline.jpg",
        alt: "Ashline key art — tungsten light through haze.",
      },
    ],
    links: [{ label: "Playable build (replace)", href: "https://itch.io" }],
  },
  {
    slug: "field-notes",
    title: "Field Notes",
    year: "2024",
    role: "Environment concept, look development",
    disciplines: ["Art"],
    featured: true,
    featuredOrder: 2,
    tools: ["Photoshop", "Blender", "Krita"],
    summary:
      "Location boards for a coastal stronghold: weather, time of day, and how a player would actually walk them.",
    problem:
      "Concept art that only looks good as a poster fails in production. These boards had to survive lighting, graybox, and a camera on a stick.",
    made:
      "A set of sequential stills — approach, threshold, interior — with notes on materials, practical lights, and silhouette reads at gameplay distance.",
    outcome:
      "A look package a level artist or lighting TD can argue with, not a pile of disconnected hero shots.",
    cover: "/covers/field-notes.jpg",
    coverAlt: "Muted landscape still with a warm horizon line.",
    media: [
      {
        type: "image",
        src: "/covers/field-notes.jpg",
        alt: "Field Notes environment board.",
      },
    ],
    links: [],
  },
  {
    slug: "low-tide",
    title: "Low Tide",
    year: "2024",
    role: "Composer, sound design",
    disciplines: ["Music", "Games"],
    featured: true,
    featuredOrder: 3,
    tools: ["Reaper", "Ableton", "Wwise"],
    summary:
      "A bed of drones and close mics for a shoreline level — music that leaves room for footsteps.",
    problem:
      "Score that competes with Foley makes stealth unreadable. The cue had to hold mood without painting over player information.",
    made:
      "A looping stem set (beds, swells, stingers) and a short mix you can hear on this page. Replace the placeholder drone with your real track.",
    outcome:
      "Audio that sits under picture the way a studio mixer would expect: present, not decorative.",
    cover: "/covers/low-tide.jpg",
    coverAlt: "Cool, dim seascape framed in letterbox bars.",
    media: [
      {
        type: "audio",
        src: "/audio/low-tide.wav",
        title: "Low Tide — bed (placeholder drone)",
      },
      {
        type: "image",
        src: "/covers/low-tide.jpg",
        alt: "Low Tide still.",
      },
    ],
    links: [],
  },
  {
    slug: "drift-rig",
    title: "Drift Rig",
    year: "2023",
    role: "Hardware design, firmware",
    disciplines: ["Hardware", "Games"],
    featured: true,
    featuredOrder: 4,
    tools: ["KiCad", "PlatformIO", "Blender"],
    summary:
      "A custom analog stick-and-slider board built for a driving prototype that needed more than a pad.",
    problem:
      "The vehicle feel was limited by a standard controller. We needed travel, detents, and a layout that matched the in-game dash.",
    made:
      "Enclosure, PCB, and firmware for a USB HID device — sliders mapped to throttle and trim, with a dead-man switch for the slice demo.",
    outcome:
      "Playtesters stopped talking about the pad and started talking about the car. The rig is the kind of extra that shows you will invent the tool if the seat requires it.",
    cover: "/covers/drift-rig.jpg",
    coverAlt: "Warm workshop light on a dark metal surface.",
    media: [
      {
        type: "image",
        src: "/covers/drift-rig.jpg",
        alt: "Drift Rig workshop still.",
      },
    ],
    links: [{ label: "Firmware repo (replace)", href: "https://github.com" }],
  },
  {
    slug: "cut-room",
    title: "Cut Room",
    year: "2023–2025",
    role: "Editor, channel lead",
    disciplines: ["Video", "Games"],
    featured: true,
    featuredOrder: 5,
    tools: ["Premiere", "DaVinci Resolve", "After Effects"],
    summary:
      "Trailers, recaps, and a long-running channel — picture cut to sell play, not just footage.",
    problem:
      "Gameplay dumps do not hire you. A studio needs to see that you can hold a shot, cut on impact, and protect the look of the game.",
    made:
      "A reel structure (hook, loop, payoff) and channel packaging. Drop your YouTube ID into this entry to embed the real cut.",
    outcome:
      "Video here is evidence of cinematic literacy — the same taste used on Ashline’s in-engine camera.",
    cover: "/covers/cut-room.jpg",
    coverAlt: "Dark red-room still suggesting an edit bay.",
    media: [
      {
        type: "image",
        src: "/covers/cut-room.jpg",
        alt: "Cut Room still.",
      },
    ],
    links: [
      { label: "YouTube (replace)", href: "https://youtube.com" },
    ],
  },
  {
    slug: "harbor-jam",
    title: "Harbor Jam",
    year: "2022",
    role: "Solo developer",
    disciplines: ["Games"],
    featured: false,
    tools: ["Godot", "Aseprite"],
    summary:
      "A 48-hour jam about docking under a falling tide. Small, complete, and playable.",
    problem:
      "Jam games sprawl. This one needed one verb, one failure state, and a readable silhouette at a distance.",
    made:
      "A single pier, a timing puzzle, and a two-track mix. Replace with your real jam or student piece.",
    outcome:
      "Proof of finish: a page, a build, a date.",
    cover: "/covers/harbor-jam.jpg",
    coverAlt: "Cool dusk still over a harbor.",
    media: [
      {
        type: "image",
        src: "/covers/harbor-jam.jpg",
        alt: "Harbor Jam still.",
      },
    ],
    links: [{ label: "itch.io (replace)", href: "https://itch.io" }],
  },
];

export function getWork(slug: string) {
  return works.find((work) => work.slug === slug);
}

export function getFeaturedWorks() {
  return works
    .filter((work) => work.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
}

export function getWorksByDiscipline(discipline?: Discipline) {
  if (!discipline) return works;
  return works.filter((work) => work.disciplines.includes(discipline));
}

export function isDiscipline(value: string): value is Discipline {
  return (disciplines as readonly string[]).includes(value);
}
