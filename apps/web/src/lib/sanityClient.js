import { createClient }  from '@sanity/client';
import imageUrlBuilder   from '@sanity/image-url';

export const client = createClient({
  projectId:  import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset:    import.meta.env.VITE_SANITY_DATASET    ?? 'production',
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION ?? '2024-01-01',
  useCdn:     true,
});

const builder = imageUrlBuilder(client);

/**
 * Construye una URL optimizada a partir de un objeto imagen de Sanity.
 * Uso: urlFor(image).width(600).fit('crop').url()
 */
export const urlFor = (source) => builder.image(source);
