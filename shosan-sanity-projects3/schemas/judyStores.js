
export default {
    name: 'judy_stores',
    type: 'document',
    title: 'Judy Stores',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'age',
        type: 'number',
        title: 'Age',
        validation: (Rule) => Rule.max(100)
      },
      {
        name: 'description',
        type: 'text',
        title: 'Short Description',
        validation: (Rule) => Rule.max(200)
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Rating',
        validation: (Rule) => Rule.required()
        .max(5)
        .min(1)
        .error('Please put a rating from 1 to 5')
      },
      {
        name: 'image',
        type: 'image',
        title: 'Profile Image'
      },
      {
        name: 'item',
        type: 'text',
        title: 'Gift Item'
      },
      {
        name: 'products',
        type: 'array',
        title: 'Products List',
        of: [{ type: 'reference', to: [{ type: 'store_products' }] }]
      },
      {
        name: 'country_of_origin',
        title: 'Country of Origin',
        type: 'reference',
        to: [{ type: 'nationality' }]
      }
    ]
  }