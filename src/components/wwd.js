import React from 'react'
import WwdCard from '../subcomponents/wwdCard'

const Wwd = () => {

    return(
        <>
            <section id="Wwd" className="WhatWeDo">
                <div className="WhatWeDo__inner">
                    <h2 className="WhatWeDo__inner__title">What We Do</h2>
                    <div className="WhatWeDo__inner__list">
                        <WwdCard
                            measure={true}
                            title="Measurements"
                            content={`•	Technical specifications of your home\n
                            •	Design efficiency of your home’s mechanical systems\n
                            •	Detailed measurements and energy efficiency assessments\n
                            •	Blower door depressurization testing for air leakage identification\n
                            `}
                        />
                        <WwdCard
                            consult={true}
                            title="Consulting"
                            content={`•	Full EnerGuide rating service\n
                            •	Enbridge rebate qualification\n
                            •	Energy efficiency upgrade consultation\n
                            •	Customized detailed reporting\n
                            `}
                        />
                        <WwdCard
                            rebate={true}
                            title="Rebates"
                            content={`•	Having an initial assessment conducted by a licensed energy advisor\n
                            •	Completing a minimum of two qualifying upgrades (3 if upgrading a furnace)\n
                            •	Retaining all itemized receipts for your upgrades (must show breakdown including tax)\n
                            •	Having a post upgrade assessment conducted by a licensed energy advisor\n
                            `}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Wwd;