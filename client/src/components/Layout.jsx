import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Profile } from './Profile';
import { Breadcrumb } from './Breadcrumb';

export const Layout = ({ children, title, role, breadcrumbs = [] }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Overlay Sidebar for small screens */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 flex lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="w-64 bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar role={role} setSidebarOpen={setSidebarOpen} />
          </div>
          <div className="flex-1 bg-black opacity-25" />
        </div>
      )}

      {/* Static Sidebar for large screens */}
      <div className="hidden md:block fixed top-0 bottom-0 w-64 bg-white shadow-sm z-10">
        <Sidebar role={role} />
      </div>

      {/* Page Content Wrapper */}
      <div className="flex flex-col flex-1 min-h-screen w-full md:ml-64">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-20 bg-white shadow-sm">
          <div className="px-4 py-3 sm:px-6 flex justify-between items-center">
            {/* Hamburger on small screens */}
            <button
              className="md:hidden text-gray-600 text-xl"
              onClick={() => setSidebarOpen(!sidebarOpen)}
    
            >
              {sidebarOpen ? '✕' : '☰'}
            </button>

            <h1 className="text-xl font-bold text-gray-800">{title}</h1>
            <Profile />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {breadcrumbs.length > 0 && <Breadcrumb items={breadcrumbs} />}
            <div className="mt-2">{children}</div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-2 px-4 md:ml-0">
          <div className="max-w-7xl mx-auto text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Teaching Practice Management System
          </div>
        </footer>
      </div>
    </div>
  );
};
