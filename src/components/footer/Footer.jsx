import React from 'react'
import  './Footer.css';
// import React, { useState } from 'react';
//   import axios from 'axios';
export default function Footer() {
  
  
  //  const EmailForm = () => {
  //   const [email, setEmail] = useState('');
  //   const [isSubmitting, setIsSubmitting] = useState(false);
  //   const [error, setError] = useState(null);
  //   const [success, setSuccess] = useState(null);
  
  //   const handleChange = (event) => {
  //     setEmail(event.target.value);
  //   };
  
  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     setIsSubmitting(true);
  //     setError(null);
  //     setSuccess(null);
  
  //     // Basic email validation
  //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     if (!emailPattern.test(email)) {
  //       setError('Please enter a valid email address');
  //       setIsSubmitting(false);
  //       return;
  //     }
  
  //     try {
  //       // Replace with your API endpoint
  //       await axios.post('https://your-api-endpoint.com/submit', { email });
  //       setSuccess('Email submitted successfully!');
  //     } catch (err) {
  //       setError('Submission failed. Please try again.');
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   };
  
  //   return (
  //     <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
  //       <h1>Subscribe</h1>
  //       <form onSubmit={handleSubmit}>
  //         <div>
  //           <label htmlFor="email">Email:</label>
  //           <input
  //             id="email"
  //             type="email"
  //             value={email}
  //             onChange={handleChange}
  //             disabled={isSubmitting}
  //             required
  //             style={{ margin: '10px 0', padding: '8px', width: '100%' }}
  //           />
  //         </div>
  //         {error && <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>}
  //         {success && <div style={{ color: 'green', margin: '10px 0' }}>{success}</div>}
  //         <button type="submit" disabled={isSubmitting} style={{ padding: '10px 20px' }}>
  //           {isSubmitting ? 'Submitting...' : 'Submit'}
  //         </button>
  //       </form>
  //     </div>
  //   );
  // };
  
  // export default EmailForm;
  
  

  
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  
  //   // Validate form data
  //   if (!formData.field1 || !formData.field2) {
  //     setErrorMessage('Please fill in all required fields.');
  //     return;
  //   }
  
  //   // Submit data using your preferred method (e.g., fetch API, API call)
  //   try {
  //     const response = await fetch('/api/submit-data', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(formData)
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('Failed to submit data.');
  //     }
  
  //     // Handle successful submission
  //     console.log('Data submitted successfully!');
  //   } catch (error) {
  //     setErrorMessage('An error occurred while submitting the data.');
  //  }
  // };


  return (
    
    <div className="footer">
    <div><h3>AI Agents Hub</h3>
  <p> Enter To World of Collected List Of 100+ Ai Agents</p>
   </div>
    <div>  
        
<div class="input-group mb-4">
  <input className="Email" type="text" id="Email" placeholder="Enter Your Email" aria-label="Enter Your Email" aria-describedby="basic-addon2"/>
  <span className="button">Subscribe</span>
</div>
    </div>
    </div>
  )
}
