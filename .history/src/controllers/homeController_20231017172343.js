let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}
let getAboutPage = (req, res) => {

}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}