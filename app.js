require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

//TODO: reuiere('hbs)
//handerlbasrs
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {});

//midelware servir contenido estaitco

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Andres",
    titulo: "curso Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    titulo: "curso Node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    titulo: "curso Node",
  });
});

app.get("*", (res, req) => {
  res.senFile(__dirname + "/public/404.html");
});

app.get("/hola-mundo", (req, res) => {
  res.send("hola mundo en su respectiva ruta");
});

app.listen(port, () => {
  console.log(`seta corriendo en ${port}`);
});
