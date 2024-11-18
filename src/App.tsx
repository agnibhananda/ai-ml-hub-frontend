import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ActivityCard from './components/ActivityCard';
import LoadingScreen from './components/LoadingScreen';
import Logo from './components/Logo';
import { Users, Trophy, Github, Linkedin, Mail, Calendar, MapPin, Bot, Cpu, Database } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-purple-900/20">
      <div className="fixed inset-0 grid-pattern -z-10"></div>
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative pt-20 overflow-hidden animate-fadeIn">
        <div className="absolute inset-0 hero-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>
        <div className="absolute -inset-x-32 top-0 h-[500px]">
          <div className="absolute inset-0 bg-purple-600/20 blur-[100px] animate-pulse"></div>
          <div className="absolute inset-0 bg-purple-500/10 blur-[130px] animate-pulse delay-300"></div>
          <div className="absolute inset-0 bg-purple-400/10 blur-[160px] animate-pulse delay-500"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <Logo className="h-16 w-auto text-purple-400 mx-auto mb-4 animate-float" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200 animate-slideUp">
              AI ML Hub
            </h1>
            <p className="text-xl text-purple-100/80 max-w-2xl mx-auto animate-slideUp animation-delay-150">
              Exploring the frontiers of Artificial Intelligence and Machine Learning through innovation and collaboration
            </p>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same */}
      {/* About Section */}
      <section id="about" className="py-20 animate-fadeIn animation-delay-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">About Us</h2>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <p className="text-purple-100/80 text-lg leading-relaxed mb-6">
              AI ML Hub is a dynamic community of students passionate about artificial intelligence and machine learning. 
              We provide a collaborative environment for exploring cutting-edge AI technologies, implementing ML algorithms, 
              and developing innovative solutions to real-world problems.
            </p>
            <div className="flex items-center justify-center space-x-6">
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <Users className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <p className="font-semibold text-purple-100">150+ Members</p>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <Trophy className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <p className="font-semibold text-purple-100">15 Projects</p>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <Logo className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <p className="font-semibold text-purple-100">Weekly Workshops</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 animate-fadeIn animation-delay-450">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ActivityCard
              title="AI Workshops"
              description="Hands-on sessions exploring neural networks, deep learning, and AI applications"
              Icon={Logo}
            />
            <ActivityCard
              title="ML Projects"
              description="Collaborative projects implementing machine learning algorithms"
              Icon={Bot}
            />
            <ActivityCard
              title="Tech Talks"
              description="Industry experts sharing insights on AI/ML trends and applications"
              Icon={Cpu}
            />
            <ActivityCard
              title="Data Science"
              description="Exploring data analysis, visualization, and predictive modeling"
              Icon={Database}
            />
          </div>
        </div>
      </section>

      {/* Meetings Section */}
      <section id="meetings" className="py-20">
        <div className="relative">
          <div className="absolute inset-0 bg-purple-600/5 blur-[100px] -z-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">Meeting Information</h2>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-xl p-8 border border-purple-500/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-900/30 rounded-lg">
                    <Calendar className="h-6 w-6 text-purple-400 flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-purple-100">When We Meet</h3>
                    <p className="text-purple-100/80">Every Thursday</p>
                    <p className="text-purple-100/80">6:00 PM - 7:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-900/30 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-400 flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-purple-100">Where We Meet</h3>
                    <p className="text-purple-100/80">AI Research Center</p>
                    <p className="text-purple-100/80">Room 205</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="relative">
          <div className="absolute inset-0 bg-purple-600/5 blur-[100px] -z-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">Get in Touch</h2>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-xl p-8 border border-purple-500/20">
              <div className="flex flex-col items-center space-y-6">
                <p className="text-xl text-purple-100/80 text-center max-w-2xl">
                  Interested in AI and ML? Join our community and be part of the future!
                </p>
                <div className="flex space-x-8">
                  <a href="mailto:aimlhub@university.edu" className="group">
                    <div className="p-4 bg-purple-900/30 rounded-lg transition-all duration-300 group-hover:bg-purple-900/50">
                      <Mail className="h-8 w-8 text-purple-400 group-hover:text-purple-300" />
                    </div>
                  </a>
                  <a href="https://github.com/ai-ml-hub" className="group">
                    <div className="p-4 bg-purple-900/30 rounded-lg transition-all duration-300 group-hover:bg-purple-900/50">
                      <Github className="h-8 w-8 text-purple-400 group-hover:text-purple-300" />
                    </div>
                  </a>
                  <a href="https://linkedin.com/company/ai-ml-hub" className="group">
                    <div className="p-4 bg-purple-900/30 rounded-lg transition-all duration-300 group-hover:bg-purple-900/50">
                      <Linkedin className="h-8 w-8 text-purple-400 group-hover:text-purple-300" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 backdrop-blur-sm py-8 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-purple-200/50">
            © {new Date().getFullYear()} AI ML Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
