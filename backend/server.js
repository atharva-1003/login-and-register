
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Replace with your MongoDB Atlas connection string
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/books';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: Number
});

const Book = mongoose.model('Book', bookSchema);


app.use(cors());
app.use(express.json());
// Add a new book
app.post('/api/books', async (req, res) => {
    try {
        const { title, author, year } = req.body;
        if (!title || !author) {
            return res.status(400).json({ error: 'Title and author are required' });
        }
        const book = new Book({ title, author, year });
        await book.save();
        res.status(201).json(book);
    } catch (err) {
        res.status(500).json({ error: 'Failed to add book' });
    }
});

// Fetch all books
app.get('/api/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch books' });
    }
});

// API route
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// API route with some data
app.get('/api/data', (req, res) => {
    const items = [
        { id: 1, name: 'Item One', category: 'Testing' },
        { id: 2, name: 'Item Two', category: 'Automation' },
        { id: 3, name: 'Item Three', category: 'Demo' }
    ];
    res.json(items);
});

// Post route for testing automation
app.post('/api/submit', (req, res) => {
    const { name } = req.body;
    if (name) {
        res.status(201).json({ message: `Successfully submitted: ${name}` });
    } else {
        res.status(400).json({ error: 'Name is required' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
