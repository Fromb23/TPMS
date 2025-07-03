import { useState, useRef, useEffect } from 'react';
import { FiBell } from 'react-icons/fi';

const NotificationBell = ({ notifications = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const bellRef = useRef(null);

  const hasUnread = notifications.length > 0;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (bellRef.current && !bellRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-6 h-6 flex items-center justify-center mr-4" ref={bellRef}>
      <FiBell
        className="text-gray-600 text-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
      {hasUnread && (
        <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full" />
      )}
      {isOpen && (
        <div className="absolute top-11 right-[10]  w-72 bg-white rounded-md border border-gray-200 shadow-lg z-50">
          <div className="p-3 border-b text-sm font-semibold text-gray-700 border-gray-300 shadow-b-md">Notifications</div>
          <ul className="max-h-60 overflow-y-auto">
            {notifications.length === 0 ? (
              <li className="text-center py-4 text-sm text-gray-500">No new notifications</li>
            ) : (
              notifications.map((note, i) => (
                <li
                  key={i}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b last:border-0"
                >
                  {note}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;