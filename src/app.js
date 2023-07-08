const express = require('express');
const morgan = require('morgan');
const path = require('path');

const gradesRoutes = require('./routes/gradesRoute');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('./src/views'));
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/grades', gradesRoutes);

app.get('/search', (_req, res) => {
    const m = 0;
    return res.render('search');
});

app.get(
    '*',
    (_req, res) => res.render('home'),
    // res.status(200).json({
    //     status: 'success',
    //     message: 'WELCOME, SEARCH FOR GRADES',
    // });
);

module.exports = app;
