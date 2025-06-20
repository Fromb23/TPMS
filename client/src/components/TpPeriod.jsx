import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { FiClock, FiEdit2, FiTrash2, FiCheckCircle } from 'react-icons/fi';

const TpPeriod = () => {
  // Dummy data - replace with your actual data source
  const [tpPeriod, setTpPeriod] = useState(false);
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTpPeriod(formData);
    setSuccess(true);
    setIsEditing(false);
    setTimeout(() => setSuccess(false), 3000);
  };

  const handleDelete = () => {
    setTpPeriod(null);
    setFormData({ startDate: '', endDate: '' });
  };

  const breadcrumbs = [
    { label: 'Dashboard', href: '/admin-dashboard' },
    { label: 'Teaching Practice Period' }
  ];

  return (
    <Layout title="Teaching Practice Period" role="admin" breadcrumbs={breadcrumbs}>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          {tpPeriod ? 'Teaching Practice Period' : 'Set Teaching Practice Period'}
        </h2>

        {tpPeriod ? (
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-blue-50 p-4 rounded-md">
              <div>
                <p className="font-medium">Period: {new Date(tpPeriod.startDate).toLocaleDateString()} - {new Date(tpPeriod.endDate).toLocaleDateString()}</p>
                <p className="text-sm text-gray-600 mt-1 flex items-center">
                  <FiClock className="mr-1" /> Active period
                </p>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => { setIsEditing(true); setFormData(tpPeriod); }}
                  className="p-2 text-blue-600 hover:bg-blue-100 rounded-full"
                >
                  <FiEdit2 />
                </button>
                <button 
                  onClick={handleDelete}
                  className="p-2 text-red-600 hover:bg-red-100 rounded-full"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>

            {isEditing && (
              <form onSubmit={handleSubmit} className="mt-4 space-y-4 border-t pt-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="flex space-x-2">
                  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    Update
                  </button>
                  <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition">
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Save Period
            </button>
          </form>
        )}

        {success && (
          <div className="mt-4 text-green-600 text-sm flex items-center">
            <FiCheckCircle className="mr-1" />
            {tpPeriod ? 'Period updated successfully!' : 'Period saved successfully!'}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default TpPeriod;