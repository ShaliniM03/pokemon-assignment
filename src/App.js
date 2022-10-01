import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './app/components/loader';

const LazyHomePage = React.lazy(() => import('./app/pages/home'));

function App() {
  return (
    <div className="App">
        <BrowserRouter  >
    <Routes>
     <Route path='/' element={<React.Suspense fallback={<Loader />}><LazyHomePage/></React.Suspense>} />
     </Routes> 
     </BrowserRouter>
    </div>
  );
}

export default App;
