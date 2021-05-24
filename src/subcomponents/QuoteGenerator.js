import React, { useState, useEffect } from 'react'
import Quotes from './Quotes'

//icons
import { ReactComponent as Quote } from '../images/quote.svg'

const QuoteGenerator = () => {
    const [index,setIndex] = useState(0);
    const [current, setCurrent] = useState(Quotes[0]);

    const handleSetClick = (e) => {
        setCurrent(Quotes[e.target.getAttribute("data-quote")])
    }

    useEffect(() => {
        const timerId = setInterval(
            () => setIndex((i) => (i+1) % Object.keys(Quotes).length),
            10000
            );
            return () => clearInterval(timerId)
    },[]);

    useEffect(() => {
        setCurrent(Quotes[index]);
    },[index]);

    return (
        <>
            <div className="Quote">
                <Quote className="Quote__icon" />
                <p className="Quote__content">{current.quote}</p>
                <p className="Quote__client">{current.client}</p>
                <div className="Quote__container">
                    {Object.keys(Quotes).map((item) => (
                        <span
                            className="Quote__container__circle"
                            onClick={(e) => handleSetClick(e)}
                            data-quote={item}
                            key={item}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default QuoteGenerator;