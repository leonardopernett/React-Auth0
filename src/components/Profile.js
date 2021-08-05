import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import JsonPretty from 'react-json-pretty'
import 'react-json-pretty/themes/monikai.css';


export default function Profile() {
  const {user, isAuthenticated, isLoading} = useAuth0()

  if(isLoading) return <p>Loading....</p>


  return (
      <>
        {
          isAuthenticated  && (
            <>
              <img src={user.picture} alt={user.name} />
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <JsonPretty data={JSON.stringify(user)}  />
             
            </>
          ) 
        }
      </>
  )
}
