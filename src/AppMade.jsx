import React from 'react'
import { CustomHeader } from './shared/components/custom/CustomHeader'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ROUTES from './shared/constants/routes';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <CustomHeader />
      <main>
        <Routes>
          { <Route path={ROUTES.HOME} element={<Home/>} />
          /*<Route path={ROUTES.ABOUT_US} element={<About/>} />
          <Route path={ROUTES.PROJECTS} element={<Projects />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;