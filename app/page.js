"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [phoneScreen, setPhoneScreen] = useState("home");
  const [selectedMood, setSelectedMood] = useState(null);

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-white font-sans text-[#1A1725] overflow-x-hidden">

      {/* Preloader */}
      <div className={`fixed inset-0 bg-[#FAF8FD] z-[9999] flex flex-col items-center justify-center transition-transform duration-[850ms] ease-[cubic-bezier(0.85,0,0.15,1)] pointer-events-none ${isLoaded ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="w-16 h-16 rounded-full overflow-hidden border border-om-400/20 bg-white animate-logo-pulse shadow-premium flex items-center justify-center">
          <img src="/logo.png" alt="OM Logo" className="w-full h-full object-cover" />
        </div>
        <div className="mt-6 flex flex-col items-center">
          <img src="/logo-text.png" alt="Oncology Mitra" className="h-11 w-auto object-contain" />
          <div className="w-48 h-1 bg-om-900 rounded-full overflow-hidden mt-4">
            <div className="h-full bg-om-400 rounded-full animate-progress" />
          </div>
        </div>
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 w-full glass-nav shadow-sm">
        <div className="mx-auto max-w-[1400px] px-6 h-28 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-full overflow-hidden border border-om-400/20 bg-white flex-shrink-0 shadow-sm">
              <img src="/logo.png" alt="OM Logo" className="w-full h-full object-cover" />
            </div>
            <img src="/logo-text.png" alt="Oncology Mitra" className="h-10 w-auto object-contain" />
          </div>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 text-[12px] font-bold text-slate-700">
            <a href="#" className="hover:text-om-400 transition-colors border-b-2 border-om-400 pb-1 text-om-400">Home</a>
            <a href="#how-it-works" className="hover:text-om-400 transition-colors pb-1">About Us</a>
            <a href="#services" className="hover:text-om-400 transition-colors pb-1 flex items-center gap-1">
              Our Services

            </a>
            <a href="#how-it-works" className="hover:text-om-400 transition-colors pb-1">For Patients</a>
            <a href="#community" className="hover:text-om-400 transition-colors pb-1">OM Community</a>
            <a href="#resources" className="hover:text-om-400 transition-colors pb-1 flex items-center gap-1">
              Resources            </a>
            <a href="#contact" className="hover:text-om-400 transition-colors pb-1">Contact Us</a>
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2 border border-slate-200 rounded-full px-4 py-2 bg-white shadow-xs">
              <svg className="w-4 h-4 text-om-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span className="text-xs font-bold text-slate-800">+91 95654 45699</span>
            </div>
            <a
              href="#download"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-om-400 hover:bg-om-300 px-6 text-xs font-bold text-white shadow-sm transition-colors"
            >
              Download App
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 w-full overflow-hidden bg-gradient-to-br from-[#F5F2FC] to-white pt-10 pb-0">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex flex-col lg:flex-row items-stretch gap-10">

            {/* Left Column Content */}
            <div className="lg:w-[45%] text-left flex flex-col justify-center pb-16 pt-10">

              <h1 className="font-serif font-black text-5xl sm:text-[64px] leading-[1.1] tracking-tight text-[#1A1725]">
                You focus on <br />
                healing. <br />
                <span className="text-om-400">
                  We walk <br />
                  with you.
                </span>
              </h1>

              <p className="text-slate-700 text-[15px] font-medium leading-relaxed mt-6 max-w-md">
                Oncology Mitra is a holistic cancer support platform with certified onco coaches, therapies and a compassionate community to transform your difficult journey into a painless path.
              </p>

              {/* Horizontal Features */}
              <div className="flex items-center gap-6 mt-8 mb-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-om-900 flex items-center justify-center text-om-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                  <span className="text-[10px] font-bold text-slate-800 leading-tight w-16">Certified<br />Onco Coaches</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-om-900 flex items-center justify-center text-om-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </div>
                  <span className="text-[10px] font-bold text-slate-800 leading-tight w-16">Holistic<br />Wellness</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-om-900 flex items-center justify-center text-om-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <span className="text-[10px] font-bold text-slate-800 leading-tight w-20">Compassionate<br />Community</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-om-900 flex items-center justify-center text-om-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <span className="text-[10px] font-bold text-slate-800 leading-tight w-20">Safe. Trusted.<br />Confidential.</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-6">
                <a href="#download" className="inline-flex h-12 items-center justify-center rounded-lg bg-om-400 hover:bg-om-300 px-6 text-xs font-bold text-white shadow-md transition-transform hover:scale-[1.02]">
                  Download the OM App &rarr;
                </a>
                <a href="#video" className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-om-400 transition-colors group">
                  <div className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center group-hover:border-om-400 transition-colors">
                    <svg className="w-4 h-4 ml-0.5 text-om-400" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                  Watch Our Story
                </a>
              </div>
            </div>

            {/* Right Side (Image + Vertical Overlay) */}
            <div className="lg:w-[55%] relative flex items-end">

              <div className="absolute top-0 bottom-0 -left-10 right-0 z-0 overflow-hidden rounded-r-2xl">
                <div className="w-full h-full relative" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 100%)' }}>
                  <img src="/doctors.jpg" alt="Medical Panel" className="w-full h-full object-cover object-center" />
                </div>
              </div>

              {/* iPhone Mockup Sliding Card */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center transition-all duration-500 transform translate-x-[92%] hover:translate-x-[-15px] group">
                {/* Pull / Slide Indicator Handle */}
                <div className="flex flex-col items-center gap-1.5 opacity-80 bg-slate-900/80 p-2.5 rounded-l-xl text-white mr-[-1px] shadow-lg border border-r-0 border-white/10 cursor-pointer">
                  <svg className="w-5 h-5 animate-pulse text-om-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                  <span className="text-[9px] font-black uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 text-white/90">OM App</span>
                </div>

                {/* iPhone Frame */}
                <div className="w-[280px] h-[550px] bg-slate-950 rounded-[44px] p-2.5 shadow-2xl border-4 border-slate-800 flex-shrink-0 relative overflow-hidden flex flex-col justify-between">
                  {/* Dynamic Island */}
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-full z-30 flex items-center border border-slate-900">
                    <div className="w-1.5 h-1.5 bg-[#0f172a] rounded-full border border-blue-900/40 ml-auto mr-2"></div>
                  </div>

                  {/* App Screen Container (Light Design) */}
                  <div className="w-full h-full bg-slate-50 rounded-[34px] overflow-hidden p-5 pt-8 flex flex-col text-slate-800 relative">
                    
                    {/* Status Bar */}
                    <div className="flex justify-between items-center text-[9px] text-slate-500 font-bold px-1.5 mb-3">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <svg className="w-3 h-3 fill-current text-slate-500" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                        <svg className="w-2.5 h-2.5 fill-current text-slate-500" viewBox="0 0 24 24"><path d="M17 5H3a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2z" /></svg>
                      </div>
                    </div>

                    {/* APP SCREENS */}

                    {/* Screen 1: Home Screen */}
                    {phoneScreen === "home" && (
                      <div className="flex flex-col flex-1">
                        {/* App Logo & Title */}
                        <div className="flex items-center gap-1.5 justify-center mb-3">
                          <img src="/logo.png" alt="OM Logo" className="w-6 h-6 object-cover scale-[1.15] rounded-full" />
                          <span className="font-serif font-black text-xs text-om-400">Oncology Mitra</span>
                        </div>

                        {/* Daily checkin card */}
                        <div className="bg-gradient-to-r from-om-400 to-[#2a1c52] rounded-xl p-3 text-white mb-3 text-left">
                          <div className="text-[7px] font-bold text-white/70 uppercase tracking-wider">Daily Wellness</div>
                          <div className="font-bold text-[11px] mt-0.5">Hello, Friend 👋</div>
                          <div className="text-[8px] mt-0.5 opacity-90">Daily plan: 60% completed</div>
                        </div>

                        {/* Menu Options */}
                        <div className="flex flex-col gap-2 flex-1">
                          <button onClick={() => setPhoneScreen("mind")} className="flex items-center justify-between bg-white p-2 rounded-lg shadow-xs border border-slate-100 text-left hover:bg-slate-100 transition-colors">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-full bg-purple-55 flex items-center justify-center text-om-400"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg></div>
                              <div className="flex flex-col leading-tight"><span className="text-[10px] font-bold text-slate-800">Mind</span><span className="text-[7.5px] text-slate-400">Meditation & recovery</span></div>
                            </div>
                            <span className="text-slate-300 text-xs font-bold">&rarr;</span>
                          </button>

                          <button onClick={() => setPhoneScreen("body")} className="flex items-center justify-between bg-white p-2 rounded-lg shadow-xs border border-slate-100 text-left hover:bg-slate-100 transition-colors">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                              <div className="flex flex-col leading-tight"><span className="text-[10px] font-bold text-slate-800">Body</span><span className="text-[7.5px] text-slate-400">Nutrition & yoga</span></div>
                            </div>
                            <span className="text-slate-300 text-xs font-bold">&rarr;</span>
                          </button>

                          <button onClick={() => setPhoneScreen("emotions")} className="flex items-center justify-between bg-white p-2 rounded-lg shadow-xs border border-slate-100 text-left hover:bg-slate-100 transition-colors">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-full bg-rose-50 flex items-center justify-center text-rose-500"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                              <div className="flex flex-col leading-tight"><span className="text-[10px] font-bold text-slate-800">Emotions</span><span className="text-[7.5px] text-slate-400">Journal & counseling</span></div>
                            </div>
                            <span className="text-slate-300 text-xs font-bold">&rarr;</span>
                          </button>

                          <button onClick={() => setPhoneScreen("life")} className="flex items-center justify-between bg-white p-2 rounded-lg shadow-xs border border-slate-100 text-left hover:bg-slate-100 transition-colors">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-full bg-amber-55 flex items-center justify-center text-amber-600"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></div>
                              <div className="flex flex-col leading-tight"><span className="text-[10px] font-bold text-slate-800">Life</span><span className="text-[7.5px] text-slate-400">Reminders & advocacy</span></div>
                            </div>
                            <span className="text-slate-300 text-xs font-bold">&rarr;</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Screen 2: Mind Screen */}
                    {phoneScreen === "mind" && (
                      <div className="flex flex-col flex-1 text-center">
                        <div className="flex items-center mb-3">
                          <button onClick={() => setPhoneScreen("home")} className="text-[10px] text-om-400 font-bold flex items-center">&larr; Back</button>
                          <span className="text-[11px] font-bold text-slate-800 ml-auto">Mindfulness</span>
                        </div>
                        <div className="flex flex-col items-center justify-center flex-1 bg-white border border-slate-100 rounded-xl p-4 shadow-xs">
                          <div className="w-20 h-20 rounded-full bg-purple-55 flex items-center justify-center border-4 border-purple-100 animate-pulse mb-3">
                            <span className="text-[8px] font-bold text-purple-600 uppercase tracking-widest">Breathe</span>
                          </div>
                          <h4 className="text-[11px] font-bold text-slate-800 mb-1">Guided Relaxation</h4>
                          <p className="text-[8px] text-slate-500 mb-3 px-2 leading-relaxed">Relax and inhale gently for 4 seconds, hold, and slowly exhale.</p>
                          <button className="px-3.5 py-1 bg-om-400 text-white rounded-full text-[8.5px] font-bold shadow-sm">Play Audio (5 min)</button>
                        </div>
                      </div>
                    )}

                    {/* Screen 3: Body Screen */}
                    {phoneScreen === "body" && (
                      <div className="flex flex-col flex-1">
                        <div className="flex items-center mb-3">
                          <button onClick={() => setPhoneScreen("home")} className="text-[10px] text-om-400 font-bold flex items-center">&larr; Back</button>
                          <span className="text-[11px] font-bold text-slate-800 ml-auto">Body & Yoga</span>
                        </div>
                        <div className="flex flex-col gap-2.5 flex-1 text-left">
                          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-2.5">
                            <div className="text-[9px] font-bold text-emerald-800">🧘 Yoga Therapy</div>
                            <div className="text-[7.5px] text-slate-500 leading-snug mt-0.5">Gentle routines to ease fatigue & improve sleep.</div>
                          </div>
                          <div className="bg-blue-50 border border-blue-100 rounded-xl p-2.5">
                            <div className="text-[9px] font-bold text-blue-800">🚶 Activity Tracker</div>
                            <div className="text-[7.5px] text-slate-500 leading-snug mt-0.5">Walk 25 mins daily. 80% of today's target achieved.</div>
                          </div>
                          <div className="bg-amber-50 border border-amber-100 rounded-xl p-2.5">
                            <div className="text-[9px] font-bold text-amber-800">🍏 Anti-Inflammatory Diet</div>
                            <div className="text-[7.5px] text-slate-500 leading-snug mt-0.5">Antioxidant smoothies & immunity booster meals.</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Screen 4: Emotions Screen */}
                    {phoneScreen === "emotions" && (
                      <div className="flex flex-col flex-1 text-center">
                        <div className="flex items-center mb-3">
                          <button onClick={() => setPhoneScreen("home")} className="text-[10px] text-om-400 font-bold flex items-center">&larr; Back</button>
                          <span className="text-[11px] font-bold text-slate-800 ml-auto">Mood Check</span>
                        </div>
                        <div className="bg-white border border-slate-100 rounded-xl p-3 flex-1 flex flex-col justify-center shadow-xs">
                          <span className="text-[10px] font-bold text-slate-700 mb-3">How are you feeling today?</span>
                          <div className="flex gap-2 justify-center mb-4">
                            {["😊", "😐", "😔", "😢"].map((mood, i) => (
                              <button key={i} onClick={() => setSelectedMood(mood)} className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm hover:scale-105 transition-transform ${selectedMood === mood ? 'bg-purple-100 border-om-400' : 'bg-slate-50 border-slate-150'}`}>{mood}</button>
                            ))}
                          </div>
                          {selectedMood ? (
                            <div className="bg-rose-50 border border-rose-100 rounded-lg p-2.5 text-[8.5px] text-rose-800 leading-relaxed">
                              {selectedMood === "😊" && "Wonderful! Keeping a positive outlook is vital."}
                              {selectedMood === "😐" && "It is fine to have quiet days. Take it easy."}
                              {selectedMood === "😔" && "Sending care. Tap 'Chat' to talk to Coach Sneha."}
                              {selectedMood === "😢" && "You're not alone. We are here to support you."}
                            </div>
                          ) : (
                            <span className="text-[8px] text-slate-400 italic">Select an emoji to log mood</span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Screen 5: Life Screen */}
                    {phoneScreen === "life" && (
                      <div className="flex flex-col flex-1">
                        <div className="flex items-center mb-3">
                          <button onClick={() => setPhoneScreen("home")} className="text-[10px] text-om-400 font-bold flex items-center">&larr; Back</button>
                          <span className="text-[11px] font-bold text-slate-800 ml-auto">Reminders</span>
                        </div>
                        <div className="flex flex-col gap-2.5 flex-1 text-left">
                          <div className="bg-slate-100 rounded-xl p-2.5 border border-slate-200">
                            <div className="text-[9.5px] font-bold text-slate-800">📅 Live Coaching Call</div>
                            <div className="text-[8px] text-slate-500 mt-0.5">Tomorrow, 11:00 AM with Coach Sneha</div>
                          </div>
                          <div className="bg-slate-100 rounded-xl p-2.5 border border-slate-200">
                            <div className="text-[9.5px] font-bold text-slate-800">💊 Pills Tracker</div>
                            <div className="text-[8px] text-slate-500 mt-0.5">Next dose: Afternoon, 2:30 PM</div>
                          </div>
                          <div className="bg-slate-100 rounded-xl p-2.5 border border-slate-200">
                            <div className="text-[9.5px] font-bold text-slate-800">🛡️ Advocacy Assist</div>
                            <div className="text-[8px] text-slate-500 mt-0.5">Insurance authorization request approved.</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Screen 6: Coach Chat Screen */}
                    {phoneScreen === "chat" && (
                      <div className="flex flex-col flex-1 text-left">
                        <div className="flex items-center mb-2">
                          <span className="text-[11px] font-bold text-slate-800">Coach Sneha</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-1.5"></span>
                        </div>
                        <div className="flex flex-col flex-1 bg-slate-100 rounded-xl p-2.5 justify-between shadow-inner overflow-hidden">
                          <div className="flex flex-col gap-2 overflow-y-auto pr-1">
                            <div className="flex flex-col items-start text-[8px]">
                              <span className="text-[7px] text-slate-400 mb-0.5">Sneha • 10:15 AM</span>
                              <div className="bg-white text-slate-800 p-2 rounded-r-lg rounded-bl-lg shadow-xs max-w-[85%] border border-slate-200 leading-snug">Hi! How are you feeling after yesterday's yoga therapy?</div>
                            </div>
                            <div className="flex flex-col items-end text-[8px]">
                              <span className="text-[7px] text-slate-400 mb-0.5">You • 10:18 AM</span>
                              <div className="bg-om-400 text-white p-2 rounded-l-lg rounded-br-lg shadow-xs max-w-[85%] leading-snug">Much better! The fatigue is far more manageable.</div>
                            </div>
                          </div>
                          <div className="mt-2 flex gap-1 items-center bg-white border border-slate-200 rounded-full p-1 pl-2.5 shadow-xs">
                            <span className="text-slate-400 flex-1 text-[8.5px]">Type reply...</span>
                            <button className="w-4 h-4 rounded-full bg-om-400 flex items-center justify-center text-white text-[8px] font-bold">&uarr;</button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Screen 7: Community Feed Screen */}
                    {phoneScreen === "community" && (
                      <div className="flex flex-col flex-1 text-left">
                        <div className="flex items-center mb-2">
                          <span className="text-[11px] font-bold text-slate-800">OM Community</span>
                        </div>
                        <div className="flex flex-col gap-2 flex-1 overflow-y-auto pr-0.5">
                          <div className="bg-white border border-slate-200 rounded-xl p-2.5 shadow-xs">
                            <div className="flex items-center gap-1.5 mb-1">
                              <div className="w-3.5 h-3.5 rounded-full bg-purple-100 text-om-400 flex items-center justify-center text-[7px] font-bold">PS</div>
                              <span className="text-[9px] font-bold">Priya S.</span>
                              <span className="text-[7.5px] text-slate-400 ml-auto">2h ago</span>
                            </div>
                            <p className="text-[8px] text-slate-600 leading-relaxed">Clean PET scan reports today! Yay! Thank you for the positive vibes guys 🙏❤️</p>
                          </div>
                          <div className="bg-white border border-slate-200 rounded-xl p-2.5 shadow-xs">
                            <div className="flex items-center gap-1.5 mb-1">
                              <div className="w-3.5 h-3.5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[7px] font-bold">AK</div>
                              <span className="text-[9px] font-bold">Amit K.</span>
                              <span className="text-[7.5px] text-slate-400 ml-auto">4h ago</span>
                            </div>
                            <p className="text-[8px] text-slate-600 leading-relaxed">The breathing exercises in the app did wonders for my chemo nausea today. Highly recommended.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Bottom Navigation Bar */}
                    <div className="mt-auto pt-2 border-t border-slate-100 flex justify-around text-[9px] font-bold text-slate-400 bg-slate-50">
                      <button onClick={() => setPhoneScreen("home")} className={`flex flex-col items-center gap-0.5 transition-colors ${phoneScreen !== "chat" && phoneScreen !== "community" ? 'text-om-400' : 'hover:text-slate-600'}`}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 00-1-1h-2a1 1 0 00-1 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        <span>Home</span>
                      </button>
                      <button onClick={() => setPhoneScreen("chat")} className={`flex flex-col items-center gap-0.5 transition-colors ${phoneScreen === "chat" ? 'text-om-400' : 'hover:text-slate-600'}`}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                        <span>Chat</span>
                      </button>
                      <button onClick={() => setPhoneScreen("community")} className={`flex flex-col items-center gap-0.5 transition-colors ${phoneScreen === "community" ? 'text-om-400' : 'hover:text-slate-600'}`}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span>Feed</span>
                      </button>
                    </div>

                    {/* iOS Home Indicator Bar */}
                    <div className="w-20 h-1 bg-slate-300 rounded-full mx-auto mt-2 flex-shrink-0"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Sub-Hero Banner */}
      <section className="bg-[#422C7C] text-white">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-3">

            {/* Col 1 */}
            <div className="flex items-center gap-6 p-6">
              <div className="w-40 h-24 flex-shrink-0 rounded-lg overflow-hidden shadow-inner">
                <img src="/holding_hands.jpg" alt="Holding Hands" className="w-full h-full object-cover" />
              </div>
              <p className="font-bold text-sm leading-snug">
                Cancer isn't just treated—it's fought. And we're here to fight with you
              </p>
            </div>

            {/* Col 2 */}
            <div className="flex items-center gap-6 p-6 lg:border-l border-white/20">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 16v.01M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <p className="text-[13px] leading-relaxed">
                We don't replace medical care. <br />
                We complement your journey with holistic support, therapies and care.
              </p>
            </div>

            {/* Col 3 */}
            <div className="flex items-center gap-6 p-6 lg:border-l border-white/20">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-om-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="text-[13px] leading-relaxed">
                All our onco coaches are certified professionals with specialized training and experience.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Holistic Support Services Section */}
      <section id="services" className="relative z-10 py-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-6">

          <div className="text-center mb-16">
            <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#1A1725]">
              Holistic Support Services
            </h2>
            <div className="flex items-center justify-center mt-3">
              <div className="h-[1px] w-12 bg-slate-200"></div>
              <svg className="w-4 h-4 mx-2 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              <div className="h-[1px] w-12 bg-slate-200"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">

            {/* Card 1 */}
            <div className="border border-slate-150 bg-white rounded-2xl p-5 flex flex-col justify-start gap-4 hover:border-om-400/40 transition-colors shadow-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-om-900 flex items-center justify-center flex-shrink-0 text-om-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10H6v-2h12v2zm0-3H6V7h12v2z" /></svg>
                </div>
                <h4 className="font-bold text-[#1A1725] text-[13px] leading-tight">Counselling &amp; Guidance</h4>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed font-medium">Expert onco counselling to help you understand, decide and stay strong.</p>
            </div>

            {/* Card 2 */}
            <div className="border border-slate-150 bg-white rounded-2xl p-5 flex flex-col justify-start gap-4 hover:border-om-400/40 transition-colors shadow-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F3F4F6] flex items-center justify-center flex-shrink-0 text-slate-700">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707" /></svg>
                </div>
                <h4 className="font-bold text-[#1A1725] text-[13px] leading-tight">Nutrition &amp; Diet Planning</h4>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed font-medium">Personalized nutrition plans to build strength, immunity and energy.</p>
            </div>

            {/* Card 3 */}
            <div className="border border-slate-150 bg-white rounded-2xl p-5 flex flex-col justify-start gap-4 hover:border-om-400/40 transition-colors shadow-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-om-900 flex items-center justify-center flex-shrink-0 text-om-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <h4 className="font-bold text-[#1A1725] text-[13px] leading-tight">Yoga &amp; Meditation</h4>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed font-medium">Therapeutic yoga and mindfulness to reduce stress and improve well-being.</p>
            </div>

            {/* Card 4 */}
            <div className="border border-slate-150 bg-white rounded-2xl p-5 flex flex-col justify-start gap-4 hover:border-om-400/40 transition-colors shadow-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F3EDFC] flex items-center justify-center flex-shrink-0 text-om-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <h4 className="font-bold text-[#1A1725] text-[13px] leading-tight">Alternative Therapies</h4>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed font-medium">Evidence informed therapies to support your body, mind and spirit.</p>
            </div>

            {/* Card 5 */}
            <div className="border border-slate-150 bg-white rounded-2xl p-5 flex flex-col justify-start gap-4 hover:border-om-400/40 transition-colors shadow-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FEF3C7] flex items-center justify-center flex-shrink-0 text-orange-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                </div>
                <h4 className="font-bold text-[#1A1725] text-[13px] leading-tight">Art <br />Therapy</h4>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed font-medium">Express, explore and heal through creative self-expression.</p>
            </div>

            {/* Row 2 */}
            {/* Card 6 */}
            <div className="border border-slate-150 bg-white rounded-2xl p-5 flex flex-col justify-start gap-4 hover:border-om-400/40 transition-colors shadow-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FCE7F3] flex items-center justify-center flex-shrink-0 text-pink-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
                </div>
                <h4 className="font-bold text-[#1A1725] text-[13px] leading-tight">Music Therapy</h4>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed font-medium">Healing through music to uplift mood and reduce anxiety.</p>
            </div>

            {/* Card 7 */}
            <div className="border border-slate-150 bg-white rounded-2xl p-5 flex flex-col justify-start gap-4 hover:border-om-400/40 transition-colors shadow-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
                </div>
                <h4 className="font-bold text-[#1A1725] text-[13px] leading-tight">Sound Healing</h4>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed font-medium">Frequency-based healing to restore inner harmony and deep relaxation.</p>
            </div>

            {/* Card 8 */}
            <div className="border border-slate-150 bg-white rounded-2xl p-5 flex flex-col justify-start gap-4 hover:border-om-400/40 transition-colors shadow-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FCE7F3] flex items-center justify-center flex-shrink-0 text-pink-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="font-bold text-[#1A1725] text-[13px] leading-tight">Mood Tracker</h4>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed font-medium">Track your emotions daily and improve your mental well-being.</p>
            </div>

            {/* Card 9 */}
            <div className="border border-slate-150 bg-white rounded-2xl p-5 flex flex-col justify-start gap-4 hover:border-om-400/40 transition-colors shadow-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-[#3D2678]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" /></svg>
                </div>
                <h4 className="font-bold text-[#1A1725] text-[13px] leading-tight">Books &amp; Journals</h4>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed font-medium">Curated resources to inspire, educate and empower you.</p>
            </div>

            {/* Card 10 */}
            <div className="border border-slate-150 bg-white rounded-2xl p-5 flex flex-col justify-start gap-4 hover:border-om-400/40 transition-colors shadow-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-om-900 flex items-center justify-center flex-shrink-0 text-om-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <h4 className="font-bold text-[#1A1725] text-[13px] leading-tight">OM Community</h4>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed font-medium">A safe and supportive community of patients, survivors and caregivers.</p>
            </div>

          </div>
        </div>
      </section>

      {/* NEW Pricing Section: Choose Your Support Plan */}
      <section id="pricing" className="relative z-10 py-16 bg-[#FAF9FB]">
        <div className="mx-auto max-w-[1400px] px-6">

          <div className="flex flex-col md:flex-row items-end justify-between mb-12">
            <div>
              <h2 className="font-serif font-black text-3xl sm:text-[34px] text-[#1A1725]">
                Choose Your Support Plan
              </h2>
              <p className="text-slate-600 text-sm mt-3 font-medium">
                Unlock special services, priority access and exclusive benefits.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-xs border border-slate-200">
              <svg className="w-4 h-4 text-om-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <span className="text-xs font-bold text-[#422C7C]">Cancel Anytime</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Plan 1: Basic Access */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:border-om-400 hover:shadow-xl hover:z-10">
              <div className="bg-[#422C7C] p-6 text-center text-white">
                <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest mb-1.5 block">Free Plan</span>
                <h3 className="font-bold text-2xl">Basic Access</h3>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-end justify-center mb-6">
                  <span className="font-black text-[42px] text-[#1A1725] leading-none">Free</span>
                  <span className="text-slate-500 text-sm font-medium mb-1 ml-1">/forever</span>
                </div>
                <ul className="flex flex-col gap-3.5 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-om-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-[14px] font-bold text-slate-800 leading-snug">Access to community and resources</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <button className="w-full py-3.5 rounded-lg bg-[#422C7C] hover:bg-om-400 text-white font-bold text-[13px] transition-colors shadow-md">
                    Download App
                  </button>
                </div>
              </div>
            </div>

            {/* Plan 2: Mitra Plus */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:border-om-400 hover:shadow-xl hover:z-10">
              <div className="bg-[#422C7C] p-6 text-center text-white">
                <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest mb-1.5 block">Monthly Plan</span>
                <h3 className="font-bold text-2xl">Mitra Plus</h3>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-end justify-center mb-6">
                  <span className="font-bold text-2xl text-[#1A1725] mr-1">₹</span>
                  <span className="font-black text-[42px] text-[#1A1725] leading-none">499</span>
                  <span className="text-slate-500 text-sm font-medium mb-1 ml-1">/month</span>
                </div>
                <ul className="flex flex-col gap-3.5 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-om-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-[14px] font-bold text-slate-800 leading-snug">Flat 10% OFF on all paid services in the app</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <button className="w-full py-3.5 rounded-lg bg-[#422C7C] hover:bg-om-400 text-white font-bold text-[13px] transition-colors shadow-md">
                    Download App
                  </button>
                </div>
              </div>
            </div>

            {/* Plan 3: Mitra Premium */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md flex flex-col overflow-hidden relative transition-all duration-300 hover:scale-[1.03] hover:border-om-400 hover:shadow-xl hover:z-10">
              <div className="absolute top-0 right-0 bg-[#EAB308] text-white text-[9px] font-black uppercase tracking-wider py-1 px-3 rounded-bl-lg shadow-sm z-20 flex items-center gap-1">
                <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                Most Popular
              </div>
              <div className="bg-[#422C7C] p-6 text-center text-white">
                <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest mb-1.5 block">Monthly Plan</span>
                <h3 className="font-bold text-2xl">Mitra Premium</h3>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-end justify-center mb-6">
                  <span className="font-bold text-2xl text-[#1A1725] mr-1">₹</span>
                  <span className="font-black text-[42px] text-[#1A1725] leading-none">999</span>
                  <span className="text-slate-500 text-sm font-medium mb-1 ml-1">/month</span>
                </div>
                <ul className="flex flex-col gap-3.5 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-om-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-[14px] font-bold text-slate-800 leading-snug">Flat 15% OFF on all paid services in the app</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <button className="w-full py-3.5 rounded-lg bg-[#422C7C] hover:bg-om-400 text-white font-bold text-[13px] transition-colors shadow-md">
                    Download App
                  </button>
                </div>
              </div>
            </div>

            {/* Plan 4: The OM Promise Panel */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:border-om-400 hover:shadow-xl hover:z-10">
              <div className="bg-[#422C7C] p-6 text-center text-white">
                <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest mb-1.5 block">OM Promise</span>
                <h3 className="font-bold text-2xl">Our Promise</h3>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-[12px] text-slate-500 mb-6 leading-relaxed text-center px-1">
                  We are committed to providing a safe, confidential, and judgment-free space where you can find support.
                </p>
                <ul className="flex flex-col gap-3.5 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-om-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-[14px] font-bold text-slate-800 leading-snug">100% Confidential Care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-om-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-[14px] font-bold text-slate-800 leading-snug">Certified Professionals</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <button className="w-full py-3.5 rounded-lg bg-[#422C7C] hover:bg-om-400 text-white font-bold text-[13px] transition-colors shadow-md">
                    Download App
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="relative z-10 py-16 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-[1400px] px-6 text-center">

          <div className="mb-12">
            <h2 className="font-serif font-black text-2xl sm:text-3xl text-slate-900">
              Our Board of Advisory
            </h2>
            <div className="flex items-center justify-center mt-3">
              <div className="h-[1px] w-8 bg-slate-200"></div>
              <svg className="w-3.5 h-3.5 mx-2 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              <div className="h-[1px] w-8 bg-slate-200"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 text-center">

            {/* Advisor 1 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-om-900 border border-om-800 flex items-center justify-center font-sans font-black text-lg text-om-400 mb-3 shadow-xs">AM</div>
              <h4 className="font-bold text-slate-800 text-[11px] leading-tight mb-0.5">Dr. Anjali Mehta</h4>
              <span className="text-[9px] text-slate-500 font-semibold">Psycho-Oncologist</span>
              <p className="text-[8.5px] text-slate-400 mt-0.5">20+ Years Experience</p>
            </div>

            {/* Advisor 2 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-om-900 border border-om-800 flex items-center justify-center font-sans font-black text-lg text-om-400 mb-3 shadow-xs">RK</div>
              <h4 className="font-bold text-slate-800 text-[11px] leading-tight mb-0.5">Dr. Ritesh Kapoor</h4>
              <span className="text-[9px] text-slate-500 font-semibold">Yoga &amp; Wellness Expert</span>
              <p className="text-[8.5px] text-slate-400 mt-0.5">20+ Years Experience</p>
            </div>

            {/* Advisor 3 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-om-900 border border-om-800 flex items-center justify-center font-sans font-black text-lg text-om-400 mb-3 shadow-xs">KR</div>
              <h4 className="font-bold text-slate-800 text-[11px] leading-tight mb-0.5">Ms. Kavita Rao</h4>
              <span className="text-[9px] text-slate-500 font-semibold">Nutritionist</span>
              <p className="text-[8.5px] text-slate-400 mt-0.5">18+ Years Experience</p>
            </div>

            {/* Advisor 4 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-om-900 border border-om-800 flex items-center justify-center font-sans font-black text-lg text-om-400 mb-3 shadow-xs">NB</div>
              <h4 className="font-bold text-slate-800 text-[11px] leading-tight mb-0.5">Dr. Neha Bansal</h4>
              <span className="text-[9px] text-slate-500 font-semibold">Integrative Therapist</span>
              <p className="text-[8.5px] text-slate-400 mt-0.5">15+ Years Experience</p>
            </div>

            {/* Advisor 5 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-om-900 border border-om-800 flex items-center justify-center font-sans font-black text-lg text-om-400 mb-3 shadow-xs">AM</div>
              <h4 className="font-bold text-slate-800 text-[11px] leading-tight mb-0.5">Mr. Arjun Malhotra</h4>
              <span className="text-[9px] text-slate-500 font-semibold">Onco Coach</span>
              <p className="text-[8.5px] text-slate-400 mt-0.5">12+ Years Experience</p>
            </div>

            {/* Advisor 6 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-om-900 border border-om-800 flex items-center justify-center font-sans font-black text-lg text-om-400 mb-3 shadow-xs">VS</div>
              <h4 className="font-bold text-slate-800 text-[11px] leading-tight mb-0.5">Dr. Vivek Sharma</h4>
              <span className="text-[9px] text-slate-500 font-semibold">Mind-Body Specialist</span>
              <p className="text-[8.5px] text-slate-400 mt-0.5">20+ Years Experience</p>
            </div>

            {/* Advisor 7 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-om-900 border border-om-800 flex items-center justify-center font-sans font-black text-lg text-om-400 mb-3 shadow-xs">PI</div>
              <h4 className="font-bold text-slate-800 text-[11px] leading-tight mb-0.5">Ms. Pooja Iyer</h4>
              <span className="text-[9px] text-slate-500 font-semibold">Art Therapist</span>
              <p className="text-[8.5px] text-slate-400 mt-0.5">10+ Years Experience</p>
            </div>

            {/* Advisor 8 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-om-900 border border-om-800 flex items-center justify-center font-sans font-black text-lg text-om-400 mb-3 shadow-xs">SK</div>
              <h4 className="font-bold text-slate-800 text-[11px] leading-tight mb-0.5">Dr. Sandeep Kulkarni</h4>
              <span className="text-[9px] text-slate-500 font-semibold">Holistic Health Expert</span>
              <p className="text-[8.5px] text-slate-400 mt-0.5">25+ Years Experience</p>
            </div>

          </div>

          <div className="mt-10">
            <a href="#team" className="inline-flex items-center gap-1.5 text-xs font-bold text-om-400 hover:text-om-300 transition-colors">
              View Full Advisory Board &rarr;
            </a>
          </div>

        </div>
      </section>

      {/* "A Community That Cares" Section */}
      <section id="community" className="relative z-10 py-16 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="bg-[#FAF9FB] rounded-3xl p-6 sm:p-10">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">

              {/* Left Column Description */}
              <div className="xl:col-span-3 bg-[#422C7C] rounded-2xl p-8 text-white shadow-lg h-full flex flex-col justify-center">
                <h2 className="font-serif font-black text-2xl sm:text-3xl leading-tight mb-4">
                  OM Community <br />
                  That Cares
                </h2>
                <p className="text-white/80 text-[13px] leading-relaxed mb-8">
                  Join thousands of patients, survivors and caregivers who support, uplift and grow together every day.
                </p>
                <a href="#download" className="inline-flex h-11 items-center justify-center rounded-lg bg-white hover:bg-slate-50 px-6 text-xs font-bold text-[#422C7C] shadow-sm transition-transform hover:scale-[1.02]">
                  Download App to Join
                </a>
              </div>

              {/* Middle Images Row */}
              <div className="xl:col-span-7 flex flex-row gap-4 h-[240px]">
                <div className="w-1/4 rounded-xl overflow-hidden shadow-paper border border-slate-200 bg-white">
                  <img src="/support_group_1.jpg" alt="Support group" className="w-full h-full object-cover" />
                </div>
                <div className="w-1/4 rounded-xl overflow-hidden shadow-paper border border-slate-200 bg-white">
                  <img src="/caregiver_patient.jpg" alt="Caregiver support" className="w-full h-full object-cover" />
                </div>
                <div className="w-1/4 rounded-xl overflow-hidden shadow-paper border border-slate-200 bg-white p-2">
                  <img src="/app_mockup.jpg" alt="Mood tracker app" className="w-full h-full object-contain" />
                </div>
                <div className="w-1/4 rounded-xl overflow-hidden shadow-paper border border-slate-200 bg-white">
                  <img src="/candles.jpg" alt="Lighting candles for hope" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Right Column Sticky Note */}
              <div className="xl:col-span-2 flex justify-center items-center h-full">
                <div className="bg-[#FFF9E6] border border-[#F3E5AB] shadow-md p-6 rounded-xl w-full max-w-[220px] transform -rotate-1 relative">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 shadow-inner" />
                  <span className="block text-2xl font-serif text-slate-350 leading-none mb-2">&ldquo;</span>
                  <p className="text-slate-700 text-[11.5px] leading-relaxed italic font-medium">
                    Oncology Mitra gave me hope, strength and a path when everything felt overwhelming. I am not alone anymore.
                  </p>
                  <div className="text-right text-[10px] font-bold text-[#422C7C] mt-4 font-sans">
                    &mdash; A Survivor
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Middle CTA banner */}
      <section className="relative z-10 py-12 bg-[#422C7C] text-white">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white/90" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21a9 9 0 01-9-9 9 9 0 019-9 9 9 0 019 9 9 9 0 01-9 9m0-16.5A7.5 7.5 0 004.5 12a7.5 7.5 0 007.5 7.5 7.5 7.5 0 007.5-7.5 7.5 7.5 0 00-7.5-7.5z" /></svg>
              </div>
              <div>
                <h3 className="font-serif font-black text-xl mb-1">We don't treat cancer.</h3>
                <h3 className="font-serif font-black text-xl text-white/90">We stand beside you.</h3>
              </div>
            </div>

            <div className="flex-1 lg:pl-12 lg:border-l border-white/20">
              <p className="text-[14px] leading-relaxed font-medium max-w-2xl">
                Our certified onco coaches transform your difficult journey into a painless path with holistic care and compassion.
              </p>
            </div>

            <div className="flex-shrink-0">
              <a href="#download" className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-white/30 hover:border-white px-8 text-[13px] font-bold text-white transition-colors">
                Download the OM App &rarr;
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative z-10 border-t border-slate-150 bg-white pt-20 pb-12 text-sm text-slate-500">
        <div className="mx-auto max-w-[1400px] px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200/60 text-left">

            {/* Logo/Info Col */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-om-400/20 bg-white flex items-center justify-center overflow-hidden">
                  <img src="/logo.png" alt="OM Logo" className="w-full h-full object-cover" />
                </div>
                <img src="/logo-text.png" alt="Oncology Mitra" className="h-[22px] w-auto object-contain" />
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed pr-6 mt-2">
                A holistic cancer support platform providing counselling, therapies and community care to help you heal, grow and thrive.
              </p>
              <div className="flex items-center gap-3 mt-1 text-slate-400">
                <a href="#" className="hover:text-om-400 transition-colors"><svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" /></svg></a>
                <a href="#" className="hover:text-om-400 transition-colors"><svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg></a>
                <a href="#" className="hover:text-om-400 transition-colors"><svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.519 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.869.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></a>
                <a href="#" className="hover:text-om-400 transition-colors"><svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              <h4 className="font-bold text-slate-800 text-[10px] uppercase tracking-widest mb-1">Quick Links</h4>
              <ul className="flex flex-col gap-2.5 text-[10px] font-bold">
                <li><a href="#" className="hover:text-[#422C7C] transition-colors">Home</a></li>
                <li><a href="#how-it-works" className="hover:text-[#422C7C] transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-[#422C7C] transition-colors">Our Services</a></li>
                <li><a href="#how-it-works" className="hover:text-[#422C7C] transition-colors">For Patients</a></li>
                <li><a href="#community" className="hover:text-[#422C7C] transition-colors">OM Community</a></li>
                <li><a href="#resources" className="hover:text-[#422C7C] transition-colors">Resources</a></li>
                <li><a href="#contact" className="hover:text-[#422C7C] transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              <h4 className="font-bold text-slate-800 text-[10px] uppercase tracking-widest mb-1">Our Services</h4>
              <ul className="flex flex-col gap-2.5 text-[10px] font-bold">
                <li><a href="#services" className="hover:text-[#422C7C] transition-colors">Counselling &amp; Guidance</a></li>
                <li><a href="#services" className="hover:text-[#422C7C] transition-colors">Nutrition &amp; Diet Planning</a></li>
                <li><a href="#services" className="hover:text-[#422C7C] transition-colors">Yoga &amp; Meditation</a></li>
                <li><a href="#services" className="hover:text-[#422C7C] transition-colors">Alternative Therapies</a></li>
                <li><a href="#services" className="hover:text-[#422C7C] transition-colors">Art Therapy</a></li>
                <li><a href="#services" className="hover:text-[#422C7C] transition-colors">Music Therapy</a></li>
                <li><a href="#services" className="hover:text-[#422C7C] transition-colors">Sound Healing</a></li>
                <li><a href="#services" className="hover:text-[#422C7C] transition-colors">Mood Tracker</a></li>
                <li><a href="#services" className="hover:text-[#422C7C] transition-colors">Books &amp; Journals</a></li>
              </ul>
            </div>

            {/* OM Community / Resources */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              <h4 className="font-bold text-slate-800 text-[10px] uppercase tracking-widest mb-1">OM Community</h4>
              <ul className="flex flex-col gap-2.5 text-[10px] font-bold mb-4">
                <li><a href="#community" className="hover:text-[#422C7C] transition-colors">Community Home</a></li>
                <li><a href="#community" className="hover:text-[#422C7C] transition-colors">Support Groups</a></li>
                <li><a href="#community" className="hover:text-[#422C7C] transition-colors">Events &amp; Workshops</a></li>
                <li><a href="#community" className="hover:text-[#422C7C] transition-colors">Stories</a></li>
                <li><a href="#community" className="hover:text-[#422C7C] transition-colors">Caregiver Corner</a></li>
              </ul>

              <h4 className="font-bold text-slate-800 text-[10px] uppercase tracking-widest mb-1">Resources</h4>
              <ul className="flex flex-col gap-2.5 text-[10px] font-bold">
                <li><a href="#" className="hover:text-[#422C7C] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#422C7C] transition-colors">Articles</a></li>
                <li><a href="#" className="hover:text-[#422C7C] transition-colors">Videos</a></li>
                <li><a href="#" className="hover:text-[#422C7C] transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-[#422C7C] transition-colors">FAQs</a></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-3 flex flex-col gap-4 text-xs">
              <h4 className="font-bold text-slate-800 text-[10px] uppercase tracking-widest mb-1">Contact Us</h4>

              <div className="flex gap-2">
                <svg className="w-3.5 h-3.5 text-om-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <p className="text-slate-500 leading-relaxed text-[10px] font-medium">
                  E-1990, Opposite Kaul Park,<br />Rajajipuram, Lucknow,<br />Uttar Pradesh &ndash; 226017
                </p>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-om-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="text-slate-500 font-bold text-[10px]">+91 95654 45699</span>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-om-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:hello@oncologymitra.com" className="text-slate-500 hover:text-[#422C7C] font-medium text-[10px]">hello@oncologymitra.com</a>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-om-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                <a href="https://www.oncologymitra.com" target="_blank" className="text-slate-500 hover:text-[#422C7C] font-medium text-[10px]">www.oncologymitra.com</a>
              </div>
            </div>

          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-450 font-sans">
            <p>&copy; {new Date().getFullYear()} Oncology Mitra. All Rights Reserved.</p>
            <div className="flex items-center gap-4 font-medium">
              <a href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-slate-800 transition-colors">Terms &amp; Conditions</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
