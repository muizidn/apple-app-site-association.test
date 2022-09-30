// https://www.digitalocean.com/community/tutorials/nodejs-serving-static-files-in-express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.static("."));

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))