
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, MapPin, Target, ExternalLink } from 'lucide-react';

const projectsByYear = {
  '2022': [
    {
      title: 'Panel Discussion: Setbacks and the Way Forward for Good Pharmacy Practice in Nigeria',
      tags: ['Advocacy', 'Completed'],
      goal: 'To discuss the current state of Good Pharmacy Practice (GPP) in Nigeria and chart strategic paths for reform.',
      outcomes: [
        '5 expert panelists across academia and practice',
        '100+ pharmacy students registered',
        'Catalyzed student-led GPP reform discussions',
      ],
      location: 'Virtual',
      date: 'June 3, 2022',
      media: 'https://www.youtube.com/watch?v=4G_UKPzzwcQ',
    },
  ],
  '2023': [
    {
      title: 'Navigating the Nigerian Pharm.D Program',
      tags: ['Training & Workshops', 'Completed'],
      goal: 'To highlight the benefits, requirements, and expectations of the Nigerian Pharm.D program.',
      outcomes: [
        '113 student participants',
        'Panel included recent Pharm.D graduates and students studying abroad',
      ],
      location: 'Virtual',
      date: 'April 15, 2023',
      media: 'https://www.youtube.com/watch?v=z7-xhFhqM94&t=22s',
    },
    {
      title: 'Scholarship Opportunities for Nigerian Pharmacy Students',
      tags: ['Training & Workshops', 'Completed'],
      goal: 'To share local and global scholarship opportunities available to Nigerian pharmacy students.',
      outcomes: [
        '178 student participants',
        'Resources shared by students currently in funded programs',
      ],
      location: 'Virtual',
      date: 'April 29, 2023',
      media: 'https://www.youtube.com/watch?v=fs0ic_ah75U&t=1s',
    },
    {
      title: 'Future of Healthcare: Role of Pharmacists',
      tags: ['Training & Workshops', 'Completed'],
      goal: 'To discuss the evolving roles of pharmacists in healthcare and GPP’s impact on health systems.',
      outcomes: [
        '8 participants',
        'Led by a hospital pharmacist from UCH Ibadan',
      ],
      location: 'Virtual',
      date: 'September 24, 2023',
    },
    {
      title: 'The Silent Movement Project | African Youth AMR 1.0 Hackathon (IPSF-AFRO)',
      tags: ['Advocacy', 'Completed'],
      goal: 'A contest to educate secondary school students on antimicrobial resistance and raise youth advocates.',
      outcomes: [
        'The TCPPP-OAU project reached the final round of the national Track B competition',
        '5 student pharmacists in antimicrobial resistance advocacy',
      ],
      location: 'Ibadan',
      date: 'November 2023',
    },
    {
      title: 'Good Pharmacy Practice Essay Contest',
      tags: ['Competition', 'Completed'],
      goal: 'To promote written dialogue on pharmacy practice challenges and solutions in Nigeria.',
      outcomes: [
        '39 applicants from 10+ pharmacy schools',
        '15 finalists, 3 winners awarded and published',
      ],
      location: 'Nationwide',
      date: 'October 2023',
    },
    {
      title: 'Free Medical/SEO Writing Training – International Day of the Girl Child',
      tags: ['Advocacy', 'Completed'],
      goal: 'To train the next generation of women pharmacy advocates who will champion Good Pharmacy Practice through writing.',
      outcomes: [
        '9 applicants, 5 accepted student pharmacists, 2 graduated student pharmacists',
      ],
      partners: ['BAS'],
      location: 'Online',
      date: 'Nov 11, 2023 – Mar 17, 2024',
    },
  ],
  '2024': [
    {
      title: 'Becoming an Outstanding Leader in Pharmacy School',
      tags: ['Professional Development', 'Completed'],
      goal: 'To build students\' leadership and decision-making skills.',
      outcomes: [
        '97 participants',
        'Insights from PSN-YPG and health innovation leaders',
      ],
      location: 'Virtual',
      date: 'Jan 27, 2024',
      media: 'https://www.youtube.com/watch?v=NmNaxWAkX30',
    },
    {
      title: 'Pharmacy Profession Awareness – Secondary School Outreach',
      tags: ['Community Outreach', 'Completed'],
      goal: 'To educate students about pharmacy career paths and healthcare roles.',
      outcomes: [
        'Reached 40+ students',
        'First in a series of youth-targeted education initiatives',
      ],
      location: 'Ibadan',
      date: 'Feb 14, 2024',
    },
    {
      title: 'UI-SU Health Fair: Holistic Wellness',
      tags: ['Community Outreach', 'Completed'],
      goal: 'To promote preventive care and accessible wellness resources for students.',
      outcomes: [
        '300+ students attended',
        'Screenings, cancer awareness, and nutrition stations',
      ],
      partners: ['Team Rebirth, Panacea, UI Public Health Team, Lakeshore Cancer Center'],
      location: 'University of Ibadan',
      date: 'Mar 5, 2024',
    },
    {
      title: 'Developing the Leader in You',
      tags: ['Professional Development', 'Completed'],
      goal: 'To strengthen students\' leadership potential within and beyond pharmacy school.',
      outcomes: [
        'Featured National PANS President',
        '43 participants',
      ],
      location: 'Virtual',
      date: 'Aug 10, 2024',
    },
    {
      title: 'Mental Health Balance in Pharmacy School',
      tags: ['Professional Development', 'Completed'],
      goal: 'To guide students in maintaining mental wellness amid academic demands.',
      outcomes: [
        'Practical tips and relatable dialogue',
      ],
      location: 'Virtual',
      date: 'Aug 17, 2024',
    },
    {
      title: 'World Pharmacist Day Campaign (3-Day Series)',
      tags: ['Awareness Campaign', 'Completed'],
      goal: 'To recognize pharmacists\' impact and promote system-wide motivation.',
      outcomes: [
        'Recognized pharmacists\' impact and promoted system-wide motivation',
      ],
      location: 'Virtual',
      date: 'Sept 23–25, 2024',
    },
    {
      title: 'World Mental Health Day Campaign',
      tags: ['Awareness Campaign', 'Completed'],
      goal: 'To emphasize the importance of mental well-being among healthcare professionals.',
      outcomes: [
        'Emphasized the importance of mental well-being among healthcare professionals',
      ],
      location: 'Virtual',
      date: 'Oct 10, 2024',
    },
    {
      title: 'Together for Better Care – Interprofessional Workshop',
      tags: ['Training & Workshops', 'Completed'],
      goal: 'To enhance cross-professional collaboration among healthcare trainees.',
      outcomes: [
        'Participation from nurses, pharmacists, doctors, PTs, 20+ attendees via Twitter Space',
      ],
      location: 'Virtual',
      date: 'Nov 23, 2024',
    },
    {
      title: '15-Day Health & Wellness Social Media Series',
      tags: ['Awareness Campaign', 'Completed'],
      goal: 'To offer daily wellness tips tailored to pharmacy students.',
      outcomes: [
        'Daily wellness tips tailored to pharmacy students',
      ],
      location: 'Online',
      date: 'Nov 27–Dec 16, 2024',
    },
    {
      title: 'Pharmacy Practice in Nigeria: What Gap is Left to be Filled?',
      tags: ['Training & Workshops', 'Completed'],
      goal: 'To explore existing challenges and actionable reforms in Nigerian pharmacy practice.',
      outcomes: [
        'Over 130 participants',
        'Led by the MD/CEO of Victory Drugs, Lagos',
      ],
      location: 'Virtual',
      date: 'Dec 21, 2024',
      media: 'https://www.youtube.com/watch?v=2r7YU-lxVCE',
    },
  ],
  '2025': [
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
    },
  ],
};

const Projects = () => {
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
      {/* Cumulative Impact (moved up) */}
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
                <div className="text-3xl font-bold text-hapi-bright-green mb-2">1,400+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">People Reached</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-hapi-bright-green mb-2">25+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-hapi-bright-green mb-2">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Partner Organizations</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-hapi-bright-green mb-2">7</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">States Covered</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Projects by Year (descending order) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {["2025", "2024", "2023", "2022"].map(year => (
            projectsByYear[year] && (
              <div key={year} className="mb-20">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-aida font-bold text-hapi-dark-green dark:text-white mb-4">
                    {year} Projects
                  </h2>
                  <div className="w-24 h-1 bg-hapi-bright-green mx-auto rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {projectsByYear[year].map((project, idx) => (
                    <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
                      <CardHeader>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          {project.tags && project.tags.map((tag, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <CardTitle className="font-aida text-2xl text-hapi-dark-green dark:text-white mb-2">
                          {project.title}
                        </CardTitle>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                          <b>Goal:</b> {project.goal}
                        </p>
                        <div className="flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                          <MapPin className="h-4 w-4" /> {project.location}
                          <Calendar className="h-4 w-4 ml-4" /> {project.date}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {project.outcomes && (
                          <div>
                            <h4 className="font-semibold text-hapi-dark-green dark:text-white mb-1">Key Outcomes</h4>
                            <ul className="list-disc pl-5">
                              {project.outcomes.map((outcome, i) => (
                                <li key={i} className="text-sm text-gray-600 dark:text-gray-300">{outcome}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {project.partners && (
                          <div>
                            <h4 className="font-semibold text-hapi-dark-green dark:text-white mb-1">Key Partners</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.partners.map((partner, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {partner}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        {project.media && (
                          <a href={project.media} target="_blank" rel="noopener noreferrer">
                            <button className="mt-2 px-4 py-2 bg-hapi-bright-green text-white rounded hover:bg-hapi-bright-green/90 flex items-center gap-2">
                              View Media <ExternalLink className="h-4 w-4" />
                            </button>
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
