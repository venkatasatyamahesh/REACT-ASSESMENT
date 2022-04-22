import React from 'react';
import Postview from './Postview';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import LandingPage from './Landing';

const App = () => {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path ='/Postview' element={<Postview/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
