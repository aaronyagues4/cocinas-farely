export default {
  name: 'portfolioProject',
  title: 'Proyecto de Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (R) => R.required().min(3).max(100),
    },
    {
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Cocinas',  value: 'Cocinas'  },
          { title: 'Baños',    value: 'Baños'    },
          { title: 'Armarios', value: 'Armarios' },
        ],
        layout: 'radio',
      },
      validation: (R) => R.required(),
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 4,
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'order',
      title: 'Orden de aparición',
      type: 'number',
      description: 'Número menor aparece primero. Usa 10, 20, 30... para dejar espacio entre proyectos.',
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'image' },
  },
  orderings: [
    {
      title: 'Orden manual',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
};
