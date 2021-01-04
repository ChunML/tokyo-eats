import { config } from "dotenv";

config({ path: "dev.env" });

export const siteMetadata = {
  title: "Tokyo Eats",
  siteUrl: "https://tokyo.eats",
  description: "Tokyo Eats for Japan",
};
export const plugins = [
  {
    resolve: "gatsby-source-sanity",
    options: {
      projectId: "ugouospp",
      dataset: "production",
      watchMode: true,
      token: process.env.SANITY_TOKEN,
    },
  },
  "gatsby-plugin-postcss",
];
