import ResumeDataSource from './ResumeDataSource';
import StoryblokClient from 'storyblok-js-client';

const ACCESS_TOKEN = import.meta.env.VITE_STORYBLOK_TOKEN;
const SLUG = 'resume';
const VERSION = import.meta.env.VITE_ENV === 'production' ? 'published' : 'draft';

function mapStoryblokData(content) {
  // Normalize contact
  if (Array.isArray(content.contact)) {
    content.contact = content.contact[0] || {};
  }

  // Normalize experiences
  if (Array.isArray(content.experiences)) {
    content.experiences = content.experiences.map((exp) => {
      if (Array.isArray(exp.desc)) {
        exp.desc = exp.desc[0] || {};
      }
      if (Array.isArray(exp.desc?.resp)) {
        exp.desc.resp = exp.desc.resp.map(item => item.details);
      }
      return exp;
    });
  }

  // Normalize education
  if (Array.isArray(content.education)) {
    content.education = content.education.map((edu) => {
      if (Array.isArray(edu.distinctions)) {
        edu.distinctions = edu.distinctions.map(item => item.distinction);
      }
      return edu;
    });
  }

  return content;
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
    return mapStoryblokData(response.data.story.content);
  }
}
