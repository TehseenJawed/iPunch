import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { IoIosArrowForward } from 'react-icons/io'

function Benifits() {
    const frequentlyAsked = [
        {
            question: '1. Free digitizing quote option.',
            answer: 'Customers can get free digitizing quote and we will supply you stitch counts without any charges.'
        },
        {
            question: '2. Enlarge vector file to any size.',
            answer: 'They can be used at a very excessive resolution. For example, if a printer demands for 600 dots per inch picture file, the vector file can additionally be printed at the identical six hundred dots per inch range.'
        },
        {
            question: '3. Why choose Go Digitizing for custom patches?',
            answer: 'Go Digitizing has been the leading international designer and manufacturer of embroidered custom patches since 2010, from large bulk orders to individual orders of custom patches.'
        },
    ]

    return (
        <div className="service-container set-container">
            <div className="service-innercontainer">
                <div className="services-header">
                    Our Embroidery Digitizing & Vector Art Services Features
                </div>
                <div className="benifits-container">

                    <Accordion
                        allowZeroExpanded={true}
                        className="innerbenefits-container">

                        {
                            frequentlyAsked.map((v, i) =>
                                <AccordionItem>
                                    <AccordionItemHeading >
                                        <AccordionItemButton className="topCharacters-heading">
                                            <div className="topCharacter-heading-div">
                                                {v.question}
                                            </div>
                                            <IoIosArrowForward size={30} />
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="topcharacter-desc">
                                            {v.answer}
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        }


                    </Accordion>

                    <div className="innerbenefits-container2">

                        <div className="benefit-activeButton">OUR TEAM</div>
                        <div className="benefit-desc">Our team of art designers along with concept artist are ready to help you guys to put your mind concept on screen. Our team of art designers along with concept artist are ready to help you guys to put your mind concept on screen.</div>
                        <div className="benefit-desc">Digitizing & vector art services a range of activities all centered around making your business more visible when someone uses a digitizing & vector art. If someone is looking for your business it is vital for your business appears prominently in the business industry or it will never deliver the value to your business that today’s economy demands.</div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Benifits
