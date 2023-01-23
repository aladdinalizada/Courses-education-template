const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

let featured = [
  {
    id: 1,
    category: "User Experience",
    title: "Fundamental of UX for Application design",
    description:
      "The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.",
    rating: "based on 120",
    price: "135",
    image:
      "https://preview.colorlib.com/theme/courses/assets/img/gallery/featured1.png.webp",
  },
  {
    id: 2,
    category: "User Experience",
    title: "Fundamental of UX for Application design",
    description:
      "The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.",
    rating: "based on 120",
    price: "135",
    image:
      "https://preview.colorlib.com/theme/courses/assets/img/gallery/featured2.png.webp",
  },
  {
    id: 3,
    category: "User Experience",
    title: "Fundamental of UX for Application design",
    description:
      "The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.",
    rating: "based on 120",
    price: "135",
    image:
      "https://preview.colorlib.com/theme/courses/assets/img/gallery/featured3.png.webp",
  },
  {
    id: 4,
    category: "User Experience",
    title: "Fundamental of UX for Application design",
    description:
      "The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.",
    rating: "based on 120",
    price: "135",
    image:
      "https://preview.colorlib.com/theme/courses/assets/img/gallery/featured1.png.webp",
  },
  {
    id: 5,
    category: "User Experience",
    title: "Fundamental of UX for Application design",
    description:
      "The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.",
    rating: "based on 120",
    price: "135",
    image:
      "https://preview.colorlib.com/theme/courses/assets/img/gallery/featured2.png.webp",
  },
  {
    id: 6,
    category: "User Experience",
    title: "Fundamental of UX for Application design",
    description:
      "The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.",
    rating: "based on 120",
    price: "135",
    image:
      "https://preview.colorlib.com/theme/courses/assets/img/gallery/featured3.png.webp",
  },
];
let users = [
  {
    id: 1,
    email: "admin",
    password: "admin",
  },
];
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.send(featured));
// details page
app.get("/details/:id", (req, res) => {
  const id = req.params.id;
  const course = featured.find((course) => course.id === parseInt(id));
  res.send(course);
});
app.get("/userdata", (req, res) => {
  res.send(users);
});
// post data
app.post("/userdata", (req, res) => {
  const user = {
    id: users.length + 1,
    email: req.body.email,
    password: req.body.password,
  };
  users.push(user);
  res.send(user);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
