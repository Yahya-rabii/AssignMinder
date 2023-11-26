import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'isAdmin',
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

export default Users
