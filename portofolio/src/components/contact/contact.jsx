import {useState} from "react";
import "./contact.scss";


export default function Contact(){

    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    };
    
    return (
        <div>
        </div>
    );

}