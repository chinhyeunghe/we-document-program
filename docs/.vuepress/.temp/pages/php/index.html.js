import comp from "D:/laragon/www/document-program/docs/.vuepress/.temp/pages/php/index.html.vue"
const data = JSON.parse("{\"path\":\"/php/\",\"title\":\"PHP\",\"lang\":\"vi-VN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"php/README.md\"}")
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
