const fs = require("fs");

// fs.writeFile("message.txt", "Hello from Jakub!", (err) => {
//     if (err) throw err;
//     console.log("Success!");
// });

fs.readFile('message.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  }); 