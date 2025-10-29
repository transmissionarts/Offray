const express = require('express');
const { RiTa } = require('rita'); // Import Rita.js
const app = express();
const port = process.env.PORT || 3000; // Use Heroku's port, or 3000 for local testing

// Middleware to parse JSON bodies
app.use(express.json());

// Define the API endpoint
app.post('/process-text', (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).send({ error: 'Text is required in the request body.' });
  }

  // Use Rita.js to analyze the text
  const analysis = RiTa.analyze(text);

  // Return the processed data
  res.json({
    originalText: text,
    analysis: analysis
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
