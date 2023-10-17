import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/HuydgfixBug', (req, res) => {
        return res.send('Huy dang fix bug')
    })
    return app.use('/', router);
}
module.exports = initWebRoutes;