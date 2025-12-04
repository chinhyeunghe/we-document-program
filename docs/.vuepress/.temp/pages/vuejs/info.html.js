import comp from "D:/laragon/www/document-program/docs/.vuepress/.temp/pages/vuejs/info.html.vue"
const data = JSON.parse("{\"path\":\"/vuejs/info.html\",\"title\":\"Giới thiệu về Vue js\",\"lang\":\"vi-VN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"vuejs/info.md\"}")
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
