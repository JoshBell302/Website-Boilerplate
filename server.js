// ===== Server Setup
const express = require('express');
const app = express();
const port = 8000;

// ===== Handlebars Setup
const handlebars = require('express-handlebars');
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars.engine({layoutsDir: __dirname + '/views/layouts',}));
app.use(express.static(__dirname));

// ===== Server Code
app.get('/', (req, res) => { // When a GET request for the page '/' is requested returns info from 'homepage.handlebars'
    console.log("The website has requested " + req.url); // Prints request to terminal
    res.render('homepage', {}); // Renders handlebars
  });
  
  app.listen(port, () => console.log(`Website is listening to port ${port}`)); // When server is on it prints that it is active and what port it is listening on
  