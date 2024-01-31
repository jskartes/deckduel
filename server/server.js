const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { resolve, dirname } = require('path');
require('dotenv').config();
require('./config/database');

const app = express();
const server = require('http').Server(app);
require('./config/io').init(server);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(resolve(dirname(__filename), '../build')));

app.get('/*', (req, res) => {
  res.sendFile(resolve(dirname(__filename), '../build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));
