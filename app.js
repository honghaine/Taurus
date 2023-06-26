const express = require('express');
const path = require('path');
const db = require('./utils/PoolConnection');

const app = express();

const homepageController = require('./controller/homepage');

// Set up the view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: false }));

// Serve static files
app.use(express.static('public'));
app.use('/styles', express.static(path.join(__dirname, 'public/styles')));
app.use('/script', express.static(path.join(__dirname, 'public/script')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Error handling middleware
app.use((err, req, res, next) => {
  console.log('Error:', err);
  res.status(500).render('500');
});

app.use(homepageController);

// Establish database connection and start the server
(async () => {
    try {
      db.testDbConnection;
      console.log('Connection has been established successfully.');
      app.listen(3000, () => {
        console.log('Server listening on port 3000');
      });
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  })();
