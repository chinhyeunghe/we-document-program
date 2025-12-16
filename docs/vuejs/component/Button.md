# Component Button

## Mục lục

1. [Component](# Thành-Phần)
2. [Example](#ví-dụ)

---

## Sử dụng

1. Button Cancel, Submit

```bash
import CancelButton from '../../../Components/Button/CancelButton.vue'
import SubmitButton from '../../../Components/Button/SubmitButton.vue'

 <CancelButton @cancel="handleCancel" />
 <SubmitButton :loading="loading" :disabled="!isValid" extra-class="order-1 sm:order-2" />


const handleCancel = () => {
    if (confirm('Bạn có chắc muốn hủy?')) {
        router.visit(route('sales.order.index'))
    }
}

```

## Tác giả

Đặng Đức Chính - Cảm ơn vì đã tham khảo trang này!
