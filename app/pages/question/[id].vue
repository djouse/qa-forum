<template>
  <div>
    <!-- Back button -->
    <button
      @click="$router.push('/')"
      style="color: var(--m-green);"
      class="mb-6 hover: flex items-center gap-2"
    >
      ← Back to Questions
    </button>

    <!-- Loading State -->
    <div v-if="loading" class="text-center py-12">
      <div class="inline-block animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
      <p class="mt-4 text-gray-600">Loading question...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center py-12">
      <p class="text-red-600">{{ error }}</p>
      <button @click="fetchQuestion" class="mt-4 text-blue-600 hover:text-blue-700">
        Try again
      </button>
    </div>

    <!-- Question Content -->
    <div v-else-if="question">
      <!-- Question Card -->
      <div class="bg-white rounded-lg shadow p-6 mb-6">
        <div class="flex items-start justify-between mb-4">
          <h1 class="text-3xl font-bold text-gray-900 flex-1">
            {{ question.title }}
          </h1>
          <span 
            class="ml-4 px-3 py-1 text-sm rounded-full"
            :class="{
              'bg-green-100 text-green-800': question.state === 'ACTIVE',
              'bg-blue-100 text-blue-800': question.state === 'RESOLVED',
              'bg-gray-100 text-gray-800': question.state === 'CANCELED'
            }"
          >
            {{ question.state }}
          </span>
        </div>
        
        <p class="text-gray-700 mb-4 whitespace-pre-wrap">
          {{ question.content }}
        </p>

        <!-- Question Metadata -->
        <div class="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <span>📚 {{ question.discipline.name }}</span>
          <span class="text-gray-400">•</span>
          <span>{{ question.gradeYear }}º ano</span>
        </div>

        <!-- Attachments -->
        <div v-if="question.attachments && question.attachments.length > 0" class="mb-4">
          <h3 class="text-sm font-medium text-gray-700 mb-2">Attachments:</h3>
          <div class="space-y-2">
            <a
              v-for="attachment in question.attachments"
              :key="attachment.id"
              :href="attachment.fileUrl"
              target="_blank"
              class="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
            >
              <span>{{ getFileIcon(attachment.fileType) }}</span>
              <span>{{ attachment.fileName }}</span>
            </a>
          </div>
        </div>

        <!-- State Management Actions -->
        <div v-if="canManageState" class="border-t pt-4 mb-4">
          <h3 class="text-sm font-medium text-gray-700 mb-2">{{ isTeacher ? 'Teacher Actions' : 'Question Actions' }}:</h3>
          <div class="flex gap-2">
            <button
              v-if="question.state === 'ACTIVE'"
              @click="openStateModal('RESOLVED')"
              class="text-white px-3 py-1 rounded text-sm transition hover:opacity-90"
              style="background-color: #114F55;"
            >
              Mark as Resolved
            </button>
            <button
              v-if="question.state === 'ACTIVE'"
              @click="openStateModal('CANCELED')"
              class="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700 transition"
            >
              Cancel Question
            </button>
            <button
              v-if="question.state !== 'ACTIVE'"
              @click="updateQuestionState('ACTIVE', '')"
              class="text-white px-3 py-1 rounded text-sm transition hover:opacity-90"
              style="background-color: #114F55;"
            >
              Reopen Question
            </button>
          </div>
        </div>

        <div class="text-sm text-gray-500 border-t pt-4">
          Asked {{ formatDate(question.createdAt) }} by {{ question.author.name }}
        </div>
      </div>

      <!-- Answers Section -->
      <div class="mb-6">
        <h2 class="text-2xl font-bold mb-4">
          {{ question.answers.length }} {{ question.answers.length === 1 ? 'Answer' : 'Answers' }}
        </h2>

        <!-- Answer List -->
        <div class="space-y-4 mb-6">
          <div
            v-for="answer in question.answers"
            :key="answer.id"
            class="bg-white rounded-lg shadow p-6"
          >
            <p class="text-gray-700 mb-3 whitespace-pre-wrap">
              {{ answer.content }}
            </p>

            <!-- Answer Attachments -->
            <div v-if="answer.attachments && answer.attachments.length > 0" class="mb-3">
              <div class="space-y-2">
                <a
                  v-for="attachment in answer.attachments"
                  :key="attachment.id"
                  :href="attachment.fileUrl"
                  target="_blank"
                  class="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
                >
                  <span>{{ getFileIcon(attachment.fileType) }}</span>
                  <span>{{ attachment.fileName }}</span>
                </a>
              </div>
            </div>

            <div class="text-sm text-gray-500 flex items-center justify-between border-t pt-3">
              <span class="font-medium">
                {{ answer.author.name }}
                <span class="text-xs text-gray-400">
                  ({{ answer.author.role === 'STUDENT' ? 'Student' : 'Teacher' }})
                </span>
              </span>
              <span>{{ formatDate(answer.createdAt) }}</span>
            </div>
          </div>

          <div v-if="question.answers.length === 0" class="text-center py-8 text-gray-500">
            No answers yet. Be the first to answer!
          </div>
        </div>
      </div>

      <!-- Answer Form -->
      <div v-if="!isAuthenticated" class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <p class="text-yellow-800 mb-4">
          Please <NuxtLink to="/auth/login" class="text-blue-600 hover:text-blue-700 font-medium">sign in</NuxtLink> or 
          <NuxtLink to="/auth/register" class="text-blue-600 hover:text-blue-700 font-medium">register</NuxtLink> to post an answer
        </p>
      </div>
      
      <div v-else-if="question.state !== 'ACTIVE'" class="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <p class="text-gray-600">
          This question is {{ question.state.toLowerCase() }} and no longer accepts new answers.
        </p>
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
          <div v-if="submitError" class="mb-4 text-sm text-red-600">
            {{ submitError }}
          </div>
          <button
            type="submit"
            :disabled="submitting"
            class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {{ submitting ? 'Submitting...' : 'Submit Answer' }}
          </button>
        </form>
      </div>
    </div>

    <!-- State Change Modal -->
    <div v-if="showStateModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <h3 class="text-lg font-semibold mb-4">
          {{ pendingState === 'RESOLVED' ? 'Mark as Resolved' : 'Cancel Question' }}
        </h3>
        <p class="text-gray-600 mb-4">
          Please provide a justification for this action:
        </p>
        <textarea
          v-model="stateJustification"
          rows="4"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
          style="--tw-ring-color: #114F55;"
          placeholder="Explain why you are changing the state for this question..."
        ></textarea>
        <div class="flex gap-3 mt-4">
          <button
            @click="confirmStateChange"
            :disabled="updatingState"
            class="text-white px-4 py-2 rounded transition hover:opacity-90 disabled:opacity-50"
            style="background-color: #114F55;"
          >
            {{ updatingState ? 'Updating...' : 'Confirm' }}
          </button>
          <button
            @click="closeStateModal"
            class="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>

    <!-- Confirmation Modal for Empty Justification -->
    <div v-if="showConfirmModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <h3 class="text-lg font-semibold mb-4">Confirm Action</h3>
        <p class="text-gray-600 mb-4">
          You are about to {{ pendingState === 'RESOLVED' ? 'resolve' : 'cancel' }} this question without providing a justification. Are you sure?
        </p>
        <div class="flex gap-3">
          <button
            @click="proceedWithoutJustification"
            :disabled="updatingState"
            class="text-white px-4 py-2 rounded transition hover:opacity-90 disabled:opacity-50"
            style="background-color: #114F55;"
          >
            {{ updatingState ? 'Updating...' : 'Yes, Proceed' }}
          </button>
          <button
            @click="closeConfirmModal"
            class="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useUser } from '~/composables/useUser'

const route = useRoute()
const questionId = route.params.id as string
const { currentUser, isAuthenticated, isTeacher } = useUser()

const canManageState = computed(() => {
  if (!currentUser.value || !question.value) return false
  return isTeacher.value || currentUser.value.id === question.value.author.id
})

const loading = ref(true)
const error = ref('')
const submitting = ref(false)
const submitError = ref('')
const newAnswer = ref('')
const updatingState = ref(false)
const showStateModal = ref(false)
const showConfirmModal = ref(false)
const pendingState = ref('')
const stateJustification = ref('')

interface Attachment {
  id: string
  fileName: string
  fileUrl: string
  fileType: string
  fileSize: number
}

interface Answer {
  id: string
  content: string
  author: {
    id: string
    name: string
    role: string
  }
  attachments?: Attachment[]
  createdAt: string
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
  attachments?: Attachment[]
  answers: Answer[]
  createdAt: string
}

const question = ref<Question | null>(null)

const fetchQuestion = async () => {
  loading.value = true
  error.value = ''
  
  try {
    const response = await $fetch<{ success: boolean; question: Question }>(`/api/questions/${questionId}`)
    if (response.success) {
      question.value = response.question
    }
  } catch (err: any) {
    error.value = err.data?.message || 'Failed to load question'
  } finally {
    loading.value = false
  }
}

const submitAnswer = async () => {
  if (!currentUser.value!.id) {
    submitError.value = 'Please register first'
    return
  }

  submitting.value = true
  submitError.value = ''

  try {
    const response = await $fetch<{ success: boolean; answer: Answer }>('/api/answers', {
      method: 'POST',
      body: {
        content: newAnswer.value,
        questionId: questionId,
        authorId: currentUser.value!.id
      }
    })

    if (response.success) {
      // Add the new answer to the list
      if (question.value) {
        question.value.answers.push(response.answer)
      }
      
      // Reset form
      newAnswer.value = ''
    }
  } catch (err: any) {
    submitError.value = err.data?.message || 'Failed to submit answer'
  } finally {
    submitting.value = false
  }
}

const getFileIcon = (fileType: string): string => {
  if (fileType.startsWith('image/')) return '🖼️'
  if (fileType === 'application/pdf') return '📄'
  return '📎'
}

const openStateModal = (newState: string) => {
  pendingState.value = newState
  showStateModal.value = true
  stateJustification.value = ''
}

const closeStateModal = () => {
  showStateModal.value = false
  pendingState.value = ''
  stateJustification.value = ''
}

const closeConfirmModal = () => {
  showConfirmModal.value = false
}

const confirmStateChange = async () => {
  if (!stateJustification.value.trim()) {
    showStateModal.value = false
    showConfirmModal.value = true
    return
  }
  await updateQuestionState(pendingState.value, stateJustification.value)
  closeStateModal()
}

const proceedWithoutJustification = async () => {
  await updateQuestionState(pendingState.value, '')
  closeStateModal()
  closeConfirmModal()
}

const updateQuestionState = async (newState: string, summary: string) => {
  if (!currentUser.value?.id) {
    return
  }

  updatingState.value = true

  try {
    const response = await $fetch(`/api/questions/${questionId}/state`, {
      method: 'PATCH',
      body: {
        state: newState,
        userId: currentUser.value.id,
        summary
      }
    })

    if (response.success && question.value) {
      question.value.state = newState
    }
  } catch (err: any) {
    console.error('Failed to update question state:', err)
  } finally {
    updatingState.value = false
  }
}

const formatDate = (date: string) => {
  const d = new Date(date)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - d.getTime())
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60))
  
  if (diffHours < 1) return 'Just now'
  if (diffHours < 24) return `${diffHours} hours ago`
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  
  return d.toLocaleDateString()
}

onMounted(() => {
  fetchQuestion()
})
</script>