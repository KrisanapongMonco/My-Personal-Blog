<template>
    <div class="blog-post">
      <h1>{{ title }}</h1>
      <p class="date">{{ formattedDate }}</p>
      <div class="content" v-html="content"></div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  });
  
  const formattedDate = ref(new Date(props.date).toLocaleDateString());
  </script>
  
  <style scoped>
  .blog-post {
    margin: 20px 0;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  h1 {
    font-size: 2em;
    margin-bottom: 10px;
  }
  
  .date {
    font-size: 0.9em;
    color: #888;
  }
  
  .content {
    margin-top: 10px;
    line-height: 1.6;
  }
  </style>