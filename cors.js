const express = require('express');
const cors = require('cors');
const app = express();

// Allow requests from localhost:5678
app.use(cors({
  origin: 'http://localhost:5678'
}));

// Or allow all origins (use cautiously)
app.use(cors());

app.listen(3010, () => {
  console.log('Server running on http://localhost:3000');
});
