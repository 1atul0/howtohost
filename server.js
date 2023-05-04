const express = require('express');
const ejs = require('ejs');

const app = express();
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:



app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  var randomValue = getRandomInt(1, 10);
  res.render('index',{indexvalue:randomValue});
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
