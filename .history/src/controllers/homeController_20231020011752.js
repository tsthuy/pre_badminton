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
    if (userId) {
        let userData = await CRUDService.getUserInforbyId(userId);
        if (userData)

            return res.render('editCRUD.ejs',
                {
                    user: userData
                });
    }
    else {

        return res.send('user not found');
    }
}
let putCRUD = async (req, res) => {
    let data = req.body
    await CRUDService.updateUserData(data);
    res.redirect("get-crud");
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id
    await CRUDService.deleteUserId(id);
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCrud: getCrud,
    postCrud: postCrud,
    displayCrud: displayCrud,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD
}