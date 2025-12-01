<template>
  <div>
    <!-- Ask Question Button -->
    <div class="mb-6">
      <button
        @click="showQuestionForm = !showQuestionForm"
        class="text-white px-4 py-2 rounded-lg transition" style="background-color: #114F55;"
      >
        {{ showQuestionForm ? 'Cancel' : 'Ask Question' }}
      </button>
    </div>

    <!-- Question Form -->
    <div v-if="showQuestionForm" class="bg-white rounded-lg shadow p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4">Post a Question</h2>
      <form @submit.prevent="submitQuestion">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            v-model="newQuestion.title"
            type="text"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent" style="--tw-ring-color: #114F55;"
            placeholder="What's your question?"
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Details
          </label>
          <textarea
            v-model="newQuestion.content"
            required
            rows="4"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent" style="--tw-ring-color: #114F55;"
            placeholder="Provide more details about your question..."
          ></textarea>
        </div>
        <button
          type="submit"
          class="text-white px-6 py-2 rounded-lg transition" style="background-color: #114F55;"
        >
          Submit Question
        </button>
      </form>
    </div>

    <!-- Questions List -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold mb-4">All Open Topics</h2>
      
      <div
        v-for="question in questions"
        :key="question.id"
        class="rounded-lg shadow p-6 hover:shadow-md transition cursor-pointer" style="background-color: #7bd686;"
        @click="navigateToQuestion(question.id)"
      >
        <h3 class="text-lg font-semibold text-gray-900 mb-2">
          {{ question.title }}
        </h3>
        <p class="text-gray-600 mb-3 line-clamp-2">
          {{ question.content }}
        </p>
        <div class="flex items-center justify-between text-sm text-gray-500">
          <span>{{ question.answerCount }} answers</span>
          <span>{{ formatDate(question.createdAt) }}</span>
        </div>
      </div>

      <div v-if="questions.length === 0" class="text-center py-12 text-gray-500">
        No questions yet. Be the first to ask!
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({
  middleware: 'auth'
})

const router = useRouter()
const showQuestionForm = ref(false)

const newQuestion = ref({
  title: '',
  content: ''
})

// Mock data - replace with actual API calls later
const questions = ref([
  {
    id: 1,
    title: 'How do I use Pinia with Nuxt 3?',
    content: 'I\'m trying to set up state management in my Nuxt 3 project using Pinia. What\'s the recommended way to structure stores?',
    answerCount: 3,
    createdAt: new Date('2024-11-28')
  },
  {
    id: 2,
    title: 'What are composables in Vue 3?',
    content: 'I keep hearing about composables but I\'m not sure how they differ from regular functions. Can someone explain?',
    answerCount: 5,
    createdAt: new Date('2024-11-27')
  },
  {
    id: 3,
    title: 'Best practices for PostgreSQL with Prisma?',
    content: 'What are some recommended patterns when using Prisma ORM with PostgreSQL in a production environment?',
    answerCount: 2,
    createdAt: new Date('2024-11-26')
  }
])

const submitQuestion = () => {
  const question = {
    id: questions.value.length + 1,
    title: newQuestion.value.title,
    content: newQuestion.value.content,
    answerCount: 0,
    createdAt: new Date()
  }
  
  questions.value.unshift(question)
  
  newQuestion.value = { title: '', content: '' }
  showQuestionForm.value = false
}

const navigateToQuestion = (id) => {
  router.push(`/questions/${id}`)
}

const formatDate = (date) => {
  const d = new Date(date)
  const now = new Date()
  const diffTime = Math.abs(now - d)
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  
  return d.toLocaleDateString()
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>