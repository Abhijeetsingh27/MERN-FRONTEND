
import React from 'react'
import './Register.css';
import { useState } from 'react';
import axios from 'axios';





export default function Register() {
  const[user,setUser]=useState({});
  const handleSubmit= async () =>{
    try{
    const url="https://mern-backend-six-zeta.vercel.app/api/users/register";
    const user=axios.post(url,user);
    setError("Data saved successfully")

    console.log(user);
    }
    catch(error){
      console.log(err);
      setError("something went wrong");
      
    }
  }

  return (
    <div className="form-container"> 
        <h2>Registration Form</h2>

        <p>
            <input type ="text" onChange={(e)=>setUser({...user,firstName:e.target.value})} placeholder='enter your first name'/>
            </p>
            <p>
            <input type ="text" onChange={(e)=>setUser({...user,lastName:e.target.value})} placeholder='enter your last name'/>
            </p>
            <p>
            <input type ="email" onChange={(e)=>setUser({...user,email:e.target.value})} placeholder='enter your email'/>
            </p>
            <p>
            <input type ="password" onChange={(e)=>setUser({...user,password:e.target.value})} placeholder='enter your password'/>
            </p>

            <button onClick={handleSubmit}>Submit</button>

        
      
    </div>
  )
}


// import React from 'react'
// import './Register.css';
// import { useState } from 'react';
// import { useRef } from 'react';



// export default function Register() {
//   const firstName=useRef();
//   const lastName=useRef();
//   const email=useRef();
//   const password=useRef();

//   const handleSubmit=() =>{
//     const user={
//       firstName:firstName.current.value,
//       lastName:lastName.current.value,
//       email:email.current.value,
//       password:password.current.value,
//     }
//     console.log(user);
//   }
//  return (
//     <div className="form-container"> 
//         <h2>Registration Form</h2>

//         <p>
//             <input type ="text"  placeholder='enter your first name' ref={firstName}/>
//             </p>
//             <p>
//             <input type ="text"  placeholder='enter your last name' ref={lastName}/>
//             </p>
//             <p>
//             <input type ="email"  placeholder='enter your email' ref={email}/>
//             </p>
//             <p>
//             <input type ="password"  placeholder='enter your password' ref={password}/>
//             </p>

//             <button onClick={handleSubmit}>Submit</button>

        
      
//     </div>
//   )
// }




