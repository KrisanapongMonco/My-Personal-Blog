<template>
    <div class="text-center">
      <h1 class="display-4">Welcome to My Personal Blog</h1>
      <p class="lead">This is the home page where you can find the latest posts and updates.</p>
      <router-link to="/about" class="btn btn-primary mb-4">Learn more about me</router-link>
  
      <div v-if="posts.length">
        <h2 class="mb-4">Posts</h2>
        <div v-for="post in posts" :key="post.id" class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.content }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No posts available.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import api from '../api';
  
  const posts = ref([]);
  
  const fetchPosts = async () => {
    try {
      const response = await api.getPosts();
      posts.value = response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
  
  onMounted(fetchPosts);
  </script>