<template>
    <div class="blog-post my-4 p-4 border rounded bg-light">
      <h1 class="display-5">{{ title }}</h1>
      <p class="text-muted">{{ formattedDate }}</p>
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