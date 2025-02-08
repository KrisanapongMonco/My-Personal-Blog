<template>
    <footer :class="['text-center py-3 mt-auto', themeClass]">
      <p>&copy; {{ new Date().getFullYear() }} My Personal Blog. All rights reserved.</p>
    
    </footer>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    theme: {
      type: String,
      required: true
    }
  })
  
  const themeClass = computed(() => (props.theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-white'))
  </script>