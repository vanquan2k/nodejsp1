const newsRouter = require('./news');
const siteRouter = require('./site');
function route(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
    // app.get('/', (req, res) => {
    //   res.render('home');
    // });
    // app.get('/new', (req, res) => {
    //   console.log(req.query.q)
    //   res.render('new');
    // });

    // app.get('/search', (req, res) => {
    //   res.render('search');

    // });
    // app.post('/search', (req, res) => {
    //   res.send('');
    //   console.log(req.body)
    // });
}
module.exports = route;
