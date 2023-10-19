import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/about', homeController.getAboutPage)
    router.get('/crud', homeController.getCrud)
    router.get('/get-crud', homeController.displayCrud)
    router.post('/post-crud', homeController.postCrud)
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.post('/delete-crud', homeController.putCRUD);
    return app.use('/', router);
}
module.exports = initWebRoutes;