<template>
  <div class="h-screen bg-white">
      <header class="bg-white">
        <div class="max-w-8/10 mx-auto px-4 h-32 md:h-32 flex items-center justify-between">
          <NuxtLink to="/" class="flex items-center gap-2 md:gap-4">
            <img src="/intuitivo-forum-logo.svg" alt="Forum Logo" class="h-10 md:h-14 w-auto" />
            <div class="flex flex-col leading-tight">
              <span class="hidden md:block text-2xl md:text-3xl font-semibold" style="color: var(--m-green);">Forum</span>
              <span class="hidden md:block text-s" style="color: var(--m-green);">Share the knowledge.</span>
              <span class="hidden md:block text-s" style="color: var(--m-green);">Share the doubts.</span>
            </div>
          </NuxtLink>

          <div class="flex items-center gap-2 md:gap-6">
            <template v-if="!isAuthenticated">
              <NuxtLink
                to="/auth/login"
                class="px-3 md:px-6 py-2 md:py-3 text-white text-xs md:text-sm rounded-full transition inline-flex items-center"
                style="background-color: var(--m-green);"
                @mouseenter="($event.target as HTMLElement)?.style && (($event.target as HTMLElement).style.opacity = '0.9')"
                @mouseleave="($event.target as HTMLElement)?.style && (($event.target as HTMLElement).style.opacity = '1')"
              >
                Sign In
              </NuxtLink>
              <NuxtLink
                to="/auth/register"
                class="px-3 md:px-6 py-2 md:py-3 text-xs md:text-sm rounded-full transition inline-flex items-center"
                style="background-color: var(--grey); color: var(--m-green);"
                @mouseenter="($event.target as HTMLElement)?.style && (($event.target as HTMLElement).style.opacity = '0.9')"
                @mouseleave="($event.target as HTMLElement)?.style && (($event.target as HTMLElement).style.opacity = '1')"
              >
                Register
              </NuxtLink>
            </template>

            <template v-else>
              <div class="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-2 md:py-3 rounded-full" style="background-color: var(--grey);">
                <div class="text-right leading-tight">
                  <p class="text-xs md:text-sm font-medium" style="color: var(--m-green);">
                    {{ currentUser?.name }}
                  </p>
                  <p class="text-[10px] md:text-xs" style="color: var(--grey-m5);">
                    {{ currentUser?.role === 'STUDENT' ? 'Student' : 'Teacher' }}
                  </p>
                </div>

                <NuxtLink
                  :to="currentUser?.role === 'TEACHER' ? '/teacher-dashboard' : '/student-dashboard'"
                  class="px-3 md:px-4 py-2 text-xs md:text-sm rounded-full transition"
                  style="background-color: var(--m-green); color: white;"
                >
                  Dashboard
                </NuxtLink>
                <NuxtLink
                  to="/auth/login"
                  @click="logout"
                  class="px-3 md:px-4 py-2 text-xs md:text-sm rounded-full transition"
                  style="background-color: var(--white); color: var(--m-green);"
                >
                  Logout
                </NuxtLink>
              </div>
            </template>
          </div>
        </div>
      </header>

      <main class="max-w-8/10 mx-auto px-4 py-8">
        <NuxtPage />
      </main>

      <footer class="bg-white">
        <div class="max-w-8/10 mx-auto px-4 py-8 text-center text-sm text-gray-500">
         QA Forum. Use for educational purposes only.
          <span class="text-xs text-gray-400"> V{{ version }}</span>
        </div>
      </footer>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUser } from '~/composables/useUser'
import { APP_SETTINGS } from '~/config/settings'

const version = APP_SETTINGS.VERSION
const router = useRouter()
const { currentUser, isAuthenticated, logout } = useUser()


</script>

<style scoped>
</style>