
export default {
    name: 'nationality',
    type: 'document',
    title: 'Country Of Origin',
    fields: [
      {
        name: 'country_name',
        type: 'string',
        title: 'Country',
        validation: (Rule) => Rule.required()
      }
    ]
  }


