import React from 'react'

//images
import Energy from '../images/energy.jpg'

//components
import QuoteGenerator from '../subcomponents/QuoteGenerator'

const About = () => {
    return (
        <>
            <section id="About" className="About">
                <div className="About__inner">\
                    <div className="About__inner__textArea">
                        <h2 className="About__inner__textArea__title">About</h2>
                        <p className="About__inner__textArea__text">Home Energy Assessments and Global Net Zero Objectives</p>
                        <p className="About__inner__textArea__text">Globally, as we move toward green energy to meet evermore enhanced environmentally conscious objectives in transportation, power generation and reduced pollution we seek net zero solutions. </p>
                        <p className="About__inner__textArea__text">A home energy assessment can help you understand how your home uses and loses energy while also identifying opportunities for greener energy saving solutions to make your home more comfortable and energy efficient. </p>
                        <p className="About__inner__textArea__text">A professional home energy assessment should be your first step before making energy-saving home improvements, as well as before adding a renewable energy system to your home. In addition to a room-by-room examination of the home, a Licensed Energy Advisor will employ equipment such as a blower door to identify the sources of air leakage around the envelope of your home.</p>
                    </div>
                    <img className="About__inner__img" src={Energy} alt="" />
                </div>
                <div className="About__testimonials">
                    <QuoteGenerator/>
                </div>
            </section>
        </>
    )
}

export default About