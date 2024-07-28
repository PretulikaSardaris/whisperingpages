import React, { useEffect, useRef, useState } from 'react';
import fitText from 'fit-text';

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
const quoteRef = useRef(null);

useEffect(() => {
  const intervalId = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  }, 5000);

  return () => clearInterval(intervalId);
}, []);

useEffect(()=> {
    const resizeText = () => {
        const container = quoteRef.current;
        let fontSize = 24; // Start with a large font size
        container.style.fontSize = `${fontSize}px`;
  
        while (container.scrollHeight > container.clientHeight && fontSize > 10) {
          fontSize -= 1;
          container.style.fontSize = `${fontSize}px`;
        }
      };
  
      if (quoteRef.current) {
        resizeText();
      }
    }, [currentQuote]);
    

  return (
    <div className='w-full   p-2  text-gray-900 flex flex-col justify-center items-center fixed font-playwrite' >
      <p className='w-full m-2 text-red-950 font-semibold text-md md:text-xl lg:text-2xl'>{currentQuote.quote}</p>
      <p className='text-orange-900'>– {currentQuote.author}</p>
    </div>

  );
};

export default Header;
