import { ref, computed } from 'vue'

export type UserRole = 'STUDENT' | 'TEACHER'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
}

const STORAGE_KEY = 'qa_forum_user'

// Initialize from localStorage if available
const getStoredUser = (): User | null => {
  if (import.meta.client) {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        return JSON.parse(stored)
      } catch {
        return null
      }
    }
  }
  return null
}

const currentUser = ref<User | null>(getStoredUser())

export const useUser = () => {
  const isAuthenticated = computed(() => !!currentUser.value)
  const isStudent = computed(() => currentUser.value?.role === 'STUDENT')
  const isTeacher = computed(() => currentUser.value?.role === 'TEACHER')

  const setUser = (user: User): void => {
    currentUser.value = user
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    }
  }

  const clearUser = (): void => {
    currentUser.value = null
    if (import.meta.client) {
      localStorage.removeItem(STORAGE_KEY)
    }
  }

  const logout = (): void => {
    clearUser()
  }

  return {
    currentUser,
    isAuthenticated,
    isStudent,
    isTeacher,
    setUser,
    clearUser,
    logout
  }
}