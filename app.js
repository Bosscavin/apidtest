const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');

const { errorHandler } = require('./middlewares/errorMiddleware');

const usersRoutes = require('./routes/users.routes');
const defaultRoutes = require('./routes/default.routes');
const db = require('./data/database');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(defaultRoutes);
app.use('/api/users', usersRoutes);
app.use(errorHandler);

db.initDB();

app.listen(3000, () => {
  console.log('Listening to port 3000');
});
