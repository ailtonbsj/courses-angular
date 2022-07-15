const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multiparty = require('connect-multiparty');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS
// const corsOptions = {
//   origin: '*',
//   optionsSuccessStatus: 200
// };
// app.use(cors(corsOptions));

const multipartyMiddleware = multiparty({ uploadDir: '/tmp/' });
app.post('/upload', multipartyMiddleware, (req, res) => {
  const files = req.files;
  console.log(files);
  res.json({ message: files });
});

app.use((err, req, res, next) => res.json({ error: err.message}));

app.listen(8000, () => {
  console.log('Servidor na porta 8000');
});
