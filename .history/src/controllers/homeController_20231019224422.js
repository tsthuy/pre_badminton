import db from "../../models/index";
import CRUDService from "../services/CRUDService";
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }
}
let getAboutPage = (req, res) => {
    return res.render('test/about.ejs')
}
let getCrud = (req, res) => {
    return res.render('crud.ejs');
}
let postCrud = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send("helLo world")
}
let displayCrud = async (req, res) => {
    let data = await CRUDService.getAllUser();
    // console.log('----------------------------------------')
    // console.log(data);
    // console.log('----------------------------------------')

    return res.render('displayCRUD.ejs',
        {
            dataTable: data,
        })
}
let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    let userData = CRUDService.getUserInforbyId(userId);
    console.log(req.query.id);
    return res.send('hello here is edit page');
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCrud: getCrud,
    postCrud: postCrud,
    displayCrud: displayCrud,
    getEditCRUD: getEditCRUD,
}