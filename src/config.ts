import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from "./types/config";

import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
  title: "Yonnon",
  subtitle: "Demo Page",
  lang: "en",
  themeColor: {
    hue: 250,
    fixed: false,
  },
  banner: {
    enable: false,
    src: "assets/images/demo-banner.png",
    position: "center",
  },
  favicon: [],
};

export const narBarConfig: NavBarConfig = {
  links: [LinkPreset.Home, LinkPreset.Archive, LinkPreset.About],
};

export const profileConfig: ProfileConfig = {
  name: "Yonnon",
  bio: "Nothing here",
  avatar: "assets/images/demo-avatar.png",
  links: [
    {
      name: "Twitter",
      icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
      // You will need to install the corresponding icon set if it's not already included
      // `pnpm add @iconify-json/<icon-set-name>`
      url: "https://twitter.com",
    },
    {
      name: "Steam",
      icon: "fa6-brands:steam",
      url: "https://store.steampowered.com",
    },
    {
      name: "GitHub",
      icon: "fa6-brands:github",
      url: "https://github.com/",
    },
  ],
};

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: "CC BY-NC-SA 4.0",
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
