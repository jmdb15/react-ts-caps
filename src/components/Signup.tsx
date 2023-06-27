import React from 'react'
import { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

const Signup = () => {
  const auth = getAuth();
  const [inputs, setInputs] = useState<Object>({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event : React.SyntheticEvent<EventTarget>) => {
    event.preventDefault();

    // axios.post('http://localhost/api/user/save', inputs).then(function (response) {
    //   console.log(response.data);
    // });

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      }).catch(error => {
        console.log(error);
    })

    // axios.post(
    //   'https://react-ts.000webhostapp.com/',
    //   JSON.stringify(inputs),
    //   {
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded"//x-www-form-urlencoded
    //     },
    //     baseURL:"https://react-ts.000webhostapp.com/"
    //   }//headers and baseurl for CORS 
    // ).then(function (response) {
    //   console.log(response.data);
    // });
    
  }

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
    console.log(inputs)
  }

  return (
    <form method="POST" onSubmit={handleSubmit} className='border-solid border-neutral-400 border-2 rounded-lg'>
        <h2 className='mb-4 font-bold text-2xl'>Sign up</h2>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} className='hover:border-neutral-700 active:border-neutral-700 border-solid border-2 rounded-md border-neutral-300 block mb-4 mx-auto'/>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={(e)=> setEmail(e.target.value)} className='hover:border-neutral-700 active:border-neutral-700 border-solid border-2 rounded-md border-neutral-300 block mb-4 mx-auto'/>
        
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" name="password" onChange={(e)=> setPassword(e.target.value)} className='hover:border-neutral-700 active:border-neutral-700 border-solid border-2 rounded-md border-neutral-300 block mb-4 mx-auto' />
        <input type="submit" className='hover:bg-neutral-100 hover:border-neutral-700 cursor-pointer border-solid border-2 rounded-md border-neutral-300 block mb-4 py-2 px-4 mx-auto'/>
      </form>
  )
}

export default Signup