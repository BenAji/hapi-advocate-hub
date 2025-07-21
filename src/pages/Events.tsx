
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Users, ExternalLink, Filter } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// 2025 past projects (from Projects.tsx)
const pastProjects2025 = [
  {
    title: 'Hangout 1.0: Reflecting on Its Journey and Inspiring Impactful Volunteering',
    tags: ['Student Engagement', 'Completed'],
    goal: 'To celebrate volunteers and reflect on impactful service through a team bonding event.',
    outcomes: [
      '15+ active volunteers engaged',
      'Vision sharing and renewed commitment to advocacy',
    ],
    location: 'University of Ibadan',
    date: 'Feb 20, 2025',
    category: 'Student Engagement',
  },
  {
    title: 'Mentorship: Role in Professional Development',
    tags: ['Professional Development', 'Completed'],
    goal: 'To educate pharmacy students on how to approach mentorship and mentor interactions in a professional setting.',
    outcomes: [
      '40+ participants',
      'Featured two expert facilitators on professional growth and mentoring',
    ],
    location: 'Virtual (OAU)',
    date: 'Mar 14–15, 2025',
    media: 'https://www.youtube.com/watch?v=2g920BMgSP8',
    category: 'Professional Development',
  },
  {
    title: 'World Oral Health Day Social Media Campaign',
    tags: ['Awareness Campaign', 'Completed'],
    goal: 'To raise awareness on oral health care practices among pharmacy students and the general public.',
    outcomes: [
      'High engagement campaign across social platforms',
      'Advocacy messages tailored to preventive oral care',
    ],
    location: 'Online (UI)',
    date: 'Mar 20, 2025',
    category: 'Awareness Campaign',
  },
  {
    title: 'Drug Abuse & Misuse Outreach – Richgates Divine School, Ibadan',
    tags: ['Community Outreach', 'Completed'],
    goal: 'To educate secondary school students on the dangers of drug abuse and misuse.',
    outcomes: [
      'Reached 50+ students',
      'An interactive session and feedback from school officials',
    ],
    location: 'Ibadan',
    date: 'June 26, 2025',
    category: 'Community Outreach',
  },
];

const pastCategories = [
  { value: 'all', label: 'All Past Events' },
  { value: 'Professional Development', label: 'Professional Development' },
  { value: 'Community Outreach', label: 'Community Outreach' },
  { value: 'Awareness Campaign', label: 'Awareness Campaign' },
  { value: 'Student Engagement', label: 'Student Engagement' },
];

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPastCategory, setSelectedPastCategory] = useState('all');

  // New research event
  const upcomingEvents = [
    {
      id: 1,
      title: 'Research: Loopholes in Practicing GPP in Nigeria’s Community Pharmacy Practice',
      type: 'Research',
      category: 'Research',
      status: 'Ongoing',
      description: 'A descriptive study identifying challenges Nigerian pharmacists face in implementing Good Pharmacy Practice (GPP) standards in community settings.',
      location: 'Nationwide (Mixed methods: Virtual & Field)',
      participants: 'Community Pharmacists (N = TBD)',
      keyTopics: [
        'Good Pharmacy Practice (GPP)',
        'Community Pharmacy',
        'Health Policy & Compliance',
        'Implementation Challenges',
      ],
      contact: 'hapinitiativeorg@gmail.com',
      contactLink: 'mailto:hapinitiativeorg@gmail.com',
      cta: 'Want to contribute or learn more?',
      openTo: 'Open to pharmacy professionals, researchers, and students.',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Events' },
    { value: 'Research', label: 'Research' },
  ];

  const filteredUpcomingEvents = selectedCategory === 'all'
    ? upcomingEvents
    : upcomingEvents.filter(event => event.category === selectedCategory);

  const filteredPastEvents = selectedPastCategory === 'all'
    ? pastProjects2025
    : pastProjects2025.filter(event => event.category === selectedPastCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-hapi-dark-green transition-colors duration-300">
      <Helmet>
        <title>H.A.P.I. Events | Health Advocacy, Research & Community Engagement</title>
        <meta name="description" content="Join H.A.P.I.'s upcoming and past events, including research, workshops, and community engagement initiatives advancing health advocacy and professional development in Nigeria." />
        <meta name="keywords" content="HAPI events, pharmacy, health advocacy, Nigeria, research, workshops, community engagement, professional development" />
        <meta property="og:title" content="H.A.P.I. Events" />
        <meta property="og:description" content="Join H.A.P.I.'s upcoming and past events, including research, workshops, and community engagement initiatives advancing health advocacy and professional development in Nigeria." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hapinitiative.org/events" />
      </Helmet>
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50 dark:from-hapi-dark-green dark:via-hapi-dark-green/90 dark:to-hapi-dark-green/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-aida font-bold text-hapi-dark-green dark:text-white mb-6">
              Events
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join us for research, workshops, and events designed to advance health advocacy, professional development, and community engagement.
            </p>
          </div>
        </div>
      </section>
      {/* Events Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="upcoming" className="text-lg">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past" className="text-lg">Past Events</TabsTrigger>
            </TabsList>
            {/* Upcoming Events */}
            <TabsContent value="upcoming" className="space-y-8">
              {/* Filter Section */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-hapi-bright-green" />
                  <span className="text-sm font-medium text-hapi-dark-green dark:text-white">Filter by type:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <Button
                      key={category.value}
                      variant={selectedCategory === category.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.value)}
                      className={selectedCategory === category.value
                        ? "bg-hapi-bright-green hover:bg-hapi-bright-green/90 text-white"
                        : "border-hapi-dark-green text-hapi-dark-green hover:bg-hapi-dark-green hover:text-white dark:border-hapi-bright-green dark:text-hapi-bright-green dark:hover:bg-hapi-bright-green dark:hover:text-hapi-dark-green"
                      }
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>
              </div>
              {/* Upcoming Events Grid */}
              <div className="grid lg:grid-cols-2 gap-8">
                {filteredUpcomingEvents.map(event => (
                  <Card key={event.id} className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">{event.type}</Badge>
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">{event.status}</Badge>
                      </div>
                      <CardTitle className="font-aida text-xl text-hapi-dark-green dark:text-white mb-2">
                        {event.title}
                      </CardTitle>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-2">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <MapPin className="h-4 w-4" /> {event.location}
                        <Users className="h-4 w-4 ml-4" /> {event.participants}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-hapi-dark-green dark:text-white mb-2 text-sm">Key Topics</h4>
                        <div className="flex flex-wrap gap-1">
                          {event.keyTopics.map((topic, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="border-t border-gray-200 dark:border-hapi-bright-green/20 pt-4">
                        <div className="flex flex-col gap-2">
                          <span className="text-sm text-hapi-dark-green dark:text-hapi-bright-green font-medium">{event.cta}</span>
                          <a href={event.contactLink} className="text-hapi-bright-green underline text-sm" target="_blank" rel="noopener noreferrer">{event.contact}</a>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{event.openTo}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            {/* Past Events */}
            <TabsContent value="past" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-aida font-bold text-hapi-dark-green dark:text-white mb-4">
                  Past Events
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Look back at our successful events and their impact on the community
                </p>
              </div>
              {/* Past Events Filter */}
              <div className="flex flex-wrap items-center gap-4 mb-8 justify-center">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-hapi-bright-green" />
                  <span className="text-sm font-medium text-hapi-dark-green dark:text-white">Filter by type:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {pastCategories.map(category => (
                    <Button
                      key={category.value}
                      variant={selectedPastCategory === category.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedPastCategory(category.value)}
                      className={selectedPastCategory === category.value
                        ? "bg-hapi-bright-green hover:bg-hapi-bright-green/90 text-white"
                        : "border-hapi-dark-green text-hapi-dark-green hover:bg-hapi-dark-green hover:text-white dark:border-hapi-bright-green dark:text-hapi-bright-green dark:hover:bg-hapi-bright-green dark:hover:text-hapi-dark-green"
                      }
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="space-y-8">
                {filteredPastEvents.map((event, idx) => (
                  <Card key={idx} className="border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
                    <CardContent className="p-8">
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {event.tags && event.tags.map((tag, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="font-aida text-2xl text-hapi-dark-green dark:text-white mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        <b>Goal:</b> {event.goal}
                      </p>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <MapPin className="h-4 w-4" /> {event.location}
                        <Calendar className="h-4 w-4 ml-4" /> {event.date}
                      </div>
                      {event.outcomes && (
                        <div>
                          <h4 className="font-semibold text-hapi-dark-green dark:text-white mb-1">Key Outcomes</h4>
                          <ul className="list-disc pl-5">
                            {event.outcomes.map((outcome, i) => (
                              <li key={i} className="text-sm text-gray-600 dark:text-gray-300">{outcome}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {event.media && (
                        <a href={event.media} target="_blank" rel="noopener noreferrer">
                          <button className="mt-2 px-4 py-2 bg-hapi-bright-green text-white rounded hover:bg-hapi-bright-green/90 flex items-center gap-2">
                            View Media <ExternalLink className="h-4 w-4" />
                          </button>
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      {/* Event Partnership CTA */}
      <section className="py-20 bg-gray-50 dark:bg-hapi-dark-green/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-aida font-bold text-hapi-dark-green dark:text-white mb-4">
            Partner With Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in hosting or partnering with H.A.P.I. for an event? 
            Let's create impactful experiences together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://forms.gle/Dhfz9VguJC7q8TcF6" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-hapi-bright-green hover:bg-hapi-bright-green/90 text-white px-8 py-4">
                Propose an Event
              </Button>
            </a>
            <a href="https://forms.gle/hjf9THrdfU1CyeQV9" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                size="lg"
                className="border-hapi-dark-green text-hapi-dark-green hover:bg-hapi-dark-green hover:text-white dark:border-hapi-bright-green dark:text-hapi-bright-green dark:hover:bg-hapi-bright-green dark:hover:text-hapi-dark-green px-8 py-4"
              >
                Become a Partner
              </Button>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Events;
