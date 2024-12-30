import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/dashboard/Profile';
import Settings from './components/dashboard/Settings';
import ReminderPage from './components/RemainderPage'; // Import ReminderPage

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      case 'reminders':
        return <ReminderPage />; // Add a case for reminders
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
