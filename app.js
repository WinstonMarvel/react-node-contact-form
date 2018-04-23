const app = require("express")();
const bodyParser = require("body-parser");
const router = require("./routes.js");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


app.use(router);

app.listen(5000, ()=>console.log("listening"));