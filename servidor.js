const http = require('http');
const port = 3000;

const tasks =[
    {id: 1, description: 'Hacer la compra', completed: false},
    {id: 2, description: 'Estudiar para el examen', completed: true},
    {id: 3, description: 'hacer ejercicio', completed: false},
];

const server = http.createServer((req, res) => {
  if (req.url === '/tasks' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(tasks));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Ruta no encontrada');
  }
});

server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

