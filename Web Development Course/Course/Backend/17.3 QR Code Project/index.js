import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

let userURL;

inquirer.prompt([
    {
        type: "input",
        name: "url",
        message: "What URL do you want to save as QR Code?"
    }
])
.then((answers) => {
    userURL = answers.url;
    var qr_png = qr.image(userURL, {type: "png"});
    qr_png.pipe(fs.createWriteStream('qr_png.png'));
    fs.writeFile("URL.txt", userURL, (err) => {
        if (err) throw err;
        console.log("URL has been saved in URL.txt file.")
    })
})
.catch(err => {
    console.log("An error occurred:", err);
});