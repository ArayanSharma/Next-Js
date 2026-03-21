import React from 'react'
import { registerAction } from './registation.action'

const page = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateZ(0deg); opacity: 0.5; }
          50% { transform: translateY(-20px) rotateZ(180deg); opacity: 1; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; box-shadow: 0 0 10px rgba(34, 211, 238, 0.5); }
          50% { opacity: 1; box-shadow: 0 0 30px rgba(34, 211, 238, 1); }
        }
        
        @keyframes slide-left {
          0% { transform: translateX(120%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(-120%); opacity: 0; }
        }
        
        @keyframes slide-right {
          0% { transform: translateX(-120%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(120%); opacity: 0; }
        }
        
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite !important;
        }
        
        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite !important;
        }
        
        .slide-left {
          animation: slide-left 20s linear infinite !important;
        }
        
        .slide-right {
          animation: slide-right 25s linear infinite !important;
        }
        
        .rotate-slow {
          animation: rotate-slow 30s linear infinite !important;
        }
        
        .bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite !important;
        }
        
        .twinkle {
          animation: twinkle 4s ease-in-out infinite !important;
        }
        
        .star {
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          position: absolute;
        }

        /* Custom checkbox styling */
        #terms {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 4px;
          background-color: rgba(255, 255, 255, 0.05);
          cursor: pointer;
          position: relative;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        #terms:hover {
          border-color: rgba(255, 255, 255, 0.5);
          background-color: rgba(255, 255, 255, 0.1);
        }

        #terms:checked {
          background-color: #06b6d4;
          border-color: #06b6d4;
          background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 100%;
        }

        #terms:checked:hover {
          background-color: #0891b2;
          border-color: #0891b2;
        }

        #terms:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
          border-color: #06b6d4;
        }
      `}</style>

      {/* Multiple animated background layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 slide-left" style={{backgroundImage: 'linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px), linear-gradient(0deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        </div>

        {/* Floating orbs - Large */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl float-animation" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl float-animation" style={{animationDelay: '4s'}}></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/20 rounded-full rotate-slow opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 border-2 border-purple-400/10 rounded-full rotate-slow opacity-30" style={{animationDirection: 'reverse'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-40 h-40 border border-blue-400/20 rounded-full rotate-slow opacity-40" style={{animationDelay: '15s'}}></div>

        {/* Shooting stars effect */}
        <div className="absolute top-1/4 left-0 w-1 h-1 bg-white rounded-full slide-left" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 left-0 w-1 h-1 bg-cyan-300 rounded-full slide-left" style={{animationDelay: '5s'}}></div>
        <div className="absolute top-1/2 left-0 w-1 h-1 bg-white rounded-full slide-left" style={{animationDelay: '10s'}}></div>
        <div className="absolute top-2/3 left-0 w-1 h-1 bg-purple-300 rounded-full slide-left" style={{animationDelay: '15s'}}></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/2 right-0 w-4 h-4 bg-cyan-400/30 rounded-sm slide-right" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 right-0 w-3 h-3 bg-purple-400/20 rounded-full slide-right" style={{animationDelay: '7s'}}></div>
        <div className="absolute bottom-1/3 right-0 w-5 h-5 border border-blue-400/30 slide-right" style={{animationDelay: '12s'}}></div>

        {/* Pulsing glow points */}
        <div className="absolute top-20 left-1/3 w-2 h-2 bg-cyan-400 rounded-full pulse-glow blur-sm"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full pulse-glow blur-sm" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-400 rounded-full pulse-glow blur-sm" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main container with animation */}
      <div className="relative z-10 w-full max-w-md">
        {/* Card with glass effect and enhanced glow */}
        <div className="backdrop-blur-2xl bg-white/8 border border-white/20 rounded-2xl p-8 shadow-2xl hover:shadow-cyan-500/20 transition-shadow duration-300 relative group">
          {/* Animated glow border effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300 animate-pulse"></div>

          {/* Header section */}
          <div className="text-center mb-8 relative">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full mb-4 float-animation shadow-lg shadow-cyan-500/50">
              <svg className="w-8 h-8 text-white float-animation" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-2 animate-pulse">
              Join Us
            </h1>
            <p className="text-gray-300 text-sm">Create your account and get started today</p>
          </div>

          {/* Form section */}
          <form action={registerAction} className="space-y-4">
            {/* Name Input */}
            <div className="group/input">
              <label className="block text-sm font-medium text-gray-200 mb-2">Full Name</label>
              <div className="relative">
                <input 
                  type="text" 
                  name='name' 
                  placeholder='John Doe' 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition duration-300 group-hover/input:border-white/20 hover:bg-white/10"
                  required
                />
                <div className="absolute right-3 top-3 text-gray-400 group-hover/input:text-cyan-400 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Email Input */}
            <div className="group/input">
              <label className="block text-sm font-medium text-gray-200 mb-2">Email Address</label>
              <div className="relative">
                <input 
                  type="email" 
                  name='email' 
                  placeholder='john@example.com' 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition duration-300 group-hover/input:border-white/20 hover:bg-white/10"
                  required
                />
                <div className="absolute right-3 top-3 text-gray-400 group-hover/input:text-cyan-400 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Password Input */}
            <div className="group/input">
              <label className="block text-sm font-medium text-gray-200 mb-2">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  name='password' 
                  placeholder='••••••••' 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition duration-300 group-hover/input:border-white/20 hover:bg-white/10"
                  required
                />
                <div className="absolute right-3 top-3 text-gray-400 group-hover/input:text-cyan-400 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-1">At least 8 characters recommended</p>
            </div>

            {/* Terms and conditions */}
            <div className="flex items-center mt-6 gap-3">
              <input 
                type="checkbox" 
                id="terms" 
                name="terms"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-300 cursor-pointer select-none">
                I agree to the <a href="#" className="text-cyan-400 hover:text-cyan-300 transition duration-300 font-semibold">Terms of Service</a>
              </label>
            </div>

            {/* Submit Button with animation */}
            <button 
              type='submit'
              className="w-full mt-8 relative bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold py-3 rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition duration-300 active:scale-95 flex items-center justify-center gap-2 group/btn overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-20 translate-x-full group-hover/btn:translate-x-0 transition-all duration-500"></div>
              <svg className="w-5 h-5 group-hover/btn:rotate-45 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-slate-950 text-gray-400">Or continue with</span>
            </div>
          </div>

          {/* Social buttons with hover animation */}
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-white/5 border border-white/10 text-white py-2 rounded-lg hover:bg-white/10 hover:border-cyan-400/50 transition duration-300 hover:scale-110 transform">
              <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </button>
            <button className="bg-white/5 border border-white/10 text-white py-2 rounded-lg hover:bg-white/10 hover:border-cyan-400/50 transition duration-300 hover:scale-110 transform">
              <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </button>
          </div>

          {/* Sign in link */}
          <p className="text-center text-gray-400 mt-6">
            Already have an account? <a href="/login" className="text-cyan-400 font-semibold hover:text-cyan-300 transition duration-300 hover:underline">Sign in</a>
          </p>
        </div>

        {/* Footer text */}
        <p className="text-center text-gray-500 text-xs mt-4">FastAuth © 2024 • Secure & Simple</p>
      </div>
    </div>
  )
}

export default page
