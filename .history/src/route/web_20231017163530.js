import express from "express";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        return res.send('hello Huy dang fix bug')
    })
    router.get('/HuydgfixBug', (req, res) => {
        return res.send('Huy dang fix bug')
    })
    return app.use('/', router);
}
module.exports = initWebRoutes;