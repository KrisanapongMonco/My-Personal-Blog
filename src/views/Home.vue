<template>
    <div>
      <h1>Welcome to My Personal Blog</h1>
      <p>This is the home page where you can find the latest posts and updates.</p>
      <router-link to="/about">Learn more about me</router-link>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  h1 {
    color: #333;
  }
  
  p {
    font-size: 1.2em;
  }
  
  .router-link {
    color: #646cff;
    text-decoration: none;
  }
  .router-link:hover {
    text-decoration: underline;
  }
  </style>