<template>
  <div>
    <!-- Ask Question Button (Students Only) -->
    <div v-if="!isAuthenticated" class="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
      <p class="text-yellow-800">
        👆 Please <NuxtLink to="/auth/login" class="text-blue-600 hover:text-blue-700 font-medium">sign in</NuxtLink> or 
        <NuxtLink to="/auth/register" class="text-blue-600 hover:text-blue-700 font-medium">register</NuxtLink> to get started
      </p>
    </div>
    
    <div v-else-if="isStudent" class="mb-6">
      <button
        @click="showQuestionForm = !showQuestionForm"
        class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {{ showQuestionForm ? 'Cancel' : 'Ask Question' }}
      </button>
    </div>
    
    <div v-else class="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
      <p class="text-blue-800">👨‍🏫 As a teacher, you can answer questions but cannot post new ones</p>
    </div>

    <!-- Question Form -->
    <div v-if="showQuestionForm && isStudent" class="bg-white rounded-lg shadow p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4">Post a Question</h2>
      <form @submit.prevent="submitQuestion">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Title *
          </label>
          <input
            v-model="newQuestion.title"
            type="text"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="What's your question?"
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Details *
          </label>
          <textarea
            v-model="newQuestion.content"
            required
            rows="4"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Provide more details about your question..."
          ></textarea>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Discipline *
            </label>
            <select
              v-model="newQuestion.disciplineId"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select a discipline</option>
              <option v-for="discipline in disciplines" :key="discipline.id" :value="discipline.id">
                {{ discipline.name }}
              </option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Grade Year *
            </label>
            <select
              v-model="newQuestion.gradeYear"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select grade</option>
              <option v-for="grade in [7, 8, 9, 10, 11, 12]" :key="grade" :value="grade">
                {{ grade }}º ano
              </option>
            </select>
          </div>
        </div>
        <div v-if="submitError" class="mb-4 text-sm text-red-600">
          {{ submitError }}
        </div>
        <button
          type="submit"
          :disabled="submitting"
          class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {{ submitting ? 'Submitting...' : 'Submit Question' }}
        </button>
      </form>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="text-center py-12">
      <div class="inline-block animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
      <p class="mt-4 text-gray-600">Loading questions...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center py-12">
      <p class="text-red-600">{{ error }}</p>
      <button @click="fetchQuestions" class="mt-4 text-blue-600 hover:text-blue-700">
        Try again
      </button>
    </div>

    <!-- Questions List -->
    <div v-else class="space-y-4">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-bold">Recent Questions</h2>
        
        <!-- Filters -->
        <div class="flex gap-3">
          <select
            v-model="selectedDiscipline"
            @change="applyFilters"
            class="px-3 py-1 border border-gray-300 rounded text-sm"
          >
            <option value="">All Disciplines</option>
            <option v-for="discipline in disciplines" :key="discipline.id" :value="discipline.id">
              {{ discipline.name }}
            </option>
          </select>
          
          <select
            v-model="selectedGrade"
            @change="applyFilters"
            class="px-3 py-1 border border-gray-300 rounded text-sm"
          >
            <option value="">All Grades</option>
            <option v-for="grade in [7, 8, 9, 10, 11, 12]" :key="grade" :value="grade">
              {{ grade }}º ano
            </option>
          </select>
          
          <select
            v-model="orderBy"
            @change="applyFilters"
            class="px-3 py-1 border border-gray-300 rounded text-sm"
          >
            <option value="">Recent First</option>
            <option value="discipline">By Discipline</option>
            <option value="gradeYear">By Grade</option>
          </select>
        </div>
      </div>
      
      <div
        v-for="question in questions"
        :key="question.id"
        class="bg-white rounded-lg shadow p-6 hover:shadow-md transition cursor-pointer"
        @click="navigateToQuestion(question.id)"
      >
        <div class="flex items-start justify-between mb-2">
          <h3 class="text-lg font-semibold text-gray-900 flex-1">
            {{ question.title }}
          </h3>
          <span 
            class="ml-4 px-2 py-1 text-xs rounded-full"
            :class="{
              'bg-green-100 text-green-800': question.state === 'ACTIVE',
              'bg-blue-100 text-blue-800': question.state === 'RESOLVED',
              'bg-gray-100 text-gray-800': question.state === 'CANCELED'
            }"
          >
            {{ question.state }}
          </span>
        </div>
        <p class="text-gray-600 mb-3 line-clamp-2">
          {{ question.content }}
        </p>
        <div class="flex items-center justify-between text-sm text-gray-500">
          <div class="flex items-center gap-4">
            <span>💬 {{ question.answerCount }} answers</span>
            <span class="text-gray-400">•</span>
            <span>📚 {{ question.discipline.name }}</span>
            <span class="text-gray-400">•</span>
            <span>{{ question.gradeYear }}º ano</span>
            <span class="text-gray-400">•</span>
            <span>{{ question.author.name }}</span>
          </div>
          <span>{{ formatDate(question.createdAt) }}</span>
        </div>
      </div>

      <div v-if="questions.length === 0" class="text-center py-12 text-gray-500">
        No questions yet. Be the first to ask!
      </div>
      
      <!-- Pagination -->
      <div v-if="pagination && pagination.totalPages > 1" class="flex items-center justify-center gap-4 mt-8">
        <button
          @click="prevPage"
          :disabled="!pagination.hasPrev"
          class="px-4 py-2 border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
        <span class="text-sm text-gray-600">
          Page {{ pagination.page }} of {{ pagination.totalPages }} ({{ pagination.total }} total)
        </span>
        
        <button
          @click="nextPage"
          :disabled="!pagination.hasNext"
          class="px-4 py-2 border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUser } from '~/composables/useUser'

const router = useRouter()
const { currentUser, isAuthenticated, isStudent, isTeacher } = useUser()

const showQuestionForm = ref(false)
const loading = ref(true)
const error = ref('')
const submitting = ref(false)
const submitError = ref('')
const currentPage = ref(1)
const selectedDiscipline = ref('')
const selectedGrade = ref('')
const orderBy = ref('')
const pagination = ref(null)

interface Discipline {
  id: string
  name: string
}

interface Question {
  id: string
  title: string
  content: string
  state: string
  gradeYear: number
  author: {
    id: string
    name: string
    role: string
  }
  discipline: {
    id: string
    name: string
  }
  answerCount: number
  createdAt: string
}

const newQuestion = ref({
  title: '',
  content: '',
  disciplineId: '',
  gradeYear: ''
})

const questions = ref<Question[]>([])
const disciplines = ref<Discipline[]>([])

const fetchQuestions = async () => {
  loading.value = true
  error.value = ''
  
  try {
    const params = new URLSearchParams({
      page: currentPage.value.toString(),
      ...(selectedDiscipline.value && { disciplineId: selectedDiscipline.value }),
      ...(selectedGrade.value && { gradeYear: selectedGrade.value }),
      ...(orderBy.value && { orderBy: orderBy.value })
    })
    
    const response = await $fetch(`/api/questions?${params}`)
    if (response.success) {
      questions.value = response.questions
      pagination.value = response.pagination
    }
  } catch (err: any) {
    error.value = err.data?.message || 'Failed to load questions'
  } finally {
    loading.value = false
  }
}

const nextPage = () => {
  if (pagination.value?.hasNext) {
    currentPage.value++
    fetchQuestions()
  }
}

const prevPage = () => {
  if (pagination.value?.hasPrev) {
    currentPage.value--
    fetchQuestions()
  }
}

const applyFilters = () => {
  currentPage.value = 1
  fetchQuestions()
}

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
    const response = await $fetch<{ success: boolean; question: Question }>('/api/questions', {
      method: 'POST',
      body: {
        title: newQuestion.value.title,
        content: newQuestion.value.content,
        disciplineId: newQuestion.value.disciplineId,
        gradeYear: parseInt(newQuestion.value.gradeYear),
        authorId: currentUser.value!.id
      }
    })

    if (response.success) {
      // Reset form
      newQuestion.value = { title: '', content: '', disciplineId: '', gradeYear: '' }
      showQuestionForm.value = false
      
      // Refresh questions list
      await fetchQuestions()
    }
  } catch (err: any) {
    submitError.value = err.data?.message || 'Failed to submit question'
  } finally {
    submitting.value = false
  }
}

const navigateToQuestion = (id: string) => {
  router.push(`/question/${id}`)
}

const formatDate = (date: string) => {
  const d = new Date(date)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - d.getTime())
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  
  return d.toLocaleDateString()
}

onMounted(() => {
  fetchQuestions()
  fetchDisciplines()
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>