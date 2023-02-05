import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { id, changePlay } from "../Video/VideoSlice";
import "./Form.css"
import Contact from "../../Components/Contact";


 const FormView = () => {
    const dispatch = useDispatch()
    const [btnId,setBtnId] = useState(0)
    const array1 = ['Download "campaign structure guide "','Signup for free webniar','Download "campaign structure guide "']

    const handleClick1=(e) =>{
        e.preventDefault()
    }

    return (
        <div className="button-section">
            {btnId !==-1 ? 
                 <form className="button-form">
                 <div className="button-wrapper">
                     <button className={btnId===1? "left-button left-button-active":"left-button"} onClick={(e) =>{dispatch(id("video2"));handleClick1(e);dispatch(changePlay());setBtnId(1)}}><span className="button-option">A</span>Campaign Structure</button>
                     <button className={btnId===2? "left-button left-button-active":"left-button"} onClick={(e) =>{dispatch(id("video3"));handleClick1(e);dispatch(changePlay());setBtnId(2)}}><span className="button-option">B</span>Learn Facebook basics</button>
                     <button className={btnId===3? "left-button left-button-active":"left-button"} onClick={(e) =>{dispatch(id("video2"));handleClick1(e);dispatch(changePlay());setBtnId(3)}}><span className="button-option">C</span>3rd choice </button>
                     {btnId!==0 && <button className="option-button" onClick={() => setBtnId(-1)}>{array1[btnId-1]}</button>}
                 </div>
             </form> : 
             <Contact/>
            }
           
        </div>
    )
} 

export default FormView