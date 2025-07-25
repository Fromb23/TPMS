import React from 'react';
import { FiSettings } from "react-icons/fi";
import { Profile } from '@/components/Profile';
import Button from '@/components/ui/Button/Button';


export const Header = ({ title, toggleSidebar }) => {
  return (
    <header className="bg-white shadow mb-6">
      <div className="max-w-7xl mx-auto px-4 pt-3 pb-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start">
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <div className="flex items-center gap-x-4">
            <Button variant="ghost" className="flex items-center gap-2 text-sm">
              <FiSettings className="text-base" />
              Settings
            </Button>
            <Profile />
          </div>
        </div>
      </div>
    </header>
  );
};