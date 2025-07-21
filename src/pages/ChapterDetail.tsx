
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MapPin, Users, Calendar, Mail, Award, Camera, ExternalLink } from 'lucide-react';

const ChapterDetail = () => {
  const { chapterId } = useParams();

  const chapterData = {
    oau: {
      name: 'OAU Chapter',
      university: 'Obafemi Awolowo University',
      fullName: 'Obafemi Awolowo University Chapter',
      location: 'Ile-Ife, Osun State, Nigeria',
      established: 'August 21, 2023',
      members: '20+',
      description: 'The OAU Chapter of the Health Outcomes, Advocacy, and Professional Development Initiative (H.A.P.I.) is a vibrant student-led hub advancing Good Pharmacy Practice (GPP) and compassionate care in Southwestern Nigeria. Founded by forward-thinking pharmacy students, the chapter continues to empower student advocates, elevate professional standards, and make meaningful contributions to good pharmacy practice in Nigeria.',
      mission: 'To equip OAU students with the skills, experiences, and mindset to lead community-centered pharmacy initiatives, advocate for better health policies, and become trusted agents of change in Nigeria’s healthcare system.',
      activities: [
        {
          title: 'Community Health Outreach',
          description: 'Hosting education programs and awareness drives (e.g., antimicrobial stewardship campaigns, pharmacy professional awareness in schools) to improve population-level health literacy and patient safety.',
          impact: '300+ community members reached'
        },
        {
          title: 'Professional Development',
          description: 'Hands-on training and virtual/in-person workshops in pharmacy leadership, research, and advocacy (e.g., Mentorship Series, Policy & Practice webinars).',
          impact: '200+ students trained'
        },
        {
          title: 'Interprofessional Collaboration',
          description: 'Creating platforms for cross-disciplinary dialogue between medical, pharmacy, nursing, and public health students to foster team-based care.',
          impact: '3 Interdisplinary speaker forums held'
        },
        {
          title: 'Public Health Social Advocacy',
          description: 'Student-led campaigns hosted across social media platforms to educate the public on pressing health issues, often aligned with national and global observances like World Pharmacists Day. These advocacy efforts raise awareness about responsible medication use, mental health, and health equity.',
          impact: '5+ digital health campaigns and research-informed advocacy projects completed'
        }
      ],
      leadership: [
        {
          name: 'Mayowa Mulero',
          role: 'Student Representative',
          year: '5th Year Pharmacy Student',
          bio: 'Health leadership, systems strengthening, and public-facing campus engagement'
        },
        {
          name: 'Christopher Aleji',
          role: 'Co-Student Representative',
          year: '4th Year Pharmacy Student',
          bio: 'Collaborative leadership and pharmacy advocacy'
        },
        {
          name: 'Ademola Bakenne',
          role: 'Program Coordinator',
          year: '5th Year Pharmacy Student',
          bio: 'Professional development program design and team logistics'
        },
        {
          name: 'Opeyemi Oyegunle',
          role: 'Secretary',
          year: '4th Year Pharmacy Student',
          bio: 'Communication, documentation, and event coordination'
        },
        {
          name: 'Stella Olugbo',
          role: 'Graphic Designer',
          year: '3rd Year',
          bio: 'Visual Story telling and Digital Health Promotion'
        },
        {
          name: 'Favour Aremu',
          role: 'Immediate Past Student Rep',
          year: 'Graduate Pharmacy Student',
          bio: 'Mentorship, institutional memory, and chapter advisory support'
        }
      ],
      recentEvents: [
        {
          title: 'PANS OAU Week Community Outreach',
          date: 'May 2025',
          description: 'Student-led campus activation focused on raising awareness about Good Pharmacy Practice and the mission of H.A.P.I. among peers at OAU.'
        },
        {
          title: 'Mentorship in Professional Development',
          date: 'March 2025',
          description: 'Two-part virtual event highlighting the power of mentorship in pharmacy careers, featuring seasoned professionals sharing their journeys'
        },
        {
          title: 'Pharmacy Practice in Nigeria – Virtual Town Hall',
          date: 'December 2024',
          description: 'An open session with pharmacy industry leaders addressing gaps in Nigeria’s pharmacy practice landscape and envisioning reforms.'
        }
        ,
        {
          title: 'Together for Better Care – Interprofessional Open Mic',
          date: 'November 2024',
          description: 'Live Twitter Space session fostering dialogue among pharmacists, doctors, nurses, and physical therapists on the importance of collaborative care.'
        }
      ],
      achievements: [
        'Finalists (Track B) - African Youth AMR 1.0 Hackathon | IPSF-AFRO'
      ],
      contact: {
        email: 'tomabless2018@gmail.com',
        meetingTime: 'Monday - Friday',
        meetingLocation: 'Faculty of Pharmacy, Obafemi Awolowo University',
      },
      joinForm: 'https://forms.gle/qwv5HHZM3ub6SCDu6',
      contactMailto: 'mailto:tomabless2018@gmail.com',
    },
    ui: {
      name: 'UI Chapter',
      university: 'University of Ibadan',
      fullName: 'University of Ibadan Chapter',
      location: 'Ibadan, Oyo State, Nigeria',
      established: 'April 10, 2023',
      members: '15+',
      description: `The University of Ibadan Chapter of H.A.P.I. builds on UI’s legacy of academic excellence and community engagement to advocate for better pharmacy practice, promote public health awareness, and empower the next generation of student leaders.`,
      mission: `To promote health advocacy and professional development among pharmacy students at the University of Ibadan by fostering leadership, research collaboration, and community health education. We empower students to champion equity and awareness through school outreaches, health campaigns, and policy engagement initiatives.`,
      activities: [
        {
          title: 'Community Engagement for Youth Health Awareness',
          description: 'Interactive health education sessions in secondary schools to inspire healthier habits and career interests in healthcare.',
          impact: 'One school reached in Oyo State'
        },
        {
          title: 'Digital Health Campaigns',
          description: 'Social media initiatives like World Oral Health Day and the Health/Wellness Tips Series to increase public awareness of key health issues.',
          impact: '2,000+ combined digital impressions'
        },
        {
          title: 'Student Development & Leadership',
          description: 'Semesterly webinars and skill-building workshops designed to strengthen leadership, ethics, and career readiness.',
          impact: '200+ student participants'
        },
        {
          title: 'Public Health Outreach',
          description: 'Health fairs and screening events on campus, with counseling, medication reviews, and free consultations.',
          impact: '300+ students served'
        }
      ],
      leadership: [
        { name: 'Priscilla Ajayi', role: 'Student Representative', year: 'Pharmacy – 3rd Year' },
        { name: 'Khadijat Shonibare', role: 'Co-Student Representative', year: 'Pharmacy – 5th Year' },
        { name: 'Testimony Adeleke', role: 'General Secretary', year: 'Pharmacy – 3rd Year' },
        { name: 'Abraham Ogunlowo', role: 'Programs Coordinator', year: 'Pharmacy – 4th Year' },
        { name: 'Clement Ojo', role: 'Co-Programs Coordinator', year: 'Pharmacy – 4th Year' },
        { name: 'Grace Akande', role: 'Financial Secretary', year: 'Pharmacy – 3rd Year' },
        { name: 'Olakulehin Adebusuyi', role: 'Immediate Past Student Rep', year: 'Pharmacy – 5th Year' },
      ],
      recentEvents: [
        {
          title: 'Hangout 1.0: Reflecting on our Journey',
          date: 'February 20, 2025',
          description: 'A community-building event that brought together members to reflect, share stories, and inspire a stronger commitment to service and health advocacy.'
        },
        {
          title: 'World Oral Health Day Social Media Campaign',
          date: 'March 20, 2025',
          description: 'An online campaign to promote oral health awareness, reaching over 1,000 users with preventive health tips and advocacy messages.'
        },
        {
          title: 'Richgates Divine School Outreach',
          date: 'June 26, 2025',
          description: 'A secondary school health outreach educating students on drug abuse and misuse. This event is part of our ongoing youth engagement initiative in Ibadan.'
        }
      ],
      achievements: [
        'Outstanding Service Award — Olakulehin Adebusuyi recognized by PANS UI for student leadership (2023/2024)'
      ],
      contact: {
        email: 'priscillaajayi00@gmail.com',
        meetingTime: 'Monday - Friday',
        meetingLocation: 'Faculty of Pharmacy, University of Ibadan',
      },
      joinForm: 'https://forms.gle/MwkEsFPiE5PuBgTb6',
      contactMailto: 'mailto:priscillaajayi00@gmail.com',
    }
  };

  const chapter = chapterData[chapterId as keyof typeof chapterData];

  if (!chapter) {
    return (
      <div className="min-h-screen bg-white dark:bg-hapi-dark-green transition-colors duration-300">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-hapi-dark-green dark:text-white mb-4">
              Chapter Not Found
            </h1>
            <Link to="/chapters">
              <Button>Return to Chapters</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-hapi-dark-green transition-colors duration-300">
      <Navigation />
      
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/chapters">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Chapters
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50 dark:from-hapi-dark-green dark:via-hapi-dark-green/90 dark:to-hapi-dark-green/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-aida font-bold text-hapi-dark-green dark:text-white mb-4">
              {chapter.fullName}
            </h1>
            <div className="flex items-center justify-center gap-6 text-lg text-gray-600 dark:text-gray-300 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-hapi-bright-green" />
                <span>{chapter.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-hapi-bright-green" />
                <span>{chapter.members} Active Members</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-hapi-bright-green" />
                <span>Est. {chapter.established}</span>
              </div>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {chapter.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Activities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <Card className="border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
              <CardHeader>
                <CardTitle className="font-aida text-2xl text-hapi-dark-green dark:text-white">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {chapter.mission}
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
              <CardHeader>
                <CardTitle className="font-aida text-2xl text-hapi-dark-green dark:text-white">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-hapi-bright-green" />
                  <span className="text-gray-600 dark:text-gray-300">{chapter.contact.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-hapi-bright-green" />
                  <span className="text-gray-600 dark:text-gray-300">{chapter.contact.meetingTime}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-hapi-bright-green" />
                  <span className="text-gray-600 dark:text-gray-300">{chapter.contact.meetingLocation}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Activities */}
          <div className="mb-20">
            <h2 className="text-4xl font-aida font-bold text-hapi-dark-green dark:text-white mb-8 text-center">
              Key Activities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {chapter.activities.map((activity, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
                  <CardHeader>
                    <CardTitle className="font-aida text-hapi-dark-green dark:text-white">
                      {activity.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-600 dark:text-gray-300">
                      {activity.description}
                    </p>
                    <div className="bg-hapi-bright-green/10 rounded-lg p-3">
                      <span className="text-hapi-bright-green font-semibold text-sm">
                        Impact: {activity.impact}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-20">
            <h2 className="text-4xl font-aida font-bold text-hapi-dark-green dark:text-white mb-8 text-center">
              Leadership Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {chapter.leadership.map((leader, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
                  <CardHeader className="pb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-hapi-bright-green/20 to-emerald-200/40 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-hapi-bright-green" />
                    </div>
                    <CardTitle className="font-aida text-hapi-dark-green dark:text-white text-lg">
                      {leader.name}
                    </CardTitle>
                    <p className="text-hapi-bright-green font-semibold text-sm">{leader.role}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">{leader.year}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {leader.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Events & Achievements */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-aida font-bold text-hapi-dark-green dark:text-white mb-6">
                Recent Events
              </h3>
              <div className="space-y-6">
                {chapter.recentEvents.map((event, index) => (
                  <Card key={index} className="border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-16 bg-hapi-bright-green rounded-full flex-shrink-0"></div>
                        <div>
                          <h4 className="font-aida font-semibold text-hapi-dark-green dark:text-white mb-1">
                            {event.title}
                          </h4>
                          <p className="text-hapi-bright-green text-sm font-medium mb-2">{event.date}</p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-aida font-bold text-hapi-dark-green dark:text-white mb-6">
                Key Achievements
              </h3>
              <Card className="border-green-100 dark:border-hapi-bright-green/20 bg-white dark:bg-hapi-dark-green/20">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {chapter.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-hapi-bright-green flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Join Chapter CTA */}
      <section className="py-20 bg-gray-50 dark:bg-hapi-dark-green/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-aida font-bold text-hapi-dark-green dark:text-white mb-4">
            Join the {chapter.name}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to make a difference in health advocacy and professional development? 
            Join our dynamic community of student leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {chapterId === 'ui' && (chapter as any).joinForm ? (
              <a href={(chapter as any).joinForm} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-hapi-bright-green hover:bg-hapi-bright-green/90 text-white px-8 py-4">
                  Apply to Join Chapter
                </Button>
              </a>
            ) : chapterId === 'oau' && (chapter as any).joinForm ? (
              <a href={(chapter as any).joinForm} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-hapi-bright-green hover:bg-hapi-bright-green/90 text-white px-8 py-4">
                  Apply to Join Chapter
                </Button>
              </a>
            ) : (
              <Button size="lg" className="bg-hapi-bright-green hover:bg-hapi-bright-green/90 text-white px-8 py-4">
                Apply to Join Chapter
              </Button>
            )}
            {chapterId === 'ui' && (chapter as any).contactMailto ? (
              <a href={(chapter as any).contactMailto} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-hapi-dark-green text-hapi-dark-green hover:bg-hapi-dark-green hover:text-white dark:border-hapi-bright-green dark:text-hapi-bright-green dark:hover:bg-hapi-bright-green dark:hover:text-hapi-dark-green px-8 py-4"
                >
                  Contact Chapter Leaders
                </Button>
              </a>
            ) : chapterId === 'oau' && (chapter as any).contactMailto ? (
              <a href={(chapter as any).contactMailto} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-hapi-dark-green text-hapi-dark-green hover:bg-hapi-dark-green hover:text-white dark:border-hapi-bright-green dark:text-hapi-bright-green dark:hover:bg-hapi-bright-green dark:hover:text-hapi-dark-green px-8 py-4"
                >
                  Contact Chapter Leaders
                </Button>
              </a>
            ) : (
              <Button 
                variant="outline" 
                size="lg"
                className="border-hapi-dark-green text-hapi-dark-green hover:bg-hapi-dark-green hover:text-white dark:border-hapi-bright-green dark:text-hapi-bright-green dark:hover:bg-hapi-bright-green dark:hover:text-hapi-dark-green px-8 py-4"
              >
                Contact Chapter Leaders
              </Button>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChapterDetail;
