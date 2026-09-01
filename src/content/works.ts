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
    slug: "godot-jams",
    title: "Godot Jams",
    year: "2022–2025",
    role: "Solo developer — code, art, music",
    disciplines: ["Games", "Art", "Music"],
    featured: true,
    featuredOrder: 1,
    tools: ["Godot", "Aseprite", "LMMS"],
    summary:
      "A body of game jam games built in Godot — each one a complete solo loop of code, art, and music.",
    problem:
      "Jam games fail when scope sprawls. Every entry here had to ship as one verb, a readable look, and a short mix — not a pile of half-finished ideas.",
    made:
      "Each game was built solo in Godot: gameplay systems, pixel art, and original music. The cover is a collage of the full set — proof that I can carry a jam from concept to playable build without splitting the work across a team.",
    outcome:
      "An archive of finished games, not a single title. Each entry shows I can write the code, draw the art, and score the audio — the full stack, on a deadline.",
    cover: "/covers/godot-jams.jpg",
    coverAlt: "Collage of game jam titles built in Godot.",
    media: [
      {
        type: "image",
        src: "/covers/godot-jams.jpg",
        alt: "Collage of Godot game jam games.",
      },
    ],
    links: [{ label: "itch.io (replace)", href: "https://itch.io" }],
  },
  {
    slug: "jam-3d",
    title: "3D Jam Games",
    year: "2023–2025",
    role: "Solo developer",
    disciplines: ["Games"],
    featured: true,
    featuredOrder: 2,
    tools: ["Godot", "Blender"],
    summary:
      "The 3D subset of my jam archive — camera, lighting, and mesh pipeline instead of sprite boards.",
    problem:
      "The 2D jam collage shows range across a lot of small games. These 3D entries needed a different production language: readable silhouettes at distance, lighting that sells the space, and a mesh pipeline that survives the jam clock.",
    made:
      "Each game was built solo in Godot with Blender assets — blockout to final mesh, camera placement, and in-engine lighting. Same jam constraints as the 2D set, but the work lives in 3D space instead of sprite sheets.",
    outcome:
      "A companion to the jam collage that shows the difference: not just more games, but a different craft — 3D layout, camera grammar, and mesh work under the same deadline pressure.",
    cover: "/covers/jam-3d.jpg",
    coverAlt: "Stills from 3D game jam projects.",
    media: [
      {
        type: "image",
        src: "/covers/jam-3d.jpg",
        alt: "3D game jam stills.",
      },
    ],
    links: [{ label: "itch.io (replace)", href: "https://itch.io" }],
  },
  {
    slug: "split-keyboard",
    title: "Split Keyboard",
    year: "2024",
    role: "Hardware designer",
    disciplines: ["Hardware"],
    featured: true,
    featuredOrder: 3,
    tools: ["KiCad", "QMK", "Fusion 360", "3D print"],
    summary:
      "A DIY split keyboard built from scratch — PCB, layout, 3D-printed case and keycaps, all self-taught.",
    problem:
      "Off-the-shelf boards did not match how I type or sit at a desk. I needed a split layout with the right thumb cluster and a case I could actually live with every day.",
    made:
      "I designed the PCB in KiCad, laid out the switch matrix and thumb clusters, wrote the QMK firmware, and 3D-printed the case and keycaps. Every part of the stack — electrical, mechanical, and firmware — was learned and built without a kit.",
    outcome:
      "A working daily driver that shows I will invent the tool when nothing off the shelf fits. The photos here are the board, the PCB, the printed case, and the caps.",
    cover: "/covers/split-keyboard.jpg",
    coverAlt: "DIY split keyboard on a desk.",
    media: [
      {
        type: "image",
        src: "/covers/split-keyboard.jpg",
        alt: "Finished split keyboard.",
      },
      {
        type: "image",
        src: "/covers/split-keyboard-pcb.jpg",
        alt: "Custom PCB layout.",
      },
      {
        type: "image",
        src: "/covers/split-keyboard-case.jpg",
        alt: "3D-printed case halves.",
      },
      {
        type: "image",
        src: "/covers/split-keyboard-caps.jpg",
        alt: "3D-printed keycaps.",
      },
    ],
    links: [],
  },
  {
    slug: "channels",
    title: "Channels",
    year: "2020–2025",
    role: "Editor, channel lead",
    disciplines: ["Video"],
    featured: true,
    featuredOrder: 4,
    tools: ["Premiere", "DaVinci Resolve", "After Effects"],
    summary:
      "YouTube channels across long-form, shorts, and trailers — different formats, different editing styles, built to hold an audience.",
    problem:
      "One editing style does not fit every format. Long-form needs pacing and payoff; shorts need a hook in the first second; trailers need to sell play without dumping footage. Each channel demanded a different cut.",
    made:
      "I ran multiple channels and adapted the edit to the format: talking-head pacing for long-form, tight loops for shorts, and cinematic grammar for trailers and reels. The reel below is a sample of that range.",
    outcome:
      "Video here is evidence of format fluency — the same eye for picture that shows up in game cinematics, applied across channels that actually grew an audience.",
    cover: "/covers/channels.jpg",
    coverAlt: "Channel thumbnails and edit stills.",
    media: [
      {
        type: "youtube",
        id: "VIDEO_ID",
        title: "Editing reel (replace VIDEO_ID)",
      },
      {
        type: "image",
        src: "/covers/channels.jpg",
        alt: "Channel and edit stills.",
      },
    ],
    links: [
      { label: "Channel (replace)", href: "https://youtube.com/@channel-one" },
      { label: "Channel (replace)", href: "https://youtube.com/@channel-two" },
    ],
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

export const disciplineColors: Record<
  Discipline,
  { fill: string; text: string; hex: string }
> = {
  Games: { fill: "bg-punch", text: "text-white", hex: "#ff006d" },
  Art: { fill: "bg-electric", text: "text-black", hex: "#01befe" },
  Music: { fill: "bg-sun", text: "text-black", hex: "#ffdd00" },
  Hardware: { fill: "bg-blaze", text: "text-black", hex: "#ff7d00" },
  Video: { fill: "bg-violet", text: "text-white", hex: "#8f00ff" },
};
