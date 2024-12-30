import React from 'react';
import { Activity, Home, LayoutDashboard, Bell } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar = ({ onNavigate, currentPage }: NavbarProps) => {
  return (
    <nav className="bg-gradient-to-r from-blue-300 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and App Name */}
          <div
            className="flex items-center cursor-pointer space-x-2"
            onClick={() => onNavigate('home')}
          >
             <img className="w-27 h-24 m-0 mx-auto bg-grey" src=".\assests\biwu3fnv.euw-removebg-preview.png" alt="" width="384" height="512"></img>
     
            {/* <Activity className="h-8 w-8 text-white" />
            <span className="text-2xl font-semibold text-white">HealthMonitor</span> */}
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <NavItem
              icon={<Home size={20} />}
              text="Home"
              active={currentPage === 'home'}
              onClick={() => onNavigate('home')}
            />
            <NavItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
              active={currentPage === 'dashboard'}
              onClick={() => onNavigate('dashboard')}
            />
            <NavItem
              icon={<Bell size={20} />}
              text="reminders"
              active={currentPage === 'reminders'}
              onClick={() => onNavigate('reminders')}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({
  icon,
  text,
  active = false,
  onClick
}: {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-md text-lg font-medium transition duration-200 ease-in-out ${
        active
          ? 'text-white bg-blue-700 shadow-lg'
          : 'text-white hover:text-blue-200 hover:bg-blue-600'
      }`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default Navbar;
