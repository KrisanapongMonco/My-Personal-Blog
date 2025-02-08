<template>
    <div class="about p-5 text-center">
      <h1 class="display-4">About This Blog</h1>
      <p class="lead">Welcome to my personal blog! Here, I share my thoughts, experiences, and insights on various topics that interest me.</p>
      <p class="lead">This blog is built using Vue.js and Vite, providing a fast and interactive user experience.</p>
      <p class="lead">Thank you for visiting, and I hope you enjoy reading my posts!</p>
  
      <h2 class="mt-5">Create a New Post</h2>
      <form @submit.prevent="createPost">
        <div class="mb-3">
          <input v-model="newPost.title" type="text" class="form-control" placeholder="Title" required>
        </div>
        <div class="mb-3">
          <textarea v-model="newPost.content" class="form-control" placeholder="Content" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import api from '../api';
  
  const newPost = ref({
    title: '',
    content: ''
  });
  
  const createPost = async () => {
    try {
      await api.createPost(newPost.value);
      newPost.value.title = '';
      newPost.value.content = '';
      alert('Post created successfully!');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  </script>