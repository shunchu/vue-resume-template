import ResumeDataSource from './ResumeDataSource';
import StoryblokClient from 'storyblok-js-client';

const ACCESS_TOKEN = import.meta.env.VITE_STORYBLOK_TOKEN;
const SLUG = 'resume';
const VERSION = import.meta.env.VITE_ENV === 'production' ? 'published' : 'draft';

const formatContact = (contact) => {
  if (Array.isArray(contact)) {
    contact = contact[0] || {};
  }
  return contact;
};

const formatExperienceDetails = (experience) => {
  return (experience || []).map((exp) => {
    if (Array.isArray(exp.desc)) {
      exp.desc = exp.desc[0] || {};
    }
    // Only keep the 'details' attribute from each object in desc.resp
    if (Array.isArray(exp.desc?.resp)) {
      exp.desc.resp = exp.desc.resp.map(item => item.details);
    }

    return exp;
  });
};

const formatEducationDetails = (education) => {
  return (education || []).map((edu) => {
    if (Array.isArray(edu.distinctions)) {
      edu.distinctions = edu.distinctions.map(item => item.distinction);
    }

    return edu;
  });
}

export default class StoryblokResumeDataSource extends ResumeDataSource {
  constructor() {
    super();
    if (!ACCESS_TOKEN) {
      throw new Error('Missing Storyblok access token. Please set VITE_STORYBLOK_TOKEN in your .env file.');
    }
    this.client = new StoryblokClient({ accessToken: ACCESS_TOKEN });
    this.slug = SLUG;
  }

  async getResumeData() {
    const response = await this.client.get(`cdn/stories/${this.slug}`, { version: VERSION });
    const content = response.data.story.content;
    content.contact = formatContact(content.contact);
    content.experiences = formatExperienceDetails(content.experiences);
    content.education = formatEducationDetails(content.education);

    return content;
  }
}
