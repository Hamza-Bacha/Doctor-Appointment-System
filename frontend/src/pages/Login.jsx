import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState("sign Up")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }
  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto  items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === "sign Up" ? "Create Account" : "Login"}</p>
        <p>Please {state === "sign Up" ? "sign UP" : "Log in"} to book appointment</p>
        {state === "sign Up" && <div>
          <p className='w-full'>Full Name</p>
          <input className='border rounded border-zinc-300 w-full p-1 mt-1' type="text" onChange={(e) => setName(e.target.value)} value={name} />
        </div>}

        <div>
          <p className='w-full'>Email</p>
          <input className='border rounded border-zinc-300 w-full p-1 mt-1' type="text" onChange={(e) => setEmail(e.target.email)} value={email} />
        </div>
        <div>
          <p className='w-full'>Password</p>
          <input className='border rounded border-zinc-300 w-full p-1 mt-1' type="password" onChange={(e) => setPassword(e.target.password)} value={password} />
        </div>
        <button className='bg-primary text-white w-full rounded-md py-2 text-base'>{state === "sign Up" ? "Create Account" : "Login"}</button>
        {state === "sign Up" ?
          <p>Already have an account?<span onClick={() => setState("Login")} className='text-primary underline cursor-pointer'>Login here</span> </p>
          : <p>"create a new account"<span onClick={() => setState("sign Up")} className='text-primary underline cursor-pointer'>click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login
