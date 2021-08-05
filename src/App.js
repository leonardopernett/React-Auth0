import './sass/index.scss'
import LoginButton from './components/LoginButton';
import Profile from './components/Profile';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const {isAuthenticated, isLoading} = useAuth0()

  if(isLoading) return <div className="spinner"></div>
  return (
    <div className="App">

         {
           !isAuthenticated ? (
              <LoginButton /> 
           ): (
             <div className="div">
               <LogoutButton />
               <Profile />
             </div>
           )
         }


    </div>
  );
}

export default App;
