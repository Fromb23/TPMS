import React from 'react';
import { Sidebar } from './Sidebar';
import { Profile } from './Profile';
import { Breadcrumb } from './Breadcrumb';

export const Layout = ({ children, title, role, breadcrumbs = [] }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-sm">
        <div className="md:ml-64">
          <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold text-gray-800">{title}</h1>
              <Profile />
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar role={role} />

      {/* Main Content */}
      <main className="flex-1 md:ml-64">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          {breadcrumbs.length > 0 && <Breadcrumb items={breadcrumbs} />}
          <div className="mt-2">
            {children}
          </div>
        </div>
      </main>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 md:ml-64">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Teaching Practice Management System
          </p>
        </div>
      </footer>
    </div>
  );
};