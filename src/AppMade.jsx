import React from 'react'
import { CustomHeader } from './shared/components/custom/CustomHeader'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ROUTES from './shared/constants/routes';
import HomePage from './pages/HomePage/Homepage';
// import AboutPage from './pages/AboutPage';
// import ProjectsPage from './pages/ProjectsPage';
// import ContactPage from './pages/ContactPage';
// import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <CustomHeader />
      <main>
        <Routes>
          { <Route path={ROUTES.HOME} element={<HomePage />} />
          /*<Route path={ROUTES.ABOUT_US} element={<AboutPage />} />
          <Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
          <Route path={ROUTES.CONTACT} element={<ContactPage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;