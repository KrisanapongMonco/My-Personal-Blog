<template>
  <div :class="['d-flex flex-column min-vh-100', theme]">
    <Navbar @toggle-theme="toggleTheme" />
    <main class="flex-fill p-4">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const theme = ref('light')

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<style>
.light {
  background-color: #ffffff;
  color: #000000;
}

.dark {
  background-color: #343a40;
  color: #ffffff;
}
</style>