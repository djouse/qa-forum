<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">
    <div class="max-w-md w-full">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
        <p class="text-gray-600">Sign in to your Q&A Forum account</p>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              v-model="email"
              type="email"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>

          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              v-model="name"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your full name"
            />
          </div>

          <div v-if="error" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-sm text-red-600">{{ error }}</p>
          </div>

          <button style="background-color: var(--orange);"
            type="submit"
            :disabled="loading"
            class="w-full  text-white py-3 rounded-lg hover: transition disabled:opacity-50 font-medium"
          >
            {{ loading ? 'Signing in...' : 'Sign In' }}
          </button>
        </form>

        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600">
            Don't have an account?
            <NuxtLink to="/auth/register" style="color: var(--orange);" class="hover:underline font-medium">
              Register here
            </NuxtLink>
          </p>
        </div>

        <!-- Development Mode Stage Login -->
        <div v-if="isDevelopmentMode" class="mt-6 border-t pt-6">
          <p class="text-sm text-gray-500 mb-3 text-center">Development Mode - Quick Login:</p>
          <div class="flex gap-2">
            <button
              @click="stageLogin('student@student.com', 'student')"
              class="flex-1 py-2 px-3 text-sm border rounded hover:bg-gray-50"
              style="border-color: var(--grey);"
            >
              Student Login
            </button>
            <button
              @click="stageLogin('prof@prof.com', 'professor')"
              class="flex-1 py-2 px-3 text-sm border rounded hover:bg-gray-50"
              style="border-color: var(--grey);"
            >
              Teacher Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUser, type User } from '~/composables/useUser'
import { APP_SETTINGS } from '~/config/settings'

definePageMeta({
  layout: false,
  middleware: 'guest'
})

const router = useRouter()
const { setUser } = useUser()

const email = ref('')
const name = ref('')
const loading = ref(false)
const error = ref('')

const isDevelopmentMode = computed(() => APP_SETTINGS.DEVELOPMENT_MODE)

const stageLogin = async (stageEmail: string, stageName: string) => {
  email.value = stageEmail
  name.value = stageName
  await handleLogin()
}

const handleLogin = async () => {
  loading.value = true
  error.value = ''

  try {
    const response = await $fetch<{ success: boolean; user: User }>('/api/auth/login', {
      method: 'POST',
      body: {
        email: email.value,
        name: name.value
      }
    })

    if (response.success && response.user) {
      setUser(response.user)
      router.push('/')
    }
  } catch (err: any) {
    error.value = err.data?.message || 'Failed to sign in. Please check your credentials.'
  } finally {
    loading.value = false
  }
}
</script>