const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/posts', (req, res) => {
    res.json([
        { id: 1, title: 'First Post', content: 'This is the first post' },
        { id: 2, title: 'Second Post', content: 'This is the second post' },
    ]);
});

app.post('/posts', (req, res) => {
    const newPost = req.body;
    newPost.id = Date.now();
    res.status(201).json(newPost);
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

module.exports = app;