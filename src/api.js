import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  getPosts() {
    return apiClient.get('/posts');
  },
  createPost(post) {
    return apiClient.post('/posts', post);
  }
};