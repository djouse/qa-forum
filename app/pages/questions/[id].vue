<template>
  <div>
    <!-- Back button -->
    <button
      @click="$router.push('/')"
      class="mb-6 text-blue-600 hover:text-blue-700 flex items-center gap-2"
    >
      ← Back to Questions
    </button>

    <!-- Question Card -->
    <div class="bg-white rounded-lg shadow p-6 mb-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">
        {{ question.title }}
      </h1>
      <p class="text-gray-700 mb-4 whitespace-pre-wrap">
        {{ question.content }}
      </p>
      <div class="text-sm text-gray-500 border-t pt-4">
        Asked {{ formatDate(question.createdAt) }} by {{ question.author }}
      </div>
    </div>

    <!-- Answers Section -->
    <div class="mb-6">
      <h2 class="text-2xl font-bold mb-4">
        {{ answers.length }} {{ answers.length === 1 ? 'Answer' : 'Answers' }}
      </h2>

      <!-- Answer List -->
      <div class="space-y-4 mb-6">
        <div
          v-for="answer in answers"
          :key="answer.id"
          class="bg-white rounded-lg shadow p-6"
        >
          <p class="text-gray-700 mb-3 whitespace-pre-wrap">
            {{ answer.content }}
          </p>
          <div class="text-sm text-gray-500 flex items-center justify-between border-t pt-3">
            <span class="font-medium">{{ answer.author }}</span>
            <span>{{ formatDate(answer.createdAt) }}</span>
          </div>
        </div>

        <div v-if="answers.length === 0" class="text-center py-8 text-gray-500">
          No answers yet. Be the first to answer!
        </div>
      </div>
    </div>

    <!-- Answer Form -->
    <div v-if="!currentUser.name" class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
      <p class="text-yellow-800">👆 Please enter your name and role above to post an answer</p>
    </div>
    
    <div v-else class="bg-white rounded-lg shadow p-6">
      <h3 class="text-xl font-semibold mb-4">Your Answer</h3>
      <form @submit.prevent="submitAnswer">
        <textarea
          v-model="newAnswer"
          required
          rows="6"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
          placeholder="Share your knowledge..."
        ></textarea>
        <button
          type="submit"
          class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Answer
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useUser } from '~/composables/useUser'

const route = useRoute()
const questionId = route.params.id
const { currentUser, isStudent, isTeacher } = useUser()

const newAnswer = ref('')

// Mock data - replace with actual API calls later
const question = ref({
  id: questionId,
  title: 'How do I use Pinia with Nuxt 3?',
  content: 'I\'m trying to set up state management in my Nuxt 3 project using Pinia. What\'s the recommended way to structure stores?\n\nI\'ve read the documentation but I\'m confused about whether to use the Options API or Composition API style for my stores.',
  author: 'Student A',
  createdAt: new Date('2024-11-28')
})

const answers = ref([
  {
    id: 1,
    content: 'The recommended way is to use the Composition API style (setup stores). They\'re more flexible and work better with TypeScript.\n\nCreate a store file in the stores/ directory:\n\nexport const useMyStore = defineStore(\'myStore\', () => {\n  const count = ref(0)\n  const increment = () => count.value++\n  return { count, increment }\n})',
    author: 'Teacher Smith',
    createdAt: new Date('2024-11-28T10:30:00')
  },
  {
    id: 2,
    content: 'Also, remember that Nuxt 3 auto-imports Pinia stores, so you can use them directly in your components without importing them manually.',
    author: 'Student B',
    createdAt: new Date('2024-11-28T14:20:00')
  },
  {
    id: 3,
    content: 'One more tip: organize your stores by feature. For example, useUserStore, useCartStore, etc. This makes your code more maintainable as your app grows.',
    author: 'Teacher Jones',
    createdAt: new Date('2024-11-28T16:45:00')
  }
])

const submitAnswer = () => {
  if (!currentUser.value.name) {
    alert('Please enter your name first')
    return
  }
  
  // TODO: Add API call to save answer
  const answer = {
    id: answers.value.length + 1,
    content: newAnswer.value,
    author: `${currentUser.value.name} (${currentUser.value.role === 'STUDENT' ? 'Student' : 'Teacher'})`,
    createdAt: new Date()
  }
  
  answers.value.push(answer)
  newAnswer.value = ''
}

const formatDate = (date) => {
  const d = new Date(date)
  const now = new Date()
  const diffTime = Math.abs(now - d)
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60))
  
  if (diffHours < 1) return 'Just now'
  if (diffHours < 24) return `${diffHours} hours ago`
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  
  return d.toLocaleDateString()
}
</script>