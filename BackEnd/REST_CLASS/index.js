const express = require("express");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");
const multer = require("multer");
const upload = multer({ dest: "public/uploads/" });


const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

let posts = [
  {
    id: uuidv4(),
    username: "abhi",
    content: "Believe in yourself",
     imagePath: null,
  },
  {
    id: uuidv4(),
    username: "venom",
    content: "Welcome to My World",
     imagePath: null,
  },
  {
    id: uuidv4(),
    username: "john cena",
    content: "Never Give UP",
     imagePath: null,
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", upload.single("image"), (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  let imagePath = req.file ? `/uploads/${req.file.filename}` : null;
  posts.push({ id, username, content, imagePath });
  res.redirect("/posts");
});


app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post });
});

app.patch("/posts/:id", upload.single("image"), (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);

  if (post) {
    post.content = newContent;

    if (req.file) {
      post.imagePath = `/uploads/${req.file.filename}`;
    }
  }

  res.redirect("/posts");
});


app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
