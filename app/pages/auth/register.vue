<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-2 rounded-4xl">
    <div class="max-w-md w-full">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-semibold text-gray-900 mb-2" style="color: var(--m-green);">Join the Forum</h1>
        <p class="text-gray-600" style="color: var(--m-green);">Create your Q&A Forum account</p>
      </div>

      <div class="bg-white rounded-4xl p-8">
        <form @submit.prevent="handleRegister">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              v-model="email"
              type="email"
              required
              class="w-full px-2 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              v-model="name"
              type="text"
              required
              class="w-full px-2 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your full name"
            />
          </div>

          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Role
            </label>
            <select
              v-model="role"
              class="w-full px-2 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="STUDENT">Student</option>
              <option value="TEACHER">Teacher</option>
            </select>
          </div>

          <div v-if="error" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-sm text-red-600">{{ error }}</p>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full text-white py-3 rounded-lg transition disabled:opacity-50 font-medium"
            style="background-color: var(--orange);"
          >
            {{ loading ? 'Creating account...' : 'Create Account' }}
          </button>
        </form>

        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600">
            Already have an account?
            <NuxtLink to="/auth/login" style="color: var(--orange);" class="hover:underline font-medium">
              Sign in here
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUser, type User } from '~/composables/useUser'

definePageMeta({
  layout: false,
  middleware: 'guest'
})

const router = useRouter()
const { setUser } = useUser()

const email = ref('')
const name = ref('')
const role = ref('STUDENT')
const loading = ref(false)
const error = ref('')

const handleRegister = async () => {
  loading.value = true
  error.value = ''

  try {
    const response = await $fetch<{ success: boolean; user: User }>('/api/auth/register', {
      method: 'POST',
      body: {
        email: email.value,
        name: name.value,
        role: role.value
      }
    })

    if (response.success && response.user) {
      setUser(response.user)
      router.push('/')
    }
  } catch (err: any) {
    error.value = err.data?.message || 'Failed to create account. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>