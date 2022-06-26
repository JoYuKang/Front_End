
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit'
import Detail from './pages/Detail';
import Add from './pages/Add';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './pages/Error';

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
    <BrowserRouter>
    <Routes>
    <Route path="/edit/"  element={<Edit/>}>
      <Route path=':id'/>
    </Route>
    <Route path="/book"  element={<Detail/>}>
      <Route path=':id'/>
    </Route>
    <Route path="/add"  element={<Add/>}/>
    <Route path="/"  element={<Home/>}/>
    <Route path="/signin"  element={<Signin/>}/>
    <Route path='/*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App;
