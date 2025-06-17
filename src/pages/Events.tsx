
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Clock, Users, ExternalLink, Filter } from 'lucide-react';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Health Advocacy Leadership Summit 2024',
      date: '2024-04-15',
      time: '9:00 AM - 5:00 PM',
      location: 'University of Lagos Conference Center',
      type: 'In-Person',
      category: 'Professional Development',
      description: 'Annual summit bringing together student leaders, health professionals, and policymakers to discuss the future of health advocacy in Nigeria.',
      speakers: ['Dr. Adaora Okonkwo - Minister of Health', 'Prof. Bola Adeyemi - LUTH', 'Sarah Johnson - WHO Nigeria'],
      capacity: '200 participants',
      registration: 'Open',
      price: 'Free for students',
      organizer: 'H.A.P.I. National Coordinating Committee',
      topics: ['Policy Advocacy', 'Leadership Development', 'Health Systems Strengthening'],
      image: '/placeholder-event-1.jpg'
    },
    {
      id: 2,
      title: 'Mental Health First Aid Training Workshop',
      date: '2024-03-28',
      time: '2:00 PM - 6:00 PM',
      location: 'Virtual (Zoom)',
      type: 'Virtual',
      category: 'Training',
      description: 'Interactive workshop teaching students and community members how to provide initial support to someone experiencing mental health challenges.',
      speakers: ['Dr. Funmi Adebayo - Psychiatrist', 'David Okafor - Mental Health Advocate'],
      capacity: '100 participants',
      registration: 'Open',
      price: 'Free',
      organizer: 'H.A.P.I. UI Chapter',
      topics: ['Mental Health Literacy', 'Crisis Intervention', 'Peer Support'],
      image: '/placeholder-event-2.jpg'
    },
    {
      id: 3,
      title: 'Community Health Data Analytics Bootcamp',
      date: '2024-04-22',
      time: '10:00 AM - 4:00 PM',
      location: 'OAU Faculty of Health Sciences',
      type: 'Hybrid',
      category: 'Training',
      description: 'Hands-on bootcamp teaching students how to collect, analyze, and visualize community health data for evidence-based decision making.',
      speakers: ['Dr. Michael Ogundimu - Epidemiologist', 'Kemi Adeleke - Data Scientist'],
      capacity: '50 participants (25 in-person, 25 virtual)',
      registration: 'Open',
      price: '₦5,000 (Materials included)',
      organizer: 'H.A.P.I. OAU Chapter',
      topics: ['Data Collection', 'Statistical Analysis', 'Data Visualization'],
      image: '/placeholder-event-3.jpg'
    },
    {
      id: 4,
      title: 'Women in Health Leadership Panel',
      date: '2024-05-08',
      time: '6:00 PM - 8:00 PM',
      location: 'Virtual (YouTube Live)',
      type: 'Virtual',
      category: 'Panel Discussion',
      description: 'Celebrating International Women\'s Day with a panel discussion featuring prominent women leaders in Nigeria\'s health sector.',
      speakers: ['Dr. Stella Ameyo - NCDC Director', 'Prof. Grace Olumide - UI', 'Dr. Chioma Nwafor - USAID'],
      capacity: 'Unlimited',
      registration: 'Free',
      price: 'Free',
      organizer: 'H.A.P.I. Women\'s Leadership Initiative',
      topics: ['Gender Equality', 'Leadership', 'Career Development'],
      image: '/placeholder-event-4.jpg'
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Student Health Innovation Challenge 2023',
      date: '2023-11-15',
      location: 'Lagos State University',
      type: 'In-Person',
      category: 'Competition',
      description: 'Annual competition where students presented innovative solutions to local health challenges.',
      participants: '150 students from 20 universities',
      outcome: '15 winning solutions received funding support',
      highlights: ['₦2M in total prizes awarded', '3 solutions currently being piloted', 'Partnership agreements signed']
    },
    {
      id: 6,
      title: 'Rural Health Advocacy Workshop Series',
      date: '2023-09-10 to 2023-09-24',
      location: 'Multiple rural communities in Ogun State',
      type: 'In-Person',
      category: 'Workshop Series',
      description: 'Three-part workshop series focusing on advocacy strategies for rural health improvement.',
      participants: '80 community health workers and volunteers',
      outcome: 'Established 5 new community health advocacy groups',
      highlights: ['Community health improvement plans developed', 'Local government partnerships established', 'Follow-up support programs initiated']
    }
  ];

  const categories = [
    { value: 'all', label: 'All Events' },
    { value: 'Professional Development', label: 'Professional Development' },
    { value: 'Training', label: 'Training & Workshops' },
    { value: 'Panel Discussion', label: 'Panel Discussions' },
    { value: 'Competition', label: 'Competitions' },
    { value: 'Workshop Series', label: 'Workshop Series' }
  ];

  const filteredUpcomingEvents = selectedCategory === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedCategory);

  const getEventTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'virtual':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'in-person':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'hybrid':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Professional Development': 'bg-hapi-bright-green/20 text-hapi-dark-green dark:bg-hapi-bright-green/20 dark:text-hapi-bright-green',
      'Training': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
      'Panel Discussion': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400',
      'Competition': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
      'Workshop Series': 'bg-teal-100 text-teal-800 dark:bg-teal-900/20 dark:text-teal-400'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  };

  return (
    <div className="min-h-screen bg-white dark:bg-hapi-dark-green transition-colors duration-300">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50 dark:from-hapi-dark-green dark:via-hapi-dark-green/90 dark:to-hapi-dark-green/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-aida font-bold text-hapi-dark-green dark:text-white mb-6">
              Events
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join us for workshops, seminars, and conferences designed to advance health advocacy, 
              professional development, and community engagement.
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
                  <span className="text-sm font-medium text-hapi-dark-green dark:text-white">Filter by category:</span>
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
                        <Badge className={getCategoryColor(event.category)}>
                          {event.category}
                        </Badge>
                        <Badge className={getEventTypeColor(event.type)}>
                          {event.type}
                        </Badge>
                      </div>
                      <CardTitle className="font-aida text-xl text-hapi-dark-green dark:text-white mb-2">
                        {event.title}
                      </CardTitle>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Event Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-hapi-bright-green" />
                          <span className="text-gray-600 dark:text-gray-300">
                            {new Date(event.date).toLocaleDateString('en-US', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-hapi-bright-green" />
                          <span className="text-gray-600 dark:text-gray-300">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-hapi-bright-green" />
                          <span className="text-gray-600 dark:text-gray-300">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-hapi-bright-green" />
                          <span className="text-gray-600 dark:text-gray-300">{event.capacity}</span>
                        </div>
                      </div>

                      {/* Speakers */}
                      <div>
                        <h4 className="font-semibold text-hapi-dark-green dark:text-white mb-2 text-sm">Featured Speakers</h4>
                        <div className="space-y-1">
                          {event.speakers.map((speaker, index) => (
                            <div key={index} className="text-xs text-gray-600 dark:text-gray-300">
                              {speaker}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Topics */}
                      <div>
                        <h4 className="font-semibold text-hapi-dark-green dark:text-white mb-2 text-sm">Key Topics</h4>
                        <div className="flex flex-wrap gap-1">
                          {event.topics.map((topic, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Registration */}
                      <div className="border-t border-gray-200 dark:border-hapi-bright-green/20 pt-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium text-hapi-dark-green dark:text-white">
                              {event.price}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Registration: {event.registration}
                            </div>
                          </div>
                          <Button className="bg-hapi-bright-green hover:bg-hapi-bright-green/90 text-white">
                            Register Now
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
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

              <div className="space-y-8">
                {pastEvents.map(event => (
                  <Card key={event.id} className="border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                          <div className="flex flex-wrap items-center gap-2 mb-4">
                            <Badge className={getCategoryColor(event.category)}>
                              {event.category}
                            </Badge>
                            <Badge className={getEventTypeColor(event.type)}>
                              {event.type}
                            </Badge>
                          </div>
                          <h3 className="font-aida text-2xl text-hapi-dark-green dark:text-white mb-3">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                            {event.description}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-hapi-bright-green" />
                              <span className="text-gray-600 dark:text-gray-300">{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-hapi-bright-green" />
                              <span className="text-gray-600 dark:text-gray-300">{event.location}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-hapi-bright-green/5 dark:bg-hapi-bright-green/10 rounded-xl p-6">
                          <h4 className="font-aida font-semibold text-hapi-dark-green dark:text-white mb-4">
                            Event Impact
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">Participants</div>
                              <div className="font-medium text-hapi-dark-green dark:text-white">
                                {event.participants}
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">Key Outcome</div>
                              <div className="font-medium text-hapi-dark-green dark:text-white text-sm">
                                {event.outcome}
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Highlights</div>
                              <ul className="space-y-1">
                                {event.highlights.map((highlight, index) => (
                                  <li key={index} className="text-xs text-gray-600 dark:text-gray-300 flex items-start gap-2">
                                    <div className="w-1 h-1 bg-hapi-bright-green rounded-full mt-1.5 flex-shrink-0"></div>
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
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
            <Button size="lg" className="bg-hapi-bright-green hover:bg-hapi-bright-green/90 text-white px-8 py-4">
              Propose an Event
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-hapi-dark-green text-hapi-dark-green hover:bg-hapi-dark-green hover:text-white dark:border-hapi-bright-green dark:text-hapi-bright-green dark:hover:bg-hapi-bright-green dark:hover:text-hapi-dark-green px-8 py-4"
            >
              Become a Partner
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
