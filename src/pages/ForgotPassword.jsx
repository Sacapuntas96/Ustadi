import { useState, useTransition } from 'react';
import './../Index.css'
import {Link} from "react-router-dom";

export default function ForgotPassword(){
  const [is_verificating, setIsVerificating] = useState(false)
  const [error, setError] = useState(false)
  const [error_message, setErrorMessage] = useState("The provided e-mail format is invalid")
  const [email, setEmail] = useState("")
  const [selected_method, setSelectedMethod] = useState("username")

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
    if((selected_method == "username" && submitted_email.length >= 4) || check_validity(submitted_email)){
      setIsVerificating(true)
    }
    else{
      if(selected_method == 'e-mail'){
        setErrorMessage("The provided e-mail format is invalid")
      }
      else{
        setErrorMessage("The provided username is invalid")
      }
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
                <div className='selection'>
                  <button className={(selected_method === "username" ? 'un' : '') + 'selected'} onClick={() => {setSelectedMethod("username")
                    if(selected_method != "username") setError(false)
                  }}>Username</button>
                  <button className={(selected_method === "e-mail" ? 'un' : '') + 'selected'} onClick={() => {setSelectedMethod("e-mail")
                    if(selected_method != "e-mail") setError(false)
                  }}>E-mail address</button>
                </div>
                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
                {error &&
                  <p className='error'>{error_message}</p>
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