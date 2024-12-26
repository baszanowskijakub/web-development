import express from "express"
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h2>Call me</h2>");
});

app.get("/about", (req, res) => {
    res.send("I'm Kuba. Hello.");
});

app.listen(port, () => {
    console.log(`Server running at ${port} port.`);
});