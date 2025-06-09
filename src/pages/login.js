import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login({setUser}) {
  const [name, setName]=useState('');
  const[phone, setPhone]=useState('');
  const navigate=useNavigate();

  const handeLogin=(e)=>{
    e.preventDefault();
    if(name&&phone){
      setUser({name,phone});
      navigate('/home');
    }
    else{
      alert('place enter name & phone no');
    }
  };
 

  return (
    <div id='body'>
      <div className="wrapper">
      <h1>Login</h1>
      <form onSubmit={handeLogin}>
        <div className="input-box">
        <input
         type='text'
         value={name}
         placeholder='Enter your name'
         onChange={(e)=>setName(e.target.value)}
         required
        />
        </div>
        <br></br>
        <div className="input-box">
        <input
        type='tel'
        value={phone}
        placeholder='Enter phone number'
        onChange={(e) => {
                let val = e.target.value;
                if (val.startsWith('+91')) {
                  val = val.slice(3);
                }
                setPhone(val);
              }}
        required
          pattern="[0-9]{10}"
              maxLength="10"
        />
        </div>
        <button type='submit'>Login</button>
      </form>

       </div>
    </div>
  );
};

export default Login;
