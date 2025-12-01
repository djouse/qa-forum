<template>
  <div class="space-y-3">
    <!-- File Input -->
    <div class="flex items-center gap-3">
      <label class="cursor-pointer">
        <input
          ref="fileInput"
          type="file"
          :accept="acceptTypes"
          :multiple="multiple"
          @change="handleFileSelect"
          class="hidden"
        />
        <span class="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm">
          📎 Attach Files
        </span>
      </label>
      <span class="text-xs text-gray-500">
        {{ allowedTypesText }} (max {{ maxSizeMB }}MB each)
      </span>
    </div>

    <!-- Upload Progress -->
    <div v-if="uploading" class="flex items-center gap-2 text-sm text-gray-600">
      <div class="animate-spin h-4 w-4 border-2 border-blue-600 border-t-transparent rounded-full"></div>
      Uploading...
    </div>

    <!-- Uploaded Files List -->
    <div v-if="uploadedFiles.length > 0" class="space-y-2">
      <div
        v-for="(file, index) in uploadedFiles"
        :key="index"
        class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
      >
        <div class="flex items-center gap-3 flex-1 min-w-0">
          <span class="text-2xl">
            {{ getFileIcon(file.fileType) }}
          </span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate">
              {{ file.fileName }}
            </p>
            <p class="text-xs text-gray-500">
              {{ formatFileSize(file.fileSize) }}
            </p>
          </div>
        </div>
        <button
          @click="removeFile(index)"
          class="text-red-600 hover:text-red-700 text-sm ml-2"
        >
          Remove
        </button>
      </div>
    </div>

    <!-- Error Message -->
    <div v-if="error" class="text-sm text-red-600">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface UploadedFile {
  url: string
  fileName: string
  fileType: string
  fileSize: number
}

interface Props {
  multiple?: boolean
  maxSizeMB?: number
  modelValue?: UploadedFile[]
}

const props = withDefaults(defineProps<Props>(), {
  multiple: true,
  maxSizeMB: 10,
  modelValue: () => []
})

const emit = defineEmits<{
  'update:modelValue': [files: UploadedFile[]]
}>()

const fileInput = ref<HTMLInputElement>()
const uploading = ref(false)
const error = ref('')
const uploadedFiles = ref<UploadedFile[]>(props.modelValue)

const acceptTypes = 'image/jpeg,image/jpg,image/png,image/gif,image/webp,application/pdf'
const allowedTypesText = 'Images (JPG, PNG, GIF, WebP) or PDF'

const handleFileSelect = async (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = target.files
  
  if (!files || files.length === 0) return

  error.value = ''
  uploading.value = true

  try {
    for (const file of Array.from(files)) {
      const formData = new FormData()
      formData.append('file', file)

      const response = await $fetch<{ success: boolean; file: UploadedFile }>('/api/upload', {
        method: 'POST',
        body: formData
      })

      if (response.success) {
        uploadedFiles.value.push(response.file)
      }
    }

    emit('update:modelValue', uploadedFiles.value)
  } catch (err: any) {
    error.value = err.data?.message || 'Failed to upload file'
  } finally {
    uploading.value = false
    if (fileInput.value) {
      fileInput.value.value = ''
    }
  }
}

const removeFile = (index: number) => {
  uploadedFiles.value.splice(index, 1)
  emit('update:modelValue', uploadedFiles.value)
}

const getFileIcon = (fileType: string): string => {
  if (fileType.startsWith('image/')) return '🖼️'
  if (fileType === 'application/pdf') return '📄'
  return '📎'
}

const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
}
</script>