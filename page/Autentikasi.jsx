import { useState } from 'react';

export default function AuthForm({ type }) {
    const isLogin = type === 'login';
    const [formData, setFormData] = useState({ email: '', password: '', username: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white px-6">
            <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                    {isLogin ? 'Login' : 'Register'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {!isLogin && (
                        <div>
                            <label htmlFor="username" className="block text-sm font-semibold">
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full px-4 py-2 mt-1 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                required
                            />
                        </div>
                    )}
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-gray-700 text-white font-semibold rounded hover:bg-gray-600 transition"
                    >
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>
                <p className="mt-4 text-center text-sm">
                    {isLogin ? (
                        <>
                            Don't have an account?{' '}
                            <a href="/register" className="text-gray-400 hover:underline">
                                Register here
                            </a>
                        </>
                    ) : (
                        <>
                            Already have an account?{' '}
                            <a href="/login" className="text-gray-400 hover:underline">
                                Login here
                            </a>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
}
