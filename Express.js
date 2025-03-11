const express = require('express');
const cors = require('cors');

const app = express();

// Allow all origins or specify your frontend domain for security
app.use(
  cors({
    origin: 'http://localhost:5678',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  }),
);

// Your other middleware and routes
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
