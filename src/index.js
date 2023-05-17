const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Server is up and running!');
  });

const port = 3000; // You can use any port you prefer
app.listen(port, () => {
console.log(`Server is listening on port ${port}`);
});