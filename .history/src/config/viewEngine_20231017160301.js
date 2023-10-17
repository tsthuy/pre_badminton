import express from "express";

// ES6
let configEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
}
module.exports = configEngine;
