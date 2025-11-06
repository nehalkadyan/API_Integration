import React, {useState} from 'react'
import "./signup.css"
import axios from 'axios'

const SignIn = () => {

    // state variables

    const [email, setEmail] = useState("")
    console.log("email", email);
    
    const [password, setPassword] = useState("")

    console.log("password", password);

    // function to signup user

    const signInUser = async (e) => {
        e.preventDefault();

        try{
         const response =  await axios.post("http://localhost:8000/api/auth/login",
            // req.body 
            {email, password},
            {withCredentials: true}
         )

         console.log(response.data)

        }catch(err){
            console.log("error while signing in!", err);
        }
    }

  return (
    <div>
      <h1>Sign In Page</h1>
      {/* registration form */}

    <form onSubmit={signInUser} className='signup_form'>
        <br />
        <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />

        <button type='submit'> Sign in </button>
    </form>
    </div>
  )
}

export default SignIn
