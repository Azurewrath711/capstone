import { useState } from "react";
import ReactDOM from 'react-dom/client';

function ContUs() {   
    const [inputs, setInputs]  = useState({});

    const handleChange = (event) => {
    
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    
    <form onSubmit={handleSubmit} action="https://formsubmit.co/rjpalang@gmail.com" method="POST">
        <h1>Contact Us</h1>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Your Email:
        <input 
          type="text" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
export default ContUs;