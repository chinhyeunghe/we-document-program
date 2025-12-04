import comp from "D:/laragon/www/document-program/docs/.vuepress/.temp/pages/vuejs/component/table.html.vue"
const data = JSON.parse("{\"path\":\"/vuejs/component/table.html\",\"title\":\"DataTable Component - Tài liệu đầy đủ\",\"lang\":\"vi-VN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1764843708000,\"contributors\":[{\"name\":\"chinhyeunghe\",\"username\":\"chinhyeunghe\",\"email\":\"chinhdd.ph28756@gmail.com\",\"commits\":1,\"url\":\"https://github.com/chinhyeunghe\"}],\"changelog\":[{\"hash\":\"83af4667143961ef8244bc0413f949c42e862648\",\"time\":1764843708000,\"email\":\"chinhdd.ph28756@gmail.com\",\"author\":\"chinhyeunghe\",\"message\":\"push component table vue js\"}]},\"filePathRelative\":\"vuejs/component/table.md\"}")
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
