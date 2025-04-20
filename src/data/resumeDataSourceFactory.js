import LocalResumeDataSource from './LocalResumeDataSource';
import StoryblokResumeDataSource from './StoryblokResumeDataSource';

export default function getResumeDataSource() {
  let primary;

  try {
    primary = new StoryblokResumeDataSource();
  } catch (e) {
    console.warn('[resumeDataSourceFactory] Falling back to LocalResumeDataSource (init error):', e.message);
    return new LocalResumeDataSource();
  }

  // Proxy to catch runtime errors (including 401) on data load
  return {
    async getResumeData() {
      try {
        return await primary.getResumeData();
      } catch (e) {
        if (e?.response?.status !== 200) {
          console.warn('[resumeDataSourceFactory] Storyblok access error, falling back to LocalResumeDataSource.');
        } else {
          console.warn('[resumeDataSourceFactory] Storyblok load error, falling back to LocalResumeDataSource:', e.message);
        }
        const fallback = new LocalResumeDataSource();
        return await fallback.getResumeData();
      }
    }
  };
}
