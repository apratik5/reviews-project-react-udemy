import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import data from './data.js';
import { useState } from 'react';
import Review from './Review.jsx';


const App = () => {
  const [index, setIndex] = useState(0);
  const { image, text, name, job } = data[index];


  const nextPerson = () => {
    setIndex(currentIndex => {
      const newIndex = currentIndex + 1;
      return newIndex % data.length;
    })
  }

  const prevPerson = () => {
    setIndex(currentIndex => {
      const newIndex = currentIndex - 1 + data.length;
      return newIndex % data.length;
    })
  }

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * data.length);
    if (randomIndex === index)
      randomIndex = index + 1;
    setIndex(randomIndex % data.length);
  }
  return <main>
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className="btn-container">
        <button type='button' className='prev-btn' onClick={prevPerson}><FaChevronLeft /></button>
        <button type='button' className='next-btn' onClick={nextPerson}><FaChevronRight /></button>
      </div>
      <button className='btn btn-hipster' onClick={randomPerson}>Surprise Me</button>
    </article>
  </main>
};
export default App;
