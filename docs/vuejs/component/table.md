# Component Table

## Mục lục
1. [Component](# Thành-Phần)
2. [Example](#ví-dụ)

---


## Component

### 1. Copy component vào project

```bash
<template>
    <div class="datatable-wrapper overflow-hidden rounded-table bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <!-- Loading state -->
        <div v-if="loading" class="max-w-full overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th v-if="showIndex" class="px-6 py-3"></th>
                        <th v-for="col in columns" :key="col.key" class="px-6 py-3"></th>
                        <th v-if="actions.length" class="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    <LoadingTable :colspan="totalColumns" />
                </tbody>
            </table>
        </div>

        <!-- Empty state -->
        <div v-else-if="!tableData.length" class="max-w-full overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <tbody>
                    <tr>
                        <td :colspan="totalColumns" class="px-6 py-12 text-center">
                            <div class="text-gray-500 dark:text-gray-400">
                                <svg class="mx-auto h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2a2 2 0 00-2 2v3m-8 0v3" />
                                </svg>
                                <p class="mt-3 text-sm">{{ emptyMessage }}</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Table data -->
        <div v-else class="max-w-full overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <!-- ... phần thead và tbody giữ nguyên như cũ ... -->
                <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th v-if="showIndex"
                            class="px-6 py-3 text-xs font-medium text-black tracking-wider text-center">
                            STT
                        </th>
                        <th v-for="col in columns" :key="col.key"
                            class="px-6 py-3 text-xs font-medium text-black tracking-wider"
                            :class="col.align === 'text-center' ? 'text-center' : 'text-left'">
                            {{ col.label }}
                        </th>
                        <th v-if="actions.length"
                            class="px-6 py-3 text-xs font-medium text-black tracking-wider text-center">
                            Thao tác
                        </th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr v-for="(item, index) in tableData" :key="item.id || index"
                        class="border-t border-gray-100 dark:border-gray-800">
                        <!-- Index -->
                        <td v-if="showIndex" class="px-6 py-4 text-sm text-gray-500 text-center">
                            {{ indexOffset + index + 1 }}
                        </td>

                        <!-- Data columns -->
                        <td v-for="col in columns" :key="col.key" class="px-6 py-4 text-sm text-gray-500"
                            :class="col.align === 'text-center' ? 'text-center' : 'text-left'">
                            <slot :name="`cell-${col.key}`" :item="item">
                                {{ getCellValue(item, col.key, col.defaultValue) }}
                            </slot>
                        </td>

                        <!-- Actions (đã hỗ trợ render + icon function) -->
                        <td v-if="actions.length" class="px-6 py-4 text-sm text-gray-500 text-center">
                            <div class="flex justify-center gap-2">
                                <component v-for="(action, idx) in actions" :key="idx"
                                    :is="action.href ? 'Link' : 'button'"
                                    :href="action.href ? action.href(item) : undefined" v-bind="action.buttonProps"
                                    @click="!action.href && action.onClick?.(item)" class="inline-flex items-center">

                                    <component v-if="action.render" :is="action.render(item)" class="w-5 h-5" />
                                    <component v-else-if="action.icon"
                                        :is="typeof action.icon === 'function' ? action.icon(item) : action.icon"
                                        class="w-5 h-5" />

                                    <span v-if="action.label" class="ml-1 text-xs">{{ action.label }}</span>
                                </component>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
```

```bash
<script setup>
import { computed } from 'vue'
import { Link } from '@inertiajs/vue3'
import LoadingTable from './LoadingTable.vue'

const props = defineProps({
    columns: { type: Array, required: true },
    data: { type: Array, default: () => [] },
    loading: { type: Boolean, default: false },
    showIndex: { type: Boolean, default: false },
    indexOffset: { type: Number, default: 0 },
    actions: { type: Array, default: () => [] },
    emptyMessage: { type: String, default: 'Không có dữ liệu' }
})

const tableData = computed(() => props.data)

// Tính tổng số cột để colspan chính xác
const totalColumns = computed(() => {
    let count = props.columns.length
    if (props.showIndex) count++
    if (props.actions.length) count++
    return count
})

const getCellValue = (item, key, defaultValue = '') => {
    if (!key) return defaultValue
    const keys = key.split('.')
    let value = item
    for (const k of keys) {
        value = value?.[k]
        if (value === undefined || value === null) return defaultValue
    }
    return value
}
</script>
```
```bash
<style scoped>
.datatable-wrapper {
    position: relative;
}
</style>
```

### 2. Import và sử dụng

```bash
<template>
    <AdminLayout title="Danh sách vị trí">
        <PageBreadcrumb :title="title" :items="[{ text: 'Quản lý vị trí' }]" />

        <!-- Header tìm kiếm + nút thêm -->
        <div
            class="overflow-hidden rounded-table border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] mb-6">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4">
                <SearchPage :filters="filterConfig" @filter="applyFilter" />
                <Button @click="openCreateModal" size="md" variant="primary" :startIcon="AddIcon">
                    Thêm vị trí
                </Button>
            </div>
        </div>

        <!-- DataTable chính thức hoạt động 100% -->
        <DataTable :columns="columns" :data="positions.data" :loading="false" :showIndex="true"
            :indexOffset="(positions.current_page - 1) * positions.per_page" :actions="actions"
            emptyMessage="Không có dữ liệu">
            <!-- Custom cell: Phòng ban -->
            <template #cell-department="{ item }">
                {{ item.department?.name || '-' }}
            </template>

            <!-- Custom cell: Người tạo -->
            <template #cell-creator="{ item }">
                {{ item.creator?.name || '-' }}
            </template>

            <!-- Custom cell: Trạng thái -->
            <template #cell-status="{ item }">
                <span :class="getStatusClass(item.status)" class="px-2 py-1 text-xs rounded-full font-medium">
                    {{ getStatusText(item.status) }}
                </span>
            </template>
        </DataTable>

        <!-- Pagination -->
        <Pagination :totalItems="positions.total" :itemsPerPage="positions.per_page"
            :currentPage="positions.current_page" :doingShow="positions.data.length" @page-change="handlePageChange"
            @items-per-page-change="handleItemsPerPageChange" />

        <!-- Modal Thêm / Sửa -->
        <Modal v-if="isModalOpen" @close="closeModal">
            <template #body>
                <div
                    class="relative w-full max-w-[700px] max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 dark:bg-gray-900 shadow-2xl">
                    <!-- Close button -->
                    <button @click="closeModal" type="button"
                        class="absolute right-5 top-5 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div class="pr-12 mb-6">
                        <h4 class="text-2xl font-bold text-gray-800 dark:text-white">
                            {{ isEditMode ? 'Cập nhật vị trí' : 'Thêm mới vị trí' }}
                        </h4>
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            {{ isEditMode ? 'Chỉnh sửa thông tin vị trí' : 'Điền thông tin vị trí mới' }}
                        </p>
                    </div>

                    <form @submit.prevent="submitForm" class="space-y-5">
                        <!-- Tên vị trí -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Tên vị trí <span class="text-red-500">*</span>
                            </label>
                            <input v-model="form.name" type="text" required placeholder="Nhập tên vị trí"
                                class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow" />
                            <p v-if="form.errors.name" class="mt-1.5 text-sm text-red-600 dark:text-red-400">
                                {{ form.errors.name }}
                            </p>
                        </div>

                        <!-- Thuộc phòng ban -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Thuộc phòng ban <span class="text-red-500">*</span>
                            </label>
                            <select v-model="form.department_id" required
                                class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow">
                                <option value="">-- Chọn phòng ban --</option>
                                <option v-for="department in departments" :key="department.id" :value="department.id">
                                    {{ department.name }}
                                </option>
                            </select>
                            <p v-if="form.errors.department_id" class="mt-1.5 text-sm text-red-600 dark:text-red-400">
                                {{ form.errors.department_id }}
                            </p>
                        </div>

                        <!-- Trạng thái -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                Trạng thái
                            </label>
                            <label class="flex items-center gap-3 cursor-pointer w-fit">
                                <div class="relative">
                                    <input type="checkbox" class="sr-only" :checked="form.status === 'active'"
                                        @change="toggleStatus" />
                                    <div :class="[
                                        'w-11 h-6 rounded-full transition-all duration-300',
                                        form.status === 'active' ? 'bg-brand-500' : 'bg-gray-300 dark:bg-gray-600'
                                    ]"></div>
                                    <div :class="[
                                        'absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300',
                                        form.status === 'active' ? 'translate-x-5' : ''
                                    ]"></div>
                                </div>
                                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {{ form.status === 'active' ? 'Hoạt động' : 'Ngưng hoạt động' }}
                                </span>
                            </label>
                        </div>

                        <!-- Người tạo (chỉ hiển thị khi edit) -->
                        <div v-if="isEditMode && selectedPosition?.creator">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Người tạo
                            </label>
                            <input type="text" :value="selectedPosition.creator.name" readonly
                                class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 cursor-not-allowed" />
                        </div>

                        <!-- Buttons -->
                        <div
                            class="flex items-center justify-end gap-3 pt-5 border-t border-gray-200 dark:border-gray-700">
                            <button @click="closeModal" type="button"
                                class="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition-colors">
                                Hủy
                            </button>
                            <button type="submit" :disabled="form.processing"
                                class="px-6 py-2.5 rounded-lg bg-brand-500 text-white hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-all flex items-center gap-2">
                                <svg v-if="form.processing" class="animate-spin h-4 w-4" fill="none"
                                    viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                    </path>
                                </svg>
                                {{ isEditMode ? 'Cập nhật' : 'Thêm mới' }}
                            </button>
                        </div>
                    </form>
                </div>
            </template>
        </Modal>

        <!-- Modal Xác nhận xóa -->
        <Modal v-if="isDeleteModalOpen" @close="closeDeleteModal">
            <template #body>
                <div class="relative w-full max-w-md rounded-2xl bg-white p-6 dark:bg-gray-900 shadow-2xl">
                    <div class="text-center">
                        <div
                            class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                            <svg class="h-6 w-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h3 class="mt-4 text-lg font-semibold text-gray-900 dark:text-white">Xác nhận xóa</h3>
                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            Bạn có chắc chắn muốn xóa vị trí <strong>{{ positionToDelete?.name }}</strong>?
                            <br>Hành động này không thể hoàn tác.
                        </p>
                    </div>
                    <div class="mt-6 flex gap-3">
                        <button @click="closeDeleteModal" type="button"
                            class="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition-colors">
                            Hủy
                        </button>
                        <button @click="deletePosition" :disabled="deleteForm.processing"
                            class="flex-1 px-4 py-2.5 rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors">
                            Xóa
                        </button>
                    </div>
                </div>
            </template>
        </Modal>
    </AdminLayout>
</template>
```

```bash
<script setup>
import { ref, computed } from 'vue'
import { useForm, router } from '@inertiajs/vue3'
import { toast } from 'vue3-toastify'

// Components
import AdminLayout from '@/Layouts/AdminLayout.vue'
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
import SearchPage from '@/components/SearchPage.vue'
import Button from '@/components/ui/Button.vue'
import Pagination from '../../../Components/Pagination.vue'
import Modal from '@/Components/Modal.vue'
import DataTable from '@/components/DataTable.vue'

// Icons
import AddIcon from '@/icons/AddIcon.vue'
import EditButtonIcon from '@/icons/EditButtonIcon.vue'  // Đảm bảo file này tồn tại
import EyeOn from '@/icons/EyeOn.vue'
import EyeOff from '@/icons/EyeOff.vue'

const props = defineProps({
    positions: Object,
    departments: Array,
    filters: Object
})

const title = 'Danh sách vị trí'

// Modal state (giữ nguyên)
const isModalOpen = ref(false)
const isEditMode = ref(false)
const isDeleteModalOpen = ref(false)
const selectedPosition = ref(null)
const positionToDelete = ref(null)

const form = useForm({
    name: '',
    department_id: '',
    status: 'active'
})

const deleteForm = useForm({})

// Cấu hình cột cho DataTable
const columns = [
    { label: 'STT', align: 'text-center', width: '80px' }, // STT sẽ tự động do showIndex=true
    { label: 'Tên vị trí', key: 'name' },
    { label: 'Phòng ban', key: 'department', align: 'text-left' },     // dùng slot
    { label: 'Người tạo', key: 'creator', align: 'text-left' },        // dùng slot
    { label: 'Trạng thái', key: 'status', align: 'text-center' },     // dùng slot
]

// Cấu hình hành động
const actions = [
    // Nút sửa
    {
        icon: EditButtonIcon,
        buttonProps: { class: 'mr-3 devc__admin__action-btn', title: 'Chỉnh sửa' },
        onClick: (item) => openEditModal(item)
    },
    // Nút bật/tắt trạng thái - DÙNG icon là FUNCTION (đúng cách!)
    {
        icon: (item) => item.status === 'active' ? EyeOn : EyeOff,
        buttonProps: {
            class: 'devc__admin__action-btn',
            title: (item) => item.status === 'active' ? 'Ngừng hoạt động' : 'Kích hoạt'
        },
        onClick: (item) => togglePosition(item)
    }
]
// Filter config giữ nguyên
const filterConfig = computed(() => [
    {
        label: 'Tìm kiếm vị trí',
        name: 'search',
        type: 'text',
        placeholder: 'Tên vị trí, phòng ban...',
        value: props.filters.search ?? ''
    },
    {
        label: 'Phòng ban',
        name: 'department_id',
        type: 'select',
        options: [
            { value: '', label: 'Tất cả' },
            ...props.departments.map(dept => ({
                value: dept.id,
                label: dept.name
            }))
        ],
        value: props.filters.department_id ?? ''
    },
    {
        label: 'Trạng thái',
        name: 'status',
        type: 'select',
        options: [
            { value: '', label: 'Tất cả' },
            { value: 'active', label: 'Đang hoạt động' },
            { value: 'inactive', label: 'Ngừng hoạt động' }
        ],
        value: props.filters.status ?? ''
    }
])

// Các hàm helper giữ nguyên 100%
const getStatusClass = (status) => {
    return status === 'active'
        ? 'text-green-600 bg-green-100 dark:bg-green-900/30'
        : 'text-red-600 bg-red-100 dark:bg-red-900/30'
}

const getStatusText = (status) => {
    return status === 'active' ? 'Hoạt động' : 'Ngưng hoạt động'
}

// Modal methods
const openCreateModal = () => {
    isEditMode.value = false
    selectedPosition.value = null
    form.reset()
    form.clearErrors()
    isModalOpen.value = true
}

const openEditModal = (position) => {
    isEditMode.value = true
    selectedPosition.value = position
    form.clearErrors()

    form.name = position.name
    form.department_id = position.department_id
    form.status = position.status
    form.id = position.id

    isModalOpen.value = true
}

const closeModal = () => {
    isModalOpen.value = false
    form.reset()
    form.clearErrors()
    selectedPosition.value = null
}

const toggleStatus = () => {
    form.status = form.status === 'active' ? 'inactive' : 'active'
}

const submitForm = () => {
    if (isEditMode.value) {
        form.put(route('subsystem-main.positions.update', form.id), {
            onSuccess: () => {
                toast.success('Cập nhật vị trí thành công!')
                closeModal()
            },
            onError: () => {
                toast.error('Có lỗi xảy ra! Vui lòng kiểm tra lại thông tin.')
            }
        })
    } else {
        form.post(route('subsystem-main.positions.store'), {
            onSuccess: () => {
                toast.success('Thêm vị trí thành công!')
                closeModal()
            },
            onError: () => {
                toast.error('Có lỗi xảy ra! Vui lòng kiểm tra lại thông tin.')
            }
        })
    }
}

const togglePosition = (position) => {
    router.put(route('subsystem-main.positions.toggle', position.id), {}, {
        preserveScroll: true,
        onSuccess: () => {
            toast.success('Cập nhật trạng thái thành công!')
        },
        onError: () => {
            toast.error('Có lỗi xảy ra khi cập nhật trạng thái!')
        }
    })
}

const confirmDelete = (position) => {
    positionToDelete.value = position
    isDeleteModalOpen.value = true
}

const closeDeleteModal = () => {
    isDeleteModalOpen.value = false
    positionToDelete.value = null
}

const deletePosition = () => {
    if (!positionToDelete.value) return

    deleteForm.delete(route('subsystem-main.positions.destroy', positionToDelete.value.id), {
        preserveScroll: true,
        onSuccess: () => {
            toast.success('Xóa vị trí thành công!')
            closeDeleteModal()
        },
        onError: (errors) => {
            if (errors.error) {
                toast.error(errors.error)
            } else {
                toast.error('Có lỗi xảy ra khi xóa vị trí!')
            }
            closeDeleteModal()
        }
    })
}

const applyFilter = (filters) => {
    router.get(route('subsystem-main.positions.index'), filters, {
        preserveState: true,
        preserveScroll: true
    })
}

const handlePageChange = (page) => {
    router.get(
        route('subsystem-main.positions.index'),
        { ...props.filters, page },
        { preserveScroll: true, preserveState: true }
    )
}

const handleItemsPerPageChange = (newLimit) => {
    router.get(
        route('subsystem-main.positions.index'),
        { ...props.filters, per_page: newLimit, page: 1 },
        { preserveScroll: true, preserveState: true }
    )
}
</script>
```

```bash
<style scoped>
/* Custom scrollbar for modal */
.overflow-y-auto::-webkit-scrollbar {
    width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
    background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
}

.dark .overflow-y-auto::-webkit-scrollbar-thumb {
    background: #475569;
}
</style>
```

---
## Tác giả

Đặng Đức Chính - Thân!