import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import m2dx from "astro-m2dx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import rehypeExternalLinks from "rehype-external-links";
import fauxRemarkEmbedder from "@remark-embedder/core";
import fauxOembedTransformer from "@remark-embedder/transformer-oembed";
import react from '@astrojs/react';
const remarkEmbedder = fauxRemarkEmbedder.default;
const oembedTransformer = fauxOembedTransformer.default;
import vue from "@astrojs/vue";
/** @type {import('astro-m2dx').Options} */
import db from "@astrojs/db";
import vercel from "@astrojs/vercel/serverless";
import starlight from "@astrojs/starlight";
const m2dxOptions = {
  exportComponents: true,
  unwrapImages: true,
  autoImports: true
};


// https://astro.build/config
export default defineConfig({
  site: "https://dicewizardgames.com",
  integrations: [icon(), mdx({}), sitemap(), tailwind(), react(), vue({
    appEntrypoint: "/src/pages/_app"
  }), db()],
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [[remarkEmbedder, {
      transformers: [oembedTransformer]
    }], [m2dx, m2dxOptions]],
    rehypePlugins: [[rehypeExternalLinks, {
      rel: ["nofollow"],
      target: ["_blank"]
    }]]
  },
  vite: {
    build: {
      rollupOptions: {
        external: ["/_pagefind/pagefind.js", "/_pagefind/pagefind-ui.js", "/_pagefind/pagefind-ui.css"]
      },
      assetsInlineLimit: 10096
    }
  },
  build: {
    inlineStylesheets: "always"
  },
  scopedStyleStrategy: "attribute",
  prefetch: {
    defaultStrategy: "viewport"
  }
});