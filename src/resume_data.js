export default function () {
  return {
    name: 'Shun Chu',
    contact: {
      email: 'shun.chu@gmail.com',
      phone: '408.219.7027'
    },
    intro: 'Leveraging an MFA in "Interaction Design & Game Development", I specialize in crafting delightful user experiences. My recognized UI/UX expertise has driven success in both leadership and contributor roles across diverse organizations.',
    experiences: [
      {
        company: 'IGS Solutions, LLC',
        title: 'Sr. Software Engineer / Frontend Lead',
        location: 'Los Angeles, CA (Remote)',
        date: 'Jul 2023 - Sept 2023',
        desc: {
          info: 'Established foundational UI/UX patterns and best practices as the first frontend hire.',
          resp: [
            'Collaborated with design lead on a design system for standardized components using TailwindCSS and Web Components.',
            'Designed and prototyped a more efficient inventory management flow with the inventory team.',
            'Utilized Rails Hotwire/Stimulus, eliminating JS SPA overhead.'
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
          info: 'Led Customer Sales engineering team, focusing on CX and revenue growth.',
          resp: [
            'Led full-stack team driving customer sales growth during expert visits.',
            'Launched Asurion Product Catalog, increasing RPV by ~12%.',
            'Coordinated engineering priorities and integrated former Enjoy team into Asurion tech stack.',
            'Resolved high-priority system-wide tech debts impacting critical dependencies with other tech leads.',
          ],
        }
      },
      {
        company: 'Enjoy Technology, Inc',
        title: 'Sr. Software Engineer',
        location: 'San Mateo, CA (Remote)',
        date: 'Jul 2020 - Aug 2022',
        desc: {
          info: 'Full-stack software developer contributing to multiple web properties.',
          resp: [
            'Owned and built several Enjoy web properties.',
            'Owned Live Catalog product development (+90% test coverage).',
            'Live Catalog launch resulted in a 50% overall attach rate increase (+160% hardware, +20% services).',
            'Spearheaded frontend internationalization (i18n) integrations.',
            'Advocated for and contributed to UI/UX core working group implementing Enjoy\'s design system.',
            'Mentored, onboarded, and paired with frontend developers.',
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
          info: 'Provided scoping, architecture, and hands-on development consulting for clients (AAHomestays, Alderwood, Enjoy, etc.).',
          resp: [
            'Full-stack software development and technical consulting.',
            'Technical consulting focused on achieving business goals.',
            'Chef/DevOps consulting and implementation.',
            'Authored browser extensions.',
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
          info: 'Pioneered leads/prospects management software tailored for the insurance sales industry.',
          resp: [
            'Founding engineer; led engineering org and selected Ruby on Rails framework.',
            'Acted as scrum master; authored technical/product specs.',
            'Built and led a diverse, multi-timezone engineering team.',
            'Integrated Texas DMV data via weekly ingestion engine.',
            'Built lead ranking dashboard using recommendation algorithms to identify high-value prospects.',
            'Integrated Twilio SMS for in-platform lead communication.',
            'Integrated Stripe subscription payments.',
            'Increased lead-to-sales conversion by 23%, leading to major industry integration talks.',
            'Platform adopted by over 25% of top Farmers Insurance agencies in Texas.',
            'Created scalable deployment pipeline using Chef and AWS.',
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
          info: 'Software engineer on DMP (Data Management Platform) team.',
          resp: [
            'Frontend/UI developer, occasional Rails work.',
            'Authored/maintained Chef cookbooks (+90% test coverage) for DMP hardware & EC2 beta environments.',
            'Contributed to company-wide Chef cookbooks.',
            'Trained colleagues on Chef for knowledge sharing.',
            'Led iOS SDK efforts & supported enterprise customer integrations.',
          ],
          tools: 'Backbone.js, Chef, MySQL, Objective-C, Ruby, Rails',
          services: 'Airbrake, AWS, Chef Enterprise, Confluence, Github'
        }
      },
      {
        company: 'Health Care App Startup',
        title: 'Co-founder',
        location: 'San Jose, CA',
        date: 'Sept 2012 - Dec 2012',
        desc: {
          info: 'Co-founded iPhone camera-based blood pressure app (Stanford Motwani Labs mentorship).',
          resp: [
            'Technical co-founder.',
            'Built Rails APIs/website; architected base Objective-C iOS app.',
            'Conducted user research & business development.',
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
          info: 'Lead UI Engineer for YC-funded SaaS SEO recommendation engine.',
          resp: [
            'Full-stack Rails developer focused on UI/UX.',
            'Redesigned recommendation dashboard, increasing user engagement >30%.',
            'Led Rails i18n integration, coordinating with 3rd-party translation agency.',
            'Sole Traditional Chinese translator.'
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
          info: 'Lead UI Engineer on platform services team.',
          resp: [
            'UI lead for *Kung Fu Panda World* (launched 2010).',
            'Primary developer for *amazingsociety.com* (launched Feb 2011).',
            'Led platform development for *heroup.com* (launched Apr 2011).',
            'Developed payment prototype avoiding PCI compliance costs.',
            'Facilitated CDN deployment for various assets.',
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
          info: 'Sr. Software Engineer for award-winning web-based educational supplement ("tween" market).',
          resp: [
            'Lead frontend dev for marketing, payment, and onboarding flows.',
            'Key contributor to ActionScript/Flash paid content.',
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
          info: 'Founder, full-stack contract web developer.',
          resp: [
            'Met with clients to spec projects.',
            'Provided end-to-end web development services.',
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
        title: 'Paper Submission Jury',
        cause: 'ACM SIGGRAPH',
        date: '2015-2017',
      },
      {
        title: 'OSS Contributor',
        cause: '',
        date: '2016-present',
      },
      {
        title: 'Brazilian Jiujitsu Assistant Instructor',
        cause: '',
        date: '2019',
      }
    ],
    socialMedia: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/shunchu/'
      },
      {
        name: 'GitHub',
        url: 'https://github.com/shunchu/'
      },
    ]
  }
}
