import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import HelpPage from './pages/HelpPage';

import SafeWellSubmission from './components/SafeWellSubmission';
import SafeWellSearch from './components/SafeWellSearch';
import SearchResultsPage from './components/SearchResultsPage';
import Chat from './components/Chat';
import LocalResources from './components/LocalResources';
import ThankYouPage from "./components/ThankYou";

import GuidesAndChecklists from "./components/resource-pages/GuidesAndChecklists";
import MedicalInfo from "./components/resource-pages/MedicalInfo";
import FraudProtection from "./components/resource-pages/FraudProtection";
import Rebuilding from "./components/resource-pages/Rebuilding";
import ShelterAndAssistance from "./components/resource-pages/ShelterAndAssistance";
import TrainingAndEdu from "./components/resource-pages/TrainingAndEdu";

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import NotFound from './components/NotFound'; // Import NotFound component
import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();
  const [user, setUser] = useState(null);

  const sidebarRoutes = [
    "/SafeWellSubmission",
    "/SafeWellSearch",
    "/Chat",
    "/LocalResources"
  ];
  const showSidebar = sidebarRoutes.includes(location.pathname);
  
  useEffect(() => {
		const checkUser = async () => {
			try {
				const res = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
					credentials: 'include'
				});
	
				const data = await res.json();
				console.log("Fetched user from /user:", data);
	
				if (data?.loggedIn) {
					setUser({ name: data.name, email: data.email });
				} else {
					setUser(null);
				}
			} catch (err) {
				console.error("Error fetching user:", err);
			}
		};
	
		checkUser();
	}, []);

  const handleSignIn = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/google`;
  };

  const handleSignOut = () => {
		fetch(`${process.env.REACT_APP_API_URL}/logout`, {
			credentials: 'include',
			method: 'GET'
		})
			.then(() => {
				setUser(null);
				Navigate('/');
			})
			.catch((err) => {
				console.error("Logout error:", err);
			});
	};

  console.log("Current user state in App:", user);

  return (
    <div className='app-container'>
        <header>
          <Navbar user={user} handleSignIn={handleSignIn} handleSignOut={handleSignOut} />
        </header>

        {/* Ensure ScrollToTop is included to reset scroll position on navigation */}
        <ScrollToTop />

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
                <Route path='/Chat' element={<Chat user={user} />} />
                <Route path='/LocalResources' element={<LocalResources />} />

                {/* Resource Page Routes */}
                <Route path='/GuidesAndChecklists' element={<GuidesAndChecklists />} />
                <Route path='/MedicalInfo' element={<MedicalInfo />} />
                <Route path='/FraudProtection' element={<FraudProtection />} />
                <Route path='/Rebuilding' element={<Rebuilding />} />
                <Route path='/ShelterAndAssistance' element={<ShelterAndAssistance />} />
                <Route path='/TrainingAndEdu' element={<TrainingAndEdu />} />

                {/* Thank You Page Route */}
                <Route path='/thank-you' element={<ThankYouPage />} />
                
                {/* Search Results Page Route */}
                <Route path='/search-results' element={<SearchResultsPage />} />

                {/* Catch-All Route for 404 Page */}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>

        <footer className='bg-body-tertiary text-center text-lg-start'>
            <Footer />
        </footer>
    </div>
  );
}

export default App;
