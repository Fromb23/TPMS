import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { FaEnvelope, FaLock, FaArrowRight } from 'react-icons/fa';
import { login } from '../services/authServices';


const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        mutation.mutate({ email, password });
        }

    const mutation = useMutation({
        mutationFn: ({ email, password }) => login(email, password),
        onSuccess: (data) => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            window.location.href = '/student-dashboard';
        },
        onError: (error) => {
            console.error('Login error:', error);
        }
    });
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#05011c] to-[#1a1a2e]">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 w-full max-w-md mx-4">
                <h1 className="text-3xl font-bold text-white mb-6 text-center">Welcome Back</h1>
                {mutation.error && (
                    <div className="bg-red-500 text-white p-4 rounded-lg mb-4">
                        <p className="text-sm">{mutation.error.message}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex items-center px-4 py-3 bg-white/5 rounded-lg focus-within:ring-2 focus-within:ring-purple-500">
                            <FaEnvelope className="text-white/50 mr-2" />
                            <input
                                name="email"
                                type="email"
                                className="bg-transparent outline-none text-white w-full"
                                placeholder="Email"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center px-4 py-3 bg-white/5 rounded-lg focus-within:ring-2 focus-within:ring-purple-500">
                            <FaLock className="text-white/50 mr-2" />
                            <input
                                name="password"
                                type="password"
                                className="bg-transparent outline-none text-white w-full"
                                placeholder="Password"
                                required
                            />
                        </div>
                    </div>


                    <div className="flex justify-end">
                        <Link
                            to="/forgot-password"
                            className="text-purple-400 hover:underline text-sm"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition-colors duration-300"
                    >
                        {mutation.isLoading ? 'Please wait...': 'Login'} <FaArrowRight />
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Login;