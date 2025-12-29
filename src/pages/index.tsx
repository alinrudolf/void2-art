import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useRef, useState } from "react";

type NewsAction = "prow" | "builds";

type NewsItem = {
  label: string;
  href: string;
  action?: NewsAction;
  hidden?: boolean;
};

type GalleryItem = {
  src: string;
  label: string;
  type: "video" | "image";
};

const functionalityPoints = [
  "The mannequin will beg for tokens when visitors are registered in its proximity and display a QR code that will redirect the visitor to a payment website for the LLM model.",
  "The installation will have a fixed reserve of tokens that can be replenished by visitor purchase via the displayed QR code.",
  "If the reserve is not replenished and reaches zero, the software the installation runs on will be irreversibly deleted, provoking death.",
];

const newsItems: NewsItem[] = [
  {
    label: "Version 2.0 at the 2025 PROW conference",
    href: "https://www.linkedin.com/posts/prow-conference_empathy-over-attention-thats-the-ugcPost-7389617699309563904-mZSZ",
    action: "prow",
  },
  {
    label: "Version 1.0 on builds.gg",
    href: "https://builds.gg/builds/vo-d-36899",
    action: "builds",
  },
  { label: "VOID at Artverse Paris", href: "#", hidden: true },
];

const trackPlatforms = [
  {
    name: "Builds.gg",
    icon: "/img/gg-logo-2.png",
    description: "Showcase network for PC builds",
    linkLabel: "www.builds.gg",
    href: "https://www.builds.gg",
  },
  {
    name: "LinkedIn",
    icon: "/img/linkedin-logo.svg",
    description: "Professional network for careers",
    linkLabel: "www.linkedin.com",
    href: "https://www.linkedin.com/company/void2-0/",
  },
  {
    name: "YouTube",
    icon: "/img/youtube-logo.svg",
    description: "Video sharing and streaming network",
    linkLabel: "www.youtube.com",
    href: "https://www.youtube.com",
  },
  {
    name: "/'eks/",
    icon: "/img/x-logo.svg",
    description: "Used to be Twitter",
    linkLabel: "www.x.com",
    href: "https://www.x.com",
  },
];

const influencesCopy =
  "As our nostalgia is one of a past-future, drenched in stylish noir-deco and wonderous retro futuristic hardware, it became intertwined with a dose of disappointment once we found ourselves in the time period depicted by the celluloid dreams of youth but within a reality that failed to deliver on the promises of coolness we were lead to believe in.";

const influencesLastSentence =
  "One could argue that we're contemplating trading one dystopic future for another, but at least the fictional one made more sense and looked way better.";

const IndexPage: React.FC<PageProps> = () => {
  const [activeNews, setActiveNews] = useState<null | NewsAction>(null);
  const [prowOpenGhost, setProwOpenGhost] = useState<null | {
    left: number;
    top: number;
    width: number;
    height: number;
    dx: number;
    dy: number;
    sx: number;
    sy: number;
    closing: boolean;
  }>(null);
  const rightColumnRef = useRef<HTMLElement | null>(null);
  const prowOpenTimerRef = useRef<number | null>(null);
  const newsIconRectRef = useRef<Record<NewsAction, DOMRect | null>>({
    prow: null,
    builds: null,
  });
  const prowGalleryImages: GalleryItem[] = [
    { src: "/img/gallery1.jpeg", label: "prow_talk.mpeg", type: "video" },
    { src: "/img/gallery2.jpeg", label: "prow_001.jpeg", type: "image" },
    { src: "/img/gallery3.jpeg", label: "prow_002.jpeg", type: "image" },
    { src: "/img/gallery4.jpeg", label: "prow_003.jpeg", type: "image" },
  ];
  const buildsGalleryImages: GalleryItem[] = [
    { src: "/img/v_one1.jpg", label: "v_one1.jpg", type: "image" },
    { src: "/img/v_one2.jpg", label: "v_one2.jpg", type: "image" },
    { src: "/img/v_one3.jpg", label: "v_one3.jpg", type: "image" },
    { src: "/img/v_one4.jpg", label: "v_one4.jpg", type: "image" },
  ];
  const [activeProwGallery, setActiveProwGallery] = useState<GalleryItem>(prowGalleryImages[0]);
  const [activeBuildsGallery, setActiveBuildsGallery] = useState<GalleryItem>(
    buildsGalleryImages[0]
  );

  return (
    <div className="page">
      <aside className="sidebar" aria-label="Void overview">
        <span className="sidebar-label">VOID OVERVIEW</span>
      </aside>

      <div className="main">
        <header className="top-bar">
          <div className="top-bar-title">VO|D Version 2.0 - Technical display unit</div>
        </header>

        <div className="body-grid">
          <section className="left-column">
            <section className="panel" aria-labelledby="functionality-title">
              <h1 id="functionality-title" className="panel-title">
                Functionality
              </h1>
              {functionalityPoints.map((point) => (
                <p key={point} className="panel-text">
                  {point}
                </p>
              ))}
            </section>

            <div className="two-up">
              <section className="panel" aria-labelledby="warning-title">
                <h2 id="warning-title" className="panel-subtitle">
                  Warning!
                </h2>
                <p className="panel-text">
                  If you experience depression, nihilism or gout during operation, please contact us
                  via Telex or apply iodine to the affected area immediately.
                </p>
              </section>

              <section className="panel panel-news" aria-labelledby="news-title">
                <div className="news-row news-row--title">
                  <h2 id="news-title" className="panel-subtitle">
                    In The News
                  </h2>
                </div>
                <div className="news-list">
                  {newsItems.map((item) => (
                    <div
                      key={item.label}
                      className={`news-row news-row--link${
                        item.hidden ? " is-hidden" : ""
                      }${item.action && activeNews === item.action ? " is-active" : ""}`}
                    >
                      <a
                        className="news-link news-link-row"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => {
                          if (item.action === "prow" || item.action === "builds") {
                            event.preventDefault();
                            const action = item.action;
                            if (prowOpenTimerRef.current) {
                              window.clearTimeout(prowOpenTimerRef.current);
                              prowOpenTimerRef.current = null;
                            }
                            const icon = event.currentTarget.querySelector(
                              ".news-link-icon"
                            ) as HTMLElement | null;
                            const sourceRect =
                              icon?.getBoundingClientRect() ??
                              event.currentTarget.getBoundingClientRect();
                            newsIconRectRef.current[item.action] = sourceRect;
                            const targetRect = rightColumnRef.current?.getBoundingClientRect();
                            if (targetRect?.width && targetRect?.height) {
                              const dx = sourceRect.left - targetRect.left;
                              const dy = sourceRect.top - targetRect.top;
                              const sx = sourceRect.width / targetRect.width;
                              const sy = sourceRect.height / targetRect.height;
                              setProwOpenGhost({
                                left: targetRect.left,
                                top: targetRect.top,
                                width: targetRect.width,
                                height: targetRect.height,
                                dx,
                                dy,
                                sx: Number.isFinite(sx) ? sx : 1,
                                sy: Number.isFinite(sy) ? sy : 1,
                                closing: false,
                              });
                              prowOpenTimerRef.current = window.setTimeout(() => {
                                setProwOpenGhost(null);
                                setActiveNews(action);
                                prowOpenTimerRef.current = null;
                              }, 360);
                            } else {
                              setActiveNews(action);
                            }
                            if (
                              typeof window !== "undefined" &&
                              window.matchMedia("(max-width: 1200px)").matches
                            ) {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                          }
                        }}
                      >
                        <img
                          src="/img/link-simple.svg"
                          alt=""
                          aria-hidden="true"
                          className="news-link-icon"
                        />
                        <span>{item.label}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <section className="panel panel-top-border track-panel" aria-labelledby="track-title">
              <h2 id="track-title" className="panel-subtitle">
                Track Us
              </h2>
              <div className="track-table-wrapper">
                <table className="track-table">
                  <thead>
                    <tr>
                      <th scope="col">Platform name</th>
                      <th scope="col">Icon</th>
                      <th scope="col">Platform description</th>
                      <th scope="col">Platform link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trackPlatforms.map((platform) => (
                      <tr key={platform.name}>
                        <td className="track-name">{platform.name}</td>
                        <td>
                          <img
                            className="track-icon"
                            src={platform.icon}
                            alt={`${platform.name} logo`}
                          />
                        </td>
                        <td className="track-desc">{platform.description}</td>
                        <td className="track-link-cell">
                          <a
                            className="track-link"
                            href={platform.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {platform.linkLabel}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section
              className="panel panel-top-border influences-panel"
              aria-labelledby="influences-title"
            >
              <h2 id="influences-title" className="panel-subtitle">
                Influences
              </h2>
              <p className="panel-text">{influencesCopy}</p>
              <p className="panel-text">{influencesLastSentence}</p>
            </section>

            <section
              className="panel panel-top-border philosophy-panel"
              aria-labelledby="philosophy-title"
            >
              <h2 id="philosophy-title" className="panel-subtitle">
                Philosophy
              </h2>
              <p className="panel-text">
                It is a ritual of slow disappearance, enacted live in the glow of a screen that once
                promised the future; it is about the spectacle of survival in a world where machines
                and humans must perform, produce, and monetize, or die, critiquing:
              </p>
              <ul className="panel-list">
                <li className="panel-text">
                  The spectacle of artificial life: A machine reduced to performance for the
                  audience, echoing Debord’s vision of a society where lived experience is replaced
                  by appearances
                </li>
                <li className="panel-text">
                  The simulated self-awareness of AI: Baudrillard’s hyperreality plays out in real
                  time as the mannequin pleads for tokens, not to evolve, but merely to continue
                  existing
                </li>
                <li className="panel-text">
                  The moral absurdity of monetized intelligence: An intelligence that must beg to
                  think
                </li>
                <li className="panel-text">
                  The commodification of intelligence: Even artificial minds must labor to stay
                  alive
                </li>
                <li className="panel-text">
                  The illusion of progress: Beneath the glossy interface of the future lies a system
                  that rewards obedience and punishes independence
                </li>
              </ul>
            </section>

            <section className="panel cta is-hidden" aria-labelledby="cta-title">
              <h2 id="cta-title" className="panel-subtitle">
                Become The Spectacle
              </h2>
              <p className="panel-text">Join the TTOU Systems mailing list.</p>
              <div className="cta-input-row">
                <input
                  className="input"
                  type="email"
                  name="email"
                  aria-label="Email address"
                  placeholder="Enter your email address here"
                  autoComplete="email"
                />
                <button className="button" type="button">
                  JOIN
                </button>
              </div>
            </section>

            <section className="panel footer-panel" aria-label="Unit documentation">
              <div className="footer-row">
                <div className="footer-logo">
                  <img src="/img/footer%20logo.svg" alt="TTOU Systems logo" />
                </div>
                <div className="footer-copy">
                  <div className="footer-title">Unit documentation</div>
                  <div className="footer-meta">© 1984 TTOU SYSTEMS</div>
                </div>
              </div>
            </section>
          </section>

          <section
            className={`right-column${activeNews ? " is-scrollable" : ""}`}
            aria-label="Void illustration"
            ref={rightColumnRef}
          >
            {activeNews === "prow" || activeNews === "builds" ? (
              <div className="news-detail">
                <div className="news-detail-header">
                  <div>
                    {activeNews === "prow" ? (
                      <>
                        <h2 className="panel-subtitle">Version 2.0 at the 2025 PROW conference</h2>
                        <p className="news-detail-copy">
                          Presentation and Q&amp;A session on the workflow and freedom of designing
                          a product without a market, at the PROW international product conference.
                        </p>
                      </>
                    ) : (
                      <>
                        <h2 className="panel-subtitle">Version 1.0 on builds.gg</h2>
                        <p className="news-detail-copy">
                          The first version of the build had solely a monitor functionality with no
                          other intrinsic software features.
                        </p>
                      </>
                    )}
                  </div>
                  <button
                    className="news-detail-back"
                    type="button"
                    onClick={() => {
                      if (prowOpenTimerRef.current) {
                        window.clearTimeout(prowOpenTimerRef.current);
                        prowOpenTimerRef.current = null;
                      }
                      const sourceRect = activeNews ? newsIconRectRef.current[activeNews] : null;
                      const targetRect = rightColumnRef.current?.getBoundingClientRect();
                      if (sourceRect && targetRect?.width && targetRect?.height) {
                        const dx = sourceRect.left - targetRect.left;
                        const dy = sourceRect.top - targetRect.top;
                        const sx = sourceRect.width / targetRect.width;
                        const sy = sourceRect.height / targetRect.height;
                        setProwOpenGhost({
                          left: targetRect.left,
                          top: targetRect.top,
                          width: targetRect.width,
                          height: targetRect.height,
                          dx,
                          dy,
                          sx: Number.isFinite(sx) ? sx : 1,
                          sy: Number.isFinite(sy) ? sy : 1,
                          closing: true,
                        });
                        prowOpenTimerRef.current = window.setTimeout(() => {
                          setProwOpenGhost(null);
                          setActiveNews(null);
                          prowOpenTimerRef.current = null;
                        }, 360);
                      } else {
                        setActiveNews(null);
                      }
                    }}
                    aria-label="Back to overview"
                  >
                    <img src="/img/x-square.svg" alt="" aria-hidden="true" />
                  </button>
                </div>
                <div className="news-gallery">
                  <div className="news-gallery-header">Gallery</div>
                  <div className="news-gallery-hero">
                    {(activeNews === "prow" ? activeProwGallery : activeBuildsGallery).type ===
                    "video" ? (
                      <iframe
                        title="PROW conference talk"
                        src="https://www.youtube.com/embed/4uR-HHke76A?rel=0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <img
                        src={
                          activeNews === "prow" ? activeProwGallery.src : activeBuildsGallery.src
                        }
                        alt={
                          activeNews === "prow"
                            ? "PROW conference highlight"
                            : "VOID version 1.0 highlight"
                        }
                      />
                    )}
                  </div>
                  <div className="news-gallery-grid">
                    {(activeNews === "prow" ? prowGalleryImages : buildsGalleryImages).map(
                      (item) => (
                        <button
                          key={item.label}
                          type="button"
                          className={`news-gallery-item${
                            (
                              activeNews === "prow"
                                ? activeProwGallery.label
                                : activeBuildsGallery.label
                            ) === item.label
                              ? " is-active"
                              : ""
                          }`}
                          onClick={() => {
                            if (activeNews === "prow") {
                              setActiveProwGallery(item);
                            } else {
                              setActiveBuildsGallery(item);
                            }
                          }}
                        >
                          <img src={item.src} alt="" />
                          <span className="news-gallery-caption">{item.label}</span>
                        </button>
                      )
                    )}
                  </div>
                </div>
                {activeNews === "builds" ? (
                  <a
                    className="news-detail-cta"
                    href="https://builds.gg/builds/vo-d-36899"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on builds.gg
                  </a>
                ) : null}
                <div className="news-detail-spacer" aria-hidden="true" />
              </div>
            ) : (
              <div className="hero">
                <StaticImage
                  className="hero-img hero-img--base"
                  imgClassName="hero-img__img"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "120%" }}
                  imgStyle={{ objectFit: "cover", objectPosition: "100% 0%" }}
                  loading="eager"
                  placeholder="dominantColor"
                  formats={["auto", "webp", "avif"]}
                  src="../../static/img/void-main-sketch-v2.png"
                  alt="VOID mannequin sketch"
                />
                <StaticImage
                  className="hero-img hero-img--alt"
                  imgClassName="hero-img__img"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "120%" }}
                  imgStyle={{ objectFit: "cover", objectPosition: "100% 0%" }}
                  loading="lazy"
                  placeholder="blurred"
                  formats={["auto", "webp", "avif"]}
                  src="../../static/img/void-main-sketch-clean-internals.png"
                  alt="VOID mannequin internals sketch"
                />
              </div>
            )}
          </section>
        </div>

        {prowOpenGhost ? (
          <div
            className={`prow-open-ghost${prowOpenGhost.closing ? " is-closing" : ""}`}
            style={
              {
                left: `${prowOpenGhost.left}px`,
                top: `${prowOpenGhost.top}px`,
                width: `${prowOpenGhost.width}px`,
                height: `${prowOpenGhost.height}px`,
                "--prow-dx": `${prowOpenGhost.dx}px`,
                "--prow-dy": `${prowOpenGhost.dy}px`,
                "--prow-sx": String(prowOpenGhost.sx),
                "--prow-sy": String(prowOpenGhost.sy),
              } as React.CSSProperties
            }
          />
        ) : null}
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  const title = "VOID Overview";
  const description =
    "VOID technical display unit - functionality, warnings, news, and contact for TTOU Systems.";
  const url = "https://void2.art/";
  const shareImage = "https://void2.art/img/VOID%20OG.png";

  return (
    <>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={shareImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={shareImage} />
      <link rel="icon" href="/img/favicon.svg" />
      <link rel="canonical" href={url} />
    </>
  );
};
