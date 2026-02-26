# Component InputMoney

Component **InputMoney** là một input được xây dựng từ
**FormInput**, hỗ trợ các loại tiền, Việt, Đô, Bảng Anh....

## Cách sử dụng tương tự như FormInput
## Compoment đã được tích hợp format tiền rồi vậy nên không cần phải gọi hàm formatMoney vào nữa nhé !

``` vue
<template>
    <InputMoney v-model="amount" unit="đ" />
    <p>Giá trị thực: {{ amount }}</p>
</template>

<script setup>
    import InputMoney from '@/components/InputMoney.vue'

    const amount = ref("")
</script>
## Props

  ------------------------------------------------------------------------------
  Prop          Kiểu          Mặc định      Mô tả
  ------------- ------------- ------------- ------------------------------------
  unit    String/Date   đ           Đơn vị
  showText  Boolean     true        Thể hiện có hiển thị text mô tả cho tiền hay không
  .............
  ------------------------------------------------------------------------------

---
## Tác giả
Cảm ơn bạn đã đọc. Xin được bạn góp ý.
Vũ Hồng Điệp - Thân!
