import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/UI/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar name="main" /> <MainPage />
            </>
          }
        />
        <Route
          path="about"
          element={
            <>
              <Navbar name="about" /> <AboutPage />
            </>
          }
        />
        <Route
          path="error"
          element={
            <>
              <Navbar name="404" /> <ErrorPage />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// constructor(props = {}) {
//   super(props);
//   this.state = {
//     searchValue: localStorageService.get(SearchBar.searchValue) || '',
//   };
// }
