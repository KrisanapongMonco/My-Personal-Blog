const axios = require('axios');

const apiUrl = 'http://localhost:3000';

const testApi = async () => {
  try {
    // Test GET /
    const helloResponse = await axios.get(`${apiUrl}/`);
    console.log('GET / response:', helloResponse.data);

    // Test GET /posts
    const postsResponse = await axios.get(`${apiUrl}/posts`);
    console.log('GET /posts response:', postsResponse.data);

    // Test POST /posts
    const newPost = { title: 'New Post', content: 'This is a new post' };
    const createPostResponse = await axios.post(`${apiUrl}/posts`, newPost);
    console.log('POST /posts response:', createPostResponse.data);
  } catch (error) {
    console.error('API call error:', error);
  }
};

testApi();