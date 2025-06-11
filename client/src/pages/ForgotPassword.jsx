import { useState } from 'react';
import { FaEnvelope, FaLock, FaCheck, FaArrowRight } from 'react-icons/fa';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const verifyEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Replace with actual API call to verify email
      await new Promise(resolve => setTimeout(resolve, 1000));
      setEmailVerified(true);
      setError('');
    } catch (err) {
      setError('Email not found. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== newPassword) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      // Replace with actual password reset API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Password updated successfully!');
      // Redirect to login or other page after success
    } catch (err) {
      setError('Failed to update password. Please try again.');
    } finally {
      setLoading(false);
    }
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