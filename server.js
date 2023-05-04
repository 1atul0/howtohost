const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index',{indexvalue:10});
});
app.get('/contact', (req, res) => {
  res.render('contact');
});
app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running...');
});
