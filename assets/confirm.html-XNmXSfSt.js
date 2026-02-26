import{_ as s,c as a,a as p,o as e}from"./app-BK_2tItu.js";const t={};function l(o,n){return e(),a("div",null,[...n[0]||(n[0]=[p(`<h1 id="component-xac-nhan" tabindex="-1"><a class="header-anchor" href="#component-xac-nhan"><span>Component Xác nhận</span></a></h1><h2 id="muc-luc" tabindex="-1"><a class="header-anchor" href="#muc-luc"><span>Mục lục</span></a></h2><ol><li>[Component](# Thành-Phần)</li><li><a href="#v%C3%AD-d%E1%BB%A5">Example</a></li></ol><hr><h2 id="su-dung" tabindex="-1"><a class="header-anchor" href="#su-dung"><span>Sử dụng</span></a></h2><ol><li>Cấu tạo gốc</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>transition <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;fade&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>div v-if<span class="token operator">=</span><span class="token string">&quot;visible&quot;</span> <span class="token assign-left variable">class</span><span class="token operator">=</span><span class="token string">&quot;fixed inset-0 bg-black/50 flex items-center justify-center z-9999&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>div <span class="token assign-left variable">class</span><span class="token operator">=</span><span class="token string">&quot;bg-white rounded-xl shadow-xl p-6 w-full max-w-sm animate-scale&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">                <span class="token operator">&lt;</span>h2 <span class="token assign-left variable">class</span><span class="token operator">=</span><span class="token string">&quot;text-lg font-semibold text-gray-800 mb-2&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">                    <span class="token punctuation">{</span><span class="token punctuation">{</span> title <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">                <span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span></span>
<span class="line"></span>
<span class="line">                <span class="token operator">&lt;</span>p <span class="token assign-left variable">class</span><span class="token operator">=</span><span class="token string">&quot;text-gray-600 mb-6&quot;</span> v-html<span class="token operator">=</span><span class="token string">&quot;message&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>/p<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">                <span class="token operator">&lt;</span>div <span class="token assign-left variable">class</span><span class="token operator">=</span><span class="token string">&quot;flex justify-end gap-3&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">                    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;cancel&quot;</span></span>
<span class="line">                        <span class="token assign-left variable">class</span><span class="token operator">=</span><span class="token string">&quot;px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">                        <span class="token punctuation">{</span><span class="token punctuation">{</span> cancelText <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">                    <span class="token operator">&lt;</span>/button<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">                    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;confirmAction&quot;</span> <span class="token assign-left variable">class</span><span class="token operator">=</span><span class="token string">&quot;px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">                        <span class="token punctuation">{</span><span class="token punctuation">{</span> okText <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">                    <span class="token operator">&lt;</span>/button<span class="token operator">&gt;</span></span>
<span class="line">                <span class="token operator">&lt;</span>/div<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>/div<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>/div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>/transition<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>/template<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span></span>
<span class="line"><span class="token function">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> from <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">const visible <span class="token operator">=</span> ref<span class="token punctuation">(</span>false<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">const message <span class="token operator">=</span> ref<span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">const title <span class="token operator">=</span> ref<span class="token punctuation">(</span><span class="token string">&quot;Xác nhận&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">const okText <span class="token operator">=</span> ref<span class="token punctuation">(</span><span class="token string">&quot;Đồng ý&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">const cancelText <span class="token operator">=</span> ref<span class="token punctuation">(</span><span class="token string">&quot;Hủy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">let</span> resolver <span class="token operator">=</span> null<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">const <span class="token function">open</span> <span class="token operator">=</span> <span class="token punctuation">(</span>options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    title.value <span class="token operator">=</span> options.title <span class="token operator">||</span> <span class="token string">&quot;Xác nhận&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    message.value <span class="token operator">=</span> options.message <span class="token operator">||</span> <span class="token string">&quot;Bạn có chắc chắn muốn thực hiện hành động này?&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    okText.value <span class="token operator">=</span> options.okText <span class="token operator">||</span> <span class="token string">&quot;Đồng ý&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    cancelText.value <span class="token operator">=</span> options.cancelText <span class="token operator">||</span> <span class="token string">&quot;Hủy bỏ&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    visible.value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token builtin class-name">return</span> new Promise<span class="token punctuation">((</span>resolve<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        resolver <span class="token operator">=</span> resolve<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">const confirmAction <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    visible.value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>resolver<span class="token punctuation">)</span> resolver<span class="token punctuation">(</span>true<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">const cancel <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    visible.value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>resolver<span class="token punctuation">)</span> resolver<span class="token punctuation">(</span>false<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">const close <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    cancel<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">defineExpose<span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">open</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">&lt;</span>/script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span></span>
<span class="line">.fade-enter-active,</span>
<span class="line">.fade-leave-active <span class="token punctuation">{</span></span>
<span class="line">    transition: opacity <span class="token number">0</span>.2s<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">.fade-enter-from,</span>
<span class="line">.fade-leave-to <span class="token punctuation">{</span></span>
<span class="line">    opacity: <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">@keyframes scale <span class="token punctuation">{</span></span>
<span class="line">    from <span class="token punctuation">{</span></span>
<span class="line">        transform: scale<span class="token punctuation">(</span><span class="token number">0.9</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        opacity: <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    to <span class="token punctuation">{</span></span>
<span class="line">        transform: scale<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        opacity: <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">.animate-scale <span class="token punctuation">{</span></span>
<span class="line">    animation: scale <span class="token number">0</span>.15s ease-out<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span>/style<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Cách sử dụng</li></ol><h1 id="trong-trang-ta-import-component-xac-nhan-nay-vao" tabindex="-1"><a class="header-anchor" href="#trong-trang-ta-import-component-xac-nhan-nay-vao"><span>trong trang ta import component xác nhận này vào</span></a></h1><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">import</span> ConfirmDialog from <span class="token string">&#39;@/components/ui/Confirm.vue&#39;</span></span>
<span class="line"><span class="token function">import</span> <span class="token punctuation">{</span> toast <span class="token punctuation">}</span> from <span class="token string">&#39;vue3-toastify&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="su-dung-chi-tiet" tabindex="-1"><a class="header-anchor" href="#su-dung-chi-tiet"><span>sử dụng chi tiết</span></a></h1><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">  <span class="token operator">&lt;</span>ConfirmDialog <span class="token assign-left variable">ref</span><span class="token operator">=</span><span class="token string">&quot;confirmDialog&quot;</span> /<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">const confirmDialog <span class="token operator">=</span> ref<span class="token punctuation">(</span>null<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">const handleDelete <span class="token operator">=</span> async <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  const confirmed <span class="token operator">=</span> await confirmDialog.value.open<span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    title: <span class="token string">&quot;Xác nhận xóa&quot;</span>,</span>
<span class="line">    message: <span class="token variable"><span class="token variable">\`</span>Bạn có chắc chắn muốn xóa <span class="token string">&quot;&lt;strong&gt;<span class="token variable">\${item.category?.name}</span>&lt;/strong&gt;&quot;</span> cho đơn hàng <span class="token operator">&lt;</span>strong<span class="token operator">&gt;</span><span class="token comment">#\${item.order?.order_code}&lt;/strong&gt;? Hành động này không thể hoàn tác.</span><span class="token variable">\`</span></span>,</span>
<span class="line">    okText: <span class="token string">&quot;Xóa&quot;</span>,</span>
<span class="line">    cancelText: <span class="token string">&quot;Hủy bỏ&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>confirmed<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    router.delete<span class="token punctuation">(</span>route<span class="token punctuation">(</span><span class="token string">&#39;ten-duong-dan&#39;</span>, item.id<span class="token punctuation">)</span>, <span class="token punctuation">{</span></span>
<span class="line">      onSuccess: <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        toast.success<span class="token punctuation">(</span><span class="token string">&#39;Xóa chi phí thành công!&#39;</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span>,</span>
<span class="line">      onError: <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        toast.error<span class="token punctuation">(</span><span class="token string">&#39;Xóa thất bại!&#39;</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span>,</span>
<span class="line">      preserveScroll: <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Custom chi tiết</li></ol><h2 id="o-trong-message-minh-co-the-tuy-bien-chen-html-đe-cho-thong-bao-đep-hon" tabindex="-1"><a class="header-anchor" href="#o-trong-message-minh-co-the-tuy-bien-chen-html-đe-cho-thong-bao-đep-hon"><span>Ở trong message mình có thể tùy biến chèn Html để cho thông báo đẹp hơn</span></a></h2><p>Cũng như tùy biến thêm các tham số: title, các nút xác nhận: okText, cancelText</p><hr><h2 id="tac-gia" tabindex="-1"><a class="header-anchor" href="#tac-gia"><span>Tác giả</span></a></h2><p>Đặng Đức Chính - Cảm ơn vì đã tham khảo trang này!</p>`,18)])])}const i=s(t,[["render",l]]),r=JSON.parse('{"path":"/vuejs/component/confirm.html","title":"Component Xác nhận","lang":"vi-VN","frontmatter":{},"git":{"updatedTime":1772093880000,"contributors":[{"name":"chinhyeunghe","username":"chinhyeunghe","email":"chinhdd.ph28756@gmail.com","commits":1,"url":"https://github.com/chinhyeunghe"}],"changelog":[{"hash":"089216010bfad67a7ecc0bb80a2788503afddce4","time":1772093880000,"email":"chinhdd.ph28756@gmail.com","author":"chinhyeunghe","message":"save add Pagination"}]},"filePathRelative":"vuejs/component/confirm.md"}');export{i as comp,r as data};
