export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/laragon/www/document-program/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/laragon/www/document-program/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/javascript/closure.html", { loader: () => import(/* webpackChunkName: "javascript_closure.html" */"D:/laragon/www/document-program/docs/.vuepress/.temp/pages/javascript/closure.html.js"), meta: {"title":"Closure trong JavaScript"} }],
  ["/javascript/intro.html", { loader: () => import(/* webpackChunkName: "javascript_intro.html" */"D:/laragon/www/document-program/docs/.vuepress/.temp/pages/javascript/intro.html.js"), meta: {"title":"Giới thiệu JavaScript"} }],
  ["/javascript/", { loader: () => import(/* webpackChunkName: "javascript_index.html" */"D:/laragon/www/document-program/docs/.vuepress/.temp/pages/javascript/index.html.js"), meta: {"title":"JavaScript"} }],
  ["/vuejs/info.html", { loader: () => import(/* webpackChunkName: "vuejs_info.html" */"D:/laragon/www/document-program/docs/.vuepress/.temp/pages/vuejs/info.html.js"), meta: {"title":"Giới thiệu về Vue js"} }],
  ["/vuejs/", { loader: () => import(/* webpackChunkName: "vuejs_index.html" */"D:/laragon/www/document-program/docs/.vuepress/.temp/pages/vuejs/index.html.js"), meta: {"title":"Chia sẻ về Vue js"} }],
  ["/php/intro.html", { loader: () => import(/* webpackChunkName: "php_intro.html" */"D:/laragon/www/document-program/docs/.vuepress/.temp/pages/php/intro.html.js"), meta: {"title":"Giới thiệu PHP"} }],
  ["/php/pdo.html", { loader: () => import(/* webpackChunkName: "php_pdo.html" */"D:/laragon/www/document-program/docs/.vuepress/.temp/pages/php/pdo.html.js"), meta: {"title":""} }],
  ["/php/", { loader: () => import(/* webpackChunkName: "php_index.html" */"D:/laragon/www/document-program/docs/.vuepress/.temp/pages/php/index.html.js"), meta: {"title":"PHP"} }],
  ["/vuejs/component/table.html", { loader: () => import(/* webpackChunkName: "vuejs_component_table.html" */"D:/laragon/www/document-program/docs/.vuepress/.temp/pages/vuejs/component/table.html.js"), meta: {"title":"DataTable Component - Tài liệu đầy đủ"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/laragon/www/document-program/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
