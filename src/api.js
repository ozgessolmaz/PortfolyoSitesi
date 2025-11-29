import { certificates, education, experiences, profile, projects, skills } from './data';

export function getProfile() {
  return Promise.resolve(profile);
}

export function getProjects() {
  return Promise.resolve(projects);
}

export function getExperiences() {
  return Promise.resolve(experiences);
}

export function getSkills() {
  return Promise.resolve(skills);
}

export function getEducation() {
  return Promise.resolve(education);
}

export function getCertificates() {
  return Promise.resolve(certificates);
}

export async function submitContact() {
  return Promise.resolve();
}

