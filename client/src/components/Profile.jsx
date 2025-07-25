import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/userContext";
import { FiLogOut, FiBell } from "react-icons/fi";
import NotificationBell from "@/components/NotificationBell";
import Button from "@/components/ui/Button/Button";

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
  const hasUnread = user?.notifications?.some((n) => !n.read);

  const getInitials = (fullName) => {
    if (!fullName) return 'U';
    return fullName
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const initials = getInitials(user?.fullName);

  return (
    <div className="flex items-center sm:gap-x-4 lg:gap-x-6">
      {/* Notification Bell */}
      <NotificationBell notifications={user?.notifications || []} />

      {/* Profile Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <div
          className="flex items-center cursor-pointer gap-x-2"
          onClick={() => setOpen(!open)}
        >
          {/* User Initials */}
          <Button
            className="h-8 w-8 p-0 rounded-full bg-blue-600 text-white text-sm font-medium flex items-center justify-center"
            aria-label="Open user menu"
          >
            {initials}
          </Button>

          {/* User Info */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium text-gray-700 leading-tight">
              {user?.fullName}
            </p>
            <p className="text-xs font-medium text-gray-500 leading-tight">
              {user?.role}
            </p>
          </div>
        </div>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            <Button
              onClick={handleSettings}
              variant="ghost"
              className="w-full justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Settings
            </Button>
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="w-full justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
            >
              <FiLogOut className="text-lg" />
              Logout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
