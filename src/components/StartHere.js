import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const StartHere = () => {
    return (
        <>
            <section className="Promotion">
                <div className="Promotion__inner">
                    <h2 className="Promotion__inner__title">Promotion</h2>
                    <p className="Promotion__inner__text">Get up to $5,000 in rebates for improving your home energy efficiency!</p>
                    <BrowserRouter>
                        <HashLink
                            smooth
                            to="#Contact"
                        >
                            <button className="button">Reach Out!</button>
                        </HashLink>
                    </BrowserRouter>
                </div>
            </section>
        </>
    )
}

export default StartHere