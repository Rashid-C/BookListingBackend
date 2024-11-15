import express from "express";
import { connect } from "mongoose";
import booksRouter from './routes/books.js';
import dotenv from 'dotenv';
import cors from 'cors'
import mongoose from 'mongoose';
dotenv.config(); 

const app = express();
app.use(cors())
const PORT = process.env.PORT || 5000;


app.use(express.json());

const dbURI = 'mongodb+srv://rashidc:rashidc@booklistingwebapplicati.m6ayq.mongodb.net/BookListing?retryWrites=true&w=majority&appName=BookListingWebApplication';

app.use("/books", booksRouter);


mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected successfully!');
    
   
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
   
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); 
  });
