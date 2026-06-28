"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState("splash");

  return (
    <div className="relative min-h-screen bg-om-950 font-sans text-slate-800 overflow-x-hidden bg-grid">
      
      {/* Calm background radial glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none z-0 bg-spotlight" />
      <div className="absolute top-[1000px] left-[-200px] w-[500px] h-[500px] rounded-full bg-om-400/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[2000px] right-[-200px] w-[500px] h-[500px] rounded-full bg-accent-cyan/5 blur-[120px] pointer-events-none" />

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 w-full glass-nav">
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-om-400/20">
              <Image
                src="/logo.png"
                alt="OM Logo"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-om-200 via-om-100 to-om-400">
                OM
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold font-display">
                Oncology Mitra
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#how-it-works" className="hover:text-om-400 transition-colors">How it Works</a>
            <a href="#features" className="hover:text-om-400 transition-colors">Features</a>
            <a href="#preview" className="hover:text-om-400 transition-colors">App Preview</a>
            <a href="#team" className="hover:text-om-400 transition-colors">Medical Panel</a>
          </nav>

          <div>
            <a
              href="#download"
              className="inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-om-400 to-om-300 px-6 text-sm font-bold text-white shadow-md shadow-om-400/10 transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Copy */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-om-800 text-om-200 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
            <svg className="w-3.5 h-3.5 text-om-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            We walk with you
          </div>
          
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-tight text-slate-900 mb-6">
            Support for your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-om-300 via-om-400 to-accent-cyan">
              cancer journey
            </span>
          </h1>

          <p className="max-w-xl mx-auto lg:mx-0 text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8">
            Connect instantly with specialized oncology counselors via video, voice, or chat. A calming, safe, confidential, and empathetic space tailored for patients and their families.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
            <a
              href="#download"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-om-400 to-om-300 px-8 text-base font-bold text-white shadow-lg shadow-om-400/25 transition-all hover:scale-[1.02] hover:shadow-om-400/40"
            >
              Download OM App
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            <a
              href="#how-it-works"
              className="inline-flex h-14 items-center justify-center rounded-full border border-solid border-slate-300 bg-white px-8 text-base font-bold text-slate-700 transition-colors hover:bg-slate-50 hover:border-slate-400"
            >
              How It Works
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 border-t border-slate-200 pt-8">
            <div>
              <div className="font-display font-black text-2xl sm:text-3xl text-om-300">24/7</div>
              <div className="text-xs text-slate-500 font-medium">On-Demand Care</div>
            </div>
            <div>
              <div className="font-display font-black text-2xl sm:text-3xl text-accent-cyan">100%</div>
              <div className="text-xs text-slate-500 font-medium">Confidential & Safe</div>
            </div>
            <div>
              <div className="font-display font-black text-2xl sm:text-3xl text-om-200">Top-Tier</div>
              <div className="text-xs text-slate-500 font-medium">Oncologists</div>
            </div>
          </div>
        </div>

        {/* Right Side: Phone Mockup Frame */}
        <div className="flex-1 w-full max-w-sm lg:max-w-md relative flex justify-center">
          
          {/* Subtle Ring behind phone */}
          <div className="absolute w-[360px] h-[360px] rounded-full border border-om-400/10 z-0 pointer-events-none" />
          
          <div className="relative w-[300px] sm:w-[320px] aspect-[9/19.5] rounded-[52px] border-4 border-slate-800/90 bg-slate-900 p-2.5 shadow-xl shadow-om-500/5 z-10 animate-float">
            
            {/* Dynamic Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30" />
            
            {/* Screen Content Wrapper */}
            <div className="relative w-full h-full rounded-[42px] overflow-hidden border border-slate-700/20">
              
              {/* Tab Screenshots */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${activeTab === "splash" ? "opacity-100 z-20" : "opacity-0 z-10"}`}>
                <Image
                  src="/screenshot-splash.png"
                  alt="OM App Splash Screen"
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>

              <div className={`absolute inset-0 transition-opacity duration-500 ${activeTab === "dashboard1" ? "opacity-100 z-20" : "opacity-0 z-10"}`}>
                <Image
                  src="/screenshot-dashboard-1.png"
                  alt="OM App Dashboard"
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>

              <div className={`absolute inset-0 transition-opacity duration-500 ${activeTab === "dashboard2" ? "opacity-100 z-20" : "opacity-0 z-10"}`}>
                <Image
                  src="/screenshot-dashboard-2.png"
                  alt="OM App Resources"
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Quick Mockup Toggles */}
          <div className="absolute -bottom-8 flex gap-2.5 z-20 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-md">
            <button
              onClick={() => setActiveTab("splash")}
              className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-colors ${activeTab === "splash" ? "bg-om-400 text-white" : "text-slate-500 hover:text-slate-800"}`}
            >
              Splash
            </button>
            <button
              onClick={() => setActiveTab("dashboard1")}
              className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-colors ${activeTab === "dashboard1" ? "bg-om-400 text-white" : "text-slate-500 hover:text-slate-800"}`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("dashboard2")}
              className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-colors ${activeTab === "dashboard2" ? "bg-om-400 text-white" : "text-slate-500 hover:text-slate-800"}`}
            >
              Resources
            </button>
          </div>
        </div>
      </section>

      {/* Onboarding Patient Journey ("How It Works") Section */}
      <section id="how-it-works" className="relative z-10 py-24 bg-white border-y border-om-900">
        <div className="mx-auto max-w-7xl px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-om-400 font-bold">Your Companion Path</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 mt-2 mb-4">
              How OM Walks With You
            </h2>
            <p className="text-lg text-slate-500">
              Designed as a gentle step-by-step companion, ensuring you have continuous support during active therapy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="relative glass-card rounded-3xl p-8 bg-slate-50/50 border border-slate-200">
              <div className="absolute top-6 right-8 text-6xl font-display font-black text-om-900">01</div>
              <div className="w-12 h-12 rounded-xl bg-om-400/10 flex items-center justify-center text-om-400 mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-3">Onboard & Coordinate</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Log in securely to customize your dashboard. We gather critical oncology stages and timing to serve plans designed precisely for your condition.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative glass-card rounded-3xl p-8 bg-slate-50/50 border border-slate-200">
              <div className="absolute top-6 right-8 text-6xl font-display font-black text-om-900">02</div>
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-3">Adopt Your Daily Plan</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Access your checklist every morning. Mark breathing targets, check your nutritional milestones, log mood cycles, and keep track of daily recovery indicators.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative glass-card rounded-3xl p-8 bg-slate-50/50 border border-slate-200">
              <div className="absolute top-6 right-8 text-6xl font-display font-black text-om-900">03</div>
              <div className="w-12 h-12 rounded-xl bg-accent-yellow/10 flex items-center justify-center text-accent-yellow mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-3">Live Consulting & Panels</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Enter live audio and video consultation rooms hosted by senior oncologists and clinical counselors. Share experiences securely inside peer support networks.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-24 bg-om-950">
        <div className="mx-auto max-w-7xl px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-widest text-om-400 font-bold">App Capabilities</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 mt-2 mb-4">
              Calming Support Features
            </h2>
            <p className="text-lg text-slate-500">
              Every card below outlines tools built specifically to alleviate clinical anxiety and organize your daily routines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Meditate */}
            <div className="glass-card rounded-3xl p-8 bg-white border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-om-400/10 flex items-center justify-center text-om-400 mb-6">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2z" />
                  <path d="M12 6a6 6 0 0 1 6 6c0 3.314-2.686 6-6 6s-6-2.686-6-6a6 6 0 0 1 6-6z" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-3">Guided Meditation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Quiet your thoughts and build mental resilience. Access targeted breathing sessions, guided body scans, and soothing soundscapes structured to alleviate chemotherapy anxiety.
              </p>
            </div>

            {/* Card 2: Specialists */}
            <div className="glass-card rounded-3xl p-8 bg-white border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mb-6">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-3">Oncology Specialists</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Consult with verified cancer care professionals. Schedule quick virtual coordination calls with oncologists, oncology nurses, psychologists, and clinical nutritionists.
              </p>
            </div>

            {/* Card 3: Nutrition */}
            <div className="glass-card rounded-3xl p-8 bg-white border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-accent-yellow/10 flex items-center justify-center text-accent-yellow mb-6">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-3">Diet & Nutrition Logs</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ensure proper nutritional intake. Document specific cancer therapy dietary guides, track hydration levels, and receive expert meal blueprints for each treatment phase.
              </p>
            </div>

            {/* Card 4: OM Assistant */}
            <div className="glass-card rounded-3xl p-8 bg-white border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-om-400/10 flex items-center justify-center text-om-400 mb-6">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8V4H8" />
                  <rect x="3" y="8" width="18" height="12" rx="2" />
                  <circle cx="8" cy="13" r="1.5" />
                  <circle cx="16" cy="13" r="1.5" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-3">OM Assistant</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Get immediate support queries addressed. Ask our private assistant questions on managing standard fatigue, nausea, physical milestones, and recovery habits.
              </p>
            </div>

            {/* Card 5: Resource Library */}
            <div className="glass-card rounded-3xl p-8 bg-white border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600/10 flex items-center justify-center text-emerald-600 mb-6">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5V4.5z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-3">Resource Library</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Browse clinically validated oncology care brochures, mental check-in worksheets, audio guides, guided relaxation podcasts, and toll-free emergency helplines.
              </p>
            </div>

            {/* Card 6: Emotional Patterns */}
            <div className="glass-card rounded-3xl p-8 bg-white border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-600 mb-6">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-3">Mood & Pattern Tracking</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Log pain metrics, energy variations, and sleep parameters daily. Get structured graphs that summarize weekly symptom maps to share directly with doctors.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive App Preview Showcase */}
      <section id="preview" className="relative z-10 py-24 bg-white border-y border-om-900">
        <div className="mx-auto max-w-7xl px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-om-400 font-bold">Visual Walkthrough</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 mt-2 mb-4">
              Explore the Interface
            </h2>
            <p className="text-lg text-slate-500">
              Carefully designed interfaces featuring soothing colors and highly readable text layers.
            </p>
          </div>

          {/* Screenshot columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
            
            {/* Splash */}
            <div className="glass-card rounded-3xl p-8 bg-slate-50/30 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-om-800 border border-om-700 text-xs font-bold text-om-100 mb-4 uppercase tracking-wider">
                  Step 1: Get Started
                </span>
                <h3 className="font-display font-extrabold text-2xl text-slate-900 mb-3">Onboarding</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Welcome screen introducing users to therapeutic cancer support. Empathy-focused layouts greet users, setting a tranquil mood.
                </p>
              </div>
              <div className="relative aspect-[9/19.5] w-full max-w-[230px] mx-auto rounded-[32px] overflow-hidden border border-slate-300 shadow-lg">
                <Image
                  src="/screenshot-splash.png"
                  alt="Onboarding Screenshot"
                  fill
                  sizes="230px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Dashboard */}
            <div className="glass-card rounded-3xl p-8 bg-white border-2 border-om-400/30 shadow-xl shadow-om-400/5 relative flex flex-col justify-between">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-om-400 text-[10px] font-black text-white uppercase tracking-wider shadow-sm">
                Primary View
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-om-800 border border-om-700 text-xs font-bold text-om-100 mb-4 uppercase tracking-wider">
                  Step 2: Core Care
                </span>
                <h3 className="font-display font-extrabold text-2xl text-slate-900 mb-3">Daily Plan</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Track completed mindfulness breathing targets, review mood graphs over the last 7 days, and quickly initiate meditation or counselor booking.
                </p>
              </div>
              <div className="relative aspect-[9/19.5] w-full max-w-[230px] mx-auto rounded-[32px] overflow-hidden border border-slate-300 shadow-lg">
                <Image
                  src="/screenshot-dashboard-1.png"
                  alt="Dashboard Screenshot"
                  fill
                  sizes="230px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Live Sessions */}
            <div className="glass-card rounded-3xl p-8 bg-slate-50/30 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-om-800 border border-om-700 text-xs font-bold text-om-100 mb-4 uppercase tracking-wider">
                  Step 3: Access Panel
                </span>
                <h3 className="font-display font-extrabold text-2xl text-slate-900 mb-3">Specialists</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Join interactive session rooms with Dr. Aarav Mehta and other leading oncologists to address fatigue and side effects.
                </p>
              </div>
              <div className="relative aspect-[9/19.5] w-full max-w-[230px] mx-auto rounded-[32px] overflow-hidden border border-slate-300 shadow-lg">
                <Image
                  src="/screenshot-dashboard-2.png"
                  alt="Specialist Rooms Screenshot"
                  fill
                  sizes="230px"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team / Doctors Section */}
      <section id="team" className="relative z-10 py-24 bg-om-950">
        <div className="mx-auto max-w-7xl px-6">
          
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left side: Image of Doctors */}
            <div className="flex-1 w-full max-w-xl relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-om-400 to-accent-cyan rounded-3xl blur-lg opacity-10 z-0" />
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-lg z-10">
                <Image
                  src="/doctors.jpg"
                  alt="Oncology Mitra Medical Panel"
                  fill
                  sizes="576px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right side: Panel Description & Badges */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-om-100 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
                Empathetic Medical Team
              </div>
              
              <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 mb-6">
                Specialized Cancer Care Specialists
              </h2>

              <p className="text-slate-600 leading-relaxed mb-8">
                Our board-certified oncologists, oncology-trained therapists, psychologists, and clinical nutritionists are unified by a single core promise: <strong>we walk with you</strong>. We deliver holistic, structured guidance to make your recovery plan clear, supportive, and compassionate.
              </p>

              {/* Doctors/Office Badges with descriptive headings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-om-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Emotional Support</h4>
                    <p className="text-xs text-slate-500">Therapists specialized in anxiety during cycles.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Caregiver Support</h4>
                    <p className="text-xs text-slate-500">Coordinating therapy resources for families.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Support Groups</h4>
                    <p className="text-xs text-slate-500">Peer groups discussing side effects & habits.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-yellow flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Expert Guidance</h4>
                    <p className="text-xs text-slate-500">Consultations with clinical staff & coordinators.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Compassion Banner (Ribbon & Quotes Block) */}
      <section id="values" className="relative z-10 py-24 bg-om-900 border-t border-om-800">
        <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
          
          <div className="w-20 h-20 mx-auto rounded-full bg-om-400/10 border border-om-400/25 flex items-center justify-center mb-8 text-om-100 shadow-sm">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>

          <blockquote className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-slate-900 mb-8 max-w-4xl mx-auto">
            &ldquo;Because every cancer journey deserves care, compassion, and support.&rdquo;
          </blockquote>
          
          <div className="h-[2.5px] w-24 bg-gradient-to-r from-transparent via-om-400 to-transparent mx-auto mb-6" />

          <p className="font-display text-xl sm:text-2xl text-om-100 font-bold uppercase tracking-widest">
            You are not alone. We are here.
          </p>

        </div>
      </section>

      {/* Download CTA Section */}
      <section id="download" className="relative z-10 py-24 bg-white border-t border-om-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="glass-card rounded-[40px] p-8 sm:p-16 relative overflow-hidden border border-om-800 bg-gradient-to-br from-[#FDFCFD] to-[#FAF9FC]">
            
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 mb-6">
                Start Your Calming Journey with OM
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                Get specialized cancer therapy & support, whenever you need it. Download the app today and find your dedicated companion.
              </p>

              {/* Real SVG App Badges */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                
                {/* App Store Badge */}
                <a
                  href="#"
                  className="flex items-center gap-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-2xl px-6 py-3 w-56 shadow-md transition-all hover:scale-[1.02]"
                >
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.1 16.67C20.08 16.74 19.67 18.11 18.71 19.5M15.97 4.17C16.63 3.37 17.07 2.28 16.95 1C15.99 1.04 14.83 1.64 14.14 2.45C13.53 3.17 13 4.28 13.15 5.54C14.21 5.62 15.3 5 15.97 4.17Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Download on the</div>
                    <div className="text-sm font-bold text-white font-display">App Store</div>
                  </div>
                </a>

                {/* Google Play Badge */}
                <a
                  href="#"
                  className="flex items-center gap-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-2xl px-6 py-3 w-56 shadow-md transition-all hover:scale-[1.02]"
                >
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 5.27v13.46c0 .91.95 1.5 1.76 1.08l12.88-6.73a1.2 1.2 0 0 0 0-2.16L4.76 4.19C3.95 3.77 3 4.36 3 5.27zm1.8 1.58L15 12 4.8 17.15V6.85z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Get it on</div>
                    <div className="text-sm font-bold text-white font-display">Google Play</div>
                  </div>
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200 bg-white py-12 text-sm text-slate-500">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-om-400/20">
              <Image
                src="/logo.png"
                alt="OM Logo"
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-base text-slate-800 tracking-wider">OM</span>
              <span className="text-[8px] uppercase tracking-widest text-slate-400">Oncology Mitra</span>
            </div>
          </div>

          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Oncology Mitra. We walk with you. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-800 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-800 transition-colors">Contact Support</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
