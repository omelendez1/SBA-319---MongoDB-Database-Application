const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

// CREATE a new book
router.post("/", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ all books (optionally filter by title or author)
router.get("/", async (req, res) => {
  try {
    const { title, author } = req.query;
    const filter = {};
    if (title) filter.title = new RegExp(title, "i"); // case-insensitive search
    if (author) filter.author = new RegExp(author, "i");

    const books = await Book.find(filter);
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ one book by ID
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE a book by ID
router.put("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE a book by ID
router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
