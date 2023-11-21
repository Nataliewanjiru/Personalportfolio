import { useState } from "react";


function Contact(){
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage ] = useState('');
     

     const handleFormSubmit = async (e) => {
  e.preventDefault();
  const url = 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send';

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': 'dd91de6d20mshc3665b7aac50046p1b5f16jsncfbcdb2c653f',
      'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com',
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: 'nataliewanjiru19.com',
            },
          ],
          subject: subject,
        },
      ],
      from: {
        email: email,
      },
      content: [
        {
          type: 'text/plain',
          value: message,
        },
      ],
    }),
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const result = await response.json(); // Parse JSON response
      console.log('Email sent successfully:', result);
    } else {
      console.error('Failed to send email:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

    return(
        <div className="parentContactDiv">
        <h2>Contact</h2>
        <p>Feel free to reach out to me through my email</p>
         <div className="contactDiv">
            <div className="divForm">
          <form className="contactForm" onSubmit={handleFormSubmit}>
            <div className="topNameDiv">
            <div className="inputName1">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name"/>
              </div>
                   <div className="inputName2">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                   </div>
                   </div>
                   <div className="inputDiv">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required/>
                   </div>
                   <div className="inputDiv">
                    <label htmlFor="name">Message:</label>
                    <textarea className="message" id="message" name="message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)}/>
                </div>
                    <button type="submit">Send Email</button>
          </form>
          </div>
          <div className="Info">
            <div>
            <h1>Location:</h1>
            <p>Nairobi</p>
            </div>
            <div>
            <h1>Email:</h1>
            <p>nataliewanjiru19@gmail.com</p>
            </div>
            <div>
            <h1>Phone Number:</h1>
            <p>0722540295</p>
            </div>
          </div>
         </div>
        </div>
    )
}
export default Contact;