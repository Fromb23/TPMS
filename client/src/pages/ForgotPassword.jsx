import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { FaEnvelope, FaLock, FaCheck, FaArrowRight } from 'react-icons/fa';
import { verifyUserEmail, resetUserPassword } from '../services/authServices';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { mutate } = useMutation({
    mutationFn: verifyUserEmail,
    onSuccess: (data) => {
      localStorage.setItem('user', JSON.stringify(data));
      setEmailVerified(true);
      setError('');
    },
    onError: (err) => {
      setError(err.message || 'Failed to verify email. Please try again.');
      setEmailVerified(false);
      setEmail('');
    },
    retry: false,
    retryDelay: 1000,
  });
  const verifyEmail =  (e) => { 
    e.preventDefault();

    mutate(email);
  };

  const {mutate: resetPassword, isLoading} = useMutation({
    mutationFn: resetUserPassword,
    onSuccess: () => {
      setEmail('');
      setPassword('');
      setNewPassword('');
      setError('');
      setEmailVerified(false);
      localStorage.removeItem('user');
      alert('Password reset successfully. You can now log in with your new password.');
      window.location.href = '/login';
    },
    onError: (err) => {
      setError(err.message || 'Failed to reset password. Please try again.');
      setEmailVerified(true);
      setPassword('');
      setNewPassword('');
    },
    retry: false,
    retryDelay: 1000,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== newPassword) {
      setError('Passwords do not match');
      return;
    }
    const payload = {
      password,
    };
    resetPassword(payload)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#05011c] to-[#1a1a2e]">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 w-full max-w-md mx-4">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          {emailVerified ? 'Reset Password' : 'Forgot Password'}
        </h1>

        {!emailVerified ? (
          <form onSubmit={verifyEmail} className="space-y-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white/80">
                <FaEnvelope /> Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your registered email"
                required
              />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition-colors duration-300 disabled:opacity-70"
            >
              {loading ? 'Verifying...' : 'Verify Email'} <FaArrowRight />
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white/80">
                <FaLock /> New Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter new password"
                required
                minLength={6}
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white/80">
                <FaCheck /> Confirm New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Confirm new password"
                required
                minLength={6}
              />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition-colors duration-300 disabled:opacity-70"
            >
              {loading ? 'Updating...' : 'Update Password'} <FaArrowRight />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
export default ForgotPassword;