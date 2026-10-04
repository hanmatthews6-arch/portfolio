export type BeautyProduct = {
  id: string;
  brand: string;
  name: string;
  category: string;
  role: string;
  imageUrl: string;
  productUrl: string;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
};

export const beautyProducts: BeautyProduct[] = [
  // Rhode
  {
    id: "rhode-glazing-milk",
    brand: "Rhode",
    name: "Glazing Milk",
    category: "Skincare",
    role: "Custom Packaging",
    imageUrl: "https://cdn.shopify.com/s/files/1/0606/5451/8510/files/glazing-milk-sq.png?v=1746170157",
    productUrl: "https://www.rhodeskin.com/products/glazing-milk?variant=44178822004974",
  },
  {
    id: "rhode-highlight-milk",
    brand: "Rhode",
    name: "Highlight Milk",
    category: "Skincare",
    role: "Custom Packaging",
    imageUrl: "https://www.rhodeskin.com/cdn/shop/files/highlight-milk-3-main_medium.png?v=1779479718",
    productUrl: "https://www.rhodeskin.com/products/highlight-milk-03",
  },
  {
    id: "rhode-spotwear-daisy",
    brand: "Rhode",
    name: "Spotwear Daisy",
    category: "Skincare",
    role: "Custom Packaging",
    imageUrl: "https://cdn.shopify.com/s/files/1/0606/5451/8510/files/spotwear-daisy-main-png-2000x2000.png?v=1775250413",
    productUrl: "https://www.rhodeskin.com/products/spotwear-daisy",
  },
  {
    id: "rhode-caffeine-reset",
    brand: "Rhode",
    name: "Caffeine Reset",
    category: "Skincare",
    role: "HCT Stock Packaging",
    imageUrl: "https://www.rhodeskin.com/cdn/shop/files/main-png-caffeine-reset_1024x1024.png?v=1770090005",
    productUrl: "https://www.rhodeskin.com/products/caffeine-reset",
  },
  // Wonderblush
  {
    id: "wonderblush-le-fondant-cream-blush",
    brand: "Wonderblush",
    name: "Le Fondant Cream Blush",
    category: "Makeup",
    role: "Custom Packaging",
    imageUrl: "https://wonderblush.com/cdn/shop/files/13_f63123c2-583d-4768-8f1a-c5efc1da3d7b.png?crop=center&height=1500&v=1778509733&width=1200",
    productUrl: "https://wonderblush.com/products/le-fondant-cream-blush",
  },
  // Fur
  {
    id: "fur-furming-oil",
    brand: "Fur",
    name: "Furming Oil",
    category: "Body",
    role: "Custom Glass Bottle",
    imageUrl: "https://furyou.com/cdn/shop/files/FurmingOil_front.jpg?v=1767890357",
    productUrl: "https://furyou.com/products/furming-oil",
  },
  // Merit Beauty
  {
    id: "merit-great-skin-serum",
    brand: "Merit Beauty",
    name: "Great Skin Serum",
    category: "Skincare",
    role: "Custom Packaging & Quality",
    imageUrl: "https://www.meritbeauty.com/cdn/shop/products/Serum_PDP_01_30f90ae4-2aaa-4855-a6e3-aa9dfd359c3a.jpg?v=1772313653",
    productUrl: "https://www.meritbeauty.com/products/great-skin-serum",
  },
  {
    id: "merit-shade-slick",
    brand: "Merit Beauty",
    name: "Shade Slick",
    category: "Makeup",
    role: "Custom Packaging",
    imageUrl: "https://www.meritbeauty.com/cdn/shop/files/MERIT25-ShadeSlickSheen-Biarritz-Soldier.jpg?v=1744400771",
    productUrl: "https://www.meritbeauty.com/products/shade-slick",
  },
  // Rare Beauty
  {
    id: "rare-beauty-eau-de-parfum",
    brand: "Rare Beauty",
    name: "Rare Eau de Parfum",
    category: "Fragrance",
    role: "Custom Packaging",
    imageUrl: "https://www.rarebeauty.com/cdn/shop/files/ECOMM-RARE-EAU-DE-PARFUM-01.jpg?v=1753218416",
    productUrl: "https://www.rarebeauty.com/products/rare-eau-de-parfum",
  },
  {
    id: "rare-beauty-soft-pinch-lip-oil-stick",
    brand: "Rare Beauty",
    name: "Soft Pinch Lip Oil Stick",
    category: "Makeup",
    role: "Custom Packaging",
    imageUrl: "https://cdn.shopify.com/s/files/1/0314/1143/7703/files/ECOMM-SP-LIP-OIL-STICK-CAP-OFF-WISH.jpg?v=1782797532",
    productUrl: "https://www.rarebeauty.com/products/soft-pinch-lip-oil-stick",
  },
  // Kipi
  {
    id: "kipi-exfoliating-daily-cleanser",
    brand: "Kipi",
    name: "Exfoliating Daily Cleanser",
    category: "Skincare",
    role: "Custom Packaging",
    imageUrl: "https://kipi.com/cdn/shop/files/kipi-exfoliating-daily-face-cleanser.jpg?v=1775680108",
    productUrl: "https://kipi.com/products/exfoliating-daily-cleanser",
  },
  // Supergoop
  {
    id: "supergoop-unseen-sunscreen-stick",
    brand: "Supergoop!",
    name: "Unseen Sunscreen Stick SPF 40",
    category: "Skincare",
    role: "Custom Packaging",
    imageUrl: "https://cdn.shopify.com/s/files/1/1503/5658/files/UnseenSunscreenStick_Alt_01_new.jpg?v=1716989664",
    productUrl: "https://supergoop.com/products/unseen-clear-sunscreen-stick?variant=40758203154530",
  },
  {
    id: "supergoop-glowscreen-glow-drops",
    brand: "Supergoop!",
    name: "Mineral Glowscreen Soft-Radiance Drops SPF 40",
    category: "Skincare",
    role: "Custom Packaging",
    imageUrl: "https://cdn.shopify.com/s/files/1/1503/5658/files/supergoop-glowscreen-soft-radiance-drops-spf-40-sunrise-product-and-texture.jpg?v=1764684405",
    productUrl: "https://supergoop.com/products/glowscreen-glow-drops",
    objectPosition: "top",
  },
  // Orebella
  {
    id: "orebella-gardenias-whisper",
    brand: "Orebella",
    name: "The Mists",
    category: "Fragrance",
    role: "Custom Packaging",
    imageUrl: "https://cdn.shopify.com/s/files/1/0815/9762/8735/files/GARDENIAS_WHISPER_ON_WATER_BG_V2.png?v=1775863138",
    productUrl: "https://orebella.com/collections/mists/products/gardenias-whisper",
  },
  // Fenty Beauty
  {
    id: "fenty-plush-puddin-lip-mask",
    brand: "Fenty Beauty",
    name: "Plush Puddin' Intensive Recovery Lip Mask",
    category: "Makeup",
    role: "Custom Packaging - New Skus - Packaging Update Coming Soon",
    imageUrl: "https://cdn.shopify.com/s/files/1/0341/3458/9485/files/SUMR24_T2PRODUCT_ECOMM_PLUSHPUDDIN_BARBADOS-CHERRY_OPEN_sRGB72.jpg?v=1762285943",
    productUrl: "https://fentybeauty.com/products/plush-puddin-intensive-recovery-lip-mask-barbados-cherry?variant=42234865877037",
  },
  {
    id: "fenty-match-stix-contour-amber",
    brand: "Fenty Beauty",
    name: "Match Stix",
    category: "Makeup",
    role: "Tool remake for material transition",
    imageUrl: "https://fentybeauty.com/cdn/shop/products/FB30029_FB3008_b59a5d82-ffad-4a24-9126-4db0221cf27f_1200x.jpg?v=1762268985",
    productUrl: "https://fentybeauty.com/products/match-stix-contour-skinstick-amber?variant=41471068799021",
  },
  // Reale Actives
  {
    id: "reale-actives-dew-more",
    brand: "Reale Actives",
    name: "Dew More",
    category: "Skincare",
    role: "Custom Packaging",
    imageUrl: "https://realeactives.com/cdn/shop/files/AE_DewMore_PDP_Clean.jpg?v=1772642154",
    productUrl: "https://realeactives.com/products/dew-more?variant=51150107509049",
  },
  {
    id: "reale-actives-get-bare",
    brand: "Reale Actives",
    name: "Get Bare",
    category: "Skincare",
    role: "Stock Packaging - Custom Packaging Coming Soon",
    imageUrl: "https://realeactives.com/cdn/shop/files/AE_GetBare_PDP_Clean.jpg?v=1772642092",
    productUrl: "https://realeactives.com/products/get-bare?variant=51150119076153",
  },
  // Ommage
  {
    id: "ommage-first-base",
    brand: "Ommage",
    name: "First Base",
    category: "Makeup",
    role: "Custom Packaging",
    imageUrl: "https://cdn.shopify.com/s/files/1/0999/6943/3890/files/OMMAGE_05.jpg?v=1787875839",
    productUrl: "https://ommage.com/products/first-base?variant=52311446716706",
  },
  {
    id: "ommage-lip-coat",
    brand: "Ommage",
    name: "Lip Coat",
    category: "Makeup",
    role: "Custom Packaging",
    imageUrl: "https://cdn.shopify.com/s/files/1/0999/6943/3890/files/ommage-lip-coat-inner-lip-product-shot.jpg?v=1789836460",
    productUrl: "https://ommage.com/products/lipstick?variant=52311447011618",
    objectFit: "contain",
  },
  {
    id: "ommage-buffer-brush",
    brand: "Ommage",
    name: "Buffer Brush",
    category: "Makeup",
    role: "Custom Packaging",
    imageUrl: "https://cdn.shopify.com/s/files/1/0999/6943/3890/files/unspecified-3.jpg?v=1787005828",
    productUrl: "https://ommage.com/products/better-brush?variant=52311446651170",
  },
  // Paula's Choice
  {
    id: "paulas-choice-pro-collagen-eye-serum",
    brand: "Paula's Choice",
    name: "Pro-Collagen Peptide Firming Eye Serum",
    category: "Skincare",
    role: "Stock Packaging",
    imageUrl: "https://www.paulaschoice.com/dw/image/v2/BBNX_PRD/on/demandware.static/-/Sites-pc-catalog/default/dw12ee462f/images/products/pro-collagen-peptide-firming-eye-serum-1080-portrait.png?sw=2000&sfrm=png",
    productUrl: "https://www.paulaschoice.com/pro-collagen-peptide-firming-eye-serum/108-1080.html",
    objectFit: "contain",
  },
  // SkinMedica
  {
    id: "skinmedica-ha5-water-burst",
    brand: "SkinMedica",
    name: "HA⁵® Hydra Collagen Water Burst Moisturizer",
    category: "Skincare",
    role: "Stock Packaging",
    imageUrl: "https://static.thcdn.com/productimg/original/17453631-1705279993007897.jpg",
    productUrl: "https://www.skinmedica.com/us/product-category/moisturizers/20084846.html",
  },
  {
    id: "skinmedica-dermal-repair-cream",
    brand: "SkinMedica",
    name: "Dermal Repair Cream",
    category: "Skincare",
    role: "Custom Cap",
    imageUrl: "https://static.thcdn.com/productimg/original/11289659-4145326919914899.jpg",
    productUrl: "https://www.skinmedica.com/us/dry-skin/20086508.html",
  },
];

export type ProjectSection = {
  title: string;
  content?: string;
  bullets?: string[];
  images?: string[];
  imageFit?: "contain" | "cover";
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  year: string;
  category: string;
  tags: string[];
  highlights: string[];
  images: string[];
  heroImage?: string;
  progressionImages?: { src: string; label: string }[];
  files?: { label: string; href: string }[];
  sections?: ProjectSection[];
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

export const projects: Project[] = [
  {
    id: "sleep-apnea-device",
    slug: "sleep-apnea-device",
    title: "Pediatric Sleep Apnea Monitoring Device",
    description: "Second-generation nasopharyngeal camera system developed for Children's Hospital Colorado to monitor obstructive sleep apnea during natural sleep in pediatric patients — improving on a prior prototype with refined hardware, extensive testing, and a path toward commercialization.",
    year: "2023",
    category: "Senior Design",
    tags: ["Medical Device", "CAD", "SLS 3D Printing", "Prototyping", "Systems Engineering", "Biomedical"],
    highlights: [
      "Partnered with Children's Hospital Colorado surgeons Dr. Brian Herrmann and Dr. Norman Friedman through the SILC (Surgical Innovation Leading to Commercialization) program",
      "Served as Logistics Manager on a 7-person interdisciplinary engineering team",
      "Device placed nasopharyngeally overnight to visualize and record dynamic upper airway collapse during natural sleep — from nasal passages to the larynx",
      "Dual camera system with minimum 400×400px resolution, adjustable length (4cm+), and maximum 5mm cross-sectional tubing diameter for pediatric comfort",
      "Integrated pulse oximeter (time-synced blood oxygen, 3Hz), 3-axis accelerometer (sleep position detection, 3Hz), and LED illumination into a single wearable system",
      "System housing manufactured via Selective Laser Sintering (SLS) with Nylon 12 — iterated through 6 designs with access ports for USB, HDMI, and battery charging",
      "Minimum 8 hours of continuous recording to capture a full sleep cycle, with all sensor data time-synced",
      "Secured to patient's chest via elastic band — designed to remain in place throughout the night without interfering with sleep position",
      "Temperature constrained to 37+2°C for patient safety, with ventilation integrated into housing design",
      "Conducted 12 formal bench tests: focal length, humid environment video quality, thermal, pulse oximetry, accelerometer calibration, bendability, sharpness, adjustability, integration, and surgeon handling",
      "Addresses limitations of existing diagnostic methods (PSG and DISE) by capturing obstruction data during natural sleep rather than simulated conditions",
    ],
    heroImage: "/projects/sleep-apnea-device/top-view.png",
    images: [
      "/projects/sleep-apnea-device/assembled endoscope2.jpg",
      "/projects/sleep-apnea-device/complete-casing-assembly.jpg",
      "/projects/sleep-apnea-device/exploded-view-internal-electronics.jpg",
      "/projects/sleep-apnea-device/exploded-view-internal-electronics2.jpg",
      "/projects/sleep-apnea-device/physical-component.jpg",
      "/projects/sleep-apnea-device/physical-internal.jpg",
      "/projects/sleep-apnea-device/side-view.png",
      "/projects/sleep-apnea-device/top-view.png",
      "/projects/sleep-apnea-device/distal-camera-extending.png",
      "/projects/sleep-apnea-device/distal-camera-extending2.png",
      "/projects/sleep-apnea-device/cut-out-for-distal-camrea-extension-retraction.png",
      "/projects/sleep-apnea-device/tubing.png",
      "/projects/sleep-apnea-device/wiring-diagram.png",
      "/projects/sleep-apnea-device/coding-logic.png",
    ],
    files: [],
    sections: [
      {
        title: "Executive Summary",
        content: "Obstructive sleep apnea (OSA) is a medical condition where a collapse of the upper airway occurs during sleep. Current diagnostic methods — drug-induced sleep endoscopy (DISE) and polysomnography (PSG) — are ineffective at simulating natural sleep to capture the true location and pattern of obstructions. This project developed a second-generation nasopharyngeal camera device for Children's Hospital Colorado, building on a prior working prototype. The device monitors the upper airway from nasal passages to the larynx during sleep, capturing the location and severity of obstructive events to enable sleep surgeons to provide targeted, anatomy-specific treatment for pediatric OSA patients.",
        images: [
          "/projects/sleep-apnea-device/assembled endoscope2.jpg",
          "/projects/sleep-apnea-device/physical-component.jpg",
        ],
      },
      {
        title: "Background",
        content: "OSA is estimated to affect approximately one billion people worldwide — one in seven people on the planet. Harvard Medical School researchers estimated the annual national cost at $65–165 billion in 2010. Up to 50% of children demonstrate sleep disturbances, and 1–5% have confirmed OSA. Children's Hospital Colorado performed 3,400 sleep studies and nearly 1,800 surgical procedures in 2020 alone for OSA. Pediatric OSA is associated with significant cardiovascular, metabolic, and behavioral morbidities, and syndromic children such as those with Down syndrome demonstrate persistent OSA in over 75% of cases even after treatment.",
      },
      {
        title: "Project Mission",
        content: "To develop a unique approach for observing and diagnosing obstructive sleep apnea in natural settings. The project aimed to create an upgraded second-generation prototype that fulfilled all client needs — more durable, more reliable, intuitive to use, and modular — while incorporating all successful aspects of the first-generation device.",
      },
      {
        title: "My Role",
        content: "I served as Logistics Manager on a 7-person senior design team in partnership with Children's Hospital Colorado through the SILC (Surgical Innovation Leading to Commercialization) program, working directly with clients Dr. Brian Herrmann and Dr. Norman Friedman. As Logistics Manager I coordinated team schedules, managed procurement, tracked the bill of materials and budget, and ensured parts and components were sourced and delivered to keep the project on schedule.",
      },
      {
        title: "Design Overview",
        content: "The second-generation prototype focused on six key improvement areas over the first-generation device:",
        bullets: [
          "System Housing — SLS 3D printed Nylon 12 enclosure with access ports for USB, HDMI, and battery charging; secured to the patient's chest via an elastic band",
          "Cameras — Dual cameras with minimum 400×400px resolution, maximum 5mm cross-sectional tubing diameter for pediatric comfort",
          "Camera Adjustability — Minimum 4cm of adjustability between distal and proximal cameras to accommodate different patient anatomies",
          "Device Power — Battery-powered system (no wall power) with minimum 8 hours of continuous recording to cover a full sleep cycle",
          "Sensors — Time-synced pulse oximeter (blood oxygen, 3Hz) and 3-axis accelerometer (sleep position detection, 3Hz)",
          "Controller — Integrated controller with time-stamped data logging across all sensors and camera feeds",
        ],
        images: [
          "/projects/sleep-apnea-device/side-view.png",
          "/projects/sleep-apnea-device/top-view.png",
        ],
      },
      {
        title: "System Housing",
        content: "The system housing consists of a base and top manufactured using Selective Laser Sintering (SLS) with Nylon 12 powder — chosen for tighter tolerances and a more organic form than standard FDM printing. The team iterated through 6 housing designs, beginning with rapid PLA prototypes before finalizing in SLS. The final housing includes access ports for battery charging, USB data transfer, and HDMI output for camera placement assistance. An elastic band slot allows the unit to be secured to the patient's chest without interfering with electronics. Internal posts secure the battery without additional hardware, and heat-set inserts allow the top and bottom sections to be fastened with countersunk M2 screws.",
        images: [
          "/projects/sleep-apnea-device/complete-casing-assembly.jpg",
          "/projects/sleep-apnea-device/exploded-view-internal-electronics.jpg",
          "/projects/sleep-apnea-device/physical-internal.jpg",
          "/projects/sleep-apnea-device/exploded-view-internal-electronics2.jpg",
        ],
        imageFit: "cover",
      },
      {
        title: "Camera Adjustability",
        content: "The distal camera assembly extends and retracts through a custom cut-out mechanism, allowing the device to adapt to patients with different anatomical scales. The tubing material was redesigned from the first generation to minimize friction during nasal insertion while maintaining enough stiffness to hold position in the nasal cavity.",
        images: [
          "/projects/sleep-apnea-device/assembled endoscope1.jpg",
          "/projects/sleep-apnea-device/distal-camera-extending.png",
          "/projects/sleep-apnea-device/distal-camera-extending2.png",
          "/projects/sleep-apnea-device/cut-out-for-distal-camrea-extension-retraction.png",
          "/projects/sleep-apnea-device/tubing.png",
        ],
      },
      {
        title: "Wiring & Controls",
        content: "All electrical connections were redesigned for robustness, eliminating the exposed wiring and fragile connections of the first-generation prototype. A custom coding logic diagram guided the controller integration, syncing timestamps across camera feeds, pulse oximeter, and accelerometer.",
        images: [
          "/projects/sleep-apnea-device/wiring-diagram.png",
          "/projects/sleep-apnea-device/coding-logic.png",
        ],
      },
      {
        title: "Key Design Challenges",
        bullets: [
          "Camera heat — thermal output from the camera module required careful management to stay within the 37+2°C patient safety limit",
          "Distal wiring coating — first-generation coating buckled under compression, damaging fragile camera wires; new material and design required",
          "Tubing friction — silicone tubing used in Gen 1 created high friction during nasal insertion; new tubing material selected for smooth adjustability",
          "Pulse oximetry drift — sensor relocation during sleep caused inaccurate readings; redesigned for stability",
          "Electrical robustness — prior prototype had fragile connections and exposed wiring; all connections redesigned for reliability",
          "Timestamp synchronization — real-time clock syncing across all sensors and camera feeds required custom software logic",
        ],
      },
      {
        title: "Testing",
        content: "The team conducted 12 formal bench tests to validate the device against measurable requirements:",
        bullets: [
          "Test 1 — Focal length and field of view",
          "Test 2 — Video quality in a humid environment",
          "Test 3 — Thermal test (37+2°C limit)",
          "Test 4 — Pulse oximetry accuracy",
          "Test 5 — Pulse oximeter battery life (8 hours)",
          "Test 6 — Accelerometer function",
          "Test 7 — Accelerometer calibration",
          "Test 8 — Bendability of tubing",
          "Test 9 — Image sharpness",
          "Test 10 — Camera adjustability (4cm minimum)",
          "Test 11 — Integrated system test",
          "Test 12 — Surgeon handling test",
        ],
      },
    ],
  },
  {
    id: "cardiovascular-modeling",
    slug: "cardiovascular-modeling",
    title: "Cardiovascular System Modeling",
    description: "Research paper exploring 0-dimensional mathematical models of the cardiovascular system — implementing the Grodins feedback regulator model and comparing it to the Windkessel model to simulate cardiac hemodynamics.",
    year: "2022",
    category: "School Project",
    tags: ["Biomedical Engineering", "Mathematical Modeling", "Systems Analysis", "Research"],
    highlights: [
      "Modeled the cardiovascular system as a feedback regulator using the Grodins 0-D model",
      "System broken into 4 compartments: left/right ventricular pumps, pulmonary circuit, and systemic circuit",
      "Full system comprised of 23 equations, 23 unknowns, and 14 independent variables — enabling 4,782,954 unique simulation combinations",
      "Simulated physiological phenomena including myocardial weakness by varying ventricular strength parameters",
      "Developed the Starling Heart-Lung Preparation by combining the ventricular pumps with the pulmonary circuit",
      "Compared the Grodins 4-compartment model against the Windkessel model for accuracy in local vascular representation",
    ],
    images: [],
    files: [
      { label: "Final Report", href: "/projects/cardiovascular-modeling/MCEN_4228_5228_Final_Project_Report.pdf" },
      { label: "Presentation", href: "/projects/cardiovascular-modeling/Circulatory_Models.pdf" },
    ],
  },
  {
    id: "drill-powered-vehicle",
    slug: "drill-powered-vehicle",
    title: "Drill Powered Vehicle",
    description: "Designed and built a drill-powered bike from scratch as part of a 6-person engineering team — custom machined parts, a welded steel frame, and a 4:1 gear drivetrain, all under a $200 budget.",
    year: "2022",
    category: "School Project",
    tags: ["SolidWorks", "Machining", "Welding", "CAD", "GD&T", "MATLAB", "Fabrication"],
    highlights: [
      "4:1 gear ratio drivetrain powered by a cordless DeWalt drill",
      "Custom machined parts: 6061 aluminum drill plate (waterjet), pillow blocks (milled), 303 stainless steel drive shaft (lathe + mill), and drive sprocket",
      "Welded A513 hot-rolled steel square tube frame with aesthetic paint design",
      "3D printed PLA drill rest and spring-loaded throttle fabricated from hardware brackets",
      "Vehicle weighed 35.6 lbs — under the 50 lb requirement",
      "Competed in the maneuverability challenge at Kittredge Pond, CU Boulder",
      "Bearing selection validated with SKF Bearing Select tool (L10mh of 1770 hrs, safety factor 4.24)",
    ],
    images: [],
    heroImage: "/projects/drill-powered-vehicle/vehicle.jpg",
    progressionImages: [
      { src: "/projects/drill-powered-vehicle/sketch.png", label: "Initial Sketch" },
      { src: "/projects/drill-powered-vehicle/initial-3d.png", label: "Initial 3D" },
      { src: "/projects/drill-powered-vehicle/final-3d.png", label: "Final 3D" },
    ],
  },
  {
    id: "sewing-machine",
    slug: "sewing-machine",
    title: "SolidWorks Sewing Machine",
    description: "Full reverse-engineering and 3D remodel of a White X17 sewing machine — a 21-part assembly with 10 dynamic components modeled entirely in SolidWorks.",
    year: "2021",
    category: "School Project",
    tags: ["SolidWorks", "CAD", "Assembly", "GD&T", "Technical Drawing"],
    highlights: [
      "21-part assembly with 2 McMaster-Carr hardware components",
      "10 dynamic parts — 7 rotational (knobs, handle bar, front cover) and 3 translational (lever, front pocket, sewing foot)",
      "Full exploded view with annotated part callouts",
      "Technical drawings with tolerances and GD&T callouts",
      "Sheet metal features and complex angled-face mates",
    ],
    images: [
      "/projects/sewing-machine/iso.jpg",
      "/projects/sewing-machine/front.jpg",
      "/projects/sewing-machine/exploded.jpg",
      "/projects/sewing-machine/comparison.jpg",
    ],
  },
];

export const posts: Post[] = [
  {
    slug: "i-love-bad-design",
    title: "I Love Bad Design",
    date: "Apr 2026",
    excerpt: "Bad design gets a bad reputation. But some of my biggest lessons have come from the worst products I've ever touched.",
    content: "Coming soon.",
  },
  {
    slug: "optimizing-my-studio",
    title: "Optimizing My Studio",
    date: "Mar 2026",
    excerpt: "How I've set up my workspace to do my best creative and engineering work.",
    content: "Coming soon.",
  },
  {
    slug: "trip-to-china",
    title: "Trip to China",
    date: "Feb 2026",
    excerpt: "What a sourcing trip to China taught me about manufacturing, materials, and the people behind the products.",
    content: "Coming soon.",
  },
  {
    slug: "design-leading-engineering",
    title: "The Positives of Design Leading Engineering",
    date: "Jan 2026",
    excerpt: "When design drives the process instead of following it, something different happens — and it's mostly good.",
    content: "Coming soon.",
  },
];
