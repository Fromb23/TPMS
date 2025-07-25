import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { FaEnvelope, FaLock, FaArrowRight } from 'react-icons/fa';
import { login } from '@/services/authServices';
import Form from '@/components/ui/Form/Form';
import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input/Input';
import { UserContext } from '@/contexts/userContext';
import { useContext } from 'react';


const Login = () => {
    const { setUser, setToken } = useContext(UserContext);

    const mutation = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            const { token, user } = data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            setUser(user);
            setToken(token);

            setTimeout(() => {
                if (user.role === 'ADMIN') {
                    window.location.href = '/admin-dashboard';
                } else if (user.role === 'LECTURER') {
                    window.location.href = '/lecturer-dashboard';
                } else if (user.role === 'STUDENT') {
                    if (!user?.hasAgreedTerms) {
                        window.location.href = '/resources/guidelines';
                    } else if (!user?.student?.[0]?.hasSeenWelcome) {
                        window.location.href = '/tp/welcome';
                    } else {
                        window.location.href = '/student-dashboard';
                    }
                }
            }, 300);
        },
        // onError: (error) => {
        //     console.error('Login error:', error);
        // }
    });

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

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#05011c] to-[#1a1a2e]">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 w-full max-w-md mx-4">
                <Helmet>
                    <title>Login - TPMS</title>
                    <meta name="description" content="Login to the TPMS system" />
                </Helmet>
                <h1 className="text-3xl font-bold text-white mb-6 text-center">Welcome Back</h1>
                {mutation?.error && (
                    <div className="bg-red-500 text-white p-4 rounded-lg mb-4">
                        <p className="text-sm">
                            {
                                mutation.error.response?.data?.message || mutation.error.message
                            }
                        </p>
                    </div>
                )}

                <Form onSubmit={handleSubmit} className="space-y-2">
                    <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        leftIcon={<FaEnvelope />}
                        required
                    />
                    <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                        leftIcon={<FaLock />}
                        required
                    />

                    <div className="flex justify-end">
                        <Link
                            to="/forgot-password"
                            className="text-purple-400 hover:underline text-sm"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <Button
                        fullWidth={false}
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition-colors duration-300"
                    >
                        {mutation.isLoading ? 'Please wait...' : 'Login'} <FaArrowRight />
                    </Button>
                </Form>
            </div>
        </div>
    );
}
export default Login;