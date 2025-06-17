
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Heart, Award, BookOpen, Globe } from 'lucide-react';

const About = () => {
  const leadership = [
    {
      name: "Dr. Sarah Adebayo",
      role: "Executive Director",
      description: "Leading H.A.P.I.'s strategic vision and community partnerships"
    },
    {
      name: "Prof. Michael Okonkwo",
      role: "Director of Programs",
      description: "Overseeing educational initiatives and student chapter development"
    },
    {
      name: "Dr. Fatima Ibrahim",
      role: "Director of Advocacy",
      description: "Spearheading policy advocacy and stakeholder engagement"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every initiative with empathy and genuine care for community wellbeing"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in all our programs and interventions"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of partnerships and collective action"
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We maintain transparency and ethical practices in all our endeavors"
    },
    {
      icon: BookOpen,
      title: "Innovation",
      description: "We embrace creative solutions and evidence-based approaches"
    },
    {
      icon: Globe,
      title: "Impact",
      description: "We focus on creating measurable, sustainable change in communities"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-hapi-dark-green transition-colors duration-300">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50 dark:from-hapi-dark-green dark:via-hapi-dark-green/90 dark:to-hapi-dark-green/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-aida font-bold text-hapi-dark-green dark:text-white mb-6">
              About H.A.P.I.
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Health Outcomes, Advocacy, and Professional Development Initiative (H.A.P.I.) is a 
              nonprofit organization dedicated to transforming healthcare through student leadership, 
              community engagement, and evidence-based advocacy.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
              <CardHeader>
                <div className="w-16 h-16 bg-hapi-bright-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-hapi-bright-green" />
                </div>
                <CardTitle className="font-aida text-hapi-dark-green dark:text-white text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To empower students and professionals in the health sector through advocacy, 
                  evidence-based interventions, and capacity building initiatives that improve 
                  health outcomes in communities across Nigeria and beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
              <CardHeader>
                <div className="w-16 h-16 bg-hapi-bright-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-hapi-bright-green" />
                </div>
                <CardTitle className="font-aida text-hapi-dark-green dark:text-white text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  A healthier Africa where young leaders drive sustainable health improvements, 
                  advocate for equitable healthcare policies, and contribute to global health 
                  innovation through professional excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
              <CardHeader>
                <div className="w-16 h-16 bg-hapi-bright-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-hapi-bright-green" />
                </div>
                <CardTitle className="font-aida text-hapi-dark-green dark:text-white text-2xl">Our Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Since our founding, we have trained over 100 student leaders, implemented 
                  50+ community health projects, and influenced policy decisions affecting 
                  thousands of individuals across Nigeria.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-aida font-bold text-hapi-dark-green dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide our work and shape our approach to health advocacy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-hapi-bright-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <value.icon className="h-6 w-6 text-hapi-bright-green" />
                  </div>
                  <CardTitle className="font-aida text-hapi-dark-green dark:text-white">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gray-50 dark:bg-hapi-dark-green/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-aida font-bold text-hapi-dark-green dark:text-white mb-4">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From a student vision to a nationwide movement for health advocacy
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="w-full h-48 bg-gradient-to-br from-hapi-bright-green/20 to-emerald-200/40 rounded-2xl flex items-center justify-center">
                    <span className="text-hapi-dark-green dark:text-white font-aida font-bold text-2xl">2020</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="font-aida font-bold text-2xl text-hapi-dark-green dark:text-white mb-4">
                    The Beginning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    H.A.P.I. was founded by a group of passionate health science students who 
                    recognized the need for stronger advocacy and professional development in 
                    Nigeria's health sector. What started as informal study groups and community 
                    outreach efforts has grown into a structured organization with multiple chapters.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="w-full h-48 bg-gradient-to-br from-hapi-bright-green/20 to-emerald-200/40 rounded-2xl flex items-center justify-center">
                    <span className="text-hapi-dark-green dark:text-white font-aida font-bold text-2xl">2022</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="font-aida font-bold text-2xl text-hapi-dark-green dark:text-white mb-4">
                    Expansion & Growth
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Our first official chapters were established at the University of Ibadan and 
                    Obafemi Awolowo University. This marked the beginning of our structured approach 
                    to student leadership development and community health advocacy across Nigerian universities.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="w-full h-48 bg-gradient-to-br from-hapi-bright-green/20 to-emerald-200/40 rounded-2xl flex items-center justify-center">
                    <span className="text-hapi-dark-green dark:text-white font-aida font-bold text-2xl">2024</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="font-aida font-bold text-2xl text-hapi-dark-green dark:text-white mb-4">
                    Looking Forward
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Today, H.A.P.I. continues to expand its reach and impact. We're working on 
                    establishing new chapters, developing innovative health programs, and 
                    strengthening our advocacy efforts to create lasting change in Nigeria's 
                    healthcare landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-aida font-bold text-hapi-dark-green dark:text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Meet the dedicated professionals guiding H.A.P.I.'s mission and vision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-hapi-bright-green/20 to-emerald-200/40 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-hapi-bright-green" />
                  </div>
                  <CardTitle className="font-aida text-hapi-dark-green dark:text-white text-xl">
                    {leader.name}
                  </CardTitle>
                  <p className="text-hapi-bright-green font-semibold">{leader.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {leader.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
