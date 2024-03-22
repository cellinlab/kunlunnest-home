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
      { text: "活动", items: [{ text: "疯狂星期六", link: "/activity/crazysaturday" }] },
      { text: "资源库", link: "http://dayuoa.com/hub/kunlunnest" },
      { text: "更多", link: "/more" },
    ],

    sidebar: [
      {
        text: "昆仑巢",
        items: [
          { text: "关于昆仑巢", link: "/about" },
          { text: "了解更多", link: "/more" },
        ],
      },
      {
        text: "巢级活动",
        items: [{ text: "疯狂星期六", link: "/activity/crazysaturday" }],
      },
      {
        text: "巢级平台",
        items: [{ text: "资源库", link: "http://dayuoa.com/hub/kunlunnest" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/cellinlab/kunlunnest-home" }],

    footer: {
      message: "域名及网站技术支持由 <a href='https://cellinlab.com'>@Cellinlab</a> 友情赞助 💖",
      copyright: "CopyRight © 2023-present KunLunNest",
    },
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["script", { charset: "utf-8", id: "LA_COLLECT", src: "https://sdk.51.la/js-sdk-pro.min.js" }],
    ["script", {}, `LA.init({id:"3HsDR8QAB8p9L9AZ",ck:"3HsDR8QAB8p9L9AZ",autoTrack:true,hashMode:true})`],
  ],
})
