import { getAuth, signOut } from 'firebase/auth'
import { PropsWithChildren } from 'react';

export interface IHomePageProps extends PropsWithChildren { };

const Homepage: React.FC<IHomePageProps> = (props) => {
  const auth = getAuth();

  return <>
    <div>Homepage</div>
    <button onClick={() => signOut(auth)}>Sign out</button>
  </>
}

export default Homepage