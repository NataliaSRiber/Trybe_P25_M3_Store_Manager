const express = require('express');
const error = require('./middleware/error');
const root = require('./controllers/root');

const port = 3000;
const app = express();
app.use(express.json()); // lê json no body

app.use(root);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(error);

app.listen(port, () => console.log(`Online na porta ${port}!`));
