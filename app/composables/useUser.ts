import { ref, computed } from 'vue'

export type UserRole = 'STUDENT' | 'TEACHER'

export interface User {
  id: string
  name: string
  email?: string
  role: UserRole
}

const currentUser = ref<User>({
  id: '',
  name: '',
  role: 'STUDENT'
})

export const useUser = () => {
  const isStudent = computed(() => currentUser.value.role === 'STUDENT')
  const isTeacher = computed(() => currentUser.value.role === 'TEACHER')

  const setUser = (id: string, name: string, role: UserRole): void => {
    currentUser.value = {
      id,
      name,
      role
    }
  }

  const setRole = (role: UserRole): void => {
    currentUser.value.role = role
  }

  const setName = (name: string): void => {
    currentUser.value.name = name
  }

  return {
    currentUser,
    isStudent,
    isTeacher,
    setUser,
    setRole,
    setName
  }
}