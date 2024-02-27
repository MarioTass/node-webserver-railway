const { log } = require("console");
const http = require("http");

http
  .createServer((req, res) => {
    //res.writeHead(200,{'Content-type': 'application/json'})
    /*     res.setHeader("contente-type", "attachment; filename=lista.csv");
    res.writeHead(200, { "Content-type": "application/csv" }); */

    /*  const persona = {
      id: 1,
      nombre: "Mario",
    }; */
    //res.write(JSON.stringify(persona));
    /*     res.write("id, nombre\n");
    res.write("1, Mario\n");
    res.write("2, Andres\n");
    res.write("3, yei\n");
    res.write("4, hugo\n"); */
    res.write("hola");
    res.end();
  })
  .listen(8080);

console.log("escuchando", 8080);
