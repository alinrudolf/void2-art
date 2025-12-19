import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const functionalityPoints = [
  "The mannequin will beg for tokens when visitors are registered in its proximity and display a QR code that will redirect the visitor to a payment website for the LLM model.",
  "The installation will have a fixed reserve of tokens that can be replenished by visitor purchase via the displayed QR code.",
  "If the reserve is not replenished and reaches zero, the software the installation runs on will be irreversibly deleted, provoking death.",
];

const newsItems = [
  {
    label: "Version 2.0 at the 2025 PROW conference",
    href: "https://www.linkedin.com/posts/prow-conference_empathy-over-attention-thats-the-ugcPost-7389617699309563904-mZSZ",
  },
  { label: "Version 1.0 on builds.gg", href: "https://builds.gg/builds/vo-d-36899" },
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
  return (
    <div className="page">
      <aside className="sidebar" aria-label="Void overview">
        <span className="sidebar-label">VOID OVERVIEW</span>
      </aside>

      <div className="main">
        <header className="top-bar">
          <div className="top-bar-title">VO|D Version 2.0 - Technical display unit</div>
          <div>© 1984 TTOU SYSTEMS</div>
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
                  at cathode@void.art or apply iodine to the affected area immediately.
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
                      className={`news-row news-row--link${item.hidden ? " is-hidden" : ""}`}
                    >
                      <a
                        className="news-link news-link-row"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
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

            <section className="panel panel-top-border" aria-labelledby="influences-title">
              <h2 id="influences-title" className="panel-subtitle">
                Influences
              </h2>
              <p className="panel-text">{influencesCopy}</p>
              <p className="panel-text">{influencesLastSentence}</p>
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
          </section>

          <section className="right-column" aria-label="Void illustration">
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
          </section>
        </div>
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
  const shareImage = "https://void2.art/img/void-main-sketch-v2.png";

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
      <link rel="canonical" href={url} />
    </>
  );
};
