# DataTable Component - Tài liệu đầy đủ

## Mục lục
1. [Giới thiệu](#giới-thiệu)
2. [Cài đặt](#cài-đặt)
3. [Props](#props)
4. [Slots](#slots)
5. [Column Configuration](#column-configuration)
6. [Actions Configuration](#actions-configuration)
7. [Ví dụ sử dụng](#ví-dụ-sử-dụng)
8. [Best Practices](#best-practices)

---

## Giới thiệu

**DataTable** là một component Vue 3 có khả năng tái sử dụng cao, được thiết kế để hiển thị dữ liệu dạng bảng với nhiều tính năng tùy chỉnh.

### Tính năng chính:
- ✅ Cấu hình linh hoạt qua props
- ✅ Custom render với slots
- ✅ Hỗ trợ nested object
- ✅ Actions động có điều kiện
- ✅ Loading và Empty states
- ✅ Responsive design
- ✅ Dark mode support
- ✅ TypeScript friendly

---

## Cài đặt

### 1. Copy component vào project

```bash
# Tạo file component
touch resources/js/components/DataTable.vue
```

### 2. Import và sử dụng

```vue
<script setup>
import DataTable from '@/components/DataTable.vue'
</script>
```

---

## Props

### Danh sách Props đầy đủ

| Prop | Type | Default | Bắt buộc | Mô tả |
|------|------|---------|----------|-------|
| `columns` | `Array` | `[]` | ✅ | Cấu hình các cột của bảng |
| `data` | `Array` | `[]` | ❌ | Dữ liệu hiển thị |
| `loading` | `Boolean` | `false` | ❌ | Trạng thái loading |
| `loadingText` | `String` | `'Đang tải...'` | ❌ | Text hiển thị khi loading |
| `emptyMessage` | `String` | `'Không có dữ liệu'` | ❌ | Message khi không có data |
| `showIndex` | `Boolean` | `true` | ❌ | Hiển thị cột STT |
| `indexLabel` | `String` | `'STT'` | ❌ | Label của cột STT |
| `indexOffset` | `Number` | `0` | ❌ | Offset cho số thứ tự (phân trang) |
| `actions` | `Array\|Function\|Object` | `null` | ❌ | Cấu hình actions |
| `rowKey` | `String` | `'id'` | ❌ | Field làm key cho row |
| `rowClass` | `Function` | `null` | ❌ | Custom class cho row |

### Chi tiết Props

#### `columns` (Array) - Bắt buộc

Mảng các object định nghĩa cột:

```javascript
const columns = [
  {
    label: 'Tên cột',        // Tiêu đề hiển thị
    key: 'field_name',       // Field name trong data
    align: 'text-left',      // Căn lề: text-left, text-center, text-right
    width: '200px',          // Độ rộng cột (optional)
    headerClass: '',         // Class cho header
    cellClass: '',           // Class cho cell
    defaultValue: '-',       // Giá trị mặc định khi null/undefined
    html: false,             // Render HTML (true/false)
    render: (item, index) => {} // Custom render function
  }
]
```

#### `data` (Array)

Mảng dữ liệu hiển thị:

```javascript
const data = [
  { id: 1, name: 'Item 1', status: 'active' },
  { id: 2, name: 'Item 2', status: 'inactive' }
]
```

#### `indexOffset` (Number)

Dùng để tính số thứ tự khi phân trang:

```javascript
// Trang 1: indexOffset = 0 → STT: 1, 2, 3...
// Trang 2: indexOffset = 10 → STT: 11, 12, 13...
// Trang 3: indexOffset = 20 → STT: 21, 22, 23...

const indexOffset = (currentPage - 1) * itemsPerPage
```

#### `rowClass` (Function)

Custom class cho từng row:

```javascript
const rowClass = (item, index) => {
  if (item.status === 'inactive') return 'bg-gray-100'
  if (item.priority === 'high') return 'bg-red-50'
  return ''
}
```

---

## Slots

### Danh sách Slots

| Slot Name | Props | Mô tả |
|-----------|-------|-------|
| `cell-{key}` | `{ item, index, value }` | Custom render cho cell |
| `actions` | `{ item, index }` | Custom render cho actions |

### Ví dụ sử dụng Slots

#### 1. Custom Cell

```vue
<DataTable :columns="columns" :data="data">
  <!-- Slot cho cột 'price' -->
  <template #cell-price="{ item, value }">
    <span class="font-bold text-green-600">
      {{ formatCurrency(value) }}
    </span>
  </template>

  <!-- Slot cho cột 'status' -->
  <template #cell-status="{ item }">
    <span :class="getStatusClass(item.status)">
      {{ getStatusLabel(item.status) }}
    </span>
  </template>
</DataTable>
```

#### 2. Custom Actions

```vue
<DataTable :columns="columns" :data="data">
  <template #actions="{ item, index }">
    <div class="flex gap-2">
      <Button v-if="canEdit(item)" @click="edit(item)">
        Sửa
      </Button>
      <Button v-if="canDelete(item)" @click="deleteItem(item)">
        Xóa
      </Button>
    </div>
  </template>
</DataTable>
```

---

## Column Configuration

### 1. Cột cơ bản

```javascript
const columns = [
  { label: 'Tên', key: 'name' },
  { label: 'Email', key: 'email' }
]
```

### 2. Nested Object

```javascript
const columns = [
  { label: 'Người dùng', key: 'user.name' },
  { label: 'Phòng ban', key: 'department.name' },
  { label: 'Thành phố', key: 'address.city.name' }
]

// Data format
const data = [
  {
    user: { name: 'Nguyễn Văn A' },
    department: { name: 'IT' },
    address: { city: { name: 'Hà Nội' } }
  }
]
```

### 3. Custom Render Function

```javascript
const columns = [
  {
    label: 'Giá',
    key: 'price',
    render: (item, index) => {
      return h('span', {
        class: 'font-bold text-green-600'
      }, formatCurrency(item.price))
    }
  }
]
```

### 4. HTML Content

```javascript
const columns = [
  {
    label: 'Trạng thái',
    key: 'status',
    html: true, // Cho phép render HTML
    render: (item) => {
      return renderStatus(item.status) // Trả về HTML string
    }
  }
]
```

### 5. Default Value

```javascript
const columns = [
  {
    label: 'Mô tả',
    key: 'description',
    defaultValue: 'Chưa có mô tả' // Hiển thị khi null/undefined
  },
  {
    label: 'MST',
    key: 'tax_number',
    defaultValue: '' // Hiển thị rỗng
  }
]
```

### 6. Căn lề và Width

```javascript
const columns = [
  {
    label: 'STT',
    key: 'index',
    align: 'text-center',
    width: '80px'
  },
  {
    label: 'Tên sản phẩm',
    key: 'name',
    align: 'text-left',
    width: '300px'
  },
  {
    label: 'Giá',
    key: 'price',
    align: 'text-right',
    width: '150px'
  }
]
```

### 7. Custom Class

```javascript
const columns = [
  {
    label: 'Ưu tiên',
    key: 'priority',
    headerClass: 'bg-yellow-100',
    cellClass: 'font-semibold text-orange-600'
  }
]
```

---

## Actions Configuration

### 1. Array Actions - Cấu hình cơ bản

```javascript
const actions = [
  {
    label: 'Xem',
    href: (item) => `/items/${item.id}`,
    buttonProps: {
      variant: 'primary',
      size: 'sm'
    }
  },
  {
    label: 'Xóa',
    onClick: (event, item, index) => {
      if (confirm('Bạn có chắc muốn xóa?')) {
        deleteItem(item.id)
      }
    },
    buttonProps: {
      variant: 'danger',
      size: 'sm'
    }
  }
]
```

### 2. Actions với Icon

```javascript
import { EditIcon, DeleteIcon, EyeIcon } from '@/icons'

const actions = [
  {
    label: '',
    icon: EyeIcon,
    href: (item) => `/items/${item.id}`,
    buttonProps: {
      variant: 'outline',
      size: 'sm'
    }
  },
  {
    label: '',
    icon: EditIcon,
    href: (item) => `/items/${item.id}/edit`,
    buttonProps: {
      variant: 'outline',
      size: 'sm'
    }
  },
  {
    label: '',
    icon: DeleteIcon,
    onClick: (e, item) => deleteItem(item),
    buttonProps: {
      variant: 'outline',
      size: 'sm'
    }
  }
]
```

### 3. Actions có điều kiện

```javascript
const actions = [
  {
    label: 'Duyệt',
    visible: (item, index) => item.status === 'pending',
    onClick: (e, item) => approveItem(item),
    buttonProps: { variant: 'success' }
  },
  {
    label: 'Từ chối',
    visible: (item) => item.status === 'pending',
    onClick: (e, item) => rejectItem(item),
    buttonProps: { variant: 'danger' }
  },
  {
    label: 'Xem',
    visible: () => true, // Luôn hiển thị
    href: (item) => `/items/${item.id}`
  }
]
```

### 4. Custom Render Action

```javascript
const actions = [
  {
    render: (item, index) => {
      return h('div', { class: 'flex gap-2' }, [
        h(Button, {
          onClick: () => edit(item),
          variant: 'primary'
        }, 'Sửa'),
        
        item.can_delete && h(Button, {
          onClick: () => deleteItem(item),
          variant: 'danger'
        }, 'Xóa')
      ])
    }
  }
]
```

### 5. Function Actions

```javascript
const actions = (item, index) => {
  return h('div', { class: 'flex gap-2' }, [
    // Nút duyệt - chỉ hiện với pending
    item.status === 'pending' && h(Button, {
      onClick: () => approve(item),
      variant: 'success'
    }, 'Duyệt'),
    
    // Nút xem - luôn hiển thị
    h(Link, { href: `/items/${item.id}` }, 
      h(Button, { variant: 'primary' }, 'Xem')
    ),
    
    // Nút hủy - không hiện với completed
    item.status !== 'completed' && h(Button, {
      onClick: () => cancel(item),
      variant: 'danger'
    }, 'Hủy')
  ].filter(Boolean)) // Lọc bỏ false/null
}
```

---

## Ví dụ sử dụng

### 1. Ví dụ cơ bản

```vue
<template>
  <DataTable 
    :columns="columns" 
    :data="users" 
    :loading="loading"
  />
</template>

<script setup>
import { ref } from 'vue'
import DataTable from '@/components/DataTable.vue'

const loading = ref(false)
const columns = [
  { label: 'ID', key: 'id', align: 'text-center', width: '80px' },
  { label: 'Tên', key: 'name' },
  { label: 'Email', key: 'email' },
  { label: 'Vai trò', key: 'role' }
]

const users = ref([
  { id: 1, name: 'Nguyễn Văn A', email: 'a@example.com', role: 'Admin' },
  { id: 2, name: 'Trần Thị B', email: 'b@example.com', role: 'User' }
])
</script>
```

### 2. Ví dụ với API và Pagination

```vue
<template>
  <div>
    <DataTable 
      :columns="columns" 
      :data="data.data" 
      :loading="loading"
      :actions="actions"
      :indexOffset="(data.current_page - 1) * data.per_page"
    />
    
    <Pagination 
      :totalItems="data.total" 
      :itemsPerPage="data.per_page" 
      :currentPage="data.current_page"
      @page-change="handlePageChange"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import DataTable from '@/components/DataTable.vue'
import Pagination from '@/components/Pagination.vue'

const loading = ref(false)
const data = ref({
  data: [],
  total: 0,
  per_page: 10,
  current_page: 1
})

const columns = [
  { label: 'Tên', key: 'name' },
  { label: 'Email', key: 'email' },
  { label: 'Trạng thái', key: 'status' }
]

const actions = [
  {
    label: 'Sửa',
    href: (item) => `/users/${item.id}/edit`
  }
]

const fetchData = async (page = 1) => {
  loading.value = true
  try {
    const response = await axios.get('/api/users', {
      params: { page }
    })
    data.value = response.data
  } catch (error) {
    console.error('Error:', error)
  } finally {
    loading.value = false
  }
}

const handlePageChange = (page) => {
  fetchData(page)
}

onMounted(() => {
  fetchData()
})
</script>
```

### 3. Ví dụ với Custom Cell

```vue
<template>
  <DataTable :columns="columns" :data="products">
    <!-- Custom giá -->
    <template #cell-price="{ item }">
      <span class="font-bold text-green-600">
        {{ formatCurrency(item.price) }}
      </span>
    </template>

    <!-- Custom trạng thái với badge -->
    <template #cell-status="{ item }">
      <span :class="[
        'px-3 py-1 rounded-full text-xs font-medium',
        item.status === 'active' 
          ? 'bg-green-100 text-green-800' 
          : 'bg-red-100 text-red-800'
      ]">
        {{ item.status === 'active' ? 'Hoạt động' : 'Ngừng hoạt động' }}
      </span>
    </template>

    <!-- Custom hình ảnh -->
    <template #cell-image="{ item }">
      <img 
        :src="item.image || '/placeholder.png'" 
        :alt="item.name"
        class="w-12 h-12 object-cover rounded-lg"
      />
    </template>

    <!-- Custom số lượng với màu -->
    <template #cell-stock="{ item }">
      <span :class="[
        'font-semibold',
        item.stock > 100 ? 'text-green-600' : 
        item.stock > 10 ? 'text-yellow-600' : 'text-red-600'
      ]">
        {{ item.stock }}
      </span>
    </template>
  </DataTable>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from '@/components/DataTable.vue'

const columns = [
  { label: 'Hình', key: 'image', width: '80px' },
  { label: 'Sản phẩm', key: 'name' },
  { label: 'Giá', key: 'price', align: 'text-right' },
  { label: 'Tồn kho', key: 'stock', align: 'text-center' },
  { label: 'Trạng thái', key: 'status' }
]

const products = ref([
  {
    id: 1,
    name: 'Laptop Dell XPS 13',
    price: 25000000,
    stock: 150,
    status: 'active',
    image: '/images/laptop.jpg'
  },
  {
    id: 2,
    name: 'iPhone 15 Pro Max',
    price: 35000000,
    stock: 5,
    status: 'active',
    image: '/images/iphone.jpg'
  }
])

const formatCurrency = (value) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(value)
}
</script>
```

### 4. Ví dụ Actions phức tạp

```vue
<template>
  <DataTable :columns="columns" :data="orders">
    <template #actions="{ item }">
      <div class="flex gap-2 justify-center">
        <!-- Xem chi tiết -->
        <Link :href="`/orders/${item.id}`">
          <Button size="sm" variant="outline">
            <EyeIcon class="w-4 h-4" />
          </Button>
        </Link>

        <!-- Duyệt đơn - chỉ với pending -->
        <Button 
          v-if="item.status === 'pending'"
          @click="approveOrder(item)"
          size="sm" 
          variant="success">
          <CheckIcon class="w-4 h-4 mr-1" />
          Duyệt
        </Button>

        <!-- In hóa đơn - chỉ với approved/completed -->
        <Button 
          v-if="['approved', 'completed'].includes(item.status)"
          @click="printInvoice(item)"
          size="sm" 
          variant="outline">
          <PrintIcon class="w-4 h-4" />
        </Button>

        <!-- Hủy đơn - không với completed -->
        <Button 
          v-if="item.status !== 'completed'"
          @click="cancelOrder(item)"
          size="sm" 
          variant="danger">
          <XIcon class="w-4 h-4 mr-1" />
          Hủy
        </Button>

        <!-- Menu dropdown cho nhiều actions -->
        <Dropdown v-if="hasMoreActions(item)">
          <template #trigger>
            <Button size="sm" variant="outline">
              <MoreIcon class="w-4 h-4" />
            </Button>
          </template>
          <DropdownItem @click="duplicate(item)">
            Nhân bản
          </DropdownItem>
          <DropdownItem @click="exportPDF(item)">
            Xuất PDF
          </DropdownItem>
        </Dropdown>
      </div>
    </template>
  </DataTable>
</template>

<script setup>
import { ref } from 'vue'
import { Link } from '@inertiajs/vue3'
import { toast } from 'vue3-toastify'
import DataTable from '@/components/DataTable.vue'
import Button from '@/components/ui/Button.vue'
import Dropdown from '@/components/ui/Dropdown.vue'
import DropdownItem from '@/components/ui/DropdownItem.vue'
import { 
  EyeIcon, 
  CheckIcon, 
  XIcon, 
  PrintIcon, 
  MoreIcon 
} from '@/icons'

const columns = [
  { label: 'Mã đơn', key: 'code' },
  { label: 'Khách hàng', key: 'customer.name' },
  { label: 'Tổng tiền', key: 'total' },
  { label: 'Trạng thái', key: 'status' }
]

const orders = ref([])

const approveOrder = async (item) => {
  if (confirm(`Duyệt đơn hàng ${item.code}?`)) {
    try {
      await axios.post(`/api/orders/${item.id}/approve`)
      toast.success('Đã duyệt đơn hàng')
      // Reload data
    } catch (error) {
      toast.error('Có lỗi xảy ra')
    }
  }
}

const cancelOrder = async (item) => {
  if (confirm(`Hủy đơn hàng ${item.code}?`)) {
    try {
      await axios.post(`/api/orders/${item.id}/cancel`)
      toast.success('Đã hủy đơn hàng')
    } catch (error) {
      toast.error('Có lỗi xảy ra')
    }
  }
}

const printInvoice = (item) => {
  window.open(`/orders/${item.id}/print`, '_blank')
}

const hasMoreActions = (item) => {
  return item.status === 'completed'
}
</script>
```

### 5. Ví dụ với Checkbox và Bulk Actions

```vue
<template>
  <div>
    <!-- Bulk Actions Bar -->
    <div 
      v-if="selectedIds.length > 0"
      class="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-between">
      <div class="flex items-center gap-4">
        <span class="text-sm font-medium text-gray-700">
          Đã chọn {{ selectedIds.length }} mục
        </span>
        <button 
          @click="clearSelection"
          class="text-sm text-blue-600 hover:text-blue-800">
          Bỏ chọn
        </button>
      </div>
      <div class="flex gap-2">
        <Button @click="bulkDelete" variant="danger" size="sm">
          <TrashIcon class="w-4 h-4 mr-2" />
          Xóa đã chọn
        </Button>
        <Button @click="bulkExport" variant="primary" size="sm">
          <DownloadIcon class="w-4 h-4 mr-2" />
          Xuất Excel
        </Button>
        <Button @click="bulkUpdateStatus" variant="success" size="sm">
          Cập nhật trạng thái
        </Button>
      </div>
    </div>

    <!-- DataTable -->
    <DataTable 
      :columns="columns" 
      :data="items"
      :showIndex="false"
    >
      <!-- Checkbox column -->
      <template #cell-checkbox="{ item }">
        <input 
          type="checkbox"
          :checked="selectedIds.includes(item.id)"
          @change="toggleSelection(item.id)"
          class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, computed, h } from 'vue'
import { toast } from 'vue3-toastify'
import DataTable from '@/components/DataTable.vue'
import Button from '@/components/ui/Button.vue'
import { TrashIcon, DownloadIcon } from '@/icons'

const selectedIds = ref([])
const items = ref([
  { id: 1, name: 'Sản phẩm 1', price: 100000, status: 'active' },
  { id: 2, name: 'Sản phẩm 2', price: 200000, status: 'active' },
  { id: 3, name: 'Sản phẩm 3', price: 300000, status: 'inactive' }
])

// Columns với checkbox header
const columns = computed(() => [
  {
    label: h('input', {
      type: 'checkbox',
      checked: isAllSelected.value,
      indeterminate: isSomeSelected.value && !isAllSelected.value,
      onChange: toggleAll,
      class: 'w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500'
    }),
    key: 'checkbox',
    width: '50px',
    align: 'text-center'
  },
  { label: 'Tên sản phẩm', key: 'name' },
  { label: 'Giá', key: 'price', align: 'text-right' },
  { label: 'Trạng thái', key: 'status' }
])

const isAllSelected = computed(() => {
  return items.value.length > 0 && 
         selectedIds.value.length === items.value.length
})

const isSomeSelected = computed(() => {
  return selectedIds.value.length > 0
})

const toggleSelection = (id) => {
  const index = selectedIds.value.indexOf(id)
  if (index > -1) {
    selectedIds.value.splice(index, 1)
  } else {
    selectedIds.value.push(id)
  }
}

const toggleAll = () => {
  if (isAllSelected.value) {
    selectedIds.value = []
  } else {
    selectedIds.value = items.value.map(item => item.id)
  }
}

const clearSelection = () => {
  selectedIds.value = []
}

const bulkDelete = async () => {
  if (confirm(`Xóa ${selectedIds.value.length} mục đã chọn?`)) {
    try {
      await axios.post('/api/items/bulk-delete', {
        ids: selectedIds.value
      })
      toast.success('Đã xóa thành công')
      selectedIds.value = []
      // Reload data
    } catch (error) {
      toast.error('Có lỗi xảy ra')
    }
  }
}

const bulkExport = async () => {
  try {
    const response = await axios.post('/api/items/export', {
      ids: selectedIds.value
    }, {
      responseType: 'blob'
    })
    
    // Download file
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'export.xlsx')
    document.body.appendChild(link)
    link.click()
    link.remove()
    
    toast.success('Đã xuất file thành công')
  } catch (error) {
    toast.error('Có lỗi xảy ra')
  }
}

const bulkUpdateStatus = async () => {
  // Show modal để chọn status mới
  const newStatus = await showStatusModal()
  if (newStatus) {
    try {
      await axios.post('/api/items/bulk-update-status', {
        ids: selectedIds.value,
        status: newStatus
      })
      toast.success('Đã cập nhật trạng thái')
      selectedIds.value = []
    } catch (error) {
      toast.error('Có lỗi xảy ra')
    }
  }
}
</script>
```

### 6. Ví dụ với Search và Filter

```vue
<template>
  <div>
    <!-- Search và Filter -->
    <div class="mb-4 flex gap-4">
      <div class="flex-1">
        <input 
          v-model="searchQuery"
          @input="handleSearch"
          type="text"
          placeholder="Tìm kiếm..."
          class="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <select 
        v-model="filters.status"
        @change="applyFilters"
        class="px-4 py-2 border border-gray-300 rounded-lg">
        <option value="">Tất cả trạng thái</option>
        <option value="active">Hoạt động</option>
        <option value="inactive">Ngừng</option>
      </select>
      <select 
        v-model="filters.category"
        @change="applyFilters"
        class="px-4 py-2 border border-gray-300 rounded-lg">
        <option value="">Tất cả danh mục</option>
        <option value="electronics">Điện tử</option>
        <option value="fashion">Thời trang</option>
      </select>
    </div>

    <!-- DataTable -->
    <DataTable 
      :columns="columns" 
      :data="filteredData" 
      :loading="loading"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { debounce } from 'lodash'
import DataTable from '@/components/DataTable.vue'

const loading = ref(false)
const searchQuery = ref('')
const filters = ref({
  status: '',
  category: ''
})
const items = ref([])

const columns = [
  { label: 'Tên', key: 'name' },
  { label: 'Danh mục', key: 'category' },
  { label: 'Trạng thái', key: 'status' }
]

const filteredData = computed(() => {
  let result = items.value

  // Filter by search query
  if (searchQuery.value) {
    result = result.filter(item => 
      item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  // Filter by status
  if (filters.value.status) {
    result = result.filter(item => item.status === filters.value.status)
  }

  // Filter by category
  if (filters.value.category) {
    result = result.filter(item => item.category === filters.value.category)
  }

  return result
})

const handleSearch = debounce(() => {
  // Search logic
}, 300)

const applyFilters = () => {
  // Filter logic
}
</script>
```

### 7. Ví dụ với Sorting

```vue
<template>
  <DataTable 
    :columns="columns" 
    :data="sortedData"
  >
    <!-- Custom header với sort icon -->
    <template #header-name>
      <div 
        @click="sortBy('name')"
        class="flex items-center gap-2 cursor-pointer hover:text-blue-600">
        <span>Tên sản phẩm</span>
        <SortIcon 
          :class="getSortIconClass('name')"
          class="w-4 h-4"
        />
      </div>
    </template>

    <template #header-price>
      <div 
        @click="sortBy('price')"
        class="flex items-center gap-2 cursor-pointer hover:text-blue-600">
        <span>Giá</span>
        <SortIcon 
          :class="getSortIconClass('price')"
          class="w-4 h-4"
        />
      </div>
    </template>
  </DataTable>
</template>

<script setup>
import { ref, computed } from 'vue'
import DataTable from '@/components/DataTable.vue'
import { SortIcon } from '@/icons'

const sortField = ref('name')
const sortOrder = ref('asc') // 'asc' or 'desc'

const items = ref([
  { id: 1, name: 'Sản phẩm C', price: 300000 },
  { id: 2, name: 'Sản phẩm A', price: 100000 },
  { id: 3, name: 'Sản phẩm B', price: 200000 }
])

const columns = [
  { label: 'Tên sản phẩm', key: 'name' },
  { label: 'Giá', key: 'price', align: 'text-right' },
  { label: 'Trạng thái', key: 'status' }
]

const sortedData = computed(() => {
  const sorted = [...items.value]
  
  sorted.sort((a, b) => {
    const aVal = a[sortField.value]
    const bVal = b[sortField.value]
    
    if (sortOrder.value === 'asc') {
      return aVal > bVal ? 1 : -1
    } else {
      return aVal < bVal ? 1 : -1
    }
  })
  
  return sorted
})

const sortBy = (field) => {
  if (sortField.value === field) {
    // Toggle sort order
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortField.value = field
    sortOrder.value = 'asc'
  }
}

const getSortIconClass = (field) => {
  if (sortField.value !== field) return 'text-gray-400'
  return sortOrder.value === 'asc' ? 'text-blue-600 rotate-180' : 'text-blue-600'
}
</script>
```

### 8. Ví dụ Complete - Suppliers Page

```vue
<template>
  <AdminLayout :title="title">
    <PageBreadcrumb 
      :title="title" 
      :items="breadcrumbs" 
    />

    <!-- Header Section -->
    <div class="mb-6 bg-white rounded-lg shadow-sm p-6">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <!-- Search -->
        <div class="flex-1 max-w-md">
          <SearchPage 
            :filters="searchFilters" 
            @filter="applyFilter" 
          />
        </div>

        <!-- Actions -->
        <div class="flex gap-3">
          <Button 
            @click="exportExcel"
            variant="outline"
            :startIcon="DownloadIcon">
            Xuất Excel
          </Button>
          <Link :href="route('suppliers.create')">
            <Button 
              variant="primary" 
              :startIcon="AddIcon">
              Thêm NCC
            </Button>
          </Link>
        </div>
      </div>

      <!-- Active Filters -->
      <div v-if="hasActiveFilters" class="mt-4 flex items-center gap-2">
        <span class="text-sm text-gray-600">Bộ lọc:</span>
        <div class="flex gap-2">
          <span 
            v-for="(value, key) in activeFilters" 
            :key="key"
            class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center gap-2">
            {{ getFilterLabel(key) }}: {{ value }}
            <button 
              @click="removeFilter(key)"
              class="hover:text-blue-900">
              <XIcon class="w-3 h-3" />
            </button>
          </span>
        </div>
        <button 
          @click="clearAllFilters"
          class="text-sm text-red-600 hover:text-red-800">
          Xóa tất cả
        </button>
      </div>
    </div>

    <!-- Statistics Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <StatCard 
        title="Tổng NCC"
        :value="statistics.total"
        icon="users"
        color="blue"
      />
      <StatCard 
        title="Đang hoạt động"
        :value="statistics.active"
        icon="check"
        color="green"
      />
      <StatCard 
        title="Ngừng hoạt động"
        :value="statistics.inactive"
        icon="x"
        color="red"
      />
      <StatCard 
        title="NCC mới tháng này"
        :value="statistics.new_this_month"
        icon="plus"
        color="purple"
      />
    </div>

    <!-- DataTable -->
    <DataTable 
      :columns="columns" 
      :data="data.data" 
      :loading="loading"
      :actions="actions"
      :indexOffset="(data.current_page - 1) * data.per_page"
      :rowClass="getRowClass"
      emptyMessage="Không có nhà cung cấp nào"
    >
      <!-- Custom cells -->
      <template #cell-code="{ item }">
        <Link 
          :href="route('suppliers.show', item.id)"
          class="text-blue-600 hover:text-blue-800 font-medium">
          {{ item.code }}
        </Link>
      </template>

      <template #cell-name="{ item }">
        <div class="flex items-center gap-3">
          <div 
            class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
            {{ getInitials(item.name) }}
          </div>
          <div>
            <div class="font-medium text-gray-900">{{ item.name }}</div>
            <div class="text-sm text-gray-500">{{ item.email }}</div>
          </div>
        </div>
      </template>

      <template #cell-contact="{ item }">
        <div class="text-sm">
          <div class="flex items-center gap-2">
            <PhoneIcon class="w-4 h-4 text-gray-400" />
            <span>{{ item.phone }}</span>
          </div>
          <div class="flex items-center gap-2 mt-1">
            <MailIcon class="w-4 h-4 text-gray-400" />
            <span>{{ item.email }}</span>
          </div>
        </div>
      </template>

      <template #cell-address="{ item }">
        <div class="text-sm text-gray-600">
          {{ item.address }}<br />
          {{ item.wards?.name ?? '' }}, {{ item.district?.name ?? '' }}
        </div>
      </template>

      <template #cell-type="{ item }">
        <span 
          :class="getTypeClass(item.type)"
          class="px-2 py-1 rounded-full text-xs font-medium">
          {{ getTypeLabel(item.type) }}
        </span>
      </template>

      <template #cell-status="{ item }">
        <span 
          :class="getStatusClass(item.status)"
          class="px-2 py-1 rounded-full text-xs font-medium">
          {{ getStatusLabel(item.status) }}
        </span>
      </template>

      <template #cell-created_at="{ item }">
        <div class="text-sm">
          <div class="text-gray-900">{{ formatDate(item.created_at) }}</div>
          <div class="text-gray-500">{{ item.creater?.name ?? '-' }}</div>
        </div>
      </template>
    </DataTable>

    <!-- Pagination -->
    <Pagination 
      :totalItems="data.total" 
      :itemsPerPage="data.per_page" 
      :currentPage="data.current_page"
      @page-change="handlePageChange" 
      @items-per-page-change="handleItemsPerPageChange"
    />

    <!-- Delete Confirmation Modal -->
    <ConfirmModal
      v-model="showDeleteModal"
      title="Xác nhận xóa"
      message="Bạn có chắc chắn muốn xóa nhà cung cấp này?"
      @confirm="confirmDelete"
    />
  </AdminLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Link, router } from '@inertiajs/vue3'
import { toast } from 'vue3-toastify'
import axios from 'axios'

import AdminLayout from '@/Layouts/AdminLayout.vue'
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
import SearchPage from '@/components/SearchPage.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/DataTable.vue'
import Pagination from '@/components/Pagination.vue'
import StatCard from '@/components/StatCard.vue'
import ConfirmModal from '@/components/ConfirmModal.vue'

import { 
  AddIcon, 
  EditIcon, 
  TrashIcon,
  EyeIcon,
  DownloadIcon,
  PhoneIcon,
  MailIcon,
  XIcon
} from '@/icons'

// State
const title = "Quản lý nhà cung cấp"
const data = ref({ 
  data: [], 
  total: 0, 
  per_page: 10, 
  current_page: 1 
})
const loading = ref(false)
const statistics = ref({
  total: 0,
  active: 0,
  inactive: 0,
  new_this_month: 0
})
const activeFilters = ref({})
const showDeleteModal = ref(false)
const deleteItemId = ref(null)

// Breadcrumbs
const breadcrumbs = [
  { text: 'Trang chủ', link: route('dashboard') },
  { text: 'Quản lý NCC', link: '' }
]

// Search filters configuration
const searchFilters = [
  { 
    label: 'Tên NCC', 
    name: 'name', 
    type: 'text', 
    placeholder: 'Nhập tên...' 
  },
  { 
    label: 'Mã NCC', 
    name: 'code', 
    type: 'text', 
    placeholder: 'Nhập mã...' 
  },
  {
    label: 'Trạng thái',
    name: 'status',
    type: 'select',
    options: [
      { value: '', label: 'Tất cả' },
      { value: 'active', label: 'Hoạt động' },
      { value: 'inactive', label: 'Ngừng' }
    ]
  },
  {
    label: 'Loại NCC',
    name: 'type',
    type: 'select',
    options: [
      { value: '', label: 'Tất cả' },
      { value: 'domestic', label: 'Trong nước' },
      { value: 'international', label: 'Quốc tế' }
    ]
  }
]

// Columns configuration
const columns = [
  { label: 'Mã', key: 'code', width: '120px' },
  { label: 'Nhà cung cấp', key: 'name', width: '250px' },
  { label: 'Liên hệ', key: 'contact', width: '200px' },
  { label: 'MST', key: 'tax_number', defaultValue: '-' },
  { label: 'Địa chỉ', key: 'address', width: '200px' },
  { label: 'Loại', key: 'type', align: 'text-center' },
  { label: 'Trạng thái', key: 'status', align: 'text-center' },
  { label: 'Ngày tạo', key: 'created_at', width: '150px' }
]

// Actions configuration
const actions = [
  {
    label: '',
    icon: EyeIcon,
    href: (item) => route('suppliers.show', item.id),
    buttonProps: {
      variant: 'outline',
      size: 'sm',
      className: 'hover:bg-blue-50'
    }
  },
  {
    label: '',
    icon: EditIcon,
    href: (item) => route('suppliers.edit', item.id),
    buttonProps: {
      variant: 'outline',
      size: 'sm',
      className: 'hover:bg-green-50'
    }
  },
  {
    label: '',
    icon: TrashIcon,
    onClick: (e, item) => handleDelete(item),
    buttonProps: {
      variant: 'outline',
      size: 'sm',
      className: 'hover:bg-red-50'
    },
    visible: (item) => item.can_delete !== false
  }
]

// Computed
const hasActiveFilters = computed(() => {
  return Object.keys(activeFilters.value).length > 0
})

// Methods
const getData = async (params = {}) => {
  loading.value = true
  try {
    const response = await axios.get('/api/suppliers', { params })
    data.value = response.data.data
    statistics.value = response.data.statistics
  } catch (error) {
    toast.error("Lỗi khi tải dữ liệu!")
    console.error("Error fetching data:", error)
  } finally {
    loading.value = false
  }
}

const applyFilter = (filters) => {
  activeFilters.value = { ...filters }
  getData(filters)
}

const removeFilter = (key) => {
  delete activeFilters.value[key]
  getData(activeFilters.value)
}

const clearAllFilters = () => {
  activeFilters.value = {}
  getData()
}

const handlePageChange = (page) => {
  getData({ ...activeFilters.value, page })
}

const handleItemsPerPageChange = (perPage) => {
  getData({ ...activeFilters.value, per_page: perPage, page: 1 })
}

const handleDelete = (item) => {
  deleteItemId.value = item.id
  showDeleteModal.value = true
}

const confirmDelete = async () => {
  try {
    await axios.delete(`/api/suppliers/${deleteItemId.value}`)
    toast.success('Đã xóa nhà cung cấp')
    showDeleteModal.value = false
    getData(activeFilters.value)
  } catch (error) {
    toast.error('Có lỗi xảy ra khi xóa')
  }
}

const exportExcel = async () => {
  try {
    const response = await axios.post('/api/suppliers/export', 
      activeFilters.value,
      { responseType: 'blob' }
    )
    
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `suppliers_${Date.now()}.xlsx`)
    document.body.appendChild(link)
    link.click()
    link.remove()
    
    toast.success('Đã xuất file Excel')
  } catch (error) {
    toast.error('Có lỗi xảy ra khi xuất file')
  }
}

// Helper functions
const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

const getRowClass = (item) => {
  if (item.status === 'inactive') {
    return 'bg-gray-50 opacity-75'
  }
  return ''
}

const getTypeClass = (type) => {
  const classes = {
    domestic: 'bg-blue-100 text-blue-800',
    international: 'bg-purple-100 text-purple-800'
  }
  return classes[type] || 'bg-gray-100 text-gray-800'
}

const getTypeLabel = (type) => {
  const labels = {
    domestic: 'Trong nước',
    international: 'Quốc tế'
  }
  return labels[type] || type
}

const getStatusClass = (status) => {
  const classes = {
    active: 'bg-green-100 text-green-800',
    inactive: 'bg-red-100 text-red-800'
  }
  return classes[status] || 'bg-gray-100 text-gray-800'
}

const getStatusLabel = (status) => {
  const labels = {
    active: 'Hoạt động',
    inactive: 'Ngừng'
  }
  return labels[status] || status
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('vi-VN')
}

const getFilterLabel = (key) => {
  const labels = {
    name: 'Tên',
    code: 'Mã',
    status: 'Trạng thái',
    type: 'Loại'
  }
  return labels[key] || key
}

// Initial load
getData()
</script>
```

---

## Best Practices

### 1. Performance

```javascript
// ✅ GOOD - Sử dụng computed cho data phức tạp
const sortedData = computed(() => {
  return [...items.value].sort((a, b) => a.name.localeCompare(b.name))
})

// ❌ BAD - Sort trực tiếp trong template
<DataTable :data="items.sort((a, b) => ...)" />
```

### 2. Reusability

```javascript
// ✅ GOOD - Tạo composable cho table logic
// composables/useDataTable.js
export function useDataTable(apiEndpoint) {
  const data = ref([])
  const loading = ref(false)
  
  const fetchData = async (params) => {
    loading.value = true
    try {
      const response = await axios.get(apiEndpoint, { params })
      data.value = response.data
    } finally {
      loading.value = false
    }
  }
  
  return { data, loading, fetchData }
}

// Sử dụng
const { data, loading, fetchData } = useDataTable('/api/suppliers')
```

### 3. Type Safety

```typescript
// types/datatable.ts
export interface Column {
  label: string | VNode
  key: string
  align?: 'text-left' | 'text-center' | 'text-right'
  width?: string
  headerClass?: string
  cellClass?: string
  defaultValue?: any
  html?: boolean
  render?: (item: any, index: number) => VNode | string
}

export interface Action {
  label?: string
  icon?: Component
  href?: string | ((item: any) => string)
  onClick?: (event: Event, item: any, index: number) => void
  visible?: boolean | ((item: any, index: number) => boolean)
  buttonProps?: ButtonProps
  class?: string
  render?: (item: any, index: number) => VNode
}
```

### 4. Error Handling

```javascript
// ✅ GOOD - Xử lý lỗi đầy đủ
const getData = async (params = {}) => {
  loading.value = true
  try {
    const response = await axios.get('/api/data', { params })
    data.value = response.data
  } catch (error) {
    if (error.response?.status === 404) {
      toast.error('Không tìm thấy dữ liệu')
    } else if (error.response?.status === 403) {
      toast.error('Bạn không có quyền truy cập')
    } else {
      toast.error('Có lỗi xảy ra, vui lòng thử lại')
    }
    console.error('Error:', error)
  } finally {
    loading.value = false
  }
}
```

### 5. Accessibility

```vue
<!-- ✅ GOOD - Thêm aria labels -->
<table role="table" aria-label="Danh sách nhà cung cấp">
  <thead role="rowgroup">
    <tr role="row">
      <th role="columnheader" scope="col">Tên</th>
    </tr>
  </thead>
</table>

<!-- Actions với aria-label -->
<button aria-label="Sửa nhà cung cấp Công ty ABC">
  <EditIcon />
</button>
```

---

## Troubleshooting

### Vấn đề 1: Nested object không hiển thị

```javascript
// ❌ Sai
{ label: 'User', key: 'user' } // Chỉ hiển thị [object Object]

// ✅ Đúng
{ label: 'User', key: 'user.name' } // Hiển thị tên user
```

### Vấn đề 2: Actions không hoạt động

```javascript
// ❌ Sai - Thiếu return trong arrow function
render: (item) => {
  h(Button, { onClick: () => edit(item) }, 'Edit')
}

// ✅ Đúng
render: (item) => {
  return h(Button, { onClick: () => edit(item) }, 'Edit')
}
```

### Vấn đề 3: Index không đúng khi phân trang

```vue
<!-- ❌ Sai -->
<DataTable :showIndex="true" />

<!-- ✅ Đúng -->
<DataTable 
  :showIndex="true"
  :indexOffset="(currentPage - 1) * itemsPerPage"
/>
```

---

## Changelog

### Version 1.0.0
- Initial release
- Basic table functionality
- Custom slots support
- Actions configuration
- Loading and empty states

---

## License

MIT License - Feel free to use in your projects!

---

## Support

Nếu có vấn đề hoặc câu hỏi, vui lòng tạo issue trên GitHub hoặc liên hệ team.