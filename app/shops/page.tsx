import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Makerspace — The Shops",
  description:
    "Everything that's in the building: wood shop, metal shop, print room, electronics bench, sewing room. Plus membership tiers, the day pass, and the class schedule.",
  openGraph: {
    title: "Makerspace — The Shops",
    description:
      "Wood, metal, 3D printing, laser cutting, electronics, textiles. The full tool list, membership tiers, and class calendar.",
    images: ["/photo-hero.jpg"],
    type: "website",
    siteName: "Makerspace",
  },
};

type Item = { name: string; price?: string; desc?: string };

function MenuSection({
  eyebrow,
  title,
  intro,
  items,
  tone = "cream",
  photo,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  items: Item[];
  tone?: "cream" | "beige" | "pool" | "chrome" | "teal";
  photo?: string;
}) {
  const style = photo ? { backgroundImage: `url(${photo})` } : undefined;
  return (
    <section
      className={`menu-section tone-${tone}${photo ? " has-photo" : ""}`}
      style={style}
    >
      <div className="menu-section-inner">
        <header className="menu-section-head">
          <span className="menu-eyebrow">{eyebrow}</span>
          <h2 className="menu-section-title">{title}</h2>
          {intro && <p className="menu-section-intro">{intro}</p>}
        </header>
        <ul className="menu-list">
          {items.map((it, i) => (
            <li key={i} className="menu-item">
              <div className="menu-item-line">
                <span className="menu-item-name">{it.name}</span>
                <span className="menu-item-dots" aria-hidden />
                {it.price && <span className="menu-item-price">{it.price}</span>}
              </div>
              {it.desc && <p className="menu-item-desc">{it.desc}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const wood: Item[] = [
  { name: "Cabinet table saw", price: "incl.", desc: "SawStop 3HP. Outfeed table, dado set, riving knife." },
  { name: "8\" jointer", desc: "Spiral cutterhead. Calibrated weekly." },
  { name: "13\" planer", desc: "Helical head. Dust extraction wired in." },
  { name: "14\" bandsaw", desc: "Resaw fence, 3/4\" blade as default." },
  { name: "Drill press", desc: "Floor model, mortising attachment." },
  { name: "Router table", desc: "Plus a fleet of hand routers." },
  { name: "Edge sander · spindle sander · disc/belt", desc: "All three, calibrated." },
  { name: "Wood lathe", desc: "Bowl gouges, calipers, full chisel rack." },
  { name: "Domino + biscuit joiner", desc: "Festool, in the cage. Sign out, sign back in." },
  { name: "CNC router · 4x8 sheet", desc: "Vectric-compatible. Hold-downs and bits provided." },
];

const metal: Item[] = [
  { name: "TIG welder · AHP 200X", desc: "AC/DC, pulse, foot pedal. Argon on tap." },
  { name: "MIG welder · Miller 252", desc: "Mild + stainless wire stocked." },
  { name: "Plasma cutter", desc: "Hypertherm 45XP, drag torch, CNC table." },
  { name: "Metal lathe", desc: "Bench-top, 13x40. Chuck collet set." },
  { name: "Bridgeport mill", desc: "DRO, power feed, full collet set." },
  { name: "Cold saw + horizontal bandsaw", desc: "Cuts the stock to length before you ask." },
  { name: "Bench grinder · belt sander · cutoff", desc: "On the wall, ready." },
  { name: "Sheet metal brake + shear", desc: "48\" brake, foot shear." },
  { name: "Surface grinder", desc: "Magnetic chuck, sparks contained." },
  { name: "Sandblaster", desc: "Cabinet model. Aluminum oxide stocked." },
];

const print: Item[] = [
  { name: "Bambu X1 Carbon · 6 of them", desc: "Standing by, AMS loaded, no booking required." },
  { name: "Prusa MK4 · 2", desc: "For the print that has to come out right." },
  { name: "Resin printer · Saturn 4 Ultra", desc: "In a vented cabinet. Wash-and-cure on the bench." },
  { name: "Large-format FDM · 500mm cube", desc: "For the part that doesn't fit on the others." },
  { name: "Laser cutter · 150W CO₂", desc: "1300x900 bed. Filtered exhaust, lens spares." },
  { name: "Laser engraver · 40W CO₂", desc: "Quick-turn parts and badges." },
  { name: "Fiber laser engraver · 30W", desc: "Marking metal. Don't ask, just learn." },
  { name: "Vinyl cutter", desc: "Roland 24\". Heat press next to it." },
  { name: "Filament + resin · stocked", desc: "Pay-as-you-go. Charged by gram on exit." },
];

const bench: Item[] = [
  { name: "Soldering stations · 8", desc: "Hakko FX-951 with hot air. Tips replaced quarterly." },
  { name: "Microscope · USB + stereo", desc: "Side-by-side, both bench-mounted." },
  { name: "Oscilloscope · 4-channel", desc: "Siglent 1104X-E. Probes don't walk off." },
  { name: "Bench power supplies", desc: "0–30V, 0–5A. Linear, not switching." },
  { name: "Multimeters · Fluke 87V", desc: "Six of them. Calibrated yearly." },
  { name: "Pick-and-place", desc: "OpenPnP. For the prototype run that turns into a real run." },
  { name: "Reflow oven", desc: "Toaster oven with a brain. Profiles preset." },
  { name: "Fume extractor", desc: "Per bench. The kind that actually pulls." },
  { name: "Parts library", desc: "Resistors, caps, connectors, MCUs. Take what you need, log it." },
];

const sew: Item[] = [
  { name: "Industrial straight stitch · Juki", desc: "DDL-8700. Three of them. Threaded and ready." },
  { name: "Industrial serger", desc: "Four-thread, differential feed." },
  { name: "Walking foot · Juki LU-1508", desc: "For leather, canvas, and the heavy things." },
  { name: "Coverstitch", desc: "For the hems that should look professional." },
  { name: "Embroidery machine", desc: "Single-head, 12-needle. Bring your file." },
  { name: "Heat press · 16x20", desc: "Vinyl and sublimation transfers." },
  { name: "Cutting tables · 4ft + 8ft", desc: "Self-healing mats. Rotary + shears." },
  { name: "Grommet press · snap press", desc: "On the table, sized to most things." },
];

const finishing: Item[] = [
  { name: "Spray booth", desc: "Cross-draft, filtered. Paint and finish, vented." },
  { name: "Photo studio · 12x12", desc: "Cyclorama, two strobes, a tripod that doesn't wobble." },
  { name: "Packing bench", desc: "Big roll of kraft, label printer, weigh scale." },
  { name: "Lockers · 24\" cube", desc: "Members only. Keep the project safe between sessions." },
  { name: "Material storage · racked", desc: "Sheet stock, bar stock, drops. Honor system, sharpie a label." },
];

const membership: Item[] = [
  {
    name: "Visitor · day pass",
    price: "30/day",
    desc: "One day, supervised, no shop sign-off needed. Bring a project or browse.",
  },
  {
    name: "Bench · monthly",
    price: "75/mo",
    desc: "Print room, electronics, sewing, lounge. 24/7 once you're keyed in.",
  },
  {
    name: "Full Shop · monthly",
    price: "145/mo",
    desc: "Everything in Bench, plus the wood and metal shops. Safety sign-off included.",
  },
  {
    name: "Founder · monthly",
    price: "260/mo",
    desc: "Full Shop plus a private locker, priority on the CNC and Bridgeport, and the door code that works on holidays.",
  },
  {
    name: "Crew · per seat",
    price: "ask",
    desc: "For a small company that wants three to five seats. Quarterly billing, invoiced.",
  },
];

const classes: Item[] = [
  {
    name: "Shop Safety · wood",
    price: "incl.",
    desc: "Required before the wood shop unlocks. Ninety minutes. Saturdays at 10.",
  },
  {
    name: "Shop Safety · metal",
    price: "incl.",
    desc: "Required before the metal shop unlocks. Two hours. Saturdays at 1.",
  },
  {
    name: "Welding I · MIG",
    price: "85",
    desc: "Three hours, from nothing to a clean bead. Tuesday nights." ,
  },
  {
    name: "Welding II · TIG",
    price: "125",
    desc: "After MIG. Mild steel, then stainless. Tuesday nights." ,
  },
  {
    name: "3D Printing · from CAD to part",
    price: "55",
    desc: "Fusion 360 basics. Slicing, supports, the things that go wrong.",
  },
  {
    name: "Laser cutter · basics",
    price: "55",
    desc: "Vectors in, parts out. Material settings, kerf, the burn-marks question.",
  },
  {
    name: "Open House",
    price: "free",
    desc: "First Saturday of the month, 11–2. Walk the building. Members on hand.",
  },
];

export default function ShopsPage() {
  return (
    <>
      <div className="strip">
        <div className="pair">
          <Link href="/">← Makerspace</Link>
          <span>SAN FRANCISCO</span>
        </div>
        <div className="pair">
          <Link href="/#build">Build</Link>
          <Link href="/shops">Shops</Link>
          <Link href="/#inquire">Membership</Link>
        </div>
      </div>

      <article className="menu-page">
        <header className="menu-hero">
          <div className="menu-hero-photo" aria-hidden="true" />
          <div className="menu-hero-content">
            <span className="menu-hero-eyebrow">— The Shops —</span>
            <h1 className="menu-hero-title">
              Everything in the building,<br />
              <em>and what it costs to use it.</em>
            </h1>
            <p className="menu-hero-lede">
              The shop list is real and stays current. Hourly rates apply
              to a few of the heavy machines; everything else is included
              with the tier. Consumables are pay-as-you-go and logged on
              the way out.
            </p>
            <p className="menu-hero-caveat">
              Prices and selection illustrative · final equipment list sets
              in spring · safety sign-off required before tools unlock ·
              guests welcome on the day pass
            </p>
          </div>
        </header>

        <MenuSection
          eyebrow="The Wood Shop"
          title="Wood"
          intro="Calibrated, dust-collected, and laid out so you don't trip over the next thing. Sign off, then sign in."
          items={wood}
          tone="beige"
        />

        <MenuSection
          eyebrow="The Metal Shop"
          title="Metal"
          intro="Welding bays vented properly. Stock library on the wall. The grinder lives in its own corner so the sparks don't find your project."
          items={metal}
          tone="teal"
          photo="/photo-bar.jpg"
        />

        <MenuSection
          eyebrow="The Print Room"
          title="3D + Laser"
          intro="A wall of printers and two lasers. Walk in, queue up, walk out with the part. Filament charged by gram, laser time by the minute."
          items={print}
          tone="chrome"
          photo="/photo-garage.png"
        />

        <MenuSection
          eyebrow="The Bench"
          title="Electronics"
          intro="Set up properly: hot air, microscope, scope, fume extraction at every seat. The parts drawer is stocked, not aspirational."
          items={bench}
          tone="cream"
        />

        <MenuSection
          eyebrow="The Sewing Room"
          title="Soft Goods"
          intro="Industrial machines on heavy tables. The walking foot eats canvas. The cutting mats are flat. The serger is threaded."
          items={sew}
          tone="beige"
        />

        <MenuSection
          eyebrow="Finishing + Out the Door"
          title="Studio + Storage"
          intro="Where the project becomes a thing you can sell or send. Spray booth, photo studio, packing bench, lockers."
          items={finishing}
          tone="cream"
        />

        <MenuSection
          eyebrow="Members + Day Pass"
          title="Membership"
          intro="One door, four tiers. Cancel any month. No shareholder mailers, no Slack channel called fun."
          items={membership}
          tone="pool"
          photo="/photo-pool.png"
        />

        <MenuSection
          eyebrow="Saturday + weekday evenings"
          title="Classes"
          intro="Run by members who actually use the tool, not by a curriculum. Safety classes are included with membership."
          items={classes}
          tone="beige"
        />

        <footer className="menu-foot">
          <p>
            <strong>Makerspace</strong> &nbsp;·&nbsp; 584 4th St, San Francisco &nbsp;·&nbsp;
            Opening Spring 2026 &nbsp;·&nbsp; Members 24 / 7, guests by appointment
          </p>
          <p className="fine">
            Safety sign-off required before the wood and metal shops
            unlock. Some machines (CNC, mill, large-format laser) have
            additional certifications. Materials and consumables are
            billed to your member account on the way out.
          </p>
        </footer>
      </article>
    </>
  );
}
