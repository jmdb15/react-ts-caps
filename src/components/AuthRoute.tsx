import React, {useState, useEffect, PropsWithChildren} from 'react'
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth/cordova';

export interface IAuthRouteProps extends PropsWithChildren{};

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = props => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   AuthCheck();
  //   return () => AuthCheck();
  // }, [auth]);

  // const AuthCheck = onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     setLoading(false);
  //   } else {
  //     console.log("unauthorized");
  //     navigate('/login');
  //   }
  // });
  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        console.log("unauthorized");
        navigate('/react-ts-caps/login');
      }
    });
    return () => AuthCheck();
  }, [auth]);

  

  if (loading) return <p>Loading...</p>
  
  return <>{children}</>
}

export default AuthRoute