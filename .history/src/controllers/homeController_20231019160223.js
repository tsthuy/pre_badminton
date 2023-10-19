import db from "../../models/index";

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
let postCrud = (req, res) => {
    console.log(req.body);
    return res.send("heloo world")
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCrud: getCrud,
    postCrud: postCrud,
}