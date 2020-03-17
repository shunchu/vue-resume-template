export default function () {
  return {
    name: 'Louis de Pointe du Lac',
    contact: {
      email: '',
      phone: '504.555.0666'
    },
    experiences: [
      {
        company: 'Vango',
        title: 'Chief Art Curator',
        location: 'San Francisco, CA',
        date: 'Sept 2015 - Aug 2017',
        desc: {
          info: '',
          resp: [
            'Responsible to curate interesting art for high value clients',
            'Provide insights to app engineering and business development'
          ],
          tools: '',
          services: ''
        }
      }
    ],
    education: [
      { school: 'Santa Clara University', degree: 'Ph.D, Art History', location: 'Santa Clara, CA', distinctions: [] },
      { school: 'Centenary College of Louisiana', degree: 'BFA, Art History', location: 'Shreveport, LA', distinctions: [] }
    ],
    volunteer: [
      { cause: 'Meadows Museum of Art', title: 'Part-time Curator', date: '1915-2017' }
    ],
    social_media: [
      { name: 'Github', url: '' },
      { name: 'LinkedIn', url: '' }
    ]
  }
}
