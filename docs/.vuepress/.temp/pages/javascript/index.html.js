import comp from "D:/laragon/www/document-program/docs/.vuepress/.temp/pages/javascript/index.html.vue"
const data = JSON.parse("{\"path\":\"/javascript/\",\"title\":\"JavaScript\",\"lang\":\"vi-VN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1764836967000,\"contributors\":[{\"name\":\"chinhyeunghe\",\"username\":\"chinhyeunghe\",\"email\":\"chinhdd.ph28756@gmail.com\",\"commits\":1,\"url\":\"https://github.com/chinhyeunghe\"}],\"changelog\":[{\"hash\":\"394d881b28613968c9400884c595d4a346d86e9e\",\"time\":1764836967000,\"email\":\"chinhdd.ph28756@gmail.com\",\"author\":\"chinhyeunghe\",\"message\":\"done push project\"}]},\"filePathRelative\":\"javascript/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
