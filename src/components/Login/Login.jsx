import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import curaLogo from '../../assets/CURA-white-green.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      alert('✅ Logged in successfully!');
      setIsLoading(false);
    }, 1200);
  };

  const handleGoogleSignIn = () => {
    alert('Redirecting to Google Sign In...');
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200"
          alt="Healthy Food"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

        {/* Logo */}
       <div className="absolute top-10 left-10 z-20">
          <img src={curaLogo} alt="Cura Logo" className="w-64 h-32 " style={{ filter: 'drop-shadow(0 4px 8px rgba(255,255,255,0.5))' }} />
       </div>

        {/* Motivational Text */}
        <div className="absolute bottom-16 left-10 right-10 z-20">
          <p className="text-white text-4xl font-semibold leading-tight drop-shadow-md">
            Your health is your<br />most valuable asset.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-[#f8fbf9]">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            Welcome back to <span className="text-emerald-700">Cura</span>
          </h1>
          <p className="text-gray-600 mb-8">Sign in to continue your wellness journey</p>

          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:border-gray-300 py-4 rounded-2xl font-medium text-sm mb-6 transition"
          >
            <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" className="w-5 h-5" />
            Sign in with Gmail
          </button>

          <div className="relative my-6">
            <div className="border-t border-gray-200" />
            <div className="absolute left-1/2 -translate-x-1/2 -top-2 bg-[#f8fbf9] px-4 text-gray-400 text-sm">OR</div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="user@wellness.com"
                className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="w-4 h-4 accent-emerald-600"
                />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-emerald-600 hover:underline">Forgot Password?</a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-emerald-700 hover:bg-emerald-800 disabled:bg-emerald-400 text-white py-4 rounded-2xl font-semibold text-lg transition"
            >
              {isLoading ? 'Signing In...' : 'SIGN IN'}
            </button>
          </form>

          <p className="text-center mt-8 text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-emerald-600 font-medium hover:underline">
              Sign up
            </Link>
          </p>

          <p className="text-center text-xs text-gray-400 mt-10">
            Privacy Policy • Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;