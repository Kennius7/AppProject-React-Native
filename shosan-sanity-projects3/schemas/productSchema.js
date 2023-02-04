
export default {
    name: 'store_products',
    type: 'document',
    title: 'Products Store',
    fields: [
      {
        name: 'product_name',
        type: 'string',
        title: 'Name Of Product',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'product_description',
        type: 'text',
        title: 'Product Description',
        validation: (Rule) => Rule.max(100)
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Rating',
        validation: (Rule) => Rule.required()
                                    .max(5)
                                    .min(1)
                                    .error('Please put a rating from 1 to 5')
      }
    ]
  }


