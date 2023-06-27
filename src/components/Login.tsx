import { useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e : React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        console.log(userCredentials);
      }).catch(error => {
        console.log(error);
    })
  }

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then(response => {
        console.log(response.user.uid);
        navigate('/react-ts-caps/homepage');
        })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
    })
  }

  return <>
    <div>Login</div>
    <form method="post" onSubmit={signIn}>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className='hover:border-neutral-700 active:border-neutral-700 border-solid border-2 rounded-md border-neutral-300 block mb-4 mx-auto' />
      
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className='hover:border-neutral-700 active:border-neutral-700 border-solid border-2 rounded-md border-neutral-300 block mb-4 mx-auto' />
        
      <button
        type='submit'
        className='border-neutral-200 mb-4'>
        Log in
      </button>
    </form>
    <button onClick={() => { signInWithGoogle() }} disabled={authing}>Sign in with Google</button>
  </>
}

export default Login