# InputDate -- Component chọn thời gian

Component **InputDate** là một input date được xây dựng từ
**flatpickr**, hỗ trợ đầy đủ tiếng Việt, dark mode, label, error, icon,
nút xóa và rất dễ sử dụng.

## Cách sử dụng

``` vue
<template>
  <!-- Cơ bản -->
  <InputDate label="Ngày sinh" v-model="form.birth_date" required />

  <!-- Có placeholder + error -->
  <InputDate
    label="Từ ngày"
    v-model="filters.from_date"
    placeholder="Chọn ngày bắt đầu"
    :error="form.errors.from_date"
  />

  <!-- Giới hạn ngày (đến ngày không nhỏ hơn từ ngày) -->
  <InputDate
    label="Đến ngày"
    v-model="filters.to_date"
    placeholder="Chọn ngày kết thúc"
    :config="{ minDate: filters.from_date }"
  />

  <!-- Range date (chọn khoảng) -->
  <InputDate
    v-model="form.date_range"
    placeholder="Chọn khoảng thời gian"
    :config="{ mode: 'range', dateFormat: 'Y-m-d' }"
  />

  <!-- Disable hoặc không cho xóa -->
  <InputDate
    label="Ngày tạo"
    v-model="form.created_at"
    :disabled="true"
    :clearable="false"
  />
</template>

<script setup>
import InputDate from '@/components/ui/InputDate.vue'

const form = ref({
  birth_date: '',
  date_range: ''
})

const filters = ref({
  from_date: '',
  to_date: ''
})
</script>
```

## Props

  ------------------------------------------------------------------------------
  Prop          Kiểu          Mặc định      Mô tả
  ------------- ------------- ------------- ------------------------------------
  modelValue    String/Date   null          Giá trị v-model

  label         String        \-            Nhãn hiển thị

  placeholder   String        "Chọn ngày"   Placeholder

  error         String        \-            Hiển thị lỗi (form.errors.xxx)

  required      Boolean       false         Hiển thị dấu \* đỏ

  disabled      Boolean       false         Vô hiệu hóa input

  clearable     Boolean       true          Cho phép hiển thị nút xóa

  config        Object        {}            Cấu hình flatpickr (mode, minDate,
                                            maxDate...)
  ------------------------------------------------------------------------------

---
## Tác giả
Cảm ơn bạn đã đọc. Xin được bạn góp ý. 
 Đặng Đức Chính - Thân!