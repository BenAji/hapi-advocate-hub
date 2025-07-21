
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Heart, Award, BookOpen, Globe } from 'lucide-react';

const About = () => {
  const leadership = [
    {
      name: "Ruth Adeyemi, PharmD/MPH Candidate",
      role: "Board Chair (Interim) & Executive Director",
      description: "Oversees overall strategy, operations, and vision alignment"
    },
    {
      name: "Dr. John (Ikenna) Ogwuegbu, PharmD",
      role: "Vice Chair / Vice President",
      description: "Supports governance, leadership, and external engagement"
    },
    {
      name: "Dr. Gbola Olayiwola,PhD",
      role: "Director of Strategic Partnerships / External Relations",
      description: "Leads institutional collaborations and funding opportunities"
    },
    {
      name: "Pharmacist Oyinlade Kehinde",
      role: "Director of Regulatory Affairs & Legal Compliance",
      description: "Guides legal strategy and practice compliance"
    },
    {
      name: "Dr. Omolola A. Adeoye–Olatunde, PharmD, MS",
      role: "Director of Public Health & Research Innovation",
      description: "Leads public health strategy, research agenda, and equity-based impact"
    },
    {
      name: "Pharmacist David Adeyemo",
      role: "Young Pharmacists & Student Engagement Lead",
      description: "Strengthens student chapter performance and youth development"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Empathy and genuine care drive every initiative."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We hold ourselves to the highest standards in training, research, and advocacy."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: " We thrive on partnership across disciplines, institutions, and borders."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Transparency and professionalism are core to our operations."
    },
    {
      icon: BookOpen,
      title: "Innovation",
      description: "We pursue data-driven, creative solutions to improve pharmacy and public health systems."
    },
    {
      icon: Globe,
      title: "Impact",
      description: "We focus on sustainable results that improve health outcomes across communities."
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
              Health Outcomes, Advocacy, and Professional Development Initiative (H.A.P.I.) is a nonprofit 
              dedicated to strengthening pharmacy practice and transforming healthcare delivery across 
              Nigeria through student leadership, research, advocacy, and compassionate care.
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
                  To advocate for and enforce standard pharmacy practice at all levels, improve patient health 
                  outcomes, and promote pharmacists’ professional development as key healthcare professionals in 
                  the Nigerian healthcare system.
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
                  To build a Nigerian pharmacy practice system where Good Pharmacy Practice (GPP) and Compassionate 
                  Care lead to improved health outcomes across urban and rural communities.
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
                  Since our founding in 2022, H.A.P.I. has trained over 500 student leaders, implemented 5+ campus and community health projects, and
                  launched advocacy and research efforts that influence health policy and promote pharmacy excellence in Nigeria.

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
                    <span className="text-hapi-dark-green dark:text-white font-aida font-bold text-2xl">2022</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="font-aida font-bold text-2xl text-hapi-dark-green dark:text-white mb-4">
                    The Beginning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    H.A.P.I., formerly TCPPP, was founded on March 12, 2022, by Ruth Adeyemi and a few committed colleagues under the name The Compassionate Pharmacy Practice Project (TCPPP). The organization was born from a desire to improve community-level pharmacy standards and was inspired by Ruth’s early exposure to inadequate healthcare and her late uncle’s example of excellence in pharmacy practice.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="w-full h-48 bg-gradient-to-br from-hapi-bright-green/20 to-emerald-200/40 rounded-2xl flex items-center justify-center">
                    <span className="text-hapi-dark-green dark:text-white font-aida font-bold text-2xl">2023</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="font-aida font-bold text-2xl text-hapi-dark-green dark:text-white mb-4">
                    Expansion & Growth
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    H.A.P.I. transitioned from a grassroots campaign into a structured nonprofit with established student chapters at the Obafemi Awolowo University (OAU) and the University of Ibadan (UI). New chapters at Benue State University and University of Jos are currently underway.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="w-full h-48 bg-gradient-to-br from-hapi-bright-green/20 to-emerald-200/40 rounded-2xl flex items-center justify-center">
                    <span className="text-hapi-dark-green dark:text-white font-aida font-bold text-2xl">2025</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="font-aida font-bold text-2xl text-hapi-dark-green dark:text-white mb-4">
                    Looking Forward
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Today, H.A.P.I. continues to expand its research partnerships, public health programming, and advocacy footprint. Through strategic leadership, we aim to shape national pharmacy policy and build a system where every pharmacy in Nigeria champions professional standards and patient-centered care.
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
              Meet the board and executive leadership guiding H.A.P.I.’s vision
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
