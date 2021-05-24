import React, { useState, useEffect } from 'react'
import {CSSTransition} from 'react-transition-group'

// images
import Expertise1 from '../images/expertise1.jpg'
import Expertise3 from '../images/expertise3.jpg'

const Expertise = () => {
    const images = [Expertise1,Expertise3] ;
    const [selectImg,setSelectImage] = useState(0);
    const [anim,setAnim] = useState(false);

    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            if(selectImg === 0){
                setAnim(true);
                setAnim(false);
                setSelectImage(1);
            }else{ 
                setAnim(true);
                setAnim(false);
                setSelectImage(0);
            }
        }, 10000);
        return () => clearInterval(interval);
    },[selectImg])
    
    return (
        <>
            <section id="Expertise" className="Expertise">
                <div className="Expertise__inner">
                    <CSSTransition
                        in={anim}
                        timeout={600}
                        classNames="expertise"
                    >
                        <img className="Expertise__inner__img" src={images[selectImg]} alt="" />
                    </CSSTransition>
                    <div className="Expertise__inner__textArea">
                        <h2 className="Expertise__inner__textArea__title">Expertise</h2>
                        <p className="Expertise__inner__textArea__text">As an Natural Resources Canada (NRCan) Licenced Energy Advisor my goal is to provide you, the homeowner, with energy efficiency options that are tailor made for your home and budget.</p>
                        <p className="Expertise__inner__textArea__text">Home energy efficiency evaluations are conducted using the latest technology and adhering to the Energuide rating system. With an ever increasing global focus on energy efficiency REE can help you choose "your path to efficiency".</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Expertise;