import comp from "D:/laragon/www/document-program/docs/.vuepress/.temp/pages/vuejs/component/table.html.vue"
const data = JSON.parse("{\"path\":\"/vuejs/component/table.html\",\"title\":\"DataTable Component - Tài liệu đầy đủ\",\"lang\":\"vi-VN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"vuejs/component/table.md\"}")
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
