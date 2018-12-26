const state = {
  application: {
    drawer: {
      open: true
    },
    user: {
      id: 1,
      name: 'Naung Soe',
      email: 'naungsoe@mceducation.com',
      organization: {
        id: 1,
        name: 'HSystems'
      }
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
        label: 'Drive',
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
        url: '/attendance',
        icon: 'Alarm',
        label: 'Attendance',
        group: 'support'
      },
      {
        url: '/facilities',
        icon: 'DevicesOther',
        label: 'Facilities',
        group: 'support'
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
    ]
  },
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
  courses: {
    loaded: false,
    navigation: [
      {
        url: '/drive/my-drive',
        icon: 'Storage',
        label: 'My Drive'
      },
      {
        url: '/drive/shared-with-me',
        icon: 'People',
        label: 'Shared with me'
      },
      {
        url: '/drive/recent',
        icon: 'People',
        label: 'Recent'
      },
      {
        url: '/drive/trash',
        icon: 'Delete',
        label: 'Trash'
      }
    ],
    query: {
      search: '',
      sort: {
        direction: 'desc',
        property: 'createdOn'
      }
    },
    items: [
      {
        id: 5,
        title: 'P5 English',
        description: 'This course is designed for students currently studying Primary 5.',
        createdBy: {
          id: 1,
          name: 'Naung Soe'
        },
        createdOn: 'Mar 21, 2018'
      },
      {
        id: 4,
        title: 'P4 English',
        description: 'This course is designed for students currently studying Primary 4.',
        createdBy: {
          id: 1,
          name: 'Naung Soe'
        },
        createdOn: 'Mar 18, 2018'
      },
      {
        id: 3,
        title: 'P3 English',
        description: 'This course is designed for students currently studying Primary 3.',
        topics: [
          {
           id: 10,
           title: 'Fairy Tales and Poems',
           description: '',
           components: [
             {
               id: 100,
               type: 'TEXT',
               text: 'Hedgehogs and Riddles'
             },
             {
               id: 101,
               type: 'VIDEO',
               description: 'Hedgehogs and Riddles'
             }
           ]
          },
          {
           id: 11,
           title: 'Fables and Adventures',
           description: '',
           components: [
             {
               id: 102,
               type: 'TEXT',
               text: 'Non-Fiction and Biographies'
             },
             {
               id: 103,
               type: 'QUESTION',
               text: 'Non-Fiction and Biographies'
             }
           ]
          }
        ],
        createdBy: {
          id: 1,
          name: 'Naung Soe'
        },
        createdOn: 'Mar 9, 2018'
      },
      {
        id: 2,
        title: 'P2 English',
        description: 'This course is designed for students currently studying Primary 2.',
        createdBy: {
          id: 1,
          name: 'Naung Soe'
        },
        createdOn: 'Jan 14, 2018'
      },
      {
        id: 1,
        title: 'P1 English',
        description: 'This course is designed for students currently studying Primary 1.',
        createdBy: {
          id: 1,
          name: 'Naung Soe'
        },
        createdOn: 'Jan 01, 2018'
      }
    ]
  }
};

export default state;
