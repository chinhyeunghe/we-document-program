import comp from "D:/laragon/www/document-program/docs/.vuepress/.temp/pages/javascript/closure.html.vue"
const data = JSON.parse("{\"path\":\"/javascript/closure.html\",\"title\":\"Closure trong JavaScript\",\"lang\":\"vi-VN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1764836967000,\"contributors\":[{\"name\":\"chinhyeunghe\",\"username\":\"chinhyeunghe\",\"email\":\"chinhdd.ph28756@gmail.com\",\"commits\":2,\"url\":\"https://github.com/chinhyeunghe\"}],\"changelog\":[{\"hash\":\"394d881b28613968c9400884c595d4a346d86e9e\",\"time\":1764836967000,\"email\":\"chinhdd.ph28756@gmail.com\",\"author\":\"chinhyeunghe\",\"message\":\"done push project\"},{\"hash\":\"8b2c1f30c7454fb51f40da187edb975f2c989765\",\"time\":1764832797000,\"email\":\"chinhdd.ph28756@gmail.com\",\"author\":\"chinhyeunghe\",\"message\":\"Hello project document program\"}]},\"filePathRelative\":\"javascript/closure.md\"}")
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
