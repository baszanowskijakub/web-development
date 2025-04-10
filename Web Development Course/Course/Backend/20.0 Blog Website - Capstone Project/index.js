import express from "express"
import bodyParser from "body-parser"

const posts = [];
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', './views'); 
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/posts", (req, res) => {
    res.render("posts.ejs", { posts: posts });
});

app.post("/submit", (req, res) => {
    const newPost = {
        title: req.body.title,
        author: req.body.author,
        date: req.body.date,
        text: req.body.text
    };
    posts.push(newPost);
    res.render("posts.ejs", { posts: posts });
});

app.post("/deletePost", (req, res) => {
    const index = posts.findIndex(post => post.title === req.body.title);
    if (index > -1) {
        posts.splice(index, 1);
    }
    res.redirect('/posts');
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

