const jsonServer = require('json-server');
const data = require('../server/data');

const server = jsonServer.create();
const middleware = jsonServer.defaults();

server.use(middleware);
server.use(jsonServer.bodyParser);

server.get('/api/data', (req, res) => {
  res.status(200).send(data.database);
});

server.listen(3000, () => {});
