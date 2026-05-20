import { InquireForm } from "./inquire-form";

export default function Home() {
  return (
    <>
      <div className="strip">
        <div className="pair">
          <span>EST. 2026</span>
          <span>SAN FRANCISCO</span>
        </div>
        <div className="pair">
          <a href="#build">Build</a>
          <a href="/shops">Shops</a>
          <a href="#space">Space</a>
          <a href="#inquire">Membership</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero-photo" aria-hidden="true" />
        <div className="ripples" aria-hidden="true">
          <svg viewBox="0 0 1200 600" preserveAspectRatio="none">
            <defs>
              <linearGradient id="r1" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0" stopColor="#fff" stopOpacity="0" />
                <stop offset="0.5" stopColor="#fff" stopOpacity="0.25" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,180 Q300,140 600,180 T1200,180"
              stroke="url(#r1)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0,260 Q300,220 600,260 T1200,260"
              stroke="url(#r1)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0,360 Q300,320 600,360 T1200,360"
              stroke="url(#r1)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0,460 Q300,420 600,460 T1200,460"
              stroke="url(#r1)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        <span className="wordmark">MAKERSPACE</span>
        <h1>
          SHOP<span className="slash">/</span>LAB
          <span className="slash">/</span>
          <span className="last">DESK.</span>
        </h1>
        <p className="sub">
          Every tool you wanted in a garage and couldn&apos;t justify. The
          room to use them. People who already know how. One membership.
        </p>
        <div className="meta">
          <span>
            OPENING
            <b>Spring 2026</b>
          </span>
          <span>
            MEMBERS
            <b>Capped at 250</b>
          </span>
          <span>
            HOURS
            <b>24 / 7 for the keyed-in</b>
          </span>
        </div>
      </section>

      <section className="pillars">
        <article className="pillar work" id="build">
          <div>
            <div className="num">01</div>
            <h2>BUILD.</h2>
          </div>
          <p>
            Wood shop and metal shop, side by side. Table saw, jointer,
            planer, bandsaw, lathe, mill. TIG, MIG, plasma. The shop you
            wanted at home, on a membership instead of a mortgage.
          </p>
        </article>
        <article className="pillar eat" id="print">
          <div>
            <div className="num">02</div>
            <h2>PRINT.</h2>
          </div>
          <p>
            A wall of 3D printers — FDM, resin, and one big format. Two
            lasers. A vinyl plotter. Rough draft to ready in the same
            room, no slot booking three days out.
          </p>
        </article>
        <article className="pillar drink" id="solder">
          <div>
            <div className="num">03</div>
            <h2>SOLDER.</h2>
          </div>
          <p>
            The electronics bench, set up properly: hot air, microscope,
            scope, pick-and-place, fume extraction. Plus a quiet corner
            for the firmware and a parts drawer that isn&apos;t empty.
          </p>
        </article>
        <article className="pillar swim" id="sew">
          <div>
            <div className="num">04</div>
            <h2>SEW.</h2>
          </div>
          <p>
            Industrial sewing machines, sergers, leather presses, a
            cutting table that&apos;s actually flat. Soft goods that
            don&apos;t show up bad on Friday.
          </p>
        </article>
      </section>

      <section className="philosophy">
        <span className="eyebrow">— The Pitch —</span>
        <blockquote>
          The garage <em>filled up.</em> So we built a bigger one with{" "}
          <em>sixty people in it.</em>
        </blockquote>
        <div className="attrib">— Founders</div>
      </section>

      <section className="space" id="space">
        <header className="space-head">
          <span className="eyebrow">— The Space —</span>
          <h2>
            FOUR ROOMS.<br />
            <em>One front door.</em>
          </h2>
        </header>
        <div className="space-grid">
          <figure className="space-photo">
            <div
              className="space-photo-img"
              style={{ backgroundImage: "url('/photo-work-desks.png')" }}
              aria-hidden="true"
            />
            <figcaption>
              <span className="cap-num">01</span>
              <span className="cap-name">The Shop Floor</span>
              <span className="cap-meta">Wood + metal · Dust-collected</span>
            </figcaption>
          </figure>
          <figure className="space-photo">
            <div
              className="space-photo-img"
              style={{ backgroundImage: "url('/photo-work-library.png')" }}
              aria-hidden="true"
            />
            <figcaption>
              <span className="cap-num">02</span>
              <span className="cap-name">The Bench</span>
              <span className="cap-meta">Electronics · Scope · Solder</span>
            </figcaption>
          </figure>
          <figure className="space-photo">
            <div
              className="space-photo-img"
              style={{ backgroundImage: "url('/photo-work-longtable.png')" }}
              aria-hidden="true"
            />
            <figcaption>
              <span className="cap-num">03</span>
              <span className="cap-name">The Lounge</span>
              <span className="cap-meta">Coffee · CAD · Conversation</span>
            </figcaption>
          </figure>
          <figure className="space-photo">
            <div
              className="space-photo-img"
              style={{ backgroundImage: "url('/photo-pool.png')" }}
              aria-hidden="true"
            />
            <figcaption>
              <span className="cap-num">04</span>
              <span className="cap-name">The Print Room</span>
              <span className="cap-meta">3D · Laser · Vinyl</span>
            </figcaption>
          </figure>
          <figure className="space-photo">
            <div
              className="space-photo-img"
              style={{ backgroundImage: "url('/photo-garage.png')" }}
              aria-hidden="true"
            />
            <figcaption>
              <span className="cap-num">05</span>
              <span className="cap-name">The Loading Bay</span>
              <span className="cap-meta">Sheet stock · Three bays · Covered</span>
            </figcaption>
          </figure>
          <figure className="space-photo">
            <div
              className="space-photo-img"
              style={{ backgroundImage: "url('/photo-storefront.png')" }}
              aria-hidden="true"
            />
            <figcaption>
              <span className="cap-num">06</span>
              <span className="cap-name">The Front Door</span>
              <span className="cap-meta">584 4th St · San Francisco</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="cta-band" id="inquire">
        <h2>JOIN THE BENCH.</h2>
        <InquireForm />
      </section>

      <footer className="footer">
        <span className="mark">MAKERSPACE</span>
        <span>Shop · Lab · Desk · 2026</span>
        <span>San Francisco · Open the door, make a thing</span>
      </footer>
    </>
  );
}
