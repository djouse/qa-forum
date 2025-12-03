<template>
  <div class="min-h-screen bg-white">
      <header class="bg-white">
        <div class="max-w-5xl mx-auto px-4 h-20 md:h-32 flex items-center justify-between">
          <NuxtLink to="/" class="flex items-center gap-2 md:gap-4">
            <img src="/intuitivo-forum-logo.svg" alt="Forum Logo" class="h-10 md:h-14 w-auto" />
            <div class="flex flex-col leading-tight">
              <span class="text-xl md:text-2xl font-bold" style="color: var(--m-green);">Forum</span>
              <span class="hidden md:block text-s" style="color: var(--m-green);">Share the knowledge.</span>
              <span class="hidden md:block text-s" style="color: var(--m-green);">Share the doubts.</span>
            </div>
          </NuxtLink>

          <div class="flex items-center gap-2 md:gap-6">
            <template v-if="!isAuthenticated">
              <NuxtLink
                to="/auth/login"
                class="px-3 md:px-6 py-2 md:py-3 text-white text-xs md:text-sm rounded-xl transition inline-flex items-center"
                style="background-color: var(--m-green);"
                @mouseenter="($event.target as HTMLElement)?.style && (($event.target as HTMLElement).style.opacity = '0.9')"
                @mouseleave="($event.target as HTMLElement)?.style && (($event.target as HTMLElement).style.opacity = '1')"
              >
                Sign In
              </NuxtLink>
              <NuxtLink
                to="/auth/register"
                class="px-3 md:px-6 py-2 md:py-3 text-xs md:text-sm rounded-xl transition inline-flex items-center"
                style="background-color: var(--grey); color: #333;"
                @mouseenter="($event.target as HTMLElement)?.style && (($event.target as HTMLElement).style.opacity = '0.9')"
                @mouseleave="($event.target as HTMLElement)?.style && (($event.target as HTMLElement).style.opacity = '1')"
              >
                Register
              </NuxtLink>
            </template>

            <template v-else>
              <NuxtLink
                :to="currentUser?.role === 'TEACHER' ? '/teacher-dashboard' : '/my-questions'"
                class="hidden md:block text-sm transition px-3 py-1.5 rounded-lg"
                style="color: var(--grey-m5); background-color: rgba(153, 153, 153, 0.15);"
                @mouseenter="($event.target as HTMLElement)?.style && (($event.target as HTMLElement).style.backgroundColor = 'rgba(153, 153, 153, 0.25)')"
                @mouseleave="($event.target as HTMLElement)?.style && (($event.target as HTMLElement).style.backgroundColor = 'rgba(153, 153, 153, 0.15)')"
              >
                {{ currentUser?.role === 'TEACHER' ? 'Teacher Dashboard' : 'My Questions' }}
              </NuxtLink>
              <div class="flex items-center gap-2 md:gap-3 px-3 md:px-6 py-2 md:py-3 rounded-xl" style="background-color: var(--m-green);">
                <NuxtLink
                  :to="currentUser?.role === 'TEACHER' ? '/teacher-dashboard' : '/my-questions'"
                  class="md:hidden text-right leading-tight flex-1"
                >
                  <p class="text-xs font-medium" style="color: var(--green);">
                    {{ currentUser?.name }}
                  </p>
                  <p class="text-[10px]" style="color: var(--green); opacity: 0.8;">
                    {{ currentUser?.role === 'STUDENT' ? 'Student' : 'Teacher' }}
                  </p>
                </NuxtLink>
                <div class="hidden md:block text-right leading-tight">
                  <p class="text-sm font-medium" style="color: var(--green);">
                    {{ currentUser?.name }}
                  </p>
                  <p class="text-[11px]" style="color: var(--green); opacity: 0.8;">
                    {{ currentUser?.role === 'STUDENT' ? 'Student' : 'Teacher' }}
                  </p>
                </div>
                <button
                  @click="handleLogout"
                  class="text-xs md:text-sm transition px-2 md:px-3 py-1 md:py-1.5 rounded-lg"
                  style="color: var(--green); background-color: rgba(125, 216, 137, 0.15);"
                  @mouseenter="($event.target as HTMLElement)?.style && (($event.target as HTMLElement).style.backgroundColor = 'rgba(125, 216, 137, 0.25)')"
                  @mouseleave="($event.target as HTMLElement)?.style && (($event.target as HTMLElement).style.backgroundColor = 'rgba(125, 216, 137, 0.15)')"
                >
                  Logout
                </button>
              </div>
            </template>
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

<style scoped>
</style>