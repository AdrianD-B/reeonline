import React from 'react'

// icons
import { ReactComponent as Bulb } from '../images/lightbulb-regular.svg'
import { ReactComponent as Ruler } from '../images/ruler.svg'
import { ReactComponent as Rebate } from '../images/money.svg'

const WwdCard = (props) => {
    const HandleText = (props) => {
        const text = props.text
        const newText = text.split('\n').map(str => <p className="Card__content">{str}</p>);
        return newText;
    }

    return (
        <>
            <div className="Card">
                <div className="Card__container">
                    {props.measure && <Ruler className="Card__container__icon" />}
                    {props.consult && <Bulb className="Card__container__icon" />}
                    {props.rebate && <Rebate className="Card__container__icon" />}
                </div>
                <h3 className="Card__title">{props.title}</h3>
                <HandleText text={props.content}/>
            </div>
        </>
    )
}

export default WwdCard;