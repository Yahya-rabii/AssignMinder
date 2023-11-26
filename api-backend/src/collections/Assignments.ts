import { CollectionConfig } from 'payload/types'

const Assignments: CollectionConfig = {
  slug: 'assignments',
  
  fields: [
    {
      name: 'Iduser',
      type: 'text',
    },
    {
      name: 'Nom',
      type: 'text',
    },
    {
      name: 'DateDeRendu',
      type: 'date',
    },
    {
      name: 'Rendu',
      type: 'checkbox',
    },

  ],
  access: {
    read: () => true,
    create:()=>true,
    update:()=>true,
    delete:()=>true,
    
  },
}

export default Assignments
