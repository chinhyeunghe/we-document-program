import comp from "D:/laragon/www/document-program/docs/.vuepress/.temp/pages/javascript/intro.html.vue"
const data = JSON.parse("{\"path\":\"/javascript/intro.html\",\"title\":\"Giới thiệu JavaScript\",\"lang\":\"vi-VN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1764832797000,\"contributors\":[{\"name\":\"chinhyeunghe\",\"username\":\"chinhyeunghe\",\"email\":\"chinhdd.ph28756@gmail.com\",\"commits\":1,\"url\":\"https://github.com/chinhyeunghe\"}],\"changelog\":[{\"hash\":\"8b2c1f30c7454fb51f40da187edb975f2c989765\",\"time\":1764832797000,\"email\":\"chinhdd.ph28756@gmail.com\",\"author\":\"chinhyeunghe\",\"message\":\"Hello project document program\"}]},\"filePathRelative\":\"javascript/intro.md\"}")
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
