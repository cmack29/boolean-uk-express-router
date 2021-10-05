// Import here...
const express = require("express");

const router = express.Router();

const books = [
  {
    id: 1,
    title: "1984",
    type: "fiction",
    author: "George Orwell"
  },
  {
    id: 2,
    title: "Life of Pi",
    type: "fiction",
    author: "Yann Martel"
  },
  {
    id: 3,
    title: "How to Win Friends and Influence People",
    type: "non-fiction",
    author: "Dale Carnegie"
  },
  {
    id: 4,
    title: "The Lean Startup",
    type: "non-fiction",
    author: "Eric Reis"
  }
];

// Write routes here...
router.get("/", (req, res) => {
  console.log("here");
  res.json({ books });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const book = books.find((book) => book.id === id);

  res.json({ book });
});

router.get("/type/:type", (req, res) => {
  const { type } = req.params;
  console.log(type);

  const book = books.filter((bookss) => bookss.type === type);

  console.log(book);

  res.json({ book });
});

router.post("/", (req, res) => {
  const bookToCreate = {
    ...req.body
  };

  bookToCreate.id = books.length + 1;

  const updatedBooks = [...books, bookToCreate];

  console.log("Check updatedBooks: ", updatedBooks);

  res.json({ book: bookToCreate });
});

module.exports = router;
