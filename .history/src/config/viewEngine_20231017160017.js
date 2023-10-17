import express from "express";

// ES6
let configEnglige = (app) => {
    app.use(express.static("./src/public"))
}
module.exports = configEnglige;
