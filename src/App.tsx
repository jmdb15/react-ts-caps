import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0);
  const [inputs, setInputs] = useState<Object>({});
  function getApi() {
    setCount((count)=>count+1)
    console.log("hello ",count)
    
  }
  

  const handleSubmit = (event : React.SyntheticEvent<EventTarget>) => {
    event.preventDefault();

    // axios.post('http://localhost/api/user/save', inputs).then(function (response) {
    //   console.log(response.data);
    // });
    axios.post(
      'https://react-ts.000webhostapp.com/',
      JSON.stringify(inputs),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"//x-www-form-urlencoded
        },
        baseURL:"https://react-ts.000webhostapp.com/"
      }//headers and baseurl for CORS 
    ).then(function (response) {
      console.log(response.data);
    });
  
  }

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
    console.log(inputs)
  }

  return (
    <>
      <div className='bg-slate-400 flex justify-between'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={getApi}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <form method="POST" className='border-solid border-neutral-400 border-2 rounded-lg'>
        <h2 className='mb-4 font-bold text-2xl'>Sign up</h2>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} className='hover:border-neutral-700 active:border-neutral-700 border-solid border-2 rounded-md border-neutral-300 block mb-4 mx-auto'/>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={handleChange} className='hover:border-neutral-700 active:border-neutral-700 border-solid border-2 rounded-md border-neutral-300 block mb-4 mx-auto'/>
        
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" name="password" onChange={handleChange} className='hover:border-neutral-700 active:border-neutral-700 border-solid border-2 rounded-md border-neutral-300 block mb-4 mx-auto' />
        <input type="submit" onClick={handleSubmit}  className='hover:bg-neutral-100 hover:border-neutral-700 cursor-pointer border-solid border-2 rounded-md border-neutral-300 block mb-4 py-2 px-4 mx-auto'/>
      </form>
    </>
  )
}

export default App
