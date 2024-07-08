import React from 'react';

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover: "url/to/great-gatsby.jpg",
    description: "A novel set in the Jazz Age that tells the story of Jay Gatsby's unrequited love for Daisy Buchanan.",
    rating: 4.5,
    reviews: 1200
  },
  {
    title: "1984",
    author: "George Orwell",
    cover: "url/to/1984.jpg",
    description: "A dystopian novel that explores the dangers of totalitarianism and extreme political ideology.",
    rating: 4.8,
    reviews: 2200
  },
  // Add more book objects here
];

const BookItem = ({ book }) => (
  <div className="flex items-center mb-4 p-2 bg-gray-800 rounded-lg shadow-md">
    <img src={book.cover} alt={book.title} className="w-16 h-24 object-cover rounded-md" />
    <div className="ml-4 text-gray-300">
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p className="text-sm">{book.author}</p>
      <p className="text-sm mt-2">{book.description}</p>
      <div className="mt-2 text-yellow-500">
        {"★".repeat(Math.floor(book.rating))} ({book.reviews} reviews)
      </div>
    </div>
  </div>
);

const Suggestions = () => {
  return (
    <div className="p-4 h-full overflow-auto top-40">
    <h2 className="text-xl font-semibold mb-4 text-gray-300">Book Recommendations</h2>
    <div>
      {books.map(book => (
        <BookItem key={book.title} book={book} />
      ))}
    </div>
    <div className="mt-4">
      <a href="#" className="text-blue-400 hover:underline">See more recommendations</a>
    </div>
  </div>
  );
};

export default Suggestions;
