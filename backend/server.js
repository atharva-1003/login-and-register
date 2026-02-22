const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

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
