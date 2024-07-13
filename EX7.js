const express = require('express');
const port = 5000;
const app = express();
const server=app.listen(port, () => console.log(`Server started on port
${port}`));
app.get('/api/message', (req, res) => {
res.json({ message: 'Hello, World!' });
});

// Change made by Hrithik Raj