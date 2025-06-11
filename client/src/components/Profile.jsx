export const Profile = () => {
  return (
    <div className="ml-4 relative">
      <div className="flex items-center">
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
    </div>
  );
};