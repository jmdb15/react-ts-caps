import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { initializeApp } from 'firebase/app'
import { config } from './config/config'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Homepage from './components/Homepage'
import Login from './components/Login'
import AuthRoute from './components/AuthRoute'
import Signup from './components/Signup'

initializeApp(config.firebaseConfig)

export interface IAppProps{}

const App : React.FC<IAppProps> = () => {
  const [count, setCount] = useState(0);

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
        <button onClick={() => setCount(count => count += 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

        <BrowserRouter>
          <ul className="my-6 flex justify-around w-full">
                <li><Link to="react-ts-caps/homepage">Homepage</Link></li>
                <li><Link to="react-ts-caps/login">Login</Link></li>
                <li><Link to="react-ts-caps/signup">Signup</Link></li>
          </ul>
          <Routes>
          <Route path="react-ts-caps/homepage" element={
            <AuthRoute>
              <Homepage />
            </AuthRoute>
          } />
            <Route path="react-ts-caps/login" element={<Login/>} />
            <Route index path="react-ts-caps/signup" element={<Signup/>} />
          </Routes>
        </BrowserRouter>

      
    </>
  )
}

export default App
