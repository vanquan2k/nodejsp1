const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

const router = require('./routes/index');
//http logger
// app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
      app.use(
          express.urlencoded({
              extended: true,
          }),
      );
app.use(express.json());
// template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
// console.log('PATH:' , path.join(__dirname,'views'));
//route -

// Local host --- Hosting
// Action ---> Dispatcher ---> Funtion handler

      router(app);

          app.listen(port, () => {
              console.log(`Example app listening at http://localhost:${port}`);
          });
