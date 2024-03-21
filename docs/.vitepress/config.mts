import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "昆仑巢 KunLunNest",
  description: "创业的路，你并不孤独，昆仑巢已为你而筑",
  appearance: "dark",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      alt: "昆仑巢 KunLunNest",
      src: "/kunlunnest_logo.png",
    },
    nav: [
      { text: "主页", link: "/" },
      { text: "关于", link: "/about" },
      { text: "活动", link: "/events" },
      { text: "资源库", link: "http://dayuoa.com/hub/kunlunnest" },
      { text: "更多", link: "/more" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "关于昆仑巢", link: "/about" },
          { text: "了解更多", link: "/more" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/cellinlab/kunlunnest-home" }],
  },
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
})
