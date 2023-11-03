
import SanityClient from 'next-sanity-client';

const projectId ='rfa446zb'
const dataset = "production"
const apiVersion = "2023-01-01"

export const client = new SanityClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: process.env.NODE_ENV === 'production',
});




