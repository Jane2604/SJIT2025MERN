
import {useState} from 'react'
function Signup() {
    const[data,setdata]=useState({
      name:"",
      email:"",
      password:"",
      confirmPassword:"",
    })
    const handleinput=(h)=>{
      setdata({...data,[h.target.name]:h.target.value})
    }
    const handlesubmit=(h)=>{
      console.log("form submitted", data)
      alert("form submitted successfully")
    }
    return(
      <div class="container">
        <h2>Enter the Details</h2>
        <form onClick={handlesubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={data.name} onChange={handleinput} required/><br/><br/>
          <label>Email:</label>
          <input type="text"name="email" value={data.email} onChange={handleinput} required/>
        </form>
        <p>Already have an account?<a href="/Login">login</a></p>
      </div>
    );

    
  }
  export default Signup;