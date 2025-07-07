const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["available", "borrowed", "reserved"],
    },
  },
  { timestamps: true },
);

// Create index on title and author for efficient search
bookSchema.index({ title: 1, author: 1 });

module.exports = mongoose.model("Book", bookSchema);
