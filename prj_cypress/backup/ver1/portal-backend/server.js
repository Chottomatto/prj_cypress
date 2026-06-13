const express = require('express');
const cors = require('cors');
const app = express();

// Render tells your app what port to use via process.env.PORT. 
// If it's missing (like when you run it locally), it defaults to 3000.
const PORT = process.env.PORT || 3000; 

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`Received credentials - User: ${username}, Pass: ${password}`);
    res.send('<h1>Data processed securely by the backend!</h1>');
});

// CRITICAL: Make sure it's listening to the PORT variable!
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});