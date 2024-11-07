const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const pool = require('./config/db'); // PostgreSQL configuration

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/task');

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);


app.get('/', (req, res) => {
    res.render('index');
});


app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

module.exports = pool;
