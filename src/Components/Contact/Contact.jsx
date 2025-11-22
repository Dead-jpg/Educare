import './Contact.css'
import { useState } from 'react'

import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key"
        , "83dfad27-a159-46c9-979e-1c8ecb3cdd75");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (

    <div className='contact'>
        <div className="contact-col">

            <h3>Send US a message<img src={msg_icon} alt=''/> </h3>
             <p>Feel Free to reach out through contact from or find our Contact
                    information below. Your feedback , questions , and suggestions are
                    important to us as we strive to provide exceptional service to our university
                    community.
                 </p>
                 <ul>
                    <li><img src={mail_icon} alt="" />
                        Contact@Jashith
                    </li>
                    <li><img src={phone_icon} alt="" />
                        +1 112 - 233 - 4455
                    </li>
                    <li><img src={location_icon} alt="" />
                        77 Massachusetts Ave , Cambridge <br/>
                        MA 02139 , United States 
                    </li>
                              
                 </ul>

        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='enter your name' required />
                <label >Phone number</label>
                <input type="text" name='phone' placeholder='Enter your Mobile number' required />
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required ></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>

      
        </div>

    </div>

  )
}

export default Contact