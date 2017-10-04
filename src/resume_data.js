export default function () {
  return {
    name: 'Shun Chu',
    contact: {
      email: 'shun.chu@gmail.com',
      phone: '408.940.5885'
    },
    experiences: [
      {
        company: 'Agency MVP Inc',
        title: 'VP of Engineering',
        location: 'Dallas, TX (Remote in CA)',
        date: 'Sept 2014 - Aug 2017',
        desc: {
          info: '',
          resp: [
            'Founding engineer; full stack development',
            'Acting scrum master & authored technical specs to meet business needs',
            'Managed a team of developers across 4 international timezones'
          ],
          tools: 'Chef, Ember.js, Postgres, Ruby on Rails, Sinatra',
          services: 'AWS (ElastiCache, OpsWorks, RDS, S3, SQS… etc), CircleCI, Github, Rollbar, Stripe, Texas DMV data, Trello, Twilio' }
      },
      {
        company: 'BlueKai (acquired by Oracle)',
        title: 'Sr Software Developer',
        location: 'Cupertino, CA',
        date: 'Jan 2013 - Jul 2014',
        desc: {
          info: '',
          resp: [
            'Full stack developer with emphasis on UI/UX development',
            'Authored platform dev team Chef cookbooks for various production & beta instances',
            'Contributor to company-wide Chef cookbooks; on-boarded other devs on Chef ways',
            'Maintained BlueKai iOS SDK'
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
          info: 'Use iPhone camera to detect and measure blood pressure; accepted into Stanford Motwani Labs mentorship program',
          resp: [
            'Full stack and iOS development',
            'User-informed research & business development'
          ],
          tools: 'Objective-C (iOS client), Postgres, Ruby on Rails (services)',
          services: 'AWS EC2, Github, SendGrid, Trello'
        }
      },
      {
        company: 'Ginzametrics',
        title: 'Lead UI Engineer',
        location: 'Mountain View, CA',
        date: 'Aug 2011 - Jun 2012',
        desc: {
          info: 'YC-funded SaaS specialized in SEO optimization recommendations',
          resp: [
            'Full stack RoR developer with emphasis on UI/UX',
            'Revamped user dashboard with interactive metrics'
          ],
          tools: 'handlebars.js, highcharts.js, i18n.js, Javascript, Postgres, Ruby on Rails, Wordpress',
          services: 'AWS, Github, Stripe'
        }
      },
      {
        company: 'Gazillion Entertainment',
        title: 'Lead UI Engineer, Platform Services',
        location: 'San Mateo, CA',
        date: 'Nov 2009 - Jul 2011',
        desc: {
          info: '',
          resp: [
            'UI platform engineering lead',
            'Devised a payment prototype that bypassed costly PCI certification',
            'Lead efforts on CDN deployment for Wordpress, Flash and other front-end assets'
          ],
          tools: 'Flash/AS3, Javascript, LAMP stack, Perforce, Wordpress, TestTrack',
          services: 'AWS S3/Cloudfront'
        }
      },
      {
        company: 'Smarty Card (Gazillion Entertainment)',
        title: 'Sr Software Engineer',
        location: 'San Mateo, CA',
        date: 'May 2008 - Oct 2009',
        desc: {
          info: 'Web-based education supplement for "tweens", winner of People\'s Choice Award at DEMO \'09 and NAPPA Gold Winner 2009',
          resp: [
            'Lead developer for marketing, payment and on-boarding flows',
            'Key contributor to paid content in Flash/AS3'
          ],
          tools: 'Flash/AS3, Javascript, JSP, Perforce, TestTrack',
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
            'End-to-end full service web development'
          ],
          tools: 'Flash/AS3, Javascript, LAMP stack, webDAV, Wordpress',
          services: ''
        }
      }
    ],
    education: [
      { school: 'Savannah College of Art & Design', degree: 'MFA, Interactive Design & Game Development', location: 'Savannah, GA', distinctions: [ 'Presidential Fellowship recipient' ] },
      { school: 'Savannah College of Art & Design', degree: 'BFA, Computer Art', location: 'Savannah, GA', distinctions: [ 'Outstanding portfolio scholarship recipient', 'Received five prestigious student leadership awards' ] },
      { school: 'UC Santa Cruz Extension', degree: 'Certificate, Unix/Linux System Management & Administration', location: 'Cupertino, CA', distinctions: [] }
    ],
    volunteer: [
      { cause: 'ACM SIGGRAPH', title: 'Paper Submission Jury', date: '2015-2017' },
      { cause: 'Code enhancements & fixes to various projects on Github', title: 'OSS Contributor', date: '2016-2017' }
    ],
    social_media: [
      { name: 'Github', url: 'https://github.com/shunchu/' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shunchu/' }
    ]
  }
}
