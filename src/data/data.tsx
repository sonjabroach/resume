import {
  ArrowDownTrayIcon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  ExeclineItem,
  Hero,
  HomepageMeta,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Sonja Broach.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Chicago based <strong className="text-stone-100">Salesforce Engineering leader</strong>. I have spent 
        <strong className="text-stone-100"> 18 years</strong> building full-stack applications and CRM implementations across industries spanning green energy, fintech, health care, and commerce. 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am looking for my next role at a company where I can be deeply involved in the <strong className="text-stone-100">success and direction of the product</strong>, deliver strong <strong className="text-stone-100">business outcomes</strong>, and contribute to a <strong className="text-stone-100">stellar culture</strong>.  
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `In my free time time, you can find me reading, painting, working in my garden, or playing with my 3 kids and Boston Terrier. `,
  aboutItems: [
    {label: 'Location', text: 'Greater Chicagoland area', Icon: MapIcon},
    {label: 'Age', text: '42', Icon: CalendarIcon},
    {label: 'Interests', text: 'Art, books, holistic health', Icon: SparklesIcon},
  ],
};


export const experience: TimelineItem[] = [
  {
    date: 'April 2023 - June 2024',
    location: 'Sunrun, Inc',
    title: 'Director of Engineering, Salesforce Platform',
    content: (
      <p>
       - Lead a dual-instance transformation and north star re-architecture. 
       - Managed 100 person team spanning Managers, Engineering, Technical Architecture, DevOps/Infrastructure, Administration, Analyst, Manual and Automated Testing, and Solution Architecture functions.
      </p>
    ),
  },
  {
    date: 'March 2018 - April 2023',
    location: 'VillageMD',
    title: 'Director of Engineering',
    content: (
      <p>
        - Delivered innovative, consumer-grade applications for clinical staff and patients through Salesforce Health Cloud. 
        - Managed 15 person team of Managers and Developers.
        - Sales cloud, Service cloud, Field Service lightning
      </p>
    ),
  },
   {
    date: 'March 2018 - April 2023',
    location: 'VillageMD',
    title: 'Director of Engineering',
    content: (
      <p>
        - Delivered innovative, consumer-grade applications for clinical staff and patients through Salesforce Health Cloud. 
        - Managed 15 person team of Managers and Developers. 
        - Health cloud, Sales cloud, Marketing cloud
      </p>
    ),
  },
  {
    date: 'July 2017 - February 2018',
    location: 'XO Group (The Knot.com)',
    title: 'Director of Engineering',
    content: (
      <p>
        - Led team of 15 Salesforce administrators and developers, data engineers, and product managers in service of publishing and supporting content, ad sales, and support for theknot.com pre-acquisition.
        - Sales cloud 
      </p>
    ),
  },
  {
    date: 'July 2014 - 2017',
    location: 'Braintree/Paypal and Groupon',
    title: 'Engineering Manager, Platform Manager',
    content: (
      <p>
        - Led teams ranging 5-25 people 
        - Sales cloud, Service cloud, large scale, heavily integrated 
      </p>
    ),
  },
  {
    date: '2007 - 2010',
    location: 'Cars.com',
    title: 'Software Engineer',
    content: (
      <p>
        - Built and supported foundational Salesforce application in Sales and Service clouds
        - Proposed and won bid to build in-house CPQ functionality and led scrum team through agile transformation process to a completed product.
      </p>
    ),
  },
];

export const execsummary: ExeclineItem[] = [
  {
    title: 'Why am I looking?',
    content: (
      <p>
      I was part of a recent leadership restructuring decision at Sunrun.
      </p>
    ),
  },
  {
    title: 'Distinguished',
    content: (
      <p>
      I have worked across varying tech stacks in distributed, complex, and data-heavy architectures, but my deep experience lies in Salesforce and the Force.com platform.  I have worked deeply with Sales, Service, Health, and Experience Clouds, with more limited experience in Field Service Lightning and Marketing cloud. I have seen large scale issues and dealt with major performance improvements. 
      </p>  
    ),
  },
  {
    title: 'Data-oriented',
    content: (
      <p>
       I have worked on all kinds of integrations spanning point-to-point Apex, middleware, and MuleSoft.   
       Also have experience with MsSQL, PostgresSQL, Snowflake, and Tableau.
      </p>  
    ),
  },
  {
    title: 'Grit',
    content: (
      <p>
        I thrive as a hands on vision-painter, solution / technical / data architect, and get hands on when needed.
      </p>  
    ),
  },
  {
    title: 'Versatile',
    content: (
      <p>
        As an engineering leader I have supported large (100) and small teams (5), creating transparent career architecture and strengthening engineering culture.  I have managed senior managers, technical architects, test automation leaders, and senior engineers.  I am accustomed to a high-growth, fast-paced environment where priorities change frequently.  
      </p>  
    ),
  },
  {
    title: 'People-oriented',
    content: (
      <p>
       I invest in my teams and team culture and the careers of individuals.  I believe in creating transparency and being candid so people know where they stand and how to  move their career forward.  I have experience creating staffing strategies of all kinds with permanent, staff augmented, and consultant type employees.  
      </p>  
    ),
  },
  {
    title: 'Partnerships and Business Strategy',
    content: (
      <p>
       I work with business partners at all levels including the c-team to envision and communicate long term solution and capability roadmaps, system implementations, and design process automation alongside business partners to translate the business needs into technical design.  
      </p>  
    ),
  },
  {
    title: 'North-star vision',
    content: (
      <p>
      I build for quality and longevity with guiding principles that a team can rally around when architecting solutions, including a focus on testing and test automation, strong observability practices, and playbooks for responding to issues.  
      </p>  
    ),
  },

];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out to me.',
  items: [
    {
      type: ContactType.Email,
      text: 'sonjabroach@gmail.com',
      href: 'mailto:sonjabroach@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Greater Chicagoland',
      href: 'https://www.google.ca/maps/place/Chicago+Metropolitan+Area/@41.697771,-89.2576692,8z/data=!3m1!4b1!4m6!3m5!1s0x880e444c8c99e083:0xda7b840a9a579334!8m2!3d41.7435073!4d-88.0118473!16zL20vMDF3NjVz?entry=ttu',
    },
    {
      type: ContactType.Phone,
      text: '(847) 505-3500',
      href: 'tel:847-505-3500',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/sonjarbroach/'},
];
