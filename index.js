const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./backend/models/connection');

const authorsRouter = require('./backend/routes/authors');

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!!!'));

app.use('/authors', authorsRouter);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
