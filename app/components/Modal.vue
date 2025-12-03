<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="show" class="fixed inset-0 bg-white bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50" @click="$emit('close')">
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 scale-95 translate-y-4"
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 scale-100 translate-y-0"
        leave-to-class="opacity-0 scale-95 translate-y-4"
      >
        <div 
          :class="['rounded-xl p-8 w-full mx-4', size === 'large' ? 'max-w-2xl' : 'max-w-md']"
          :style="{ backgroundColor: 'var(--light-gray)' }"
          @click.stop
        >
          <slot />
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup lang="ts">
interface Props {
  show: boolean
  size?: 'small' | 'large'
}

defineProps<Props>()
defineEmits<{
  close: []
}>()
</script>