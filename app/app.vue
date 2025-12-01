<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm">
      <div class="max-w-5xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold text-gray-900">Q&A Forum</h1>
            <p class="text-sm text-gray-600">Ask questions, share knowledge</p>
          </div>
          
          <!-- User Profile Section -->
          <div class="flex items-center gap-4">
            <div v-if="!currentUser.name" class="flex gap-2">
              <input
                v-model="userName"
                type="text"
                placeholder="Your name"
                required
                class="px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
              <input
                v-model="userEmail"
                type="email"
                placeholder="Your email"
                required
                class="px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
              <select
                v-model="userRole"
                class="px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="STUDENT">Student</option>
                <option value="TEACHER">Teacher</option>
              </select>
              <button
                @click="registerUser"
                :disabled="registering"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 disabled:opacity-50"
              >
                {{ registering ? 'Registering...' : 'Register' }}
              </button>
            </div>
            <div v-if="registerError" class="text-red-600 text-sm">
              {{ registerError }}
            </div>
            
            <div v-else class="flex items-center gap-3">
              <div class="text-right">
                <p class="font-medium text-gray-900">{{ currentUser.name }}</p>
                <p class="text-xs text-gray-600">
                  {{ currentUser.role === 'STUDENT' ? '🎓 Student' : '👨‍🏫 Teacher' }}
                </p>
              </div>
              <button
                @click="logout"
                class="text-sm text-gray-600 hover:text-gray-900"
              >
                Logout
              </button>
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
import { ref } from 'vue'
import { useUser, type UserRole, type User } from '~/composables/useUser'

const { currentUser, setUser } = useUser()
const userName = ref<string>('')
const userEmail = ref<string>('')
const userRole = ref<UserRole>('STUDENT')
const registering = ref(false)
const registerError = ref('')

const registerUser = async () => {
  if (!userName.value.trim() || !userEmail.value.trim()) {
    registerError.value = 'Please fill in all fields'
    return
  }

  registering.value = true
  registerError.value = ''

  try {
    const response = await $fetch<{ success: boolean; user: User }>('/api/users', {
      method: 'POST',
      body: {
        name: userName.value,
        email: userEmail.value,
        role: userRole.value
      }
    })

    if (response.success && response.user) {
      setUser(response.user.id, response.user.name, response.user.role)
    }
  } catch (error: any) {
    registerError.value = error.data?.message || 'Failed to register user'
  } finally {
    registering.value = false
  }
}

const logout = () => {
  setUser('', '', 'STUDENT')
  userName.value = ''
  userEmail.value = ''
  userRole.value = 'STUDENT'
  registerError.value = ''
}
</script>