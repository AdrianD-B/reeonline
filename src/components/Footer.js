import React,{useEffect} from 'react'

//icons
import {ReactComponent as LinkedIn} from '../images/linkedin.svg'

const Footer = () => {
    const handleDate = () => {
        let now = new Date();
        const days =  ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

        let today = days[ now.getDay() ];
        document.getElementById(today).style.color = '#0ed145';
    }

    useEffect(() => {
        handleDate()
    },[])

    return (
        <>
            <footer className="Footer">
                <div className="Footer__left">
                    <h3 className="Footer__left__content">ReeOnline.ca</h3>
                    <p className="Footer__left__content">South Central Ontario</p>
                    <a className="Footer__left__content" href="tel:4169488370">(416) 948-8370</a>
                </div>
                <div className="Footer__middle">
                    <h3 className="Footer__middle__content">Hours</h3>
                    <p id="monday" className="Footer__middle__content">Mon 09:00 am – 05:00 pm</p>
                    <p id="tuesday" className="Footer__middle__content">Tue 09:00 am – 05:00 pm</p>
                    <p id="wednesday" className="Footer__middle__content">Wed 09:00 am – 05:00 pm</p>
                    <p id="thursday" className="Footer__middle__content">Thu 09:00 am – 05:00 pm</p>
                    <p id="friday" className="Footer__middle__content">Fri 09:00 am – 05:00 pm</p>
                    <p id="saturday" className="Footer__middle__content">Sat Closed</p>
                    <p id="sunday" className="Footer__middle__content">Sun Closed</p>
                </div>
                <div className="Footer__right">
                    <a href="https://www.linkedin.com/company/residence-energy-efficiency/"><LinkedIn className="Footer__right__icon"/></a>
                    <a href="https://www.freepik.com/photos/technology" className="Footer__right__link">
                        Technology photo created by kjpargeter - www.freepik.com
                    </a>
                    <a href='https://www.freepik.com/vectors/infographic'>
                        Infographic vector created by vectorjuice - www.freepik.com
                    </a>
                    <p className="Footer__right__content">Copyright © 2021 ReeOnline.ca - All Rights Reserved.</p>
                </div>
            </footer>

        </>
    )
}

export default Footer