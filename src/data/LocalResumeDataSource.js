import ResumeDataSource from './ResumeDataSource';
import resumeData from '../resume_data.js';

export default class LocalResumeDataSource extends ResumeDataSource {
  async getResumeData() {
    return resumeData();
  }
}
