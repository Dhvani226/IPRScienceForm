// server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000; // You can change the port number if needed

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Define a route to handle form submission
app.post('/api/ipr-form', (req, res) => {
    const { email } = req.body; // Extract email from request body

    // You can perform further processing here (e.g., save to database)
    console.log(`Received form submission: ${email}`);

    // Respond with a success message
    res.status(200).json({ message: 'Form submitted successfully', email });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
