import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { CSSTransition } from 'react-transition-group'
import HeaderItems from '../subcomponents/HeaderItems';

//images
import Logo from '../images/reelogo.png'
import { ReactComponent as Hamburger } from '../images/bars-solid.svg'
import { ReactComponent as Close } from '../images/times-solid.svg'

const Header = () => {
    const [clicked, setClicked] = useState(true);
    const handleResize = () => {
        if (window.innerWidth > 720) {
            setClicked(true);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return (
        <>
            <nav className="Header">
                <img className="Header__logo" src={Logo} alt="ReeOnline" />
                <div className="Header__menu" onClick={() => setClicked(!clicked)}>
                    {clicked ? <Hamburger /> : <Close />}
                </div>
                <CSSTransition
                    in={clicked}
                    timeout={600}
                    classNames="Nav"
                >
                    <ul className={clicked ? 'Header__list' : 'Header__listMobile'}>
                        {HeaderItems.map((item) => {
                            return (
                                <li key={item.id}>
                                    <BrowserRouter>
                                        <HashLink
                                            smooth
                                            className={clicked ? item.cName : 'Header__listMobile__item'}
                                            onClick={() => setClicked(true)}
                                            to={item.url}
                                        >
                                            {item.label}
                                        </HashLink>
                                    </BrowserRouter>

                                </li>
                            )
                        })}
                    </ul>
                </CSSTransition>
            </nav>
        </>
    )
}

export default Header;