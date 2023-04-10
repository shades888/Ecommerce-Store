import sanityClient from '@sanity/client';
import  imageUrlBuilder  from '@sanity/image-url';

export const client = sanityClient({
    projectId: '5zmta4iz',
    dataset: 'production', 
    useCdn: true,
    apiVersion: '2021-03-25',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);