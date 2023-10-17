import db from '../models/index';

let getHomePage = async (req, res) => {
    try {
        let data = await db.user.findAll();
        return res.render('homepage.ejs');

    } catch (error) {
        console.log(error)
    }
}
let getAboutPage = (req, res) => {
    return res.render('test/about.ejs')
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}