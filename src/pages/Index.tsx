import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Heart, Users, Lightbulb, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-hapi-dark-green transition-colors duration-300">
      <Helmet>
        <title>H.A.P.I. Advocate Hub | Health Outcomes, Advocacy, and Professional Development Initiative</title>
        <meta name="description" content="H.A.P.I. is a nonprofit dedicated to strengthening pharmacy practice and transforming healthcare delivery across Nigeria through student leadership, research, advocacy, and compassionate care." />
        <meta name="keywords" content="pharmacy, health advocacy, Nigeria, professional development, student leadership, public health, HAPI, Good Pharmacy Practice, GPP" />
        <meta property="og:title" content="H.A.P.I. Advocate Hub" />
        <meta property="og:description" content="Strengthening pharmacy practice and transforming healthcare delivery across Nigeria." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hapinitiative.org/" />
      </Helmet>
      <Navigation />
      <HeroSection />

      {/* Homepage Carousel above Our Mission */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <Carousel className="relative">
          <CarouselContent>
            {[
              { src: '/lovable-uploads/UI 1.jpg', alt: 'UI Chapter Activity 1' },
              { src: '/lovable-uploads/OAU 5.jpg', alt: 'OAU Chapter Activity 5' },
              { src: '/lovable-uploads/UI 4.jpg', alt: 'UI Chapter Activity 4' },
              { src: '/lovable-uploads/OAU 4.png', alt: 'OAU Chapter Activity 4' },
            ].map((img, idx) => (
              <CarouselItem key={idx}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-[32rem] object-cover rounded-xl shadow-md"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Mission Overview Section */}
      <section className="py-20 bg-gray-50 dark:bg-hapi-dark-green/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-aida font-bold text-hapi-dark-green dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              To advocate for and enforce standard pharmacy practice at all levels, improve patient health outcomes, and promote pharmacists' professional development as key healthcare professionals in the Nigerian healthcare system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-hapi-bright-green/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-hapi-bright-green/20 transition-colors duration-300">
                  <Heart className="h-8 w-8 text-hapi-bright-green" />
                </div>
                <CardTitle className="font-aida text-hapi-dark-green dark:text-white">Health Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                  Advancing Good Pharmacy Practice (GPP) to improve clinical outcomes and community well-being.
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
                  Promoting policy change and raising public and institutional awareness about the value of compassionate, evidence-based pharmaceutical care.
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
                  Equipping current and future pharmacists with leadership, technical, and ethical skills to thrive and drive healthcare impact in Nigeria.
                </CardDescription>
              </CardContent>
            </Card>
            {/*

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
            */}

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
              At H.A.P.I., we cultivate future leaders through campus chapters that promote Good Pharmacy Practice (GPP), compassionate care, and community outreach. Our student members are empowered to lead advocacy efforts, organize educational campaigns, and implement local health solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
              <CardHeader>
                <div className="flex flex-col items-center mb-4">
                  <img
                    src="/lovable-uploads/OAU 5.jpg"
                    alt="OAU Chapter Group"
                    className="w-24 h-24 rounded-full object-cover border-4 border-hapi-bright-green shadow-md mb-2"
                  />
                  <div className="flex items-center justify-between w-full">
                    <CardTitle className="font-aida text-hapi-dark-green dark:text-white">OAU Chapter</CardTitle>
                    <MapPin className="h-5 w-5 text-hapi-bright-green" />
                  </div>
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Obafemi Awolowo University
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Approved to operate by PANS-OAU on August 21, 2023, the students of the OAU chapter have led impactful 
                  outreach initiatives and professional development programs focused on strengthening pharmacy practice and 
                  public trust in healthcare.
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
                <div className="flex flex-col items-center mb-4">
                  <img
                    src="/lovable-uploads/UI 1.jpg"
                    alt="UI Chapter Group"
                    className="w-24 h-24 rounded-full object-cover border-4 border-hapi-bright-green shadow-md mb-2"
                  />
                  <div className="flex items-center justify-between w-full">
                    <CardTitle className="font-aida text-hapi-dark-green dark:text-white">UI Chapter</CardTitle>
                    <MapPin className="h-5 w-5 text-hapi-bright-green" />
                  </div>
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  University of Ibadan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Approved to operate by PANS-UI on April 10, 2023, the UI chapter is H.A.P.I.’s pioneer chapter.
                  It has become a model of community-centered pharmacy advocacy, capacity building, and innovative student-led projects that improve health literacy and outcomes.
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

      {/* Coming Soon Chapters */}
      <section className="py-20 bg-gray-50 dark:bg-hapi-dark-green/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-aida font-bold text-hapi-dark-green dark:text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These chapters are currently in the approval process and will expand H.A.P.I.'s mission to additional campuses across Nigeria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20 opacity-75">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-aida text-hapi-dark-green dark:text-white">Benue State University</CardTitle>
                  <MapPin className="h-5 w-5 text-hapi-bright-green" />
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Benue State University
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Our upcoming chapter at Benue State University is currently in the approval process. 
                  This expansion will bring H.A.P.I.'s mission of Good Pharmacy Practice and health advocacy 
                  to the heart of Benue State, fostering the next generation of pharmacy leaders.
                </p>
                <div className="flex items-center gap-2 text-hapi-bright-green">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">Approval in Progress</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20 opacity-75">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-aida text-hapi-dark-green dark:text-white">University of Jos</CardTitle>
                  <MapPin className="h-5 w-5 text-hapi-bright-green" />
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  University of Jos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  The University of Jos chapter is currently undergoing the approval process. 
                  This new chapter will extend H.A.P.I.'s reach to Plateau State, empowering 
                  pharmacy students to become advocates for better healthcare practices and community health.
                </p>
                <div className="flex items-center gap-2 text-hapi-bright-green">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">Approval in Progress</span>
                </div>
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

          <div className="grid md:grid-cols-2 gap-8 md:grid-cols-1">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
              <CardHeader>
                <div className="flex flex-col items-center mb-4">
                  <img
                    src="/lovable-uploads/GPP.jpg"
                    alt="GPP Compliance Research"
                    className="w-24 h-24 rounded-full object-cover border-4 border-hapi-bright-green shadow-md mb-2"
                  />
                  <div className="flex items-center gap-3 w-full justify-center">
                    <Calendar className="h-5 w-5 text-hapi-bright-green" />
                    <CardTitle className="font-aida text-hapi-dark-green dark:text-white">Good Pharmacy Practice (GPP) Compliance Research</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Ongoing study on pharmacy standards in Nigeria.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Join us in a descriptive study exploring the challenges Nigerian community pharmacists face in complying with Good Pharmacy Practice standards in day-to-day operations.
                </p>
                <a href="mailto:hapinitiativeorg@gmail.com">
                  <Button className="bg-hapi-bright-green hover:bg-hapi-bright-green/90 text-white">
                    Learn more
                  </Button>
                </a>
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
