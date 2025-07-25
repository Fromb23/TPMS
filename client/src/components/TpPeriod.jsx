import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { useMutation, useQuery } from '@tanstack/react-query';
import apiClient from '@/api/api';
import { Breadcrumb } from '@/components/BreadCrumb';
import { FiClock, FiEdit2, FiTrash2, FiCheckCircle } from 'react-icons/fi';
import { useUser } from '@/contexts/userContext';
import LoadingComponent from '@/components/LoadingComponent';
import Button from '@/components/ui/Button/Button';
import Form from '@/components/ui/Form/Form';
import Input from '@/components/ui/Input/Input';
import ErrorToast from '@/components/ui/Error/ErrorToast';
import { useError } from '@/contexts/ErrorContext';

const formatDate = (dateString) => dateString ? new Date(dateString).toISOString().split('T')[0] : '';
const displayDate = (dateString) => dateString ? new Date(dateString).toLocaleDateString() : '';

const TpPeriod = () => {
  const { reportError } = useError();
  const { token } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ startDate: '', endDate: '' });

  const { data: tpPeriodData, isLoading, error, isError, refetch } = useQuery({
    queryKey: ['tpPeriod'],
    queryFn: async () => {
      const response = await apiClient.get('/tp-period', {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    },
    enabled: !!token,
    retry: false,
    staleTime: 1000 * 60 * 5,
    onSuccess: (data) => {
      const period = data?.[0] || null;
      setFormData({
        startDate: formatDate(period?.startDate),
        endDate: formatDate(period?.endDate)
      });
    }
  });

  const { mutate, isLoading: isSubmitting } = useMutation({
    mutationFn: (data) => apiClient.post('/tp-period', data, {
      headers: { Authorization: `Bearer ${token}` }
    }),
    onSuccess: () => {
      setSuccess(true);
      refetch();
      setTimeout(() => setSuccess(false), 3000);
    }
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
    setIsEditing(false);
  };

  const handleDelete = () => {
    setFormData({ startDate: '', endDate: '' });
  };

  const currentPeriod = tpPeriodData?.[0];
  const breadcrumbs = [
    { label: 'Dashboard', href: '/admin-dashboard' },
    { label: 'Teaching Practice Period' }
  ];

  const renderContent = () => {
    if (isLoading) {
      return (
        <LoadingComponent message="Loading Tp period please wait" />
      )
    }
    if (isError || error) {
      reportError(error?.message || "An unknown error occurred");

      return (
        <div className="text-center text-red-600 font-medium">
          An error occurred while loading the teaching practice period.
        </div>
      );
    }

    if (currentPeriod && !isEditing) {
      return (
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-blue-50 p-4 rounded-md">
            <div>
              <p className="font-medium">Period: {displayDate(currentPeriod.startDate)} - {displayDate(currentPeriod.endDate)}</p>
              <p className="text-sm text-gray-600 mt-1 flex items-center">
                <FiClock className="mr-1" /> Active period
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsEditing(true)}
                className="p-2 text-blue-600 hover:bg-blue-100 rounded-full"
                disabled={isSubmitting}
              >
                <FiEdit2 />
              </button>
              <button
                onClick={handleDelete}
                className="p-2 text-red-600 hover:bg-red-100 rounded-full"
                disabled={isSubmitting}
              >
                <FiTrash2 />
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <Form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Start Date</label>
          <Input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">End Date</label>
          <Input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="flex space-x-2">
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : currentPeriod ? 'Update' : 'Save'} Period
          </Button>
          {currentPeriod && (
            <Button
              type="button"
              onClick={() => setIsEditing(false)}
              variant="dangerOutline"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          )}
        </div>
      </Form>
    );
  };

  return (
    <Layout title="Teaching Practice Period" role="admin" breadcrumbs={breadcrumbs}>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          {currentPeriod ? 'Teaching Practice Period' : 'Set Teaching Practice Period'}
        </h2>

        {renderContent()}

        {success && (
          <div className="mt-4 text-green-600 text-sm flex items-center">
            <FiCheckCircle className="mr-1" />
            Period {currentPeriod ? 'updated' : 'saved'} successfully!
          </div>
        )}
      </div>
    </Layout>
  );
};

export default TpPeriod;