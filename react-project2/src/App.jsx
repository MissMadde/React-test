import { useState } from 'react'
import './App.css'


function UserCard({ user }) {
  return (
    <div className='user-card'>
      <h2>{user.name}</h2>
      <p>Ålder: {user.age} år</p>
      <p>Intresse: {user.hobby}</p>
    </div>
  );
}



function App() {
  
  const users = [
    { id: 1, name: 'Anna', age: 28, hobby: 'Fotografera' },
    { id: 2, name: 'Pelle', age: 34, hobby: 'Klättring' },
    { id: 3, name: 'Karin', age: 41, hobby: 'Friluftsliv' },
    { id: 4, name: 'Johan', age: 22, hobby: 'Gaming' },
    { id: 5, name: 'Lena', age: 55, hobby: 'Hundar' }
  ];

  return (
    <div>
      <h1>Användarlista</h1>
      <div>
        {/* map funktion */}
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}


export default App;
