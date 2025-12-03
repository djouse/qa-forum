<template>
  <div class="max-w-4xl mx-auto p-6">
    <div class="mb-6">
      <h1 class="text-3xl font-bold mb-2" style="color: var(--m-green);">Ask a Question</h1>
      <p style="color: var(--grey-m5);">Get help from your teachers by asking a detailed question.</p>
    </div>

    <div class="rounded-lg shadow p-6" style="background-color: var(--light-gray);">
      <form @submit.prevent="submitQuestion">
        <div class="mb-4">
          <label class="block text-sm font-medium mb-2" style="color: #333;">Title *</label>
          <input
            v-model="newQuestion.title"
            type="text"
            required
            class="w-full px-3 py-2 border rounded-lg transition"
            style="border-color: var(--grey);"
            @focus="($event.target as HTMLInputElement).style.borderColor = 'var(--orange)'"
            @blur="($event.target as HTMLInputElement).style.borderColor = 'var(--grey)'"
            placeholder="What's your question?"
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium mb-2" style="color: #333;">Details *</label>
          <textarea
            v-model="newQuestion.content"
            required
            rows="6"
            class="w-full px-3 py-2 border rounded-lg transition"
            style="border-color: var(--grey);"
            @focus="($event.target as HTMLTextAreaElement).style.borderColor = 'var(--orange)'"
            @blur="($event.target as HTMLTextAreaElement).style.borderColor = 'var(--grey)'"
            placeholder="Provide more details about your question..."
          ></textarea>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-sm font-medium mb-2" style="color: #333;">Discipline *</label>
            <select
              v-model="newQuestion.disciplineId"
              required
              class="w-full px-3 py-2 border rounded-lg transition"
              style="border-color: var(--grey);"
              @focus="($event.target as HTMLSelectElement).style.borderColor = 'var(--orange)'"
              @blur="($event.target as HTMLSelectElement).style.borderColor = 'var(--grey)'"
            >
              <option value="">Select a discipline</option>
              <option v-for="discipline in disciplines" :key="discipline.id" :value="discipline.id">
                {{ discipline.name }}
              </option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium mb-2" style="color: #333;">Grade Year *</label>
            <select
              v-model="newQuestion.gradeYear"
              required
              class="w-full px-3 py-2 border rounded-lg transition"
              style="border-color: var(--grey);"
              @focus="($event.target as HTMLSelectElement).style.borderColor = 'var(--orange)'"
              @blur="($event.target as HTMLSelectElement).style.borderColor = 'var(--grey)'"
            >
              <option value="">Select grade</option>
              <option v-for="grade in [7, 8, 9, 10, 11, 12]" :key="grade" :value="grade">
                {{ grade }}º ano
              </option>
            </select>
          </div>
        </div>
        <div class="mb-6">
          <label class="block text-sm font-medium mb-2" style="color: #333;">Attachments (optional)</label>
          <FileUpload v-model="questionAttachments" />
        </div>
        <div v-if="submitError" class="mb-4 text-sm" style="color: var(--orange);">
          {{ submitError }}
        </div>
        <div class="flex gap-3">
          <button
            type="submit"
            :disabled="submitting"
            class="text-white px-6 py-3 rounded-lg transition disabled:opacity-50"
            style="background-color: var(--orange);"
          >
            {{ submitting ? 'Submitting...' : 'Submit Question' }}
          </button>
          <button
            type="button"
            @click="$router.push('/')"
            class="px-6 py-3 rounded-lg border transition"
            style="border-color: var(--grey); color: var(--grey-m5);"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUser } from '~/composables/useUser'

const router = useRouter()
const { currentUser, isStudent } = useUser()

const submitting = ref(false)
const submitError = ref('')

interface Discipline {
  id: string
  name: string
}

const newQuestion = ref({
  title: '',
  content: '',
  disciplineId: '',
  gradeYear: ''
})

const questionAttachments = ref([])
const disciplines = ref<Discipline[]>([])

const fetchDisciplines = async () => {
  try {
    const response = await $fetch<{ success: boolean; disciplines: Discipline[] }>('/api/disciplines')
    if (response.success) {
      disciplines.value = response.disciplines
    }
  } catch (err) {
    console.error('Failed to load disciplines:', err)
  }
}

const submitQuestion = async () => {
  if (!currentUser.value?.id) {
    submitError.value = 'Please register first'
    return
  }
  
  if (!isStudent.value) {
    submitError.value = 'Only students can ask questions'
    return
  }

  submitting.value = true
  submitError.value = ''

  try {
    const response = await $fetch('/api/questions', {
      method: 'POST',
      body: {
        title: newQuestion.value.title,
        content: newQuestion.value.content,
        disciplineId: newQuestion.value.disciplineId,
        gradeYear: parseInt(newQuestion.value.gradeYear),
        authorId: currentUser.value!.id,
        attachments: questionAttachments.value
      }
    })

    if (response.success) {
      router.push('/')
    }
  } catch (err: any) {
    submitError.value = err.data?.message || 'Failed to submit question'
  } finally {
    submitting.value = false
  }
}

onMounted(() => {
  fetchDisciplines()
})
</script>