<template>
    <nav class="navbar navbar-expand-lg" :class="themeClass">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">My Blog</router-link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
          <button @click="$emit('toggle-theme')" class="btn btn-outline-light">Toggle Theme</button>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    theme: {
      type: String,
      required: true
    }
  })
  
  const themeClass = computed(() => (props.theme === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'))
  </script>