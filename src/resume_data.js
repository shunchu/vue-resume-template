export default function () {
  return {
    name: 'Shun Chu',
    contact: {
      email: 'shun.chu@gmail.com',
      phone: '408.219.7027'
    },
    intro: 'With an MFA in Interaction Design & Game Development, Shun has spent his career crafting delightful user experiences. His keen eye on UI/UX was quickly recognized early on in his engineering career, and he\'s been instrumental in leadership and contributor roles in organizations of all sizes ever since.',
    experiences: [
      {
        company: 'IGS Solutions, LLC',
        title: 'Sr. Software Engineer / Frontend Lead',
        location: 'Los Angeles, CA (Remote)',
        date: 'Jul 2023 - Sept 2023',
        desc: {
          info: 'I was brought on as the first frontend engineer to establish UI/UX patterns and best practices for the team',
          resp: [
            'Collaborated with the design lead to orchestrate a design language system on everything from typography, colors to standardized component development using TailwindCSS and web component design concepts',
            'Working with the inventory team, we designed and implemented a working prototype of an infinitely more efficient inventory management flow',
            'Used primarily only Rails Hotwire and Stimulus technologies without Javascript SPA overhead'
          ],
          tools: 'Hotwire/Stimulus, PostgreSQL, Ruby on Rails, TailwindCSS',
        },
      },
      {
        company: 'Asurion, LLC',
        title: 'Sr. Software Engineer / Tech Lead',
        location: 'Nashville, TN (Remote)',
        date: 'Aug 2022 - Jul 2023',
        desc: {
          info: 'Customer Sales engineering lead with emphasis on customer experience and revenue growth',
          resp: [
            'Led a talented team of full-stack developers responsible for growing customer sales during expert in-visit sessions',
            'We successfully launched Asurion Product Catalog which drove noticeable increases in RPV (revenue per visit) of almost 12% when it\'s used',
            'Coordinated Customer Sales engineering priorities and effectively integrated our (formerly Enjoy) team into the Asurion tech stack across Asurion\'s expansive engineering org',
            'Collaborated with other team leads to mitigate and resolve system-wide high priority tech debts that impacted risky software dependencies',
          ],
        }
      },
      {
        company: 'Enjoy Technology, Inc',
        title: 'Sr. Software Engineer',
        location: 'San Mateo, CA (Remote)',
        date: 'Jul 2020 - Aug 2022',
        desc: {
          info: 'Full-stack software developer',
          resp: [
            'Assisted, owned and built a number of Enjoy\'s web properties',
            'Complete ownership of the Live Catalog product with +90% test coverage',
            'When Live Catalog launched, we saw a 50% bump in overall attach rates (additionally, +160% in hardware/accessories and +20% in insurance/services)',
            'Spearheaded Enjoy\'s i18n integration on all frontend applications',
            'Advocated for and was part of UI/UX core working group implementing Enjoy\'s design language system',
            'Mentored, onboarded and paired with other frontend developers',
          ],
          tools: 'Fullstory, i18next.js, Jest, PostgreSQL, React JS, Ruby on Rails, TailwindCSS, Testing Library, Typescript... etc.',
        }
      },
      {
        company: 'Freelance Contractor',
        title: 'Technology Solutions Consultant',
        location: 'Rocklin, CA (Remote)',
        date: '2017 - 2020',
        desc: {
          info: 'Scope, architect and hands-on development as a consulting engineer. Clients included: AAHomestays, Alderwood Group, Enjoy Inc, Family Wealth Law Group, Infinite Jiujitsu, KarFarm, Oracle Corp... etc.',
          resp: [
            'Full-stack software development and consulting',
            'Technical consulting to achieve business objectives',
            'Chef and DevOps consulting and implementation',
            'Browser extensions authoring',
          ],
          tools: 'Chef, Docker, Express JS, PostgreSQL, React JS, Ruby on Rails, VueJS, WordPress',
          services: 'CircleCI, Github, Gitlab, Optimizely, Shopify, Trello, Twilio'
        }
      },
      {
        company: 'Agency MVP Inc',
        title: 'Dir. of Engineering',
        location: 'Dallas, TX (Remote)',
        date: 'Sept 2014 - Aug 2017',
        desc: {
          info: 'We pioneered a leads/prospects management software developed especially to tackle the unique challenges of the insurance sales industry',
          resp: [
            'Founding engineer with leadership role for the engineering org; selected Ruby on Rails as framework of choice to build the platform on',
            'Acting scrum master & authored technical and product specs to meet business needs',
            'Built and led a diverse engineering team that spanned across multiple international time zones',
            'Built a data ingestion engine integrated with Texas DMV data API for weekly data updates',
            'Designed and built data-rich ranking dashboard using internal recommendation algorithms for most valuable leads/prospects most likely to close',
            'Full Twilio SMS integration for agents to consolidate communications with leads/prospects within the platform',
            'Stripe subscription payment system integration',
            'The service increased "lead to sales" conversion by a whopping 23% for agents using the platform -- a number so staggering that led to systems integration discussions with one of the major insurance players in the industry',
            'Today, over 25% of Farmers insurance\'s top agencies use the platform',
            'Bootstrapped and developed deployment pipeline using Chef and AWS',
          ],
          tools: 'Chef, Ember.js, PostgreSQL, Ruby on Rails, Sinatra',
          services: 'AWS (ElastiCache, OpsWorks, RDS, S3, SQS… etc), CircleCI, Github, Rollbar, Stripe, Texas DMV data service, Trello, Twilio'
        }
      },
      {
        company: 'BlueKai (acquired by Oracle)',
        title: 'Sr. Software Developer',
        location: 'Cupertino, CA',
        date: 'Jan 2013 - Jul 2014',
        desc: {
          info: 'Software engineer on the DMP (Data Management Platform) team',
          resp: [
            'Frontend/UI developer with occasional trips to the Rails land',
            'Authored and maintained a series of Chef cookbooks (with +90% test coverage) for DMP machines (production on-site hardware) and EC2-based instances (beta environments) using DevOps best practices',
            'Active contributor to company-wide Chef cookbooks',
            'Helped train colleagues on the Chef ways for knowledge and resource redundancy',
            'Led iOS SDK efforts and provided support to enterprise customers that integrated with the SDK',
          ],
          tools: 'Backbone.js, Chef, MySQL, Objective-C, Ruby on Rails',
          services: 'Airbrake, AWS, Chef Enterprise, Confluence, Github'
        }
      },
      {
        company: 'Health Care App Startup',
        title: 'Co-founder',
        location: 'San Jose, CA',
        date: 'Sept 2012 - Dec 2012',
        desc: {
          info: 'Utilizing iPhone\'s camera to detect and measure blood pressure; accepted into Stanford Motwani Labs mentorship program',
          resp: [
            'Technical co-founder',
            'Built supporting APIs and platform and website using Ruby on Rails; architected the base iOS app with Objective-C',
            'User-informed research & business development',
          ],
          tools: 'Objective-C (iOS client), PostgreSQL, Ruby on Rails (services)',
          services: 'AWS EC2, Github, SendGrid, Trello'
        }
      },
      {
        company: 'Ginzametrics',
        title: 'Lead UI Engineer',
        location: 'Mountain View, CA',
        date: 'Aug 2011 - Jun 2012',
        desc: {
          info: 'YC-funded SaaS SEO recommendation engine',
          resp: [
            'Full stack Ruby on Rails developer with emphasis on UI/UX',
            'Revamped and redesigned recommendation dashboard with interactive metrics which led to over 30% increase in user engagements',
            'Led i18n integration efforts for the Rails app; worked closely with a 3rd-party translation agency to ensure smooth delivery of translation files into Rails platform',
            'Single-handedly provided Traditional Chinese translations for the entire software stack as part of the i18n effort'
          ],
          tools: 'handlebars.js, highcharts.js, i18n.js, Javascript, PostgreSQL, Ruby on Rails, WordPress',
          services: 'AWS, Github, Stripe'
        }
      },
      {
        company: 'Gazillion Entertainment',
        title: 'Lead UI Engineer',
        location: 'San Mateo, CA',
        date: 'Nov 2009 - Jul 2011',
        desc: {
          info: 'I was part of the platform services team as a frontend engineering lead',
          resp: [
            'Led platform development for *heroup.com* — launched on 04.2011',
            'Primary developer on *amazingsociety.com* — launched on 02.2011',
            'UI lead for platform efforts on *Kung Fu Panda World* — launched in 2010',
            'Devised a payment prototype that avoided costly PCI compliance protocols (this was before Stripe was popular)',
            'Lead efforts on CDN deployment for WordPress, Flash and other frontend assets',
          ],
          tools: 'ActionScript, Flash, Javascript, LAMP stack, Perforce, WordPress, TestTrack',
          services: 'AWS S3/Cloudfront'
        }
      },
      {
        company: 'Smarty Card (Gazillion Entertainment)',
        title: 'Sr. Software Engineer',
        location: 'San Mateo, CA',
        date: 'May 2008 - Oct 2009',
        desc: {
          info: 'Web-based education supplement for "tweens", winner of People\'s Choice Award at DEMO \'09 and NAPPA Gold Winner 2009',
          resp: [
            'Lead frontend developer for marketing, payment and on-boarding flows',
            'Key contributor to paid content written in ActionScript and Flash',
          ],
          tools: 'ActionScript, Flash, Javascript, JSP, Perforce, TestTrack',
          services: ''
        }
      },
      {
        company: 'Poweratom Technologies',
        title: 'Founder',
        location: 'San Jose, CA',
        date: 'Dec 2004 - Apr 2008',
        desc: {
          info: 'Full stack contract web developer',
          resp: [
            'Meet and spec projects with clients',
            'End-to-end full service web development',
          ],
          tools: 'ActionScript, Flash, Javascript, LAMP stack, webDAV, WordPress',
          services: ''
        }
      }
    ],
    education: [
      {
        school: 'Savannah College of Art & Design',
        degree: 'MFA, Interactive Design & Game Development',
        location: 'Savannah, GA',
        distinctions: [
          'Presidential Fellowship recipient',
        ],
      },
      {
        school: 'Savannah College of Art & Design',
        degree: 'BFA, Computer Art',
        location: 'Savannah, GA',
        distinctions: [
          'Outstanding portfolio scholarship recipient',
          'Received *five* prestigious student leadership awards',
        ],
      },
      {
        school: 'UC Santa Cruz Extension',
        degree: 'Certificate, Unix/Linux System Management & Administration',
        location: 'Cupertino, CA',
        distinctions: [],
      }
    ],
    volunteer: [
      {
        cause: 'ACM SIGGRAPH',
        title: 'Paper Submission Jury',
        date: '2015-2017',
      },
      {
        cause: 'Code enhancements & fixes to various projects on Github',
        title: 'OSS Contributor',
        date: '2016-present',
      },
      {
        cause: 'Helped with technique demonstrations and instructions for teen\'s class',
        title: 'Brazilian Jiujitsu Assistant Instructor',
        date: '2019',
      }
    ],
    social_media: [
      { name: 'Github', url: 'https://github.com/shunchu/' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shunchu/' }
    ]
  }
}
