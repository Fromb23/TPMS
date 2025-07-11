import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '../components/Layout';
import { useUser } from '../context/userContext';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import apiClient from '../api/api';

const TpGuideline = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [agreed, setAgreed] = useState(false);
  const [expandedRule, setExpandedRule] = useState(null);

  const handleConfirm = () => {
    Mutation.mutate()
  };
  const token = localStorage.getItem('token');

  const Mutation = useMutation({
    mutationFn: async () => {
      try {
        const response = await apiClient.post(
          '/auth/tp-guidelines/confirm',
          { hasAgreedTerms: true },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        return response.data;
      } catch (error) {
        console.error('Error confirming agreement:', error);
        throw new Error('Failed to confirm agreement');
      }
    },
    onSuccess: (data) => {
      const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
      const updatedUser = { ...storedUser, hasAgreedTerms: true };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      alert('Thank you for confirming your agreement to the guidelines!');
      navigate('/tp/welcome');
    },
    onError: (error) => {
      alert('Error confirming agreement: ' + error.message);
    },
  });


  const rules = [
    { title: "Professionalism", content: "Maintain high standards of professionalism at all times during teaching practice." },
    { title: "Respect", content: "Respect all school staff including administration, teaching and non-teaching personnel." },
    { title: "Dress Code", content: "Wear formal attire. Avoid jeans, t-shirts, and open shoes." },
    { title: "Punctuality", content: "Arrive on time and strictly follow the school timetable." },
    { title: "Student Interaction", content: "Keep relationships professional. Romantic involvement is prohibited." },
    { title: "Discipline", content: "Corporal punishment is strictly forbidden." },
    { title: "Participation", content: "Actively engage in all assigned school duties." },
    { title: "Attendance", content: "Unauthorized absences will be penalized." },
    { title: "School Property", content: "Respect and maintain all school facilities and environment." },
    { title: "Substances", content: "Drugs, alcohol, or controlled substances are prohibited during TP." },
    { title: "Neutrality", content: "Avoid political, religious, or tribal discussions in school." },
    { title: "Phone Use", content: "Minimize personal phone use during class time." },
    { title: "Misconduct", content: "Sexual harassment leads to immediate disqualification." },
    { title: "Confidentiality", content: "Maintain privacy of student and school information." },
    { title: "Zero Tolerance", content: "Violence, theft, or fraud results in TP termination." }
  ];

  return (
    <Layout
      title="TP Guidelines"
      hideSidebar={true}
      breadcrumbs={[
        { label: 'TP Guidelines', href: '/resources/guidelines' }
      ]}
    >
      <Helmet>
        <title>TPMS - Teaching Practice Guidelines</title>
        <meta name="description" content="Official guidelines for Teaching Practice" />
      </Helmet>

      <div className="container mx-auto p-4 md:p-6">
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
            Welcome to Your Teaching Practice Journey!
          </h1>

          {/* Warm introductory message */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r">
            <p className="text-gray-800">
              Dear <span className="font-semibold text-blue-600">{user?.fullName || 'Future Educator'}</span>,<br /><br />
              Congratulations on reaching this important milestone in your teaching career! These guidelines are designed to help you navigate your teaching practice successfully.
              Remember, every great teacher started exactly where you are now. This is your opportunity to grow, learn, and develop the skills that will shape your professional future.
              We're excited to support you on this transformative journey!
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Teaching Practice Guidelines
          </h2>
          <p className="mb-6 text-gray-700">
            Please review these essential guidelines that will help ensure a productive and professional experience:
          </p>

          {/* Rest of the component remains the same */}
          <div className="space-y-3 mb-6">
            {rules.map((rule, index) => (
              <div key={index} className="border-l-4 border-blue-200 pl-4">
                <button
                  onClick={() => setExpandedRule(expandedRule === index ? null : index)}
                  className="w-full text-left font-medium text-blue-600 hover:text-blue-800 focus:outline-none"
                >
                  {index + 1}. {rule.title}
                </button>
                {expandedRule === index && (
                  <p className="mt-1 text-gray-600 pl-4">{rule.content}</p>
                )}
              </div>
            ))}
          </div>

          {/* Agreement section */}
          {!user?.hasAgreedTerms && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  className="rounded h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">
                  I understand and agree to follow these guidelines throughout my teaching practice
                </span>
              </label>
              <button
                onClick={handleConfirm}
                disabled={!agreed}
                className={`px-6 py-2 rounded-md transition ${agreed
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
              >
                Confirm My Commitment
              </button>
            </div>
          )}

        </div>
      </div>
    </Layout>
  );
};

export default TpGuideline;