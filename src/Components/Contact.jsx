import React from "react"
import { AiOutlineArrowRight } from "react-icons/ai";
import "./Contact.css"



const Contact = () => {
   

    return (
        <div className="contact-section">
            <form className="answer-form">
               <h2 className="answer-item">Before you go, please leave your contact details so we can get back to you...</h2>
               <input className="answer-item answer-input" type="text" placeholder="*Your Name"/>
               <input className="answer-item answer-input" type="text" placeholder="*Your Email" /> 
               <span className="answer-item"><input  type="checkbox" />* [Sample legal text] The personal data you have provided will
                be processed by XXXXX for purposes of providing you the service.The legal basis of the processing is XXXXX.
                Your data will not be transferred nor assigned to third parties.You can exercise your right to access, rectify and
                delete your data, as well as the other rights granted by law by sending an email to XXXXX. For further information,
                please check our privacy policy XXXXX.</span>
                <button className="answer-item answer-button">Send Your Answer <AiOutlineArrowRight/></button>
            </form>
        </div>
    )
} 

export default Contact