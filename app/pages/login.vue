<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
      <div class="text-center mb-8">
        <img src="/intuitivo-forum-logo.svg" alt="logo" class="h-16 mx-auto mb-4"/>
        <h1 class="text-2xl font-bold text-gray-900">Forum</h1>
        <p class="text-gray-600">Join the community</p>
      </div>
      
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input
            v-model="userName"
            type="text"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent" 
            style="--tw-ring-color: #114F55;"
            placeholder="Enter your name"
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Student ID</label>
          <input
            v-model="studentId"
            type="text"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent" 
            style="--tw-ring-color: #114F55;"
            placeholder="Enter your student ID"
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Role</label>
          <select
            v-model="userRole"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent" 
            style="--tw-ring-color: #114F55;"
          >
            <option value="STUDENT">🎓 Student</option>
            <option value="TEACHER">👨🏫 Teacher</option>
          </select>
        </div>
        
        <button
          type="submit"
          class="w-full text-white py-3 rounded-lg font-medium transition hover:opacity-90" 
          style="background-color: #114F55;"
        >
          Join Forum
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const { setUser } = useUser()

const userName = ref('')
const studentId = ref('')
const userRole = ref('STUDENT')

const handleLogin = () => {
  if (userName.value.trim() && studentId.value.trim()) {
    setUser(userName.value, userRole.value, studentId.value)
    router.push('/')
  }
}
</script>