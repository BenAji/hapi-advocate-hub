
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, MapPin, Target, Camera, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = {
    2024: [
      {
        title: 'Mental Health First Aid Training Program',
        description: 'Comprehensive mental health literacy program targeting university students and community members across Nigerian universities.',
        impact: '500+ students trained, 15+ universities reached',
        location: 'Multi-state initiative',
        duration: 'January - December 2024',
        status: 'Ongoing',
        category: 'Mental Health',
        partners: ['Nigerian Mental Health Association', 'University Health Centers'],
        outcomes: [
          'Reduced stigma around mental health issues',
          'Increased help-seeking behavior among students',
          'Established peer support networks on campuses'
        ]
      },
      {
        title: 'Community Health Data Analytics Project',
        description: 'Leveraging data science to identify health trends and support evidence-based decision making in underserved communities.',
        impact: '20+ communities analyzed, 5 policy recommendations developed',
        location: 'Southwest Nigeria',
        duration: 'March - November 2024',
        status: 'Active',
        category: 'Public Health',
        partners: ['State Ministry of Health', 'Local Government Areas'],
        outcomes: [
          'Improved health data collection systems',
          'Identified key health priorities for resource allocation',
          'Enhanced community health surveillance'
        ]
      }
    ],
    2023: [
      {
        title: 'Maternal Health Advocacy Campaign',
        description: 'Multi-channel advocacy campaign addressing maternal mortality through policy engagement and community education.',
        impact: '10,000+ women reached, 3 policy briefs published',
        location: 'Oyo and Osun States',
        duration: 'February - December 2023',
        status: 'Completed',
        category: 'Maternal Health',
        partners: ['Save the Children Nigeria', 'State Health Insurance Agencies'],
        outcomes: [
          'Increased awareness of maternal health rights',
          'Policy changes in state health insurance coverage',
          'Strengthened referral systems in rural areas'
        ]
      },
      {
        title: 'Student Leadership in Health Innovation Challenge',
        description: 'Competition-based program encouraging students to develop innovative solutions to local health challenges.',
        impact: '200+ participants, 25 innovative solutions developed',
        location: 'Nigeria-wide',
        duration: 'June - December 2023',
        status: 'Completed',
        category: 'Innovation',
        partners: ['UNICEF Nigeria', 'Nigeria Health Tech Alliance'],
        outcomes: [
          'Developed prototype health technologies',
          'Created network of student innovators',
          'Attracted funding for top solutions'
        ]
      },
      {
        title: 'Rural Primary Healthcare Strengthening Initiative',
        description: 'Collaborative effort to improve healthcare delivery in rural communities through capacity building and resource mobilization.',
        impact: '50 health workers trained, 15 health facilities upgraded',
        location: 'Rural communities in Ogun State',
        duration: 'April - October 2023',
        status: 'Completed',
        category: 'Healthcare Delivery',
        partners: ['Primary Healthcare Development Agency', 'Community Leaders'],
        outcomes: [
          'Improved quality of primary healthcare services',
          'Enhanced community health worker capabilities',
          'Increased community engagement in health planning'
        ]
      }
    ],
    2022: [
      {
        title: 'COVID-19 Vaccine Hesitancy Intervention',
        description: 'Evidence-based communication strategy to address vaccine hesitancy and increase uptake in university communities.',
        impact: '75% increase in vaccination rates, 20+ universities participated',
        location: 'University communities nationwide',
        duration: 'March - November 2022',
        status: 'Completed',
        category: 'Infectious Disease',
        partners: ['NCDC', 'University Health Centers', 'WHO Nigeria'],
        outcomes: [
          'Significant increase in vaccine acceptance',
          'Reduced spread of misinformation',
          'Established trust between students and health authorities'
        ]
      },
      {
        title: 'Youth Sexual and Reproductive Health Program',
        description: 'Comprehensive sexual and reproductive health education program targeting adolescents and young adults.',
        impact: '2,000+ young people reached, 100+ peer educators trained',
        location: 'Lagos and Ibadan',
        duration: 'January - December 2022',
        status: 'Completed',
        category: 'Sexual Health',
        partners: ['Marie Stopes Nigeria', 'Youth Development Centers'],
        outcomes: [
          'Improved knowledge of reproductive health',
          'Increased access to family planning services',
          'Reduced teenage pregnancy rates in target areas'
        ]
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'ongoing':
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Mental Health': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
      'Public Health': 'bg-hapi-bright-green/20 text-hapi-dark-green dark:bg-hapi-bright-green/20 dark:text-hapi-bright-green',
      'Maternal Health': 'bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400',
      'Innovation': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
      'Healthcare Delivery': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400',
      'Infectious Disease': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
      'Sexual Health': 'bg-teal-100 text-teal-800 dark:bg-teal-900/20 dark:text-teal-400'
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
              Past Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the impactful initiatives and interventions that H.A.P.I. has implemented 
              to improve health outcomes and strengthen communities across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Projects by Year */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(projects)
            .sort(([a], [b]) => parseInt(b) - parseInt(a))
            .map(([year, yearProjects]) => (
              <div key={year} className="mb-20">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-aida font-bold text-hapi-dark-green dark:text-white mb-4">
                    {year} Projects
                  </h2>
                  <div className="w-24 h-1 bg-hapi-bright-green mx-auto rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {yearProjects.map((project, index) => (
                    <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
                      <CardHeader>
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                              <Badge className={getCategoryColor(project.category)}>
                                {project.category}
                              </Badge>
                              <Badge className={getStatusColor(project.status)}>
                                {project.status}
                              </Badge>
                            </div>
                            <CardTitle className="font-aida text-2xl text-hapi-dark-green dark:text-white mb-2">
                              {project.title}
                            </CardTitle>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                          
                          <div className="lg:w-80 bg-hapi-bright-green/5 dark:bg-hapi-bright-green/10 rounded-xl p-4">
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 text-sm">
                                <Target className="h-4 w-4 text-hapi-bright-green" />
                                <span className="text-gray-600 dark:text-gray-300">{project.impact}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <MapPin className="h-4 w-4 text-hapi-bright-green" />
                                <span className="text-gray-600 dark:text-gray-300">{project.location}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Calendar className="h-4 w-4 text-hapi-bright-green" />
                                <span className="text-gray-600 dark:text-gray-300">{project.duration}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-6">
                        {/* Partners */}
                        <div>
                          <h4 className="font-aida font-semibold text-hapi-dark-green dark:text-white mb-3 flex items-center gap-2">
                            <Users className="h-4 w-4 text-hapi-bright-green" />
                            Key Partners
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.partners.map((partner, partnerIndex) => (
                              <Badge key={partnerIndex} variant="outline" className="text-xs">
                                {partner}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Key Outcomes */}
                        <div>
                          <h4 className="font-aida font-semibold text-hapi-dark-green dark:text-white mb-3">
                            Key Outcomes
                          </h4>
                          <ul className="space-y-2">
                            {project.outcomes.map((outcome, outcomeIndex) => (
                              <li key={outcomeIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-hapi-bright-green rounded-full mt-2 flex-shrink-0"></div>
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Project Gallery Placeholder */}
                        <div className="border-t border-gray-200 dark:border-hapi-bright-green/20 pt-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                              <Camera className="h-4 w-4" />
                              <span>Project media and documentation available</span>
                            </div>
                            <button className="text-hapi-bright-green hover:text-hapi-bright-green/80 text-sm font-medium flex items-center gap-1">
                              View Details
                              <ExternalLink className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-20 bg-gray-50 dark:bg-hapi-dark-green/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-aida font-bold text-hapi-dark-green dark:text-white mb-4">
              Cumulative Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our collective achievements across all projects and initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-hapi-bright-green mb-2">15,000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">People Reached</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-hapi-bright-green mb-2">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-hapi-bright-green mb-2">25+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Partner Organizations</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-hapi-bright-green mb-2">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">States Covered</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
