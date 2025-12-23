# Component Auto Render Code Input

## Mục lục

1. [Component](# Thành-Phần)
2. [Example](#ví-dụ)

---
## Giới thiệu
Component này có tác dụng gợi ý tự động sinh ra mã dựa theo thời gian hiện tại

## Sử dụng

``` vue   
<script setup>
    import AutoRenderCodeInput from '@/components/ui/AutoRenderCodeInput.vue'
</script>
<template>
    <AutoRenderCodeInput label="Mã đơn hàng" v-model="form.order_code" :error="errors.order_code" required prefix="DMH"/>
</template>
```
## Tác giả
Cảm ơn bạn đã đọc. Xin được bạn góp ý. 
 Vũ Hồng Điệp - Thân!