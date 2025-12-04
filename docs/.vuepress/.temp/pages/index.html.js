import comp from "D:/laragon/www/document-program/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Trang chủ\",\"lang\":\"vi-VN\",\"frontmatter\":{\"home\":true,\"title\":\"Trang chủ\",\"heroText\":\"Tài liệu lập trình\",\"tagline\":\"Xin chào những người anh em lập trình iu quí. Chúng ta hãy cùng nhau xây dựng và phát triển mạnh mẽ trên website chia sẻ tài liệu, kiến thức lập trình này nhé!\",\"actions\":[{\"text\":\"Khám phá Javascript\",\"link\":\"/javascript/intro\",\"type\":\"primary\"},{\"text\":\"Khám phá PHP\",\"link\":\"/php/intro\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"JavaScript\",\"details\":\"Cùng nhau chia sẻ kiến thức Js\"},{\"title\":\"PHP\",\"details\":\"Cùng nhau chia sẻ kiến thức PHP\"},{\"title\":\"Vue js\",\"details\":\"Cùng nhau chia sẻ kiến thức Vue js\"}]},\"git\":{},\"filePathRelative\":\"README.md\"}")
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
