/* eslint-disable no-unused-vars */
import React from 'react'
import './Contact.css'
function Contact() {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ee71f692-a33e-4f7a-b0dd-1eca95142099");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
        console.log('success',data);
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
            <h3>For any Query <img src="src/assets/msg-icon.png" alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback,questions,and suggestions are important to us as we strive to provide exceptional service to our institute community</p>
            <ul>
                <li><img src="src/assets/mail-icon.png" alt="" />contactus@gmail.com</li>
                <li> <img src="src/assets/phone-icon.png" alt="" />2330344034</li>
                <li><img src="src/assets/location-icon.png" alt="" />LDRP Institute of Technology & Research,<br />
                Near KH-5,
                Sector-15,
                Gandhinagar - 382015.</li>
            </ul>
        </div>
        <div className="contact-col">

            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name ' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                <label>Enter your Query here</label>
                <textarea name="query" rows='10' placeholder='Enter your Query' required></textarea>
                <button type='submit ' className='btn dark-btn'>Submit</button>

            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
