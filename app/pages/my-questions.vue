<template>
  <div>
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">My Questions</h1>
      <p class="text-gray-600">Questions you've asked</p>
    </div>

    <!-- Redirect to login if not authenticated -->
    <div v-if="!isAuthenticated" class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
      <p class="text-yellow-800 mb-4">You need to sign in to view your questions</p>
      <NuxtLink
        to="/auth/login"
        class="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Sign In
      </NuxtLink>
    </div>

    <!-- Loading State -->
    <div v-else-if="loading" class="text-center py-12">
      <div class="inline-block animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
      <p class="mt-4 text-gray-600">Loading your questions...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center py-12">
      <p class="text-red-600">{{ error }}</p>
      <button @click="fetchMyQuestions" class="mt-4 text-blue-600 hover:text-blue-700">
        Try again
      </button>
    </div>

    <!-- Questions List -->
    <div v-else class="space-y-4">
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
          </div>
          <span>{{ formatDate(question.createdAt) }}</span>
        </div>
      </div>

      <div v-if="questions.length === 0" class="text-center py-12 text-gray-500">
        <p class="mb-4">You haven't asked any questions yet.</p>
        <NuxtLink
          to="/"
          class="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Ask Your First Question
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUser } from '~/composables/useUser'

definePageMeta({
  middleware: 'auth'
})

const router = useRouter()
const { currentUser, isAuthenticated } = useUser()

const loading = ref(true)
const error = ref('')

interface Question {
  id: string
  title: string
  content: string
  state: string
  gradeYear: number
  discipline: {
    id: string
    name: string
  }
  answerCount: number
  createdAt: string
}

const questions = ref<Question[]>([])

const fetchMyQuestions = async () => {
  if (!currentUser.value?.id) return

  loading.value = true
  error.value = ''
  
  try {
    const response = await $fetch<{ success: boolean; questions: Question[] }>('/api/questions', {
      params: {
        authorId: currentUser.value.id
      }
    })
    
    if (response.success) {
      questions.value = response.questions
    }
  } catch (err: any) {
    error.value = err.data?.message || 'Failed to load your questions'
  } finally {
    loading.value = false
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
  if (isAuthenticated.value) {
    fetchMyQuestions()
  } else {
    loading.value = false
  }
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