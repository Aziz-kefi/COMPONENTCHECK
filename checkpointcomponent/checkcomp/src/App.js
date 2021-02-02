import './App.css';
import React from 'react';
import { ProfilPhoto } from './Component/Profil/ProfilePhoto/ProfilPhoto';
import FullName from './Component/Profil/Fullname/FullName';
import Address from './Component/Profil/Adresse/Adress';
function App() {
  return (
    <div className="App">
      <ProfilPhoto />
      <div className="info">
        <FullName />
        <Address />
      </div>
    </div>
  );
}

export default App;
