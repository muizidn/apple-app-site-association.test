// https://www.digitalocean.com/community/tutorials/nodejs-serving-static-files-in-express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.static("."));

app.get("/car-list", (req, res) => {
    res.send("<h1>Car list not included in AASA filter</h1>");
});

app.get("/cars", (req, res) => {
    res.send("<h1>Cars Must redirect to app</h1>");
});

app.get("/promo/*", (req, res) => {
    res.send("<h1>Promo with {ANY_ID} Must redirect to app, if not then PULL this web will show OPEN button</h1>");
});

app.get("/email", (req, res) => {
    res.send("<h1>Email Must NOT redirect to app, Pull web should not show OPEN button</h1>");
});

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))