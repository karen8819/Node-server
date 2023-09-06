const chalk = require('chalk'); 
const http = require('http');

const host = 'localhost';
const puerto = 8000;

const servidor = http.createServer((_req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const respuesta = JSON.stringify('Hola desde mi servidor');
  res.end(respuesta);
});

servidor.listen(puerto, host, () => {
  console.log(chalk.green(`El servidor está escuchando en http://${host}:${puerto}`));
});



// const chalk ='chalk';
// const http = require('http');


// const host = 'localhost';
// const puerto = 8000;

// const servidor = http.createServer((_req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   const respuesta = JSON.stringify('Hola desde mi servidor' );
//   res.end(respuesta);
// });


// servidor.listen(puerto, host, () => {
//   console.log(chalk.green(`El servidor está escuchando en http://${host}:${puerto}`));
// });






