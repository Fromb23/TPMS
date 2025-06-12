import { useState, useRef, useEffect } from "react";

export const Profile = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Clear token + redirect
    console.log("Logging out...");
  };

  const handleSettings = () => {
    // Go to settings page
    console.log("Go to settings...");
  };

  return (
    <div className="ml-4 relative" ref={dropdownRef}>
      <div className="flex items-center cursor-pointer" onClick={() => setOpen(!open)}>
        <button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <span className="sr-only">Open user menu</span>
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
            JD
          </div>
        </button>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-700">John Doe</p>
          <p className="text-xs font-medium text-gray-500">Lecturer</p>
        </div>
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
          <button
            onClick={handleSettings}
            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Settings
          </button>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
