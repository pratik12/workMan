

// MOCK DATA FILE
// PURPOSE :: To visualize the contents in each table

const UserTable = [
    { 
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      roleId: 123
  }
]

const RoleTable = [
  { 
    id: 122,
    roleName: 'Manager',
    description: 'some text',
  },
  { 
    id: 123,
    roleName: 'Project Lead',
    description: 'some text',
  }
]

const RoleUser = [
  {
    id: 1,
    roleId: 122,
    userId: 1
  }
]

const PermissionsTable = [
  { 
    id: 51,
    permissionName: 'create tasks',
    description: 'some text',
  },
  { 
    id: 52,
    permissionName: 'invite users',
    description: 'some text',
  }
]

const RolePermissions = [
  { 
    id: 1,
    permissionId: 51,
    roleId: 123,
  }
]