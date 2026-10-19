import { useState } from 'react';
import './../ForgotPassword.css'
import {Link} from "react-router-dom";

export default function ForgotPassword(){
  const [is_verificating, setIsVerificating] = useState(false)
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")

  const check_validity = (provided_email) => {
    if(provided_email.length > 254){
      return false
    }

    if(!provided_email.includes("@") || provided_email.charAt(0) == '.' || provided_email.charAt(provided_email.length - 1) == '.'){  
      return false
    }
    for(let i = 0; i < provided_email.trimEnd().trimStart().length; i++){
      if(provided_email.charAt(i) == '.' && i < provided_email.length - 1){
        if(provided_email.charAt(i + 1) == '.'){
          return false
        }
      }

      if(provided_email.charAt(i) == ' '){
        if(i > 0 && provided_email.charAt(i - 1) != ' '){
          return false
        }
      }

      if(provided_email.charAt(i) == '@'){
        if(provided_email.substring(i + 1, provided_email.length).length <= 2 || !provided_email.substring(i + 1, provided_email.length).includes('.') || provided_email.substring(i + 1, provided_email.length).charAt(0) == '-' || provided_email.substring(i + 1, provided_email.length).charAt(provided_email.substring(i + 1, provided_email.length).length - 1) == '-'){
          return false
        }
      }
    }

    return true
  }

  const proceed = (submitted_email) => {
    if(check_validity(submitted_email)){
      setIsVerificating(true)
    }
    else{
      setError(true)
    }
  }

  return(
    <>
      <div className="container">
        <div className="landscape">
          <Link to="/" className='nav-link'><h1>Ustadi<span>.</span></h1></Link>
        </div>
        <div className="filler">
          <form onSubmit={(event) => event.preventDefault()}>
            {!is_verificating &&
              <>
                <label>Username or e-mail</label>
                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
                {error &&
                  <p className='error'>The provided e-mail format is invalid</p>
                }
                <button type='button' onClick={() => proceed(email)}>Verify Account</button>
              </>
            }
            {is_verificating &&
              <>
                <label>Verification Code</label>
                <p>A verification code has been sent</p>
                <input type="text" />
                <button type='button'>Confirm Code</button>
              </>
            }
            
          </form>
        </div>
      </div>
    </>
  )
}