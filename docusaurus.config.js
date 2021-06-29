const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Stream-Pi Documentation",
  tagline: "A Robust Macro Keyboard Software",
  url: "https://documentation.stream-pi.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "stream-pi", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Stream-Pi",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "welcome",
          position: "left",
          label: "Getting Started",
        },
        {
          href: "https://github.com/stream-pi",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/welcome",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Matrix",
              href: "https://matrix.to/#/!hTwUYZonUXThjkMhCD:matrix.org?via=matrix.org",
            },
            {
              label: "Discord",
              href: "https://discord.gg/BExqGmk",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/stream_pi",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/stream-pi",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Stream-Pi, Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/stream-pi/documentation/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
