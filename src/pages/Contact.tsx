import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage('');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        'service_1kkft2o', // Replace with your EmailJS service ID
        'template_2ul8rwo', // Replace with your EmailJS template ID
        templateParams,
        '8OP27AOiAMAd2_Ovg' // Replace with your EmailJS public key
      );

      setStatusMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending error:', error);
      setStatusMessage('Failed to send the message. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full pt-24 md:pt-32 pb-12 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-start">
        {/* Left column - Image with hover animations */}
        <div className="w-full md:w-1/3 h-full pb-6 md:pb-0 overflow-hidden rounded-md group">
          <img 
            src="/contactimg.png" 
            alt="Modern balcony with plants and city view" 
            className=" h-[25rem] w-full md:h-full object-cover rounded-md transition-all duration-500 ease-in-out 
                      group-hover:scale-110 group-hover:brightness-110 group-hover:shadow-lg"
          />
        </div>

        {/* Middle column - CONTACT heading and appointments */}
        <div className="w-full h-full md:w-1/3 md:px-8 md:pt-0 text-center align-middle md:text-start">
          <h1 className="text-4xl font-serif font-light mb-6">CONTACT</h1>
          <div className="lg:mt-64 md:mt-46">
            <h2 className="text-xl mb-4">For appointments</h2>
            <div className="space-y-2 mt-1  ">
              <p>Monday - Saturday</p>
              <p>10:00 am - 7:00 pm</p>
              <p className='mt-1.5'>+918281290634</p>
              <p>+917012996617</p>
              <p className='mt-1.5'>cncpala@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right column - Message and enquiry form */}
        <div className="w-full  md:w-1/3 mt-8 md:mt-0 md:pt-0">
          <p className="text-base leading-relaxed ml-2.5 md:ml-0 mb-10 font-serif">
            Have a vision for your space? Connect with ECHOES, where innovation meets timeless
            design to create interiors that truly resonate. Let's bring your ideas to life with creativity,
            expertise, and a commitment to excellence.
          </p>

          <div className='lg:mt-48'>
            <h2 className="text-xl mb-4">For enquiries</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full py-2 border-b border-gray-300 focus:border-gray-800 outline-none transition-colors"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-2 border-b border-gray-300 focus:border-gray-800 outline-none transition-colors"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full py-2 border-b border-gray-300 focus:border-gray-800 outline-none transition-colors resize-y min-h-20"
                  required
                />
              </div>
              <button 
                type="submit" 
                className={`flex items-center text-base font-medium mt-6 transition-transform cursor-pointer ${
                  isSending ? 'opacity-50 cursor-not-allowed' : 'hover:translate-x-1'
                }`}
                disabled={isSending}
              >
                {isSending ? 'Sending...' : <><span className="mr-2 text-xl">→</span> Submit enquiry</>}
              </button>
            </form>

            {/* Status Message */}
            {statusMessage && (
              <p className="mt-4 text-sm text-gray-600">{statusMessage}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
