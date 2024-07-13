import React from 'react';

const books = [
  {
    title: "The Compound effect",
    author: "F. Scott Fitzgerald",
    cover: "https://media.licdn.com/dms/image/D4E12AQFOR4pSIIprAQ/article-cover_image-shrink_720_1280/0/1663760695052?e=2147483647&v=beta&t=FO0IsBF1r12e7f009P_4SuUR48pW-EWGtQgyTgo1LKo",
    description: "A novel set in the Jazz Age that tells the story of Jay Gatsby's unrequited love for Daisy Buchanan.",
    rating: 4.5,
    reviews: 1200
  },
  {
    title: "The Obstacle is the way",
    author: "George Orwell",
    cover: "https://m.media-amazon.com/images/I/41LyQkMMRNL._SL500_.jpg",
    description: "A dystopian novel that explores the dangers of totalitarianism and extreme political ideology.",
    rating: 4.8,
    reviews: 2200
  },
  // Add more book objects here
];

const BookItem = ({ book }) => (
  <div className="flex items-center mb-4 p-2 bg-red-950 bg-opacity-50 backdrop-filter rounded-lg shadow-glow ">
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
    <div className="p-4 h-full overflow-auto top-80 mt-10 rounded-md" style={{ backgroundImage: 'url(https://i.pinimg.com/474x/c2/c1/df/c2c1df62dcba0f05827680c409fdbfad.jpg)' ,backgroundRepeat: 'no-repeat' }}>
    <h2 className="text-xl font-semibold mb-4 mt-16 text-white font-playwrite">Book Recommendations</h2>
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
