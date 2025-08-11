import React, { useState, useEffect } from 'react';
import { User, Building, Star, MapPin, Phone, MessageCircle, Upload, Award, CreditCard, BookOpen, Users, TrendingUp, Bell, Search, Filter, Calendar, Clock, CheckCircle, AlertCircle, Zap, Settings, LogOut, Home, Briefcase, DollarSign, GraduationCap } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [userType, setUserType] = useState(null);
  const [user, setUser] = useState(null);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Mock data
  const mockWorkers = [
    {
      id: 1,
      name: 'Sanjay Kumar',
      profession: 'Electrician',
      rating: 4.8,
      completedJobs: 156,
      location: 'Andheri West, Mumbai',
      phone: '+91-9876543210',
      skills: ['Wiring', 'Panel Installation', 'Repair Work'],
      badges: ['ID Verified', 'Skill Certified', 'Top Performer'],
      experience: '5 years',
      hourlyRate: '₹300-500',
      profileImage: '/api/placeholder/100/100',
      availability: 'Available',
      bio: 'Experienced electrician specializing in residential and commercial electrical work.'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      profession: 'Plumber',
      rating: 4.6,
      completedJobs: 134,
      location: 'Bandra East, Mumbai',
      phone: '+91-9876543211',
      skills: ['Pipe Repair', 'Installation', 'Water Heater'],
      badges: ['ID Verified', 'Skill Certified'],
      experience: '7 years',
      hourlyRate: '₹250-400',
      profileImage: '/api/placeholder/100/100',
      availability: 'Available',
      bio: 'Professional plumber with expertise in all types of plumbing work.'
    }
  ];

  const mockJobs = [
    {
      id: 1,
      title: 'Electrical Wiring - New Office',
      customer: 'Sharma Enterprises',
      location: 'Powai, Mumbai',
      budget: '₹15,000',
      urgency: 'High',
      description: 'Complete electrical wiring for new 2000 sq ft office space',
      requirements: ['Commercial wiring experience', 'Safety certification'],
      postedDate: '2 hours ago'
    },
    {
      id: 2,
      title: 'Home Plumbing Repair',
      customer: 'Raj Patel',
      location: 'Juhu, Mumbai',
      budget: '₹2,000',
      urgency: 'Medium',
      description: 'Fix leaking tap and bathroom drainage issues',
      requirements: ['Residential plumbing experience'],
      postedDate: '1 day ago'
    }
  ];

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { 
        id: Date.now(), 
        text: newMessage, 
        sender: 'user', 
        timestamp: new Date().toLocaleTimeString() 
      }]);
      setNewMessage('');
      
      // Mock response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          text: 'Thank you for your message. I\'ll get back to you shortly!',
          sender: 'worker',
          timestamp: new Date().toLocaleTimeString()
        }]);
      }, 1000);
    }
  };

  const WelcomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <Zap className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-white">Blue-Collar Cred</span>
          </div>
          <button
            onClick={() => setCurrentPage('login')}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Get Started
          </button>
        </nav>

        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Empowering Blue-Collar
            <br />
            <span className="text-orange-400">Workers & Employers</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            A revolutionary platform connecting skilled workers with opportunities while building 
            their digital identity, financial stability, and professional growth.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setCurrentPage('login')}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg hover:bg-orange-600 transition-all transform hover:scale-105"
            >
              Join as Worker
            </button>
            <button
              onClick={() => setCurrentPage('login')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105"
            >
              Find Workers
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Digital Identity</h3>
            <p className="text-blue-100">
              Build your Skill Pass - a blockchain-secured, portable digital identity with verified credentials
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Financial Services</h3>
            <p className="text-blue-100">
              Access micro-loans, investments, and build credit history based on your work performance
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Skill Development</h3>
            <p className="text-blue-100">
              Continuous learning with video modules, certifications, and upskilling opportunities
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/5 rounded-lg p-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">1</div>
              <h3 className="text-white font-semibold mb-2">Sign Up</h3>
              <p className="text-blue-100 text-sm">Create account and verify identity with government ID</p>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">2</div>
              <h3 className="text-white font-semibold mb-2">Build Profile</h3>
              <p className="text-blue-100 text-sm">Upload certificates and create your digital Skill Pass</p>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">3</div>
              <h3 className="text-white font-semibold mb-2">Find Work</h3>
              <p className="text-blue-100 text-sm">Get matched with jobs using AI-powered recommendations</p>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">4</div>
              <h3 className="text-white font-semibold mb-2">Grow</h3>
              <p className="text-blue-100 text-sm">Build reputation, access financial services, and upskill</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const LoginPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap className="text-white" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Join Blue-Collar Cred</h2>
          <p className="text-gray-600">Choose your account type</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => {
              setUserType('worker');
              setCurrentPage('verification');
            }}
            className="w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-3"
          >
            <User size={24} />
            <span className="text-lg">I'm a Worker</span>
          </button>
          
          <button
            onClick={() => {
              setUserType('customer');
              setUser({ name: 'Customer', type: 'customer' });
              setCurrentPage('customer-dashboard');
            }}
            className="w-full bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-3"
          >
            <Building size={24} />
            <span className="text-lg">I'm an Employer/Customer</span>
          </button>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => setCurrentPage('welcome')}
            className="text-blue-600 hover:text-blue-800"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );

  const VerificationPage = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      aadhaar: '',
      profession: '',
      experience: ''
    });

    const handleNext = () => {
      if (step < 4) {
        setStep(step + 1);
      } else {
        setUser({ 
          name: formData.name || 'Sanjay Kumar', 
          type: 'worker',
          profession: formData.profession || 'Electrician',
          phone: formData.phone || '+91-9876543210'
        });
        setCurrentPage('worker-dashboard');
      }
    };

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`flex items-center ${i !== 4 ? 'flex-1' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    i <= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {i}
                  </div>
                  {i !== 4 && <div className={`flex-1 h-1 mx-2 ${i < step ? 'bg-blue-600' : 'bg-gray-200'}`} />}
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-center">Worker Verification</h2>
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Personal Information</h3>
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Aadhaar Number"
                value={formData.aadhaar}
                onChange={(e) => setFormData({...formData, aadhaar: e.target.value})}
                className="w-full p-3 border rounded-lg"
              />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Professional Details</h3>
              <select
                value={formData.profession}
                onChange={(e) => setFormData({...formData, profession: e.target.value})}
                className="w-full p-3 border rounded-lg"
              >
                <option value="">Select Profession</option>
                <option value="Electrician">Electrician</option>
                <option value="Plumber">Plumber</option>
                <option value="Carpenter">Carpenter</option>
                <option value="Delivery Agent">Delivery Agent</option>
                <option value="Mechanic">Mechanic</option>
              </select>
              <input
                type="text"
                placeholder="Years of Experience"
                value={formData.experience}
                onChange={(e) => setFormData({...formData, experience: e.target.value})}
                className="w-full p-3 border rounded-lg"
              />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Upload Documents</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="mx-auto mb-2" size={48} />
                <p>Upload Training Certificates</p>
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Choose Files</button>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="mx-auto mb-2" size={48} />
                <p>Upload Work Experience Proofs</p>
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Choose Files</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center space-y-4">
              <CheckCircle className="mx-auto text-green-600" size={64} />
              <h3 className="text-lg font-semibold">Verification Complete!</h3>
              <p className="text-gray-600">Your Skill Pass is being created...</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold">Verification Badges Earned:</p>
                <div className="flex justify-center space-x-2 mt-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">ID Verified</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Skill Certified</span>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="bg-gray-600 text-white px-6 py-2 rounded-lg"
              >
                Previous
              </button>
            )}
            <button
              onClick={handleNext}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg ml-auto"
            >
              {step === 4 ? 'Complete' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const WorkerDashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    const navigationItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
      { id: 'jobs', label: 'Find Jobs', icon: Briefcase },
      { id: 'skillpass', label: 'Skill Pass', icon: Award },
      { id: 'finance', label: 'Finance', icon: DollarSign },
      { id: 'learning', label: 'Learn & Grow', icon: GraduationCap },
      { id: 'profile', label: 'Profile', icon: User }
    ];

    const renderContent = () => {
      switch(activeTab) {
        case 'dashboard':
          return (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Welcome back, {user.name}!</h2>
                <p className="text-blue-100">Your reputation score: <span className="font-bold">4.8/5</span></p>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-600" size={24} />
                    <div className="ml-3">
                      <p className="text-sm text-gray-600">Jobs Completed</p>
                      <p className="text-2xl font-bold">156</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                    <DollarSign className="text-green-600" size={24} />
                    <div className="ml-3">
                      <p className="text-sm text-gray-600">This Month</p>
                      <p className="text-2xl font-bold">₹45,000</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                    <Star className="text-yellow-500" size={24} />
                    <div className="ml-3">
                      <p className="text-sm text-gray-600">Rating</p>
                      <p className="text-2xl font-bold">4.8</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                    <Award className="text-purple-600" size={24} />
                    <div className="ml-3">
                      <p className="text-sm text-gray-600">Badges</p>
                      <p className="text-2xl font-bold">8</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4">Recent Jobs</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 border rounded">
                      <div>
                        <p className="font-medium">Office Wiring - Completed</p>
                        <p className="text-sm text-gray-600">Sanjay Kumar</p>
                      </div>
                      <span className="text-green-600 font-bold">₹15,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded">
                      <div>
                        <p className="font-medium">Home Repair - In Progress</p>
                        <p className="text-sm text-gray-600">Residential Client</p>
                      </div>
                      <span className="text-blue-600 font-bold">₹3,500</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4">Available Jobs</h3>
                  <div className="space-y-3">
                    {mockJobs.map(job => (
                      <div key={job.id} className="p-3 border rounded hover:bg-gray-50">
                        <p className="font-medium">{job.title}</p>
                        <p className="text-sm text-gray-600">{job.customer} • {job.location}</p>
                        <p className="text-sm font-bold text-green-600">{job.budget}</p>
                        <button className="text-blue-600 text-sm mt-1">Apply Now</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );

        case 'skillpass':
          return (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4">Your Skill Pass</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center mb-4">
                      <img src="/api/placeholder/100/100" alt="Profile" className="w-20 h-20 rounded-full mr-4" />
                      <div>
                        <h3 className="text-xl font-bold">{user.name}</h3>
                        <p className="text-gray-600">{user.profession}</p>
                        <div className="flex items-center mt-1">
                          <Star className="text-yellow-500" size={16} />
                          <span className="ml-1">4.8 (156 reviews)</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Contact</p>
                        <p>{user.phone}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Experience</p>
                        <p>5 years</p>
                      </div>
                      <div>
                        <p className="font-semibold">Hourly Rate</p>
                        <p>₹300-500</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Verification Badges</h4>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm text-center">
                        <CheckCircle className="mx-auto mb-1" size={16} />
                        ID Verified
                      </div>
                      <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm text-center">
                        <Award className="mx-auto mb-1" size={16} />
                        Skill Certified
                      </div>
                      <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded-lg text-sm text-center">
                        <Star className="mx-auto mb-1" size={16} />
                        Top Performer
                      </div>
                      <div className="bg-orange-100 text-orange-800 px-3 py-2 rounded-lg text-sm text-center">
                        <TrendingUp className="mx-auto mb-1" size={16} />
                        Rising Star
                      </div>
                    </div>

                    <h4 className="font-semibold mb-3">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Wiring', 'Panel Installation', 'Repair Work', 'Safety Protocols'].map(skill => (
                        <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Performance Analytics</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">98%</div>
                    <p className="text-sm text-gray-600">Job Completion Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">4.2</div>
                    <p className="text-sm text-gray-600">Avg. Response Time (hrs)</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">92%</div>
                    <p className="text-sm text-gray-600">Customer Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          );

        case 'finance':
          return (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4">Financial Services</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Credit Score</h3>
                    <div className="text-3xl font-bold">750</div>
                    <p className="text-green-100 text-sm">Based on work performance</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Available Credit</h3>
                    <div className="text-3xl font-bold">₹25,000</div>
                    <p className="text-blue-100 text-sm">Micro-loan eligibility</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Quick Loan - ₹5,000</h4>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">Apply Now</button>
                    </div>
                    <p className="text-sm text-gray-600">12% interest • 3 month tenure • Auto-deduct from earnings</p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Equipment Loan - ₹15,000</h4>
                      <button className="bg-green-600 text-white px-4 py-2 rounded text-sm">Apply Now</button>
                    </div>
                    <p className="text-sm text-gray-600">15% interest • 6 month tenure • For professional tools & equipment</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Investment Options</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-medium">Gold Investment</h5>
                      <p className="text-sm text-gray-600">Start with ₹100</p>
                      <p className="text-green-600 text-sm">+12.5% this year</p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-medium">Mutual Funds</h5>
                      <p className="text-sm text-gray-600">SIP from ₹500</p>
                      <p className="text-green-600 text-sm">+15.2% average</p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-medium">Platform Equity</h5>
                      <p className="text-sm text-gray-600">Own part of the platform</p>
                      <p className="text-blue-600 text-sm">Profit sharing</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Payment History</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div>
                      <p className="font-medium">Office Wiring Job</p>
                      <p className="text-sm text-gray-600">Dec 8, 2024</p>
                    </div>
                    <span className="text-green-600 font-bold">+₹15,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div>
                      <p className="font-medium">Home Repair</p>
                      <p className="text-sm text-gray-600">Dec 5, 2024</p>
                    </div>
                    <span className="text-green-600 font-bold">+₹3,500</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div>
                      <p className="font-medium">Loan Repayment</p>
                      <p className="text-sm text-gray-600">Dec 1, 2024</p>
                    </div>
                    <span className="text-red-600 font-bold">-₹2,000</span>
                  </div>
                </div>
              </div>
            </div>
          );

        case 'learning':
          return (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4">Learning & Development</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Learning Progress</h3>
                    <div className="text-3xl font-bold">75%</div>
                    <p className="text-purple-100 text-sm">Advanced Electrical Course</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Certificates Earned</h3>
                    <div className="text-3xl font-bold">12</div>
                    <p className="text-orange-100 text-sm">Professional certifications</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Recommended Courses</h3>
                  
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">Certified Plumber Level 1</h4>
                        <p className="text-sm text-gray-600">Expand your skills • 4 hours • Hindi/English</p>
                        <div className="flex items-center mt-2">
                          <Star className="text-yellow-500" size={16} />
                          <span className="ml-1 text-sm">4.8 (230 reviews)</span>
                        </div>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">Start Course</button>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '0%'}}></div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">Advanced Electrical Safety</h4>
                        <p className="text-sm text-gray-600">Safety protocols • 2 hours • Hindi/English</p>
                        <div className="flex items-center mt-2">
                          <Star className="text-yellow-500" size={16} />
                          <span className="ml-1 text-sm">4.9 (156 reviews)</span>
                        </div>
                      </div>
                      <button className="bg-green-600 text-white px-4 py-2 rounded text-sm">Continue</button>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">Financial Literacy for Workers</h4>
                        <p className="text-sm text-gray-600">Money management • 3 hours • Hindi/English</p>
                        <div className="flex items-center mt-2">
                          <Star className="text-yellow-500" size={16} />
                          <span className="ml-1 text-sm">4.7 (89 reviews)</span>
                        </div>
                      </div>
                      <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm">Start Course</button>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '0%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold text-yellow-800 mb-2">🎯 Skill Boost Opportunity</h4>
                  <p className="text-sm text-yellow-700">Complete 3 more courses to unlock "Multi-Skilled Professional" badge and access to higher-paying jobs!</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Partner Training Programs</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold">Skill India Certification</h4>
                    <p className="text-sm text-gray-600 mb-2">Government recognized certification program</p>
                    <p className="text-sm text-green-600 mb-3">50% subsidy available</p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm w-full">Learn More</button>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold">Industry Partnership Program</h4>
                    <p className="text-sm text-gray-600 mb-2">Direct placement opportunities</p>
                    <p className="text-sm text-blue-600 mb-3">3 month intensive training</p>
                    <button className="bg-green-600 text-white px-4 py-2 rounded text-sm w-full">Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
          );

        case 'jobs':
          return (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Find Jobs</h2>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        placeholder="Search jobs..."
                        className="pl-10 pr-4 py-2 border rounded-lg"
                      />
                    </div>
                    <button className="bg-gray-100 p-2 rounded-lg">
                      <Filter size={20} />
                    </button>
                  </div>
                </div>

                <div className="grid gap-4">
                  {mockJobs.map(job => (
                    <div key={job.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{job.title}</h3>
                          <p className="text-gray-600">{job.customer}</p>
                          <div className="flex items-center mt-2 text-sm text-gray-500">
                            <MapPin size={16} className="mr-1" />
                            {job.location}
                            <Clock size={16} className="ml-4 mr-1" />
                            {job.postedDate}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">{job.budget}</div>
                          <span className={`px-2 py-1 rounded text-xs ${
                            job.urgency === 'High' ? 'bg-red-100 text-red-800' :
                            job.urgency === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {job.urgency} Priority
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      
                      <div className="mb-4">
                        <p className="font-medium mb-2">Requirements:</p>
                        <div className="flex flex-wrap gap-2">
                          {job.requirements.map((req, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>Match Score: 95%</span>
                          <span>3 km away</span>
                        </div>
                        <div className="space-x-2">
                          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">
                            Save
                          </button>
                          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-6">
                  <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200">
                    Load More Jobs
                  </button>
                </div>
              </div>
            </div>
          );

        default:
          return <div>Profile content coming soon...</div>;
      }
    };

    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Zap className="text-white" size={20} />
                  </div>
                  <span className="text-xl font-bold">Blue-Collar Cred</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Bell className="text-gray-600" size={20} />
                <div className="flex items-center space-x-2">
                  <img src="/api/placeholder/32/32" alt="Profile" className="w-8 h-8 rounded-full" />
                  <span className="font-medium">{user.name}</span>
                </div>
                <button
                  onClick={() => {
                    setUser(null);
                    setUserType(null);
                    setCurrentPage('welcome');
                  }}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <LogOut size={20} />
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3">
              <div className="bg-white rounded-lg shadow p-4">
                <nav className="space-y-2">
                  {navigationItems.map(item => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left ${
                          activeTab === item.id
                            ? 'bg-blue-100 text-blue-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <IconComponent size={20} />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
            
            <div className="col-span-9">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CustomerDashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [showWorkerProfile, setShowWorkerProfile] = useState(false);

    const navigationItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
      { id: 'find-workers', label: 'Find Workers', icon: Search },
      { id: 'post-job', label: 'Post a Job', icon: Briefcase },
      { id: 'my-jobs', label: 'My Jobs', icon: Calendar },
      { id: 'messages', label: 'Messages', icon: MessageCircle }
    ];

    const ChatModal = () => (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-96 h-96 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-semibold">Chat with {selectedWorker?.name}</h3>
            <button
              onClick={() => setChatOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.length === 0 ? (
              <p className="text-gray-500 text-center">No messages yet. Start the conversation!</p>
            ) : (
              <div className="space-y-3">
                {messages.map(message => (
                  <div
                    key={message.id}
                    className={`p-2 rounded ${
                      message.sender === 'user'
                        ? 'bg-blue-100 ml-8'
                        : 'bg-gray-100 mr-8'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="border-t p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border rounded px-3 py-2"
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );

    const WorkerProfileModal = () => (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold">Worker Profile</h2>
            <button
              onClick={() => setShowWorkerProfile(false)}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
          
          {selectedWorker && (
            <div className="p-6 space-y-6">
              <div className="flex items-center space-x-4">
                <img 
                  src={selectedWorker.profileImage} 
                  alt={selectedWorker.name}
                  className="w-20 h-20 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-bold">{selectedWorker.name}</h3>
                  <p className="text-gray-600">{selectedWorker.profession}</p>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center">
                      {[1,2,3,4,5].map(star => (
                        <Star 
                          key={star}
                          className={star <= selectedWorker.rating ? "text-yellow-500" : "text-gray-300"}
                          size={16}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {selectedWorker.rating} ({selectedWorker.completedJobs} jobs)
                    </span>
                  </div>
                </div>
                <div className="ml-auto">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    selectedWorker.availability === 'Available' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {selectedWorker.availability}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Contact Information</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Phone size={16} className="mr-2 text-gray-500" />
                      <span>{selectedWorker.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-gray-500" />
                      <span>{selectedWorker.location}</span>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold mt-4 mb-3">Professional Details</h4>
                  <div className="space-y-2">
                    <p><span className="font-medium">Experience:</span> {selectedWorker.experience}</p>
                    <p><span className="font-medium">Rate:</span> {selectedWorker.hourlyRate}/hour</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Verification Badges</h4>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {selectedWorker.badges.map(badge => (
                      <div key={badge} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm text-center">
                        {badge}
                      </div>
                    ))}
                  </div>

                  <h4 className="font-semibold mb-3">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedWorker.skills.map(skill => (
                      <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">About</h4>
                <p className="text-gray-700">{selectedWorker.bio}</p>
              </div>

              <div className="flex space-x-4 pt-4 border-t">
                <button
                  onClick={() => {
                    setChatOpen(true);
                    setShowWorkerProfile(false);
                  }}
                  className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>Message</span>
                </button>
                <button
                  className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Call</span>
                </button>
                <button
                  className="flex-1 bg-orange-600 text-white py-3 px-4 rounded-lg"
                >
                  Hire Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );

    const renderContent = () => {
      switch(activeTab) {
        case 'dashboard':
          return (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-xl p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Welcome to Blue-Collar Cred!</h2>
                <p className="text-green-100">Find verified skilled workers for all your needs</p>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                    <Briefcase className="text-blue-600" size={24} />
                    <div className="ml-3">
                      <p className="text-sm text-gray-600">Active Jobs</p>
                      <p className="text-2xl font-bold">3</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-600" size={24} />
                    <div className="ml-3">
                      <p className="text-sm text-gray-600">Completed</p>
                      <p className="text-2xl font-bold">12</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                    <Users className="text-purple-600" size={24} />
                    <div className="ml-3">
                      <p className="text-sm text-gray-600">Workers Hired</p>
                      <p className="text-2xl font-bold">8</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                    <Star className="text-yellow-500" size={24} />
                    <div className="ml-3">
                      <p className="text-sm text-gray-600">Avg Rating</p>
                      <p className="text-2xl font-bold">4.7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4">Recent Jobs</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 border rounded">
                      <div>
                        <p className="font-medium">Office Electrical Work</p>
                        <p className="text-sm text-gray-600">Sanjay Kumar • Completed</p>
                      </div>
                      <span className="text-green-600 text-sm">✓ Done</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded">
                      <div>
                        <p className="font-medium">Plumbing Repair</p>
                        <p className="text-sm text-gray-600">Rajesh Kumar • In Progress</p>
                      </div>
                      <span className="text-blue-600 text-sm">⏳ Active</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button 
                      onClick={() => setActiveTab('find-workers')}
                      className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                    >
                      Find Workers
                    </button>
                    <button 
                      onClick={() => setActiveTab('post-job')}
                      className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
                    >
                      Post a Job
                    </button>
                    <button className="w-full border border-gray-300 p-3 rounded-lg hover:bg-gray-50">
                      Browse Categories
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );

        case 'find-workers':
          return (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Find Skilled Workers</h2>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        placeholder="Search by skill or location..."
                        className="pl-10 pr-4 py-2 border rounded-lg w-64"
                      />
                    </div>
                    <select className="border rounded-lg px-4 py-2">
                      <option>All Categories</option>
                      <option>Electrician</option>
                      <option>Plumber</option>
                      <option>Carpenter</option>
                      <option>Delivery Agent</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {mockWorkers.map(worker => (
                    <div key={worker.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4 mb-4">
                        <img 
                          src={worker.profileImage} 
                          alt={worker.name}
                          className="w-16 h-16 rounded-full"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{worker.name}</h3>
                          <p className="text-gray-600">{worker.profession}</p>
                          <div className="flex items-center mt-1">
                            <div className="flex items-center">
                              {[1,2,3,4,5].map(star => (
                                <Star 
                                  key={star}
                                  className={star <= worker.rating ? "text-yellow-500" : "text-gray-300"}
                                  size={14}
                                  fill="currentColor"
                                />
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">
                              {worker.rating} ({worker.completedJobs} jobs)
                            </span>
                          </div>
                          <div className="flex items-center mt-1 text-sm text-gray-500">
                            <MapPin size={14} className="mr-1" />
                            {worker.location}
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          worker.availability === 'Available' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {worker.availability}
                        </span>
                      </div>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {worker.badges.slice(0, 2).map(badge => (
                            <span key={badge} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                              {badge}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          {worker.skills.slice(0, 3).map(skill => (
                            <span key={skill} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                        
                        <p className="text-sm text-gray-600">{worker.hourlyRate}/hour • {worker.experience}</p>
                      </div>

                      <div className="flex space-x-2">
                        <button
                          onClick={() => {
                            setSelectedWorker(worker);
                            setShowWorkerProfile(true);
                          }}
                          className="flex-1 border border-blue-600 text-blue-600 py-2 px-3 rounded text-sm hover:bg-blue-50"
                        >
                          View Profile
                        </button>
                        <button
                          onClick={() => {
                            setSelectedWorker(worker);
                            setChatOpen(true);
                          }}
                          className="bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700"
                        >
                          <MessageCircle size={16} />
                        </button>
                        <button
                          className="bg-green-600 text-white py-2 px-3 rounded text-sm hover:bg-green-700"
                        >
                          <Phone size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-6">
                  <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200">
                    Load More Workers
                  </button>
                </div>
              </div>
            </div>
          );

        case 'post-job':
          return (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-6">Post a New Job</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Job Title</label>
                    <input
                      type="text"
                      placeholder="e.g., Electrical Wiring for New Office"
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select className="w-full p-3 border rounded-lg">
                      <option>Select Category</option>
                      <option>Electrical Work</option>
                      <option>Plumbing</option>
                      <option>Carpentry</option>
                      <option>Delivery</option>
                      <option>General Maintenance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Job Description</label>
                  <textarea
                    rows={4}
                    placeholder="Describe the job requirements, scope of work, and any special instructions..."
                    className="w-full p-3 border rounded-lg"
                  ></textarea>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <div className="flex space-x-2">
                      <input type="number" placeholder="Min" className="w-full p-3 border rounded-lg" />
                      <input type="number" placeholder="Max" className="w-full p-3 border rounded-lg" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Timeline</label>
                    <select className="w-full p-3 border rounded-lg">
                      <option>ASAP</option>
                      <option>Within 24 hours</option>
                      <option>Within a week</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Priority</label>
                    <select className="w-full p-3 border rounded-lg">
                      <option>Normal</option>
                      <option>High</option>
                      <option>Urgent</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Location</label>
                    <input
                      type="text"
                      placeholder="Enter job location"
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Contact Number</label>
                    <input
                      type="tel"
                      placeholder="+91-9876543210"
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Required Skills/Experience</label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <label className="text-sm">Certified professional required</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <label className="text-sm">Previous experience in similar work</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <label className="text-sm">Own tools/equipment required</label>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">💡 Tips for Better Results</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Be specific about your requirements</li>
                    <li>• Include photos if helpful</li>
                    <li>• Set a realistic budget and timeline</li>
                    <li>• Mention if materials are provided</li>
                  </ul>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50"
                  >
                    Save as Draft
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                  >
                    Post Job
                  </button>
                </div>
              </form>
            </div>
          );

        case 'my-jobs':
          return (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">My Jobs</h2>
                  <div className="flex space-x-2">
                    <select className="border rounded-lg px-4 py-2">
                      <option>All Jobs</option>
                      <option>Active</option>
                      <option>Completed</option>
                      <option>Draft</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Office Electrical Wiring</h3>
                        <p className="text-gray-600">Posted 3 days ago • Powai, Mumbai</p>
                        <div className="flex items-center mt-2">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                            Completed
                          </span>
                          <span className="ml-4 text-sm text-gray-600">Budget: ₹15,000</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">Assigned to:</p>
                        <p className="text-blue-600">Sanjay Kumar</p>
                        <div className="flex items-center mt-1">
                          <Star className="text-yellow-500" size={16} />
                          <span className="ml-1 text-sm">4.8</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">
                      Complete electrical wiring for new 2000 sq ft office space. Professional work completed on time.
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 text-sm hover:underline">View Details</button>
                        <button className="text-green-600 text-sm hover:underline">Rate Worker</button>
                      </div>
                      <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm">
                        Hire Again
                      </button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Home Plumbing Repair</h3>
                        <p className="text-gray-600">Posted 1 day ago • Juhu, Mumbai</p>
                        <div className="flex items-center mt-2">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                            In Progress
                          </span>
                          <span className="ml-4 text-sm text-gray-600">Budget: ₹2,000</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">Assigned to:</p>
                        <p className="text-blue-600">Rajesh Kumar</p>
                        <div className="flex items-center mt-1">
                          <Star className="text-yellow-500" size={16} />
                          <span className="ml-1 text-sm">4.6</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">
                      Fix leaking tap and bathroom drainage issues. Worker is currently on-site.
                    </p>
                    
                    <div className="bg-blue-50 p-3 rounded mb-4">
                      <p className="text-sm text-blue-800">
                        <Clock size={16} className="inline mr-1" />
                        Expected completion: Today by 6 PM
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 text-sm hover:underline">Track Progress</button>
                        <button 
                          onClick={() => {
                            setSelectedWorker(mockWorkers[1]);
                            setChatOpen(true);
                          }}
                          className="text-green-600 text-sm hover:underline"
                        >
                          Message Worker
                        </button>
                      </div>
                      <button className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm">
                        Active
                      </button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Furniture Assembly</h3>
                        <p className="text-gray-600">Posted 5 hours ago • Andheri West, Mumbai</p>
                        <div className="flex items-center mt-2">
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                            Pending Applications
                          </span>
                          <span className="ml-4 text-sm text-gray-600">Budget: ₹1,500</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">5 Applications</p>
                        <p className="text-sm text-gray-600">3 Qualified candidates</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">
                      Assembly of new bedroom furniture set. All tools and hardware provided.
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 text-sm hover:underline">View Applications</button>
                        <button className="text-green-600 text-sm hover:underline">Edit Job</button>
                      </div>
                      <button className="bg-orange-100 text-orange-800 px-3 py-1 rounded text-sm">
                        Review Candidates
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );

        case 'messages':
          return (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-6">Messages</h2>
              
              <div className="space-y-4">
                                  <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <img src="/api/placeholder/50/50" alt="Sanjay" className="w-12 h-12 rounded-full" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">Sanjay Kumar</h3>
                          <p className="text-gray-600 text-sm">Electrician</p>
                        </div>
                        <span className="text-xs text-gray-500">2 hours ago</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-1">
                        The wiring work has been completed successfully. Please check and let me know if everything looks good.
                      </p>
                    </div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <img src="/api/placeholder/50/50" alt="Rajesh" className="w-12 h-12 rounded-full" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">Rajesh Kumar</h3>
                          <p className="text-gray-600 text-sm">Plumber</p>
                        </div>
                        <span className="text-xs text-gray-500">1 day ago</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-1">
                        I'll be arriving at 10 AM tomorrow to start the plumbing work. I have all the required materials.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <img src="/api/placeholder/50/50" alt="Worker" className="w-12 h-12 rounded-full" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">Amit Singh</h3>
                          <p className="text-gray-600 text-sm">Carpenter</p>
                        </div>
                        <span className="text-xs text-gray-500">3 days ago</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-1">
                        Thank you for choosing me for the furniture assembly job. I'm available this weekend.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-6">
                <button className="text-blue-600 hover:text-blue-800">View All Messages</button>
              </div>
            </div>
          );

        default:
          return <div>Content coming soon...</div>;
      }
    };

    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Zap className="text-white" size={20} />
                  </div>
                  <span className="text-xl font-bold">Blue-Collar Cred</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Bell className="text-gray-600" size={20} />
                <div className="flex items-center space-x-2">
                  <img src="/api/placeholder/32/32" alt="Profile" className="w-8 h-8 rounded-full" />
                  <span className="font-medium">Customer</span>
                </div>
                <button
                  onClick={() => {
                    setUser(null);
                    setUserType(null);
                    setCurrentPage('welcome');
                  }}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <LogOut size={20} />
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3">
              <div className="bg-white rounded-lg shadow p-4">
                <nav className="space-y-2">
                  {navigationItems.map(item => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left ${
                          activeTab === item.id
                            ? 'bg-green-100 text-green-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <IconComponent size={20} />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
            
            <div className="col-span-9">
              {renderContent()}
            </div>
          </div>
        </div>

        {chatOpen && <ChatModal />}
        {showWorkerProfile && <WorkerProfileModal />}
      </div>
    );
  };

  // Main render logic
  switch(currentPage) {
    case 'welcome':
      return <WelcomePage />;
    case 'login':
      return <LoginPage />;
    case 'verification':
      return <VerificationPage />;
    case 'worker-dashboard':
      return <WorkerDashboard />;
    case 'customer-dashboard':
      return <CustomerDashboard />;
    default:
      return <WelcomePage />;
  }
};

export default App;