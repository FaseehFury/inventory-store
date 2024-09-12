import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-800 text-white h-svh  flex flex-col">
        <div className="py-4 px-6 text-3xl font-bold border-b border-gray-700">
          <h1>Dashboard</h1>
        </div>
        <nav className="flex flex-col flex-grow p-6">
          <Link
            to="/"
            className="text-lg py-3 hover:bg-gray-700 hover:text-white rounded-lg px-4 mb-2"
          >
            Products
          </Link>
          <Link
            to="reports"
            className="text-lg py-3 hover:bg-gray-700 hover:text-white rounded-lg px-4 mb-2"
          >
            Reports
          </Link>
          <Link
            to="settings"
            className="text-lg py-3 hover:bg-gray-700 hover:text-white rounded-lg px-4"
          >
            Settings
          </Link>
        </nav>
        
      </aside>

      {/* Main Content */}
      <div className="flex-grow p-6 bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
