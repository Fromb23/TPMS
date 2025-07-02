import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";
import { FiLogOut } from "react-icons/fi";

export const Profile = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

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
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);

    navigate("/");
    window.location.reload();
  };

  const handleSettings = () => {
    // Go to settings page
    console.log("Go to settings...");
  };

  const getInitials = (fullName) => {
    if (!fullName) return '';
    return fullName
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const initials = getInitials(user?.fullName);

  return (
    <div className="ml-4 relative" ref={dropdownRef}>
      <div className="flex items-center cursor-pointer" onClick={() => setOpen(!open)}>
        <button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <span className="sr-only">Open user menu</span>
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
            {initials || "U"}
          </div>
        </button>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-700">{user?.fullName}</p>
          <p className="text-xs font-medium text-gray-500">{user?.role}</p>
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
            className="w-full flex items-center gap-2 text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <FiLogOut className="text-lg" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
