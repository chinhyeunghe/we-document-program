import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";
import noGit from "./plugin/no-git";

export default defineUserConfig({
  base: '/we-document-program/',
  lang: "vi-VN",
  title: "Tài liệu lập trình",
  description: "Website tài liệu lập trình",

  bundler: viteBundler(),
  plugins: [noGit()],

  theme: defaultTheme({
    logo: "/logo.png",
    darkMode: true,

    navbar: [
      {
        text: "Trang chủ",
        link: "/",
      },
      {
        text: "JavaScript",
        link: "/javascript/",
      },
      {
        text: "PHP",
        link: "/php/",
      },
      {
        text: "Vue js",
        link: "/vuejs/",
      },
      {
        text: "Icon",
        link: "/warehouse-icon/",
      },
    ],

    // Sidebar
    sidebar: {
      "/javascript/": [
        {
          text: "JavaScript",
          collapsible: true,
          children: [
            "/javascript/README.md",
            "/javascript/intro.md",
            "/javascript/closure.md",
          ],
        },
      ],

      "/php/": [
        {
          text: "PHP",
          collapsible: true,
          children: ["/php/README.md", "/php/intro.md", "/php/pdo.md"],
        },
      ],
      "/vuejs/": [
        {
          text: "VueJs",
          collapsible: true,
          children: ["/vuejs/info.md", "/vuejs/component/table.md", "/vuejs/component/confirm.md", "/vuejs/component/InputDate", "/vuejs/component/Button", "/vuejs/component/AutoRenderCodeInput", "/vuejs/component/MetricCards.md", "/vuejs/component/InputMoney.md", "/vuejs/component/Pagination.md"],
        },
      ],
       "/warehouse-icon/": [
        {
          text: "Icon",
          collapsible: true,
          children: ["/warehouse-icon/svg.md"],
        },
      ],
    },
  }),
});
