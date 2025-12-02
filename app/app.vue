<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm">
      <div class="max-w-5xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="flex flex-col">
            <h1 class="text-2xl font-bold text-gray-900">Q&A Forum</h1>
            <p class="text-sm text-gray-600">Ask questions, share knowledge</p>
          </NuxtLink>
          
          <!-- User Profile Section -->
          <div class="flex items-center gap-4">
            <div v-if="!isAuthenticated" class="flex gap-2">
              <NuxtLink
                to="/auth/login"
                class="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                Sign In
              </NuxtLink>
              <NuxtLink
                to="/auth/register"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Register
              </NuxtLink>
            </div>
            
            <div v-else class="flex items-center gap-4">
              <NuxtLink 
                to="/my-questions"
                class="text-sm text-gray-600 hover:text-gray-900"
              >
                My Questions
              </NuxtLink>
              <div class="flex items-center gap-3">
                <div class="text-right">
                  <p class="font-medium text-gray-900">{{ currentUser?.name }}</p>
                  <p class="text-xs text-gray-600">
                    {{ currentUser?.role === 'STUDENT' ? '🎓 Student' : '👨‍🏫 Teacher' }}
                  </p>
                </div>
                <button
                  @click="handleLogout"
                  class="text-sm text-gray-600 hover:text-gray-900"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <main class="max-w-5xl mx-auto px-4 py-8">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUser } from '~/composables/useUser'

const router = useRouter()
const { currentUser, isAuthenticated, logout } = useUser()

const handleLogout = () => {
  logout()
  router.push('/auth/login')
}
</script>