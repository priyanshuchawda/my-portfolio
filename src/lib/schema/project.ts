export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    { 
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url'
    },
    {
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url'
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean'
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true
    }
  ],
  orderings: [
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        {field: 'featured', direction: 'desc'},
        {field: 'order', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
};
