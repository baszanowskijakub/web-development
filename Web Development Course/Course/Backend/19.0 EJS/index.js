import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index.ejs", 
        {prompt: promptSetter()}
    );
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

function promptSetter(){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const date = new Date();
    const day = weekday[date.getDay()];
    // console.log(day);
    if (day === "Saturday" || day === "Sunday") {
        return "Hey! It's a weekend, it's time to have fun!"
    }
    else {
        return "Hey! It's a weekday, it's time to work hard!"
    }
}