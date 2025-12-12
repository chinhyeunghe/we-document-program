# Component Xác nhận

## Mục lục
1. [Component](# Thành-Phần)
2. [Example](#ví-dụ)

---


## Sử dụng
1. Cấu tạo gốc

```bash
<template>
    <transition name="fade">
        <div v-if="visible" class="fixed inset-0 bg-black/50 flex items-center justify-center z-9999">
            <div class="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm animate-scale">
                <h2 class="text-lg font-semibold text-gray-800 mb-2">
                    {{ title }}
                </h2>

                <p class="text-gray-600 mb-6" v-html="message"></p>

                <div class="flex justify-end gap-3">
                    <button @click="cancel"
                        class="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100">
                        {{ cancelText }}
                    </button>

                    <button @click="confirmAction" class="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700">
                        {{ okText }}
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
const message = ref("");
const title = ref("Xác nhận");
const okText = ref("Đồng ý");
const cancelText = ref("Hủy");

let resolver = null;

const open = (options = {}) => {
    title.value = options.title || "Xác nhận";
    message.value = options.message || "Bạn có chắc chắn muốn thực hiện hành động này?";
    okText.value = options.okText || "Đồng ý";
    cancelText.value = options.cancelText || "Hủy bỏ";

    visible.value = true;

    return new Promise((resolve) => {
        resolver = resolve;
    });
}

const confirmAction = () => {
    visible.value = false;
    if (resolver) resolver(true);
}

const cancel = () => {
    visible.value = false;
    if (resolver) resolver(false);
}

const close = () => {
    cancel();
}

defineExpose({
    open
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

@keyframes scale {
    from {
        transform: scale(0.9);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

.animate-scale {
    animation: scale 0.15s ease-out;
}
</style>

```

2. Cách sử dụng

# trong trang ta import component xác nhận này vào

```bash
import ConfirmDialog from '@/components/ui/Confirm.vue'
import { toast } from 'vue3-toastify'
```

# sử dụng chi tiết

```bash
  <ConfirmDialog ref="confirmDialog" />



const confirmDialog = ref(null)

const handleDelete = async (item) => {
  const confirmed = await confirmDialog.value.open({
    title: "Xác nhận xóa",
    message: `Bạn có chắc chắn muốn xóa "<strong>${item.category?.name}</strong>" cho đơn hàng <strong>#${item.order?.order_code}</strong>? Hành động này không thể hoàn tác.`,
    okText: "Xóa",
    cancelText: "Hủy bỏ"
  })

  if (confirmed) {
    router.delete(route('ten-duong-dan', item.id), {
      onSuccess: () => {
        toast.success('Xóa chi phí thành công!')
      },
      onError: () => {
        toast.error('Xóa thất bại!')
      },
      preserveScroll: true
    })
  }
}

```


3. Custom chi tiết

Ở trong message mình có thể tùy biến chèn Html để cho thông báo đẹp hơn
--- 
Cũng như tùy biến thêm các tham số: title, các nút xác nhận: okText, cancelText

---
## Tác giả

Đặng Đức Chính - Cảm ơn vì đã tham khảo trang này!