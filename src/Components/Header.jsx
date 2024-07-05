import React, { useEffect, useState } from 'react';


const Header = () => {

  
  const quotes = [
    {
        quote: "Today a reader, tomorrow a leader.",
        author: "Margaret Fuller"
    },
    {
        quote: "A word after a word after a word is power.",
        author: "Margaret Atwood"
    },
    {
        quote: "One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time.",
        author: "Carl Sagan"
    },
    {
        quote: "Show me a family of readers, and I will show you the people who move the world.",
        author: "Napoleon Bonaparte"
    },
    {
        quote: "A book is a garden, an orchard, a storehouse, a party, a company by the way, a counselor, a multitude of counselors.",
        author: "Charles Baudelaire"
    },
    {
        quote: "Reading should not be presented to children as a chore, a duty. It should be offered as a gift.",
        author: "Kate DiCamillo"
    },
    {
        quote: "I think books are like people, in the sense that they’ll turn up in your life when you most need them.",
        author: "Emma Thompson"
    },
    {
        quote: "It wasn't until I started reading and found books they wouldn't let us read in school that I discovered you could be insane and happy and have a good life without being like everybody else.",
        author: "John Waters"
    },
    {
        quote: "Books are a uniquely portable magic.",
        author: "Stephen King, On Writing: A Memoir of the Craft"
    },
    {
        quote: "Books are mirrors: You only see in them what you already have inside you.",
        author: "Carlos Ruiz Zafón, The Shadow of the Wind"
    },
    {
        quote: "Think before you speak. Read before you think.",
        author: "Fran Lebowitz"
    },
    {
        quote: "Let’s be reasonable and add an eighth day to the week that is devoted exclusively to reading.",
        author: "Lena Dunham"
    },
    {
        quote: "If you don’t like to read, you haven’t found the right book.",
        author: "J.K. Rowling"
    },
    {
        quote: "I can feel infinitely alive curled up on the sofa reading a book.",
        author: "Benedict Cumberbatch"
    },
    {
        quote: "Some books leave us free and some books make us free.",
        author: "Ralph Waldo Emerson"
    }
];

const [currentQuote, setCurrentQuote] = useState(quotes[0]);

useEffect(() => {
  const intervalId = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  }, 8000);

  return () => clearInterval(intervalId);
}, []);
    

  return (
    <div className='w-full h-28 bg-gradient-to-r from-purple-900 via-black to-purple-900 mt-1 p-5 rounded-2xl text-gray-100 flex flex-col justify-center items-center'>
  <p className='w-full text-center font-semibold text-md md:text-2xl lg:text-3xl font-mono italic'>{currentQuote.quote}</p>
  <p className='text-gray-400'>– {currentQuote.author}</p>
</div>

  );
};

export default Header;
