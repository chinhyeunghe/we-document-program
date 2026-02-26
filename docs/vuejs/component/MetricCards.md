# Component Metric Cards

## Mục lục

1. [Component](# Thành-Phần)
2. [Example](#ví-dụ)

---
## Giới thiệu
Component này có tác dụng đưa ra các phần tổng ở trên đầu

## Sử dụng

``` vue
<script setup>
    import MetricCards from '@/Components/MetricCards.vue';
    const metrics = [{
            title: 'Tổng số lượng kho',
            value: '1,234',
            icon: WarehouseIcon,
            bgColor: 'bg-brand-500'
        },
        {
            title: 'Tổng tiền',
            value: '123,400 VND',
            icon: WarehouseIcon,
            bgColor: 'bg-brand-500'
        },
    ]
</script>
<template>
    <MetricCards :metrics="metrics"></MetricCards>
</template>
```
## Tác giả
Cảm ơn bạn đã đọc. Xin được bạn góp ý.
Vũ Hồng Điệp - Thân!
