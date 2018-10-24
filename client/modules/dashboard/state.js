const state = {
  organization: {
    id: 1,
    name: 'HSystems'
  },
  user: {
    id: 1,
    name: 'Naung Soe',
    email: 'naungsoe@mceducation.com'
  },
  modules: [
    {
      url: '/dashboard',
      icon: 'Dashboard',
      label: 'Dashboard',
      group: 'dashboard',
      active: true
    },
    {
      url: '/assignments',
      icon: 'Assignment',
      label: 'Assignments',
      group: 'dashboard'
    },
    {
      url: '/courses',
      icon: 'LibraryBooks',
      label: 'Courses',
      group: 'library'
    },
    {
      url: '/storage',
      icon: 'Storage',
      label: 'Storage',
      group: 'library'
    },
    {
      url: '/library',
      icon: 'LocalLibrary',
      label: 'Library',
      group: 'library'
    },
    {
      url: '/social',
      icon: 'Public',
      label: 'Social',
      group: 'collaboration'
    },
    {
      url: '/wiki',
      icon: 'Pages',
      label: 'Wiki',
      group: 'collaboration'
    },
    {
      url: '/facilities',
      icon: 'DevicesOther',
      label: 'Facilities',
      group: 'administration'
    },
    {
      url: '/groups',
      icon: 'Group',
      label: 'Groups',
      group: 'administration'
    },
    {
      url: '/users',
      icon: 'Person',
      label: 'Users',
      group: 'administration'
    }
  ],
  notifications: [
    {
      id: 1,
      type: 'ASSIGNMENT',
      message: 'assigned your a lesson to learn.',
      assignedBy: {
        id: 10,
        name: 'David Goh'
      },
      assignedOn: 'Jan 9, 2018'
    },
    {
      id: 2,
      type: 'ASSIGNMENT',
      message: 'assigned your a quiz to learn.',
      assignedBy: {
        id: 11,
        name: 'Peter Lim'
      },
      assignedOn: 'Jan 7, 2018'
    },
    {
      id: 3,
      type: 'ASSIGNMENT',
      message: 'assigned your a lesson to learn.',
      assignedBy: {
        id: 10,
        name: 'David Goh'
      },
      assignedOn: 'Jan 7, 2018'
    }
  ],
  tasks: [
    {
      id: 1,
      description: 'Add fees details in system',
      selected: false
    },
    {
      id: 2,
      description: 'Announcement for holiday',
      selected: false
    },
    {
      id: 3,
      description: 'School picnic',
      selected: false
    }
  ]
};

export default state;
