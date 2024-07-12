import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

//UI framework
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

//for make snappy single page animation
import swup from "@swup/astro";

//import style, icon, frontmatter
import icon from "astro-icon";

//Compress extension for compress image, enhance performance
import Compress from "astro-compress";

const oklchToHex = (str) => {
  const DEFAULT_HUE = 250;
  const regex = /-?\d+(\.\d+)?/g;
  const matches = str.string.match(regex);
  const lch = [matches[0], matches[1], DEFAULT_HUE];
  return new Color("oklch", lch).to("srgb").toString({
    format: "hex",
  });
};

export default defineConfig({
  site: "https://example.com",
  base: "/",
  //this is trailing slash in the last of url (google.com/)
  trailingSlash: "never",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    vue({ devtools: true }),
    swup({
      theme: "fade",
      animationClass: "transition-",
      containers: ["main"],
      smoothScrolling: true,
      //store data in cache increase performance but not good for dynamic website
      cache: true,
      //preloading on hover.. Really nice
      preload: true,
      accessibility: true,
      globalInstance: true,
    }),

    //provide icon
    icon({
      "material-symbols": ["*"],
      "fa6-brands": ["*"],
      "fa6-regular": ["*"],
      "fa6-solid": ["*"],
    }),

    //Compress image
    Compress({
      Image: false,
    }),
  ],

  //settings vite
  vite: {
    build: {
      //setting of "RoleUp" (module bundler Vite)
      rollupOptions: {
        onwarn(warning, warn) {
          if (
            warning.message.includes("is dynamically imported by") &&
            warning.message.includes("but also statically imported by")
          ) {
            return;
          }
          warn(warning);
        },
      },
    },
    //setting for css
    css: {
      //preprocessor like stylus, scss, sass, less...
      preprocessorOptions: {
        stylus: {
          define: {
            //define global function in stylus
            oklchToHex: oklchToHex,
          },
        },
      },
    },
  },
});
