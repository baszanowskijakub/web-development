import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

function bandNameGenerator(req, res, next) {
  req.bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is</h1><h1>${req.bandName}</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});