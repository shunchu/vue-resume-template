import LocalResumeDataSource from './LocalResumeDataSource';

export default function getResumeDataSource() {
  return new LocalResumeDataSource();
}
