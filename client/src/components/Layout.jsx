import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Profile } from './Profile';
import { Breadcrumb } from './BreadCrumb';

export const Layout = ({ children, title, role, breadcrumbs = [], hideSidebar=false }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      
      {/* Mobile Sidebar */}
      {!hideSidebar && sidebarOpen && (
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

      {/* Desktop Sidebar */}
      {!hideSidebar && (
        <div className="hidden md:block fixed top-0 bottom-0 w-64 bg-white shadow-sm z-10">
          <Sidebar role={role} />
        </div>
      )}

      {/* Main Layout Area */}
      <div
        className={`flex flex-col flex-1 w-full h-screen ${
          hideSidebar ? '' : 'md:ml-64'
        } overflow-hidden`}
      >
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-20 bg-white shadow-sm">
          <div className="px-4 py-3 sm:px-6 flex justify-between items-center">
            {!hideSidebar && (
              <button
                className="md:hidden text-gray-600 text-xl"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? '✕' : '☰'}
              </button>
            )}
            <h1 className="text-xl font-bold text-gray-800">{title}</h1>
            <Profile />
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto mt-16 mb-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {breadcrumbs.length > 0 && <Breadcrumb items={breadcrumbs} />}
            <div className="mt-2">{children}</div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-2 px-4 mt-auto">
          <div className="max-w-7xl mx-auto text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Teaching Practice Management System
          </div>
        </footer>
      </div>
    </div>
  );
};