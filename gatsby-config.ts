import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "VOID Overview",
    description:
      "VOID technical display unit - functionality, warnings, news, and contact overview by TTOU Systems.",
    siteUrl: "https://void2.art",
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "images", path: `${__dirname}/static/img/` },
    },
  ],
};

export default config;
