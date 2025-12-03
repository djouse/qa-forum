<template>
  <div>
    <h1 class="text-3xl font-bold mb-8" style="color: #333;">Teacher Dashboard</h1>

    <!-- My Disciplines -->
    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-4" style="color: #333;">My Disciplines</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="discipline in myDisciplines"
          :key="discipline.id"
          class="p-4 rounded-lg border cursor-pointer transition hover:shadow-md"
          style="background-color: var(--light-gray); border-color: var(--grey);"
          @click="filterByDiscipline(discipline.id)"
        >
          <h3 class="font-semibold" style="color: #333;">{{ discipline.name }}</h3>
          <p class="text-sm" style="color: var(--grey-m5);">
            {{ getQuestionCount(discipline.id) }} open questions
          </p>
        </div>
      </div>
    </div>

    <!-- Open Questions to Answer -->
    <div>
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-bold" style="color: #333;">Open Questions to Answer</h2>
        <div class="flex gap-3">
          <select
            v-model="selectedDisciplineFilter"
            @change="applyFilter"
            class="px-3 py-1 border rounded text-sm"
            style="border-color: var(--grey);"
          >
            <option value="">All My Disciplines</option>
            <option v-for="discipline in myDisciplines" :key="discipline.id" :value="discipline.id">
              {{ discipline.name }}
            </option>
          </select>
          <button
            @click="clearFilter"
            class="px-3 py-1 text-sm border rounded"
            style="border-color: var(--grey); color: var(--grey-m5);"
          >
            Clear Filter
          </button>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-12">
        <div class="inline-block animate-spin h-8 w-8 border-4 rounded-full" style="border-color: var(--orange); border-top-color: transparent;"></div>
        <p class="mt-4" style="color: var(--grey-m5);">Loading questions...</p>
      </div>

      <!-- Questions List -->
      <div v-else class="space-y-4">
        <div
          v-for="question in filteredQuestions"
          :key="question.id"
          class="rounded-lg shadow p-6 hover:shadow-md transition cursor-pointer"
          style="background-color: var(--light-gray);"
          @click="navigateToQuestion(question.id)"
        >
          <div class="flex items-start justify-between mb-2">
            <h3 class="text-lg font-semibold flex-1" style="color: #333;">
              {{ question.title }}
            </h3>
            <span class="ml-4 px-4 py-1 text-xs rounded-full bg-green-100 text-green-800">
              {{ question.state }}
            </span>
          </div>
          <p class="mb-3 line-clamp-2" style="color: var(--grey-m5);">
            {{ question.content }}
          </p>
          <div class="flex items-center justify-between text-sm" style="color: var(--grey-m5);">
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

        <div v-if="filteredQuestions.length === 0" class="text-center py-12" style="color: var(--grey-m5);">
          No open questions in your disciplines.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUser } from '~/composables/useUser'

definePageMeta({
  middleware: 'teacher'
})

const router = useRouter()
const { currentUser, isTeacher } = useUser()

const loading = ref(true)
const myDisciplines = ref([])
const openQuestions = ref([])
const selectedDisciplineFilter = ref('')

const filteredQuestions = computed(() => {
  if (!selectedDisciplineFilter.value) return openQuestions.value
  return openQuestions.value.filter(q => q.disciplineId === selectedDisciplineFilter.value)
})

const fetchMyDisciplines = async () => {
  try {
    const response = await $fetch(`/api/teachers/${currentUser.value.id}/disciplines`)
    if (response.success) {
      myDisciplines.value = response.disciplines
    }
  } catch (err) {
    console.error('Failed to fetch disciplines:', err)
  }
}

const fetchOpenQuestions = async () => {
  try {
    const disciplineIds = myDisciplines.value.map(d => d.id).join(',')
    const response = await $fetch(`/api/questions?state=ACTIVE&disciplineIds=${disciplineIds}`)
    if (response.success) {
      openQuestions.value = response.questions
    }
  } catch (err) {
    console.error('Failed to fetch questions:', err)
  }
}

const getQuestionCount = (disciplineId) => {
  return openQuestions.value.filter(q => q.disciplineId === disciplineId).length
}

const filterByDiscipline = (disciplineId) => {
  selectedDisciplineFilter.value = disciplineId
}

const applyFilter = () => {
  // Filter is reactive through computed property
}

const clearFilter = () => {
  selectedDisciplineFilter.value = ''
}

const navigateToQuestion = (id) => {
  router.push(`/question/${id}`)
}

const formatDate = (date) => {
  const d = new Date(date)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - d.getTime())
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  
  return d.toLocaleDateString()
}

onMounted(async () => {
  if (!isTeacher.value) {
    router.push('/')
    return
  }
  
  loading.value = true
  await fetchMyDisciplines()
  await fetchOpenQuestions()
  loading.value = false
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