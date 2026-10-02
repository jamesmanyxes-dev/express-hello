const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('<h1>CloudNest deploy works 🚀</h1><p>This app was cloned, built, and served by CloudNest.</p>'));
app.listen(PORT, () => console.log('listening on ' + PORT));
