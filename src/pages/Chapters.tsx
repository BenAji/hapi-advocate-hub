
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Users, Calendar, Mail, ArrowRight, Award, BookOpen, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Chapters = () => {
  const chapters = [
    {
      id: 'oau',
      name: 'OAU Chapter',
      university: 'Obafemi Awolowo University',
      location: 'Ile-Ife, Osun State, Nigeria',
      established: 'August 21, 2023',
      members: '20+',
      description: 'The OAU Chapter of the Health Outcomes, Advocacy, and Professional Development Initiative (H.A.P.I.) is a vibrant student-led hub advancing Good Pharmacy Practice (GPP) and compassionate care in Southwestern Nigeria. Founded by forward-thinking pharmacy students, the chapter continues to empower student advocates, elevate professional standards, and make meaningful contributions to good pharmacy practice in Nigeria.',
      achievements: [
        'Finalists (Track B) - African Youth AMR 1.0 Hackathon | IPSF-AFRO'
      ],
      leadership: [
        { name: 'Mayowa Mulero', role: 'Student Representative' },
        { name: 'Christopher Aleji', role: 'Co-Student Representative' },
        { name: 'Ademola Bakenne', role: 'Program Coordinator' },
        { name: 'Opeyemi Oyegunle', role: 'Secretary' },
        { name: 'Stella Olugbo', role: 'Graphic Designer' },
        { name: 'Favour Aremu', role: 'Immediate Past Student Rep' }
      ],
      contact: 'tomabless2018@gmail.com'
    },
    {
      id: 'ui',
      name: 'UI Chapter',
      university: 'University of Ibadan',
      location: 'Ibadan, Oyo State, Nigeria',
      established: 'April 10, 2023',
      members: '15+',
      description: 'The University of Ibadan Chapter of H.A.P.I. builds on UI’s legacy of academic excellence and community engagement to advocate for better pharmacy practice, promote public health awareness, and empower the next generation of student leaders.',
      achievements: [
        'Outstanding Service Award — Olakulehin Adebusuyi recognized by PANS UI for student leadership (2023/2024)'
      ],
      leadership: [
        { name: 'Priscilla Ajayi', role: 'Student Representative' },
        { name: 'Khadijat Shonibare', role: 'Co-Student Representative' },
        { name: 'Testimony Adeleke', role: 'General Secretary' },
        { name: 'Abraham Ogunlowo', role: 'Programs Coordinator' },
        { name: 'Clement Ojo', role: 'Co-Programs Coordinator' },
        { name: 'Grace Akande', role: 'Financial Secretary' },
        { name: 'Olakulehin Adebusuyi', role: 'Immediate Past Student Rep' }
      ],
      contact: 'priscillaajayi00@gmail.com'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-hapi-dark-green transition-colors duration-300">
      <Helmet>
        <title>H.A.P.I. Student Chapters | Health Advocacy & Leadership in Nigeria</title>
        <meta name="description" content="Explore H.A.P.I.'s active student chapters driving health advocacy, leadership, and professional development across Nigerian universities." />
        <meta name="keywords" content="student chapters, HAPI, pharmacy, health advocacy, Nigeria, university, leadership, professional development" />
        <meta property="og:title" content="H.A.P.I. Student Chapters" />
        <meta property="og:description" content="Explore H.A.P.I.'s active student chapters driving health advocacy, leadership, and professional development across Nigerian universities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hapinitiative.org/chapters" />
      </Helmet>
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50 dark:from-hapi-dark-green dark:via-hapi-dark-green/90 dark:to-hapi-dark-green/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-aida font-bold text-hapi-dark-green dark:text-white mb-6">
              Student Chapters
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our student chapters are the backbone of H.A.P.I.'s mission, driving change and 
              innovation in health advocacy across Nigerian universities.
            </p>
          </div>
        </div>
      </section>

      {/* OAU 4 Image Between Student Chapters and Active Chapters */}
      <div className="flex justify-center my-12">
        <img
          src="/lovable-uploads/OAU 4.png"
          alt="OAU Chapter Activity Group Photo"
          className="rounded-xl shadow-lg w-full max-w-3xl object-cover"
        />
      </div>

      {/* Chapters Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-aida font-bold text-hapi-dark-green dark:text-white mb-4">
              Active Chapters
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Each chapter brings unique strengths and perspectives to our collective mission
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {chapters.map((chapter) => (
              <Card key={chapter.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="font-aida text-2xl text-hapi-dark-green dark:text-white mb-2">
                        {chapter.name}
                      </CardTitle>
                      <p className="text-hapi-bright-green font-semibold mb-2">{chapter.university}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{chapter.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{chapter.members} members</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Established</div>
                      <div className="font-bold text-hapi-bright-green">{chapter.established}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {chapter.description}
                  </p>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="font-aida font-semibold text-hapi-dark-green dark:text-white mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4 text-hapi-bright-green" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {chapter.achievements.map((achievement, index) => (
                        <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-hapi-bright-green rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Leadership */}
                  <div>
                    <h4 className="font-aida font-semibold text-hapi-dark-green dark:text-white mb-3 flex items-center gap-2">
                      <Users className="h-4 w-4 text-hapi-bright-green" />
                      Leadership Team
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {chapter.leadership.map((leader, index) => (
                        <div key={index} className="text-center">
                          <div className="text-sm font-medium text-hapi-dark-green dark:text-white">
                            {leader.name}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {leader.role}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-hapi-bright-green/20">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <Mail className="h-4 w-4" />
                      <span>{chapter.contact}</span>
                    </div>
                    <Link to={`/chapters/${chapter.id}`}>
                      <Button className="bg-hapi-bright-green hover:bg-hapi-bright-green/90 text-white">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join a Chapter CTA */}
      <section className="py-20 bg-gray-50 dark:bg-hapi-dark-green/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-aida font-bold text-hapi-dark-green dark:text-white mb-4">
              Join a Chapter
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Are you a student passionate about health advocacy and professional development? 
              Join one of our active chapters or help us establish a new one at your university.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://forms.gle/qwv5HHZM3ub6SCDu6" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-hapi-bright-green hover:bg-hapi-bright-green/90 text-white px-8 py-4">
                  Apply to Join OAU Chapter
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="https://forms.gle/MwkEsFPiE5PuBgTb6" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-hapi-bright-green hover:bg-hapi-bright-green/90 text-white px-8 py-4">
                  Apply to Join UI Chapter
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="https://forms.gle/mB3bRWE8jbgjtpXp9" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-hapi-dark-green text-hapi-dark-green hover:bg-hapi-dark-green hover:text-white dark:border-hapi-bright-green dark:text-hapi-bright-green dark:hover:bg-hapi-bright-green dark:hover:text-hapi-dark-green px-8 py-4"
                >
                  Start New Chapter
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Chapters;
