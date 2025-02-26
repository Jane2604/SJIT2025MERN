
import {useState} from 'react'
function Login() {
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
        <h2>Enter the Details</h2><br /><br />
        <form onClick={handlesubmit}>
          <label>Email:</label>
          <input type="text"name="email" value={data.email} onChange={handleinput} required/><br/><br/>
          <label>Password:</label>
          <input type="text"name="password" value={data.password} onChange={handleinput} required/><br/><br/>
        </form>
        <p>Don't have an account?<a href="/Signup">Signup</a></p>
      </div>
    );

    
  }
  export default Login;