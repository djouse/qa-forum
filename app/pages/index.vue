<template>
  <div>
    <div v-if="!isAuthenticated" class="mb-12 rounded-3xl px-16 py-24 md:px-10 md:py-24" style="background-color: var(--m-green);">
      <div class="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-32">
        <div class="flex-1 text-center md:text-left">
          <h2 class="text-5xl md:text-7xl font-bold mb-8" style="color: white;">Welcome to QA Forum</h2>
          <p class="text-xl md:text-3xl mb-10" style="color: white;">A platform where students can ask questions and teachers provide expert answers to help with studies.</p>
          <div class="flex flex-col sm:flex-row gap-6">
            <NuxtLink
              to="/auth/login"
              class="inline-block text-white px-12 py-5 rounded-full text-xl md:text-2xl font-semibold transition shadow-lg"
              style="background-color: var(--orange);"
            >
              Sign In
            </NuxtLink>
            <NuxtLink
              to="/auth/register"
              class="inline-block px-12 py-5 rounded-full text-xl md:text-2xl font-semibold transition"
              style="background-color: white; color: var(--m-green);"
            >
              Register
            </NuxtLink>
          </div>
        </div>
        <div class="flex-1 md:max-w-sm">
          <div class="rounded-2xl p-6 md:p-8">
            <h3 class="font-semibold mb-6 text-2xl md:text-3xl" style="color: white;">How It Works</h3>
            <ul class="text-lg md:text-xl space-y-4" style="color: white;">
              <li>• Students ask questions about their studies</li>
              <li>• Teachers provide expert answers and guidance</li>
              <li>• Browse questions by subject and grade level</li>
              <li>• Learn from community discussions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else-if="isStudent" class="mb-12 rounded-3xl px-16 py-24 md:px-10 md:py-24" style="background-color: var(--m-green);">
      <div class="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-32">
        <div class="flex-1 text-center md:text-left">
          <h2 class="text-5xl md:text-7xl font-bold mb-8" style="color: white;">Got a Question?</h2>
          <p class="text-xl md:text-3xl mb-10" style="color: white;">Ask your teachers and get expert answers to help with your studies.</p>
          <NuxtLink
            to="/ask-question"
            class="inline-block text-white px-12 py-5 rounded-full text-xl md:text-2xl font-semibold transition shadow-lg"
            style="background-color: var(--orange);"
            @mouseenter="($event.target as HTMLElement)?.style && (($event.target as HTMLElement).style.scale = '1.05')"
            @mouseleave="($event.target as HTMLElement)?.style && (($event.target as HTMLElement).style.scale = '1.0')"
          >
            Ask Question
          </NuxtLink>
        </div>
        <div class="flex-1 md:max-w-sm">
          <div class="rounded-2xl p-6 md:p-8">
            <h3 class="font-semibold mb-6 text-2xl md:text-3xl" style="color: white;">Forum Guidelines</h3>
            <ul class="text-lg md:text-xl space-y-4" style="color: white;">
              <li>• All questions are moderated by teachers</li>
              <li>• Be respectful and use appropriate language</li>
              <li>• Provide clear details for better answers</li>
              <li>• Check if your question was already asked</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="mb-16 rounded-3xl px-16 py-24 md:px-10 md:py-24" style="background-color: var(--m-green);">
      <div class="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-32">
        <div class="flex-1 text-center md:text-left">
          <h2 class="text-6xl md:text-7xl lg:text-8xl font-bold mb-10" style="color: white;">Welcome, Teacher!</h2>
          <p class="text-xl md:text-3xl mb-12" style="color: white;">Help students learn by answering their questions and managing discussions.</p>
          <NuxtLink
            to="/teacher-dashboard"
            class="inline-block text-white px-12 py-5 rounded-full text-xl md:text-2xl font-semibold transition shadow-lg"
            style="background-color: var(--orange);"
            @mouseenter="($event.target as HTMLElement)?.style && (($event.target as HTMLElement).style.scale = '1.05')"
            @mouseleave="($event.target as HTMLElement)?.style && (($event.target as HTMLElement).style.scale = '1.0')"
          >
            Go to Dashboard
          </NuxtLink>
        </div>
        <div class="flex-1 md:max-w-sm">
          <div class="rounded-2xl p-6 md:p-8">
            <h3 class="font-semibold mb-6 text-2xl md:text-3xl" style="color: white;">Teacher Tools</h3>
            <ul class="text-lg md:text-xl space-y-4" style="color: white;">
              <li>• Answer student questions in your subjects</li>
              <li>• Mark questions as resolved or canceled</li>
              <li>• View questions by discipline and grade</li>
              <li>• Provide detailed explanations and guidance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>



    <div v-if="loading" class="text-center py-12">
      <div class="inline-block animate-spin h-8 w-8 border-4 rounded-full" style="border-color: var(--orange); border-top-color: transparent;"></div>
      <p class="mt-4" style="color: var(--grey-m5);">Loading questions...</p>
    </div>

    <div v-else-if="error" class="text-center py-12">
      <p style="color: var(--orange);">{{ error }}</p>
      <button @click="fetchQuestions" class="mt-4" style="color: var(--orange);">Try again</button>
    </div>

    <div v-else class="space-y-6">
      <div class="mb-4">
        <h2 class="text-xl md:text-6xl font-bold mt-16 mb-12" style="color: var(--m-green);">Recent Questions</h2>
        <div class="flex flex-wrap gap-2 md:gap-3">
          <select v-model="selectedDiscipline" @change="applyFilters" class="px-2 md:px-3 py-1 border rounded text-xs md:text-sm flex-1 md:flex-none" style="border-color: var(--grey);">
            <option value="">All Disciplines</option>
            <option v-for="discipline in disciplines" :key="discipline.id" :value="discipline.id">{{ discipline.name }}</option>
          </select>
          <select v-model="selectedGrade" @change="applyFilters" class="px-2 md:px-3 py-1 border rounded text-xs md:text-sm flex-1 md:flex-none" style="border-color: var(--grey);">
            <option value="">All Grades</option>
            <option v-for="grade in [7, 8, 9, 10, 11, 12]" :key="grade" :value="grade">{{ grade }}º ano</option>
          </select>
          <select v-model="orderBy" @change="applyFilters" class="hidden md:block px-3 py-1 border rounded text-sm" style="border-color: var(--grey);">
            <option value="">Recent First</option>
            <option value="discipline">By Discipline</option>
            <option value="gradeYear">By Grade</option>
          </select>
        </div>
      </div>
      
      <div
        v-for="question in questions"
        :key="question.id"
        class="rounded-3xl p-3 scale-100 hover:scale-103 transition cursor-pointer"
        style="background-color: var(--light-gray);"
        @click="navigateToQuestion(question.id)"
      >
        <div class="flex items-start justify-between mb-2">
          <h3 class="text-2xl font-semibold flex-1" style="color: var(--m-green)">{{ question.title }}</h3>
          <span 
            class="ml-4 px-4 py-1 text-xs rounded-full"
            :class="{
              'bg-green-100 text-green-800': question.state === 'ACTIVE',
              'bg-blue-100 text-blue-800': question.state === 'RESOLVED',
              'bg-gray-100 text-gray-800': question.state === 'CANCELED'
            }"
          >
            {{ question.state }}
          </span>
        </div>
        <p class="mb-3 line-clamp-2" style="color: var(--grey-m5);">{{ question.content }}</p>
        <div class="flex items-center justify-between text-sm" style="color: var(--grey-m5);">
          <div class="flex items-center gap-4">
            <span>{{ question.answerCount }} answers</span>
            <span class="text-gray-400">•</span>
            <span>{{ question.discipline.name }}</span>
            <span class="text-gray-400">•</span>
            <span>{{ question.gradeYear }}º ano</span>
            <span class="text-gray-400">•</span>
            <span>{{ question.author.name }}</span>
          </div>
          <span>{{ formatDate(question.createdAt) }}</span>
        </div>
      </div>

      <div v-if="questions.length === 0" class="text-center py-12" style="color: var(--grey-m5);">
        No questions yet. Be the first to ask!
      </div>
      
      <!-- Pagination -->
      <div v-if="pagination && pagination.totalPages > 1" class="flex items-center justify-center gap-4 mt-8">
        <button
          @click="prevPage"
          :disabled="!pagination.hasPrev"
          class="px-4 py-2 border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          style="border-color: var(--grey);"
        >
          Previous
        </button>
        <span class="text-sm" style="color: var(--grey-m5);">
          Page {{ pagination.page }} of {{ pagination.totalPages }} ({{ pagination.total }} total)
        </span>
        <button
          @click="nextPage"
          :disabled="!pagination.hasNext"
          class="px-4 py-2 border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          style="border-color: var(--grey);"
        >
          Next
        </button>
      </div>
    </div>

    <!-- Login Required Modal -->
    <Modal :show="showLoginModal" @close="showLoginModal = false">
      <h3 class="text-lg font-semibold mb-4" style="color: #333;">Login Required</h3>
      <p class="mb-6" style="color: var(--grey-m5);">You need to sign in to view questions and answers.</p>
      <div class="flex gap-3">
        <NuxtLink
          to="/auth/login"
          class="flex-1 text-center text-white py-2 px-4 rounded-lg transition hover:opacity-90"
          style="background-color: var(--orange);"
        >
          Sign In
        </NuxtLink>
        <NuxtLink
          to="/auth/register"
          class="flex-1 text-center py-2 px-4 rounded-lg border transition hover:bg-gray-50"
          style="border-color: var(--grey); color: #333;"
        >
          Register
        </NuxtLink>
      </div>
      <button
        @click="showLoginModal = false"
        class="w-full mt-3 text-sm py-2 text-gray-600 hover:text-gray-800"
      >
        Cancel
      </button>
    </Modal>
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
const pagination = ref<{
  page: number
  limit: number
  total: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
} | null>(null)

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

const questionAttachments = ref([])
const showLoginModal = ref(false)

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
        authorId: currentUser.value!.id,
        attachments: questionAttachments.value
      }
    })

    if (response.success) {
      newQuestion.value = { title: '', content: '', disciplineId: '', gradeYear: '' }
      questionAttachments.value = []
      showQuestionForm.value = false
      await fetchQuestions()
    }
  } catch (err: any) {
    submitError.value = err.data?.message || 'Failed to submit question'
  } finally {
    submitting.value = false
  }
}

const navigateToQuestion = (id: string) => {
  if (!isAuthenticated.value) {
    showLoginModal.value = true
    return
  }
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