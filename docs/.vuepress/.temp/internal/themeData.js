export const themeData = JSON.parse("{\"logo\":\"/logo.png\",\"darkMode\":true,\"navbar\":[{\"text\":\"Trang chủ\",\"link\":\"/\"},{\"text\":\"JavaScript\",\"link\":\"/javascript/\"},{\"text\":\"PHP\",\"link\":\"/php/\"},{\"text\":\"Vue js\",\"link\":\"/vuejs/\"}],\"sidebar\":{\"/javascript/\":[{\"text\":\"JavaScript\",\"collapsible\":true,\"children\":[\"/javascript/README.md\",\"/javascript/intro.md\",\"/javascript/closure.md\"]}],\"/php/\":[{\"text\":\"PHP\",\"collapsible\":true,\"children\":[\"/php/README.md\",\"/php/intro.md\",\"/php/pdo.md\"]}],\"/vuejs/\":[{\"text\":\"VueJs\",\"collapsible\":true,\"children\":[\"/vuejs/info.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
