import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import HelpPage from './pages/HelpPage';

import SafeWellSubmission from './components/SafeWellSubmission';
import SafeWellSearch from './components/SafeWellSearch';
import SearchResultsPage from './components/SearchResultsPage'; // Import the search results page
import Map from './components/Map';
import LocalResources from './components/LocalResources';
import ThankYouPage from "./components/ThankYou";

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  // Define the pages where the sidebar should be visible
  const sidebarRoutes = [
    "/SafeWellSubmission",
    "/SafeWellSearch",
    "/Map",
    "/LocalResources"
  ];

  // Check if the current path is in the sidebarRoutes array
  const showSidebar = sidebarRoutes.includes(location.pathname);

  return (
    <div className='app-container'>
        <header>
          {/* Navbar should always be visible */}
          <Navbar />
        </header>

        {/* Conditionally render the Sidebar only on specified routes */}
        {showSidebar && <Sidebar />}

        <main>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/faqs' element={<FAQPage />} />
                <Route path='/help' element={<HelpPage />} />

                {/* Sidebar Page Routes */}
                <Route path='/SafeWellSubmission' element={<SafeWellSubmission />} />
                <Route path='/SafeWellSearch' element={<SafeWellSearch />} />
                <Route path='/Map' element={<Map />} />
                <Route path='/LocalResources' element={<LocalResources />} />

                {/* Thank You Page Route */}
                <Route path='/thank-you' element={<ThankYouPage />} />
                
                {/* Search Results Page Route */}
                <Route path='/search-results' element={<SearchResultsPage />} />

                {/* Catch-All Redirect */}
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </main>

        <footer className='bg-body-tertiary text-center text-lg-start'>
            <Footer />
        </footer>
    </div>
  );
}

export default App;
