
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Target, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50 dark:from-hapi-dark-green dark:via-hapi-dark-green/90 dark:to-hapi-dark-green/80 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, ${`#1AD64E`} 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-slide-in">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-aida font-bold text-hapi-dark-green dark:text-white leading-tight">
                <span className="block">H.A.P.I.</span>
                <span className="block text-hapi-bright-green text-3xl sm:text-4xl lg:text-5xl font-medium mt-2">
                  Advancing Pharmacy Practice in Nigeria
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                The Health Outcomes, Advocacy, and Professional Development Initiative (H.A.P.I.) is committed to transforming Nigeria's pharmacy landscape through Good Pharmacy Practice (GPP), compassionate care, and leadership development. We build healthier communities by empowering student chapters, advocating for standard pharmacy practice, and advancing professional excellence.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about">
                <Button 
                  size="lg" 
                  className="bg-hapi-bright-green hover:bg-hapi-bright-green/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  Join Our Movement
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-hapi-dark-green text-hapi-dark-green hover:bg-hapi-dark-green hover:text-white dark:border-hapi-bright-green dark:text-hapi-bright-green dark:hover:bg-hapi-bright-green dark:hover:text-hapi-dark-green font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Explore Our Work
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-hapi-bright-green" />
                </div>
                <div className="text-2xl font-bold text-hapi-dark-green dark:text-white">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Active Chapters</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Target className="h-8 w-8 text-hapi-bright-green" />
                </div>
                <div className="text-2xl font-bold text-hapi-dark-green dark:text-white">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <BookOpen className="h-8 w-8 text-hapi-bright-green" />
                </div>
                <div className="text-2xl font-bold text-hapi-dark-green dark:text-white">100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Students Trained</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative animate-fade-in">
            <div className="relative bg-white dark:bg-hapi-dark-green/20 rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-green-100 dark:border-hapi-bright-green/20">
              <div className="space-y-6">
                <div className="h-48 bg-gradient-to-br from-hapi-bright-green/20 to-emerald-200/40 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-hapi-bright-green rounded-full flex items-center justify-center mx-auto">
                      <img
                        src="/light.png"
                        alt="Logo"
                        className="w-24 h-24 rounded-full object-cover mx-auto"
                      />
                    </div>
                    <p className="text-hapi-dark-green dark:text-white font-semibold">
                      Transforming Healthcare Through Compassionate Pharmacy Practice
                    </p>
                  </div>
                </div>
                
                {/* Feature Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/80 dark:bg-hapi-dark-green/40 p-4 rounded-xl border border-green-100 dark:border-hapi-bright-green/20">
                    <h4 className="font-semibold text-hapi-dark-green dark:text-white text-sm mb-1">Health Outcomes</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300">GPP-driven patient-centered care</p>
                  </div>
                  <div className="bg-white/80 dark:bg-hapi-dark-green/40 p-4 rounded-xl border border-green-100 dark:border-hapi-bright-green/20">
                    <h4 className="font-semibold text-hapi-dark-green dark:text-white text-sm mb-1">Advocacy</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300">Raising standards and shaping policy</p>
                  </div>
                  <div className="bg-white/80 dark:bg-hapi-dark-green/40 p-4 rounded-xl border border-green-100 dark:border-hapi-bright-green/20">
                    <h4 className="font-semibold text-hapi-dark-green dark:text-white text-sm mb-1">Professional Development</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300">Training the next generation of pharmacy leaders</p>
                  </div>
                  <div className="bg-white/80 dark:bg-hapi-dark-green/40 p-4 rounded-xl border border-green-100 dark:border-hapi-bright-green/20">
                    <h4 className="font-semibold text-hapi-dark-green dark:text-white text-sm mb-1">Student Chapters</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300">University-led health innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
