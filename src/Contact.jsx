import React, {useState} from 'react'
import './App.css'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmitClick = () => {
        setName('');
        setEmail('');
        setMessage('');
    }

  return (
    <div class='contactbox'>
      <div className="contact-section py-5 text-center container">
      <h1 className="fw-bold textbox mb-4">Contact Us</h1>
      <p className="custom-color text-center mb-3 py-2">
        We would love to hear from you! Whether you have questions, feedback, or just want to say hello, 
        feel free to reach out.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-8 my-2">
          <form>
            <div className="mb-4">
              <input 
                type="text" 
                className="form-control shadow contactform" 
                placeholder="Your Name" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input 
                type="email" 
                className="form-control shadow contactform" 
                placeholder="Your Email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <textarea 
                className="form-control shadow contactform" 
                rows="5" 
                placeholder="Your Message" 
                required 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn button-search" onClick={handleSubmitClick}>
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="contact-info mt-5">  
        <h5 className="textbox">Reach Us At:</h5>  
        <p className="textbox">  
          <strong>Email:</strong> support@webthemer.com<br />  
          <strong>Phone:</strong> +91 9876543210<br />  
          <strong>Address:</strong> 123 Web Street, Design City, India  
        </p>  
        <p className="textbox morecontact mt-5 py-2 px-2">  
        We are always excited to hear from you! Whether you have questions, feedback, or simply want to connect with us, we encourage you to reach out without hesitation. At WEBthemer, your experience matters deeply to us, and we are committed to supporting you every step of the way. Our dedicated support team is ready to assist you with anything you need, whether it's navigating our platform, optimizing your designs, troubleshooting technical issues, or even brainstorming creative ideas for your website themes.

We believe that every question is important and every piece of feedback is valuable. That’s why we pride ourselves on providing timely, thoughtful, and personalized responses to ensure that your journey with WEBthemer remains seamless and enjoyable. Our goal is to empower you to unlock the full potential of your creativity and help you bring your ideas to life effortlessly.

If you are a business seeking custom design solutions or a creative professional looking to collaborate on innovative projects, we would love to hear your ideas and explore ways to work together. At WEBthemer, we thrive on creative partnerships and are always eager to collaborate with like-minded individuals and organizations who share our passion for great design and user experiences.

You can connect with us via email for detailed inquiries or reach out by phone for immediate assistance. Our support team is prompt and attentive, ensuring that your concerns are addressed without delay. For those who appreciate a more personal approach, we warmly invite you to visit us at our Design City office. There, you can meet our passionate team members, who are always excited to engage in meaningful conversations and provide hands-on support.

Our office space is not just a place of work but a creative hub where ideas are nurtured and innovation takes center stage. Whether you are seeking inspiration, technical assistance, or simply a friendly chat about web design trends, you will find an open and welcoming environment that fosters creativity and collaboration.

At WEBthemer, we firmly believe that fostering meaningful connections is the key to building a vibrant community where creativity thrives. We are not just about providing tools and solutions; we are about building relationships and empowering individuals and businesses to create digital experiences that leave a lasting impression.

Your vision is our inspiration. Whether you are a seasoned developer aiming for perfection or a creative enthusiast exploring new design possibilities, we are here to support you in every way possible. Together, let’s push the boundaries of creativity, craft beautiful user-centric websites, and redefine what’s possible in the digital landscape. We look forward to hearing from you and being part of your creative journey. </p>  
      </div>  
      </div>
      </div>
  )
}

export default Contact;
