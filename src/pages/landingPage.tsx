import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => setScrollY(window.scrollY);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const features = [
    {
      icon: "📝",
      title: "Text Notes",
      desc: "Capture ideas instantly with a powerful markdown editor",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: "🖼️",
      title: "Photos & Media",
      desc: "Drop images and organize visual inspiration effortlessly",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: "🎬",
      title: "YouTube Embeds",
      desc: "Save and annotate videos directly in your knowledge base",
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      icon: "🐦",
      title: "Twitter/X Embeds",
      desc: "Archive tweets and threads before they disappear",
      color: "from-sky-500/20 to-blue-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 bg-purple-600 transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '10%',
            left: '20%'
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-15 bg-blue-600 transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`,
            bottom: '20%',
            right: '10%'
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full blur-[90px] opacity-10 bg-cyan-500"
          style={{
            top: `${50 + scrollY * 0.05}%`,
            left: '50%'
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
            <span className="text-lg">🧠</span>
          </div>
          <span className="text-xl font-bold tracking-tight">Supermemory</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#share" className="hover:text-white transition-colors">Open Sharing</a>
          <Link to="/signup" className="hover:text-white transition-colors">Sign Up</Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/signin"
            className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all text-sm font-medium hover:scale-105 text-gray-300 hover:text-white"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all text-sm font-medium hover:scale-105 text-white shadow-lg shadow-purple-500/20"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300">Your second brain, now open source</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.1]">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Remember
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Everything
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Supermemory is your digital second brain. Save YouTube videos, tweets, photos, and notes — then share your knowledge openly with the world.
          </p>

          {/* Hero Auth Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/signup"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all font-semibold text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 active:scale-95 text-center"
            >
              Sign Up — It's Free
            </Link>
            <Link
              to="/signin"
              className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all font-medium hover:scale-105 text-gray-300 hover:text-white text-center"
            >
              Sign In to Your Brain
            </Link>
          </div>
        </div>

        {/* Floating Elements Animation */}
        <div className="absolute top-40 left-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/30 to-transparent border border-purple-500/30 backdrop-blur-md animate-float opacity-60 hidden lg:block" />
        <div className="absolute bottom-20 right-20 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/30 to-transparent border border-blue-500/30 backdrop-blur-md animate-float-delayed opacity-60 hidden lg:block" />
      </section>

      {/* Features Grid */}
      <section id="features" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Capture anything</h2>
            <p className="text-gray-400 text-lg">Your brain accepts every format you throw at it</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-1 cursor-pointer"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Sharing Section */}
      <section id="share" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                Share your brain
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  with the world
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Knowledge wants to be free. Make any collection public and share your curated wisdom with anyone, anywhere. No paywalls, no gates — just pure knowledge sharing.
              </p>
              
              <div className="space-y-4">
                {[
                  "One-click public sharing",
                  "Embeddable collections anywhere",
                  "Real-time collaboration",
                  "Community discovery feed"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-xs">
                      ✓
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mock UI Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-[#12121a] rounded-3xl border border-white/10 p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 text-center text-xs text-gray-500 font-mono">supermemory.ai/brain/alex</div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center text-lg">🎬</div>
                      <div className="flex-1">
                        <div className="font-medium text-sm mb-1">How to Build a Second Brain</div>
                        <div className="text-xs text-gray-500">YouTube • Tiago Forte</div>
                        <div className="mt-2 h-24 rounded-lg bg-white/5 flex items-center justify-center text-gray-600 text-xs">
                          ▶ Video Embed
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-lg">🐦</div>
                      <div className="flex-1">
                        <div className="font-medium text-sm mb-1">Thread on AI Agents</div>
                        <div className="text-xs text-gray-500">Twitter / @naval</div>
                        <div className="mt-2 p-3 rounded-lg bg-white/5 text-xs text-gray-400 leading-relaxed">
                          "The people who are crazy enough to think they can change the world are the ones who do..."
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-lg">📝</div>
                      <div className="flex-1">
                        <div className="font-medium text-sm mb-1">Meeting Notes - Design Sync</div>
                        <div className="text-xs text-gray-500">2 hours ago</div>
                        <div className="mt-2 text-xs text-gray-400 line-clamp-2">
                          Key takeaways from the design team sync. We discussed the new component library and animation principles...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border-2 border-[#12121a]" />
                    ))}
                  </div>
                  <div className="text-xs text-gray-500">Public • 1.2k views</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Social Proof */}
      <section className="relative z-10 py-20 px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "50K+", label: "Public Brains" },
            { num: "2M+", label: "Notes Saved" },
            { num: "100K+", label: "Active Users" },
            { num: "∞", label: "Ideas Shared" }
          ].map((stat, i) => (
            <div key={i} className="group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.num}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Ready to expand your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              mind?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Join thousands of curious minds building their second brain with Supermemory.
          </p>
          
          {/* Final CTA Auth Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/signup"
              className="px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all font-bold text-lg shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 active:scale-95 text-center"
            >
              Sign Up for Free
            </Link>
            <Link
              to="/signin"
              className="px-10 py-5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all font-semibold text-lg hover:scale-105 text-gray-300 hover:text-white text-center"
            >
              Sign In
            </Link>
          </div>
          
          <p className="mt-4 text-xs text-gray-600">No credit card required • Open source forever</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs">
              🧠
            </div>
            <span className="font-semibold">Supermemory</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
          </div>
          <div className="text-sm text-gray-600">
            © 2026 Supermemory. Open source.
          </div>
        </div>
      </footer>

      {/* Global Styles for Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default LandingPage;