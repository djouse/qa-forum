export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated, isTeacher } = useUser()
  
  if (!isAuthenticated.value) {
    return navigateTo('/auth/login')
  }
  
  if (!isTeacher.value) {
    return navigateTo('/')
  }
})