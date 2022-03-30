class NewsController {
    //GET / news
    index(req, res) {
        res.render('new');
    }
    //[GET] / news/:slug
    show(req, res) {
        res.send('New Deatail !!!!');
    }
}
module.exports = new NewsController();
