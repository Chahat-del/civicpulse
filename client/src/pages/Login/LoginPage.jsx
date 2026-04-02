import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('citizen');
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    ward: '',
    city: '',
    deptNumber: '',
    deptName: '',
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock login for now — will connect to backend later
    const mockUser = {
      id: '1',
      name: formData.name || 'Test User',
      email: formData.email,
      role: activeTab,
      ward: formData.ward || 'Ward 10',
      city: formData.city || 'Bengaluru',
    };

    login(mockUser, 'mock-token-123');
    navigate(activeTab === 'authority' ? '/admin' : '/explore');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-8">

        {/* Logo / Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">CivicPulse</h1>
          <p className="text-gray-500 text-sm mt-1">Report. Track. Resolve.</p>
        </div>

        {/* Citizen / Authority Toggle */}
        <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
          <button
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'citizen'
                ? 'bg-white text-blue-600 shadow'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('citizen')}
          >
            Citizen
          </button>
          <button
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'authority'
                ? 'bg-white text-blue-600 shadow'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('authority')}
          >
            Authority
          </button>
        </div>

        {/* Login / Register Toggle */}
        <div className="flex justify-center gap-4 mb-6 text-sm">
          <button
            className={`pb-1 font-medium ${!isRegister ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
            onClick={() => setIsRegister(false)}
          >
            Login
          </button>
          <button
            className={`pb-1 font-medium ${isRegister ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
            onClick={() => setIsRegister(true)}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Register only fields */}
          {isRegister && (
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          )}

          <input
            name="email"
            type="email"
            placeholder="Email address"
            onChange={handleChange}
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          {/* Citizen register fields */}
          {isRegister && activeTab === 'citizen' && (
            <div className="flex gap-3">
              <input
                name="ward"
                placeholder="Ward / Area"
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input
                name="city"
                placeholder="City"
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          )}

          {/* Authority register fields */}
          {isRegister && activeTab === 'authority' && (
            <div className="flex gap-3">
              <input
                name="deptNumber"
                placeholder="Department Number"
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input
                name="deptName"
                placeholder="Department Name"
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all"
          >
            {isRegister ? 'Create Account' : 'Login'} as {activeTab === 'citizen' ? 'Citizen' : 'Authority'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;