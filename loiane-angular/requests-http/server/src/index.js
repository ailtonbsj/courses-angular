const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multiparty = require("connect-multiparty");
const { spawnSync } = require("child_process");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS
// const corsOptions = {
//   origin: '*',
//   optionsSuccessStatus: 200
// };
// app.use(cors(corsOptions));

const multipartyMiddleware = multiparty({ uploadDir: "/tmp/" });
app.post("/upload", multipartyMiddleware, (req, res) => {
  const files = req.files;
  console.log(files);
  res.json({ message: files });
});

app.get("/downloadPDF", (req, res) => {
  spawnSync("wget", [
    "https://github.com/ailtonbsj/pdf-from-scratch/raw/master/tutorial-1.pdf",
    "-O",
    "/tmp/file.pdf",
  ]);
  res.download("/tmp/file.pdf");
});

app.get("/downloadXLS", (req, res) => {
  spawnSync("wget", [
    "https://go.microsoft.com/fwlink/?LinkID=521962",
    "-O",
    "/tmp/file.xlsx"
  ]);
  res.download("/tmp/file.xlsx");
});

app.use((err, req, res, next) => res.json({ error: err.message }));

app.listen(8000, () => {
  console.log("Servidor na porta 8000");
});
