import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import { Sidebar } from '@/components/Sidebar';
import { Profile } from '@/components/Profile';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/BreadCrumb';
import { useError } from '@/contexts/ErrorContext';
import ErrorToast from '@/components/ui/Error/ErrorToast';
import Button from '@/components/ui/Button/Button';

export const Layout = ({ children, title, role, breadcrumbs = [], hideSidebar = false }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { error, clearError } = useError();

  useEffect(() => {
    if (error) {
      console.log("Timer started to clear error...");
      const timer = setTimeout(() => {
        clearError();
        console.log("Error cleared");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, clearError]);

  return (
    <div className="flex min-h-screen bg-gray-50">

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
        className={`flex flex-col flex-1 w-full h-screen ${hideSidebar ? '' : 'md:ml-64'
          } overflow-hidden`}
      >
        {/* Header */}
       <header className="fixed top-0 left-0 right-0 z-20 bg-white shadow-sm h-16 mb-2">
          <div className="px-4 py-3 sm:px-6 flex justify-between items-center">
            {!hideSidebar && (
              <Button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden text-xl text-red-600 p-0"
                variant="ghost"
                fullWidth={false}
                aria-label="Toggle sidebar"

              >
                {sidebarOpen ? <FiX /> : <FiMenu />}
              </Button>
            )}
            <h1 className="text-xl font-bold text-gray-800">{title}</h1>
            <Profile />
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto mt-16 mb-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <ErrorToast />
            {breadcrumbs.length > 0 && <Breadcrumb items={breadcrumbs} />}
            <div className="mt-2">{children}</div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};