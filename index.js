// https://www.digitalocean.com/community/tutorials/nodejs-serving-static-files-in-express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.static("."));

app.get("/car-list", (req, res) => {
    res.send("Car list not included in AASA filter");
});

app.get("/cars", (req, res) => {
    res.send("Cars Must redirect to app");
});

app.get("/promo/123", (req, res) => {
    res.send("Promo/{ANY_ID} Must redirect to app, if not then PULL this web will show OPEN button");
});

app.get("/email", (req, res) => {
    res.send("/email Must NOT redirect to app, Pull web should not show OPEN button");
});

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))