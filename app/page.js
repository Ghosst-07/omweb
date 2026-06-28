"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState("splash");

  useEffect(() => {
    // Scroll reveal fallback for browsers that do not support CSS scroll-driven animations
    if (!CSS.supports("(animation-timeline: view()) and (animation-range: entry)")) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      document.querySelectorAll(".reveal-js").forEach((el) => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-om-950 font-sans text-slate-100 overflow-x-hidden bg-grid">
      
      {/* Background Spotlight glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none z-0 bg-spotlight" />
      <div className="absolute top-[1200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-om-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-[2200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-accent-cyan/5 blur-[150px] pointer-events-none" />

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 w-full glass-nav">
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-om-300/30">
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
              <span className="font-display font-black text-2xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-om-200 to-om-300">
                OM
              </span>
              <span className="text-[10px] uppercase tracking-widest text-om-200/70 font-semibold font-display">
                Oncology Mitra
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-om-200 transition-colors">Features</a>
            <a href="#preview" className="hover:text-om-200 transition-colors">App Preview</a>
            <a href="#team" className="hover:text-om-200 transition-colors">Medical Panel</a>
            <a href="#values" className="hover:text-om-200 transition-colors">Our Approach</a>
          </nav>

          <div>
            <a
              href="#download"
              className="inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-om-500 to-om-300 px-6 text-sm font-bold text-white shadow-lg shadow-om-500/25 transition-all hover:scale-[1.03] hover:shadow-om-500/40 active:scale-[0.98]"
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-om-800/40 border border-om-300/20 text-om-200 text-xs font-semibold uppercase tracking-wider mb-6">
            <svg className="w-3.5 h-3.5 animate-pulse text-om-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            We walk with you
          </div>
          
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-tight text-white mb-6">
            Support for your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-om-300 via-om-200 to-accent-cyan">
              cancer journey
            </span>
          </h1>

          <p className="max-w-xl mx-auto lg:mx-0 text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8">
            Connect instantly with specialized oncology counselors via video, voice, or chat. A safe, confidential, and empathetic space for you and your family.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
            <a
              href="#download"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-om-600 via-om-500 to-om-400 px-8 text-base font-bold text-white shadow-xl shadow-om-500/20 transition-all hover:scale-[1.02] hover:shadow-om-500/35"
            >
              Download OM App
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            <a
              href="#features"
              className="inline-flex h-14 items-center justify-center rounded-full border border-solid border-slate-700/80 px-8 text-base font-bold text-slate-200 transition-colors hover:bg-white/5 hover:border-slate-500"
            >
              Learn More
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 border-t border-slate-800/80 pt-8">
            <div>
              <div className="font-display font-black text-2xl sm:text-3xl text-om-200">24/7</div>
              <div className="text-xs text-slate-400 font-medium">On-Demand Care</div>
            </div>
            <div>
              <div className="font-display font-black text-2xl sm:text-3xl text-accent-cyan">100%</div>
              <div className="text-xs text-slate-400 font-medium">Confidential & Safe</div>
            </div>
            <div>
              <div className="font-display font-black text-2xl sm:text-3xl text-om-100">Top-Tier</div>
              <div className="text-xs text-slate-400 font-medium">Oncologists</div>
            </div>
          </div>
        </div>

        {/* Right Side: Phone Mockup Frame */}
        <div className="flex-1 w-full max-w-sm lg:max-w-md relative flex justify-center">
          
          {/* Neon Ring behind phone */}
          <div className="absolute w-[360px] h-[360px] rounded-full border border-om-500/20 z-0 animate-pulse pointer-events-none" />
          <div className="absolute w-[440px] h-[440px] rounded-full border border-om-300/10 z-0 pointer-events-none" />
          
          <div className="relative w-[300px] sm:w-[320px] aspect-[9/19.5] rounded-[52px] border-4 border-slate-800 bg-slate-900 p-2.5 shadow-2xl shadow-om-950/80 z-10 animate-float">
            
            {/* Dynamic Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30" />
            
            {/* Screen Content Wrapper */}
            <div className="relative w-full h-full rounded-[42px] overflow-hidden border border-slate-700/30">
              
              {/* Tab Screenshots */}
              <div className={`absolute inset-0 transition-opacity duration-700 ${activeTab === "splash" ? "opacity-100 z-20" : "opacity-0 z-10"}`}>
                <Image
                  src="/screenshot-splash.png"
                  alt="OM App Splash Screen"
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>

              <div className={`absolute inset-0 transition-opacity duration-700 ${activeTab === "dashboard1" ? "opacity-100 z-20" : "opacity-0 z-10"}`}>
                <Image
                  src="/screenshot-dashboard-1.png"
                  alt="OM App Dashboard"
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>

              <div className={`absolute inset-0 transition-opacity duration-700 ${activeTab === "dashboard2" ? "opacity-100 z-20" : "opacity-0 z-10"}`}>
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
          <div className="absolute -bottom-8 flex gap-2.5 z-20 bg-slate-900/90 border border-slate-800/80 px-4 py-2.5 rounded-full shadow-lg backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("splash")}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${activeTab === "splash" ? "bg-om-500 text-white" : "text-slate-400 hover:text-white"}`}
            >
              Splash
            </button>
            <button
              onClick={() => setActiveTab("dashboard1")}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${activeTab === "dashboard1" ? "bg-om-500 text-white" : "text-slate-400 hover:text-white"}`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("dashboard2")}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${activeTab === "dashboard2" ? "bg-om-500 text-white" : "text-slate-400 hover:text-white"}`}
            >
              Resources
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-24 bg-slate-950/60 border-y border-slate-900/60">
        <div className="mx-auto max-w-7xl px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll reveal-js">
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
              Designed for Support & Recovery
            </h2>
            <p className="text-lg text-slate-400">
              The Oncology Mitra app brings complete therapeutic resources and support channels directly to your hands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Meditate */}
            <div className="glass-card rounded-3xl p-8 reveal-on-scroll reveal-js">
              <div className="w-14 h-14 rounded-2xl bg-om-500/10 border border-om-500/20 flex items-center justify-center text-om-300 mb-6">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2z" />
                  <path d="M12 6a6 6 0 0 1 6 6c0 3.314-2.686 6-6 6s-6-2.686-6-6a6 6 0 0 1 6-6z" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">Guided Meditation</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Calm your mind and build mental resilience. Practice deep breathing, body scans, and mindfulness sessions tailored to alleviate anxiety.
              </p>
            </div>

            {/* Card 2: Specialists */}
            <div className="glass-card rounded-3xl p-8 reveal-on-scroll reveal-js">
              <div className="w-14 h-14 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan mb-6">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">Oncology Specialists</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Connect and consult with leading oncology counselors, nutritionists, and support coordinators. Schedule quick virtual consults seamlessly.
              </p>
            </div>

            {/* Card 3: Nutrition */}
            <div className="glass-card rounded-3xl p-8 reveal-on-scroll reveal-js">
              <div className="w-14 h-14 rounded-2xl bg-accent-yellow/10 border border-accent-yellow/20 flex items-center justify-center text-accent-yellow mb-6">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">Diet & Nutrition Logs</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Track your oncology meals and maintain appropriate nutrition. Receive customized dietary guidance suitable for different phases of treatment.
              </p>
            </div>

            {/* Card 4: OM Assistant */}
            <div className="glass-card rounded-3xl p-8 reveal-on-scroll reveal-js">
              <div className="w-14 h-14 rounded-2xl bg-om-300/10 border border-om-300/20 flex items-center justify-center text-om-200 mb-6">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8V4H8" />
                  <rect x="3" y="8" width="18" height="12" rx="2" />
                  <circle cx="8" cy="13" r="1.5" />
                  <circle cx="16" cy="13" r="1.5" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">OM Assistant</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Get immediate answers to your queries regarding fatigue management, standard side effects, physical recovery, and day-to-day self-care.
              </p>
            </div>

            {/* Card 5: Resource Library */}
            <div className="glass-card rounded-3xl p-8 reveal-on-scroll reveal-js">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5V4.5z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">Oncology Resource Library</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Access verified clinical guides, relaxing podcasts, audio breathing lessons, and specialized helplines to support you when you need it most.
              </p>
            </div>

            {/* Card 6: Emotional Patterns */}
            <div className="glass-card rounded-3xl p-8 reveal-on-scroll reveal-js">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">Mood & Pattern Tracking</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Keep a log of emotional cycles, energy levels, and side-effect severity. Gain clear visual insights to share with your medical team.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive App Preview Showcase */}
      <section id="preview" className="relative z-10 py-24 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll reveal-js">
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
              Explore the Interface
            </h2>
            <p className="text-lg text-slate-400">
              Designed with care, clarity, and simplicity for cancer patients and caregivers.
            </p>
          </div>

          {/* Screenshot slider layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            {/* Left Info: Splash */}
            <div className="glass-card rounded-3xl p-8 border border-slate-800 reveal-on-scroll reveal-js">
              <div className="inline-block px-3 py-1 rounded-full bg-om-800/60 border border-om-500/20 text-xs font-bold text-om-200 mb-4 uppercase tracking-wider">
                Step 1: Get Started
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white mb-3">Empathetic Onboarding</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                A warm, safe environment from the very first tap. OM greets users with guidance and specialized, secure authentication.
              </p>
              <div className="relative aspect-[9/19.5] w-full max-w-[240px] mx-auto rounded-[32px] overflow-hidden border border-slate-700/50 shadow-xl">
                <Image
                  src="/screenshot-splash.png"
                  alt="Onboarding Screenshot"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Middle Info: Dashboard */}
            <div className="glass-card rounded-3xl p-8 border-2 border-om-500/40 shadow-om-500/10 shadow-2xl relative scale-105 z-20 reveal-on-scroll reveal-js">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-om-500 text-xs font-black text-white uppercase tracking-wider shadow-md">
                Highly Recommended
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-om-800/60 border border-om-500/20 text-xs font-bold text-om-200 mb-4 uppercase tracking-wider">
                Step 2: Core Care
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white mb-3">Daily Plan & Action</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Stay updated on daily check-ins, medical consults, nutrition objectives, and guided mindfulness routines designed for your cycle.
              </p>
              <div className="relative aspect-[9/19.5] w-full max-w-[240px] mx-auto rounded-[32px] overflow-hidden border border-slate-700/50 shadow-xl">
                <Image
                  src="/screenshot-dashboard-1.png"
                  alt="Dashboard Screenshot"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Info: Live Sessions */}
            <div className="glass-card rounded-3xl p-8 border border-slate-800 reveal-on-scroll reveal-js">
              <div className="inline-block px-3 py-1 rounded-full bg-om-800/60 border border-om-500/20 text-xs font-bold text-om-200 mb-4 uppercase tracking-wider">
                Step 3: Access Panel
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white mb-3">Live Specialist Rooms</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Join live interaction rooms with expert oncologists discussing fatigue, medication, anxiety, nutrition, and clinical milestones.
              </p>
              <div className="relative aspect-[9/19.5] w-full max-w-[240px] mx-auto rounded-[32px] overflow-hidden border border-slate-700/50 shadow-xl">
                <Image
                  src="/screenshot-dashboard-2.png"
                  alt="Specialist Rooms Screenshot"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team / Doctors Section */}
      <section id="team" className="relative z-10 py-24 bg-slate-950/70 border-t border-slate-900/60">
        <div className="mx-auto max-w-7xl px-6">
          
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left side: Image of Doctors */}
            <div className="flex-1 w-full max-w-xl relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-om-500 to-accent-cyan rounded-3xl blur-xl opacity-30 z-0" />
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl z-10">
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
            <div className="flex-1 reveal-on-scroll reveal-js">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-om-800/40 border border-om-300/20 text-om-200 text-xs font-semibold uppercase tracking-wider mb-6">
                Empathetic Medical Team
              </div>
              
              <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-6">
                Specialized Cancer Care Specialists
              </h2>

              <p className="text-slate-300 leading-relaxed mb-8">
                Our board-certified oncologists, oncology-trained therapists, psychologists, and clinical nutritionists are unified by a single core promise: <strong>we walk with you</strong>. We deliver holistic, structured guidance to make your recovery plan clear, supportive, and compassionate.
              </p>

              {/* Doctors/Office Badges */}
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-xl bg-om-800/50 border border-om-300/10 text-slate-200 text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-om-400" />
                  Emotional Support
                </span>
                <span className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-xl bg-om-800/50 border border-om-300/10 text-slate-200 text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                  Caregiver Support
                </span>
                <span className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-xl bg-om-800/50 border border-om-300/10 text-slate-200 text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Support Groups
                </span>
                <span className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-xl bg-om-800/50 border border-om-300/10 text-slate-200 text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-accent-yellow" />
                  Expert Guidance
                </span>
                <span className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-xl bg-om-800/50 border border-om-300/10 text-slate-200 text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  Wellbeing Programs
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Compassion Banner (Ribbon & Quotes Block) */}
      <section id="values" className="relative z-10 py-28 bg-gradient-to-b from-om-950 to-om-900 border-t border-slate-900/60 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
          
          <div className="w-20 h-20 mx-auto rounded-full bg-om-500/10 border border-om-500/25 flex items-center justify-center mb-8 text-om-300 shadow-lg shadow-om-500/5">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>

          <blockquote className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-white mb-8 reveal-on-scroll reveal-js max-w-4xl mx-auto">
            &ldquo;Because every cancer journey deserves care, compassion, and support.&rdquo;
          </blockquote>
          
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-om-300 to-transparent mx-auto mb-6" />

          <p className="font-display text-xl sm:text-2xl text-om-100/90 font-bold uppercase tracking-widest reveal-on-scroll reveal-js">
            You are not alone. We are here.
          </p>

        </div>
      </section>

      {/* Download CTA Section */}
      <section id="download" className="relative z-10 py-24 bg-slate-950 border-t border-slate-900/60">
        <div className="mx-auto max-w-7xl px-6">
          <div className="glass-card rounded-[40px] p-8 sm:p-16 relative overflow-hidden border border-om-300/10 bg-gradient-to-br from-om-900/90 via-om-950/80 to-slate-950">
            
            {/* Visual spotlight inside card */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-om-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent-cyan/10 blur-[100px] pointer-events-none" />

            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-6">
                Start Your Safe Journey with OM
              </h2>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Get specialized cancer therapy & support, whenever you need it. Download the app today and find your dedicated companion.
              </p>

              {/* Real SVG App Badges */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                
                {/* App Store Badge */}
                <a
                  href="#"
                  className="flex items-center gap-3 bg-slate-900 hover:bg-slate-805 border border-slate-700/80 rounded-2xl px-6 py-3 w-56 shadow-lg hover:border-slate-500 transition-all hover:scale-[1.02]"
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
                  className="flex items-center gap-3 bg-slate-900 hover:bg-slate-805 border border-slate-700/80 rounded-2xl px-6 py-3 w-56 shadow-lg hover:border-slate-500 transition-all hover:scale-[1.02]"
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
      <footer className="relative z-10 border-t border-slate-900 bg-slate-950 py-12 text-sm text-slate-500">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-om-300/30">
              <Image
                src="/logo.png"
                alt="OM Logo"
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-base text-white tracking-wider">OM</span>
              <span className="text-[8px] uppercase tracking-widest text-slate-400">Oncology Mitra</span>
            </div>
          </div>

          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Oncology Mitra. We walk with you. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Contact Support</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
