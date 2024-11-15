import express from 'express';
import Book  from '../models/Book.js';



const router = express.Router();

// Example route to get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Other routes for books...




// Add a new book
router.post("/", async (req, res) => {
  const newBook = new Book(req.body);
  const savedBook = await newBook.save();
  res.status(201).json(savedBook);
});

// Delete a book by ID
// Delete a book by ID
// Delete a book by ID
router.delete("/:id", async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
      if (!deletedBook) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.status(204).send();
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error deleting book' });
    }
  });
  
  
export default router;
