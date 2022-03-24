const path = require('path');
const express = require('express');
const morgan= require('morgan');
const { engine } = require ('express-handlebars');

const app = express();
const port = 3000;

//http logger
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,'public')));

// template engine
app.engine('hbs', engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
// console.log('PATH:' , path.join(__dirname,'views'));
//route -
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/new', (req, res) => {
  res.render('new');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})