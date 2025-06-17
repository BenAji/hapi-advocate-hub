
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Users, Calendar, Mail, ArrowRight, Award, BookOpen, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Chapters = () => {
  const chapters = [
    {
      id: 'oau',
      name: 'OAU Chapter',
      university: 'Obafemi Awolowo University',
      location: 'Ile-Ife, Osun State',
      established: '2022',
      members: '45+',
      description: 'The OAU Chapter is dedicated to advancing health advocacy and professional development among students at Obafemi Awolowo University. Our initiatives focus on community health education, policy advocacy, and skill-building workshops.',
      achievements: [
        'Conducted 15+ community health outreach programs',
        'Trained 200+ students in health advocacy skills',
        'Established partnerships with 5 local health facilities',
        'Organized annual Health Career Development Summit'
      ],
      leadership: [
        { name: 'Adebayo Olumide', role: 'Chapter President' },
        { name: 'Fatima Adesola', role: 'Vice President' },
        { name: 'Michael Ogundipe', role: 'Secretary' }
      ],
      contact: 'oau@hapi-initiative.org'
    },
    {
      id: 'ui',
      name: 'UI Chapter',
      university: 'University of Ibadan',
      location: 'Ibadan, Oyo State',
      established: '2022',
      members: '60+',
      description: 'The UI Chapter pioneers innovative health solutions and advocacy initiatives at Nigeria\'s premier university. We focus on research-driven interventions, community engagement, and professional mentorship programs.',
      achievements: [
        'Implemented 20+ evidence-based health interventions',
        'Mentored 150+ students in health careers',
        'Published 10+ research papers on community health',
        'Won National Student Health Advocacy Award 2023'
      ],
      leadership: [
        { name: 'Chinonso Okafor', role: 'Chapter President' },
        { name: 'Aisha Abdullahi', role: 'Vice President' },
        { name: 'Emeka Nwankwo', role: 'Secretary' }
      ],
      contact: 'ui@hapi-initiative.org'
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
              Student Chapters
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our student chapters are the backbone of H.A.P.I.'s mission, driving change and 
              innovation in health advocacy across Nigerian universities.
            </p>
          </div>
        </div>
      </section>

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
              <Button size="lg" className="bg-hapi-bright-green hover:bg-hapi-bright-green/90 text-white px-8 py-4">
                Apply to Join
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-hapi-dark-green text-hapi-dark-green hover:bg-hapi-dark-green hover:text-white dark:border-hapi-bright-green dark:text-hapi-bright-green dark:hover:bg-hapi-bright-green dark:hover:text-hapi-dark-green px-8 py-4"
              >
                Start New Chapter
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Chapters;
