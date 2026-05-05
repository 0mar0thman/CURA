import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import curaLogo from '../../assets/CURA-white-green.svg';

const Register = () => {
  const [userType, setUserType] = useState('health-seeker');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      alert('🎉 Account created successfully!');
      setIsLoading(false);
    }, 1500);
  };

  const handleGoogleSignUp = () => {
    alert('Redirecting to Google Sign Up...');
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200"
          alt="Fitness Lifestyle"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

        {/* Logo */}
        <div className="absolute top-10 left-10 z-20">
               <img src={curaLogo} alt="Cura Logo" className="w-64 h-32 " style={{ filter: 'drop-shadow(0 4px 8px rgba(255,255,255,0.5))' }} />
            </div>

        {/* Stats */}
       <div className="absolute bottom-12 left-10 z-20 flex gap-4">
            <div className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-xl px-6 py-4 shadow-xl">
             <div className="text-3xl font-bold text-white">12k+</div>
             <div className="text-sm font-medium text-white/90">Mindful Users</div>
            </div>

            <div className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-xl px-6 py-4 shadow-xl">
             <div className="text-3xl font-bold text-white">4.9/5</div>
             <div className="text-sm font-medium text-white/90">Curated Rating</div>
           </div>
          </div>
        </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-[#f8fbf9]">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create your account</h1>
          <p className="text-gray-600 mb-8">Step into a space designed for your well-being.</p>

          {/* User Type Toggle */}
          <div className="mb-8">
            <p className="text-sm text-gray-500 mb-3 font-medium">I AM JOINING AS A</p>
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setUserType('health-seeker')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  userType === 'health-seeker' ? 'bg-emerald-600 text-white shadow' : 'text-gray-600'
                }`}
              >
                Health Seeker
              </button>
              <button
                onClick={() => setUserType('nutritionist')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  userType === 'nutritionist' ? 'bg-emerald-600 text-white shadow' : 'text-gray-600'
                }`}
              >
                Nutritionist
              </button>
            </div>
          </div>

          <button
            onClick={handleGoogleSignUp}
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:border-gray-300 py-4 rounded-2xl font-medium text-sm mb-6 transition"
          >
            <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" className="w-5 h-5" />
            Sign up with Gmail
          </button>

          <div className="relative my-6">
            <div className="border-t border-gray-200" />
            <div className="absolute left-1/2 -translate-x-1/2 -top-2 bg-[#f8fbf9] px-4 text-gray-400 text-sm">OR</div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="user@email.com"
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

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-emerald-700 hover:bg-emerald-800 disabled:bg-emerald-400 text-white py-4 rounded-2xl font-semibold text-lg transition"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <p className="text-center mt-8 text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-emerald-600 font-medium hover:underline">
              Sign In
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

export default Register;