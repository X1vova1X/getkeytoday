const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Add cors for every website
app.use(cors());

app.get('/getkey', (req, res) => {
    // Get the current date
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0'); // Get day and pad with 0
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Get month and pad with 0

    // Concatenate day and month
    const dayMonth = day + month;

    // Calculate the result
    const result = dayMonth * 1999;

    // Send the response
    res.json({ key: result.toString() });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
