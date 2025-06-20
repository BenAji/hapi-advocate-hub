import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Heart, Users, Lightbulb, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-hapi-dark-green transition-colors duration-300">
      <Navigation />
      <HeroSection />
      
      {/* Mission Overview Section */}
      <section className="py-20 bg-gray-50 dark:bg-hapi-dark-green/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-aida font-bold text-hapi-dark-green dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The Health Outcomes, Advocacy, and Professional Development Initiative (H.A.P.I.) is committed to transforming Nigeria's pharmacy landscape through Good Pharmacy Practice (GPP), compassionate care, and leadership development. We build healthier communities by empowering student chapters, advocating for standard pharmacy practice, and advancing professional excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-hapi-bright-green/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-hapi-bright-green/20 transition-colors duration-300">
                  <Heart className="h-8 w-8 text-hapi-bright-green" />
                </div>
                <CardTitle className="font-aida text-hapi-dark-green dark:text-white">Health Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                  GPP-driven patient-centered care that prioritizes quality pharmaceutical services and patient safety.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-hapi-bright-green/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-hapi-bright-green/20 transition-colors duration-300">
                  <Users className="h-8 w-8 text-hapi-bright-green" />
                </div>
                <CardTitle className="font-aida text-hapi-dark-green dark:text-white">Advocacy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                  Raising standards and shaping policy to advance pharmacy practice and patient care in Nigeria.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-hapi-bright-green/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-hapi-bright-green/20 transition-colors duration-300">
                  <Lightbulb className="h-8 w-8 text-hapi-bright-green" />
                </div>
                <CardTitle className="font-aida text-hapi-dark-green dark:text-white">Professional Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                  Training the next generation of pharmacy leaders through comprehensive capacity building programs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-hapi-bright-green/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-hapi-bright-green/20 transition-colors duration-300">
                  <Users className="h-8 w-8 text-hapi-bright-green" />
                </div>
                <CardTitle className="font-aida text-hapi-dark-green dark:text-white">Student Chapters</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                  University-led health innovation driving change through student leadership and community engagement.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Chapters Highlight */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-aida font-bold text-hapi-dark-green dark:text-white mb-4">
              Our Student Chapters
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Active student-led chapters driving change in universities across Nigeria
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-aida text-hapi-dark-green dark:text-white">OAU Chapter</CardTitle>
                  <MapPin className="h-5 w-5 text-hapi-bright-green" />
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Obafemi Awolowo University
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Leading health advocacy initiatives and professional development programs 
                  among students at one of Nigeria's premier universities.
                </p>
                <Link to="/chapters/oau">
                  <Button variant="outline" className="group-hover:bg-hapi-bright-green group-hover:text-white group-hover:border-hapi-bright-green">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-aida text-hapi-dark-green dark:text-white">UI Chapter</CardTitle>
                  <MapPin className="h-5 w-5 text-hapi-bright-green" />
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  University of Ibadan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Pioneering community health projects and capacity building initiatives 
                  at Nigeria's first university.
                </p>
                <Link to="/chapters/ui">
                  <Button variant="outline" className="group-hover:bg-hapi-bright-green group-hover:text-white group-hover:border-hapi-bright-green">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events Highlight */}
      <section className="py-20 bg-gray-50 dark:bg-hapi-dark-green/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-aida font-bold text-hapi-dark-green dark:text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join us in our upcoming initiatives and programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-hapi-bright-green" />
                  <CardTitle className="font-aida text-hapi-dark-green dark:text-white">Health Advocacy Workshop</CardTitle>
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  March 15, 2024 • Virtual Event
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Join us for an interactive workshop on effective health advocacy strategies 
                  and policy engagement for students and young professionals.
                </p>
                <Button className="bg-hapi-bright-green hover:bg-hapi-bright-green/90 text-white">
                  Register Now
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-hapi-bright-green" />
                  <CardTitle className="font-aida text-hapi-dark-green dark:text-white">Community Health Fair</CardTitle>
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  April 22, 2024 • Ibadan, Nigeria
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A community-wide health screening and education event featuring 
                  free health checks and wellness education sessions.
                </p>
                <Button className="bg-hapi-bright-green hover:bg-hapi-bright-green/90 text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link to="/events">
              <Button variant="outline" size="lg" className="border-hapi-dark-green text-hapi-dark-green hover:bg-hapi-dark-green hover:text-white dark:border-hapi-bright-green dark:text-hapi-bright-green dark:hover:bg-hapi-bright-green dark:hover:text-hapi-dark-green">
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
