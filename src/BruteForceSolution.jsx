import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import data from './data.js';
import { useState } from 'react';
import Review from './Review.jsx';


const App = () => {
    const [index, setIndex] = useState(0);
    const { image, text, name, job } = data[index];

    const checkIndex = number => {
        if (number > data.length - 1)
            return 0;
        if (number < 0)
            return data.length - 1;
        return number;
    }

    const nextPerson = () => {
        setIndex(currentIndex => {
            const newIndex = currentIndex + 1;
            return checkIndex(newIndex);
        })
    }

    const prevPerson = () => {
        setIndex(currentIndex => {
            const newIndex = currentIndex - 1;
            return checkIndex(newIndex);
        })
    }

    const randomPerson = () => {
        let randomIndex = Math.floor(Math.random() * data.length);
        if (randomIndex === index)
            randomIndex = index + 1;
        setIndex(checkIndex(randomIndex));
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
