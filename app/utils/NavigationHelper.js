export const getScreenParent = route => {
  let parent;
  let bottomTabStack = ['Feed', 'Posts', 'ChatOverview', 'Profile'];


  let singleStack = [    
    'Chat',
    'Reports',
    'Calendar',
    'Tasks',
    'Post',
    'ChatList',
    'ProfileSide'
  ];

  let authStack = [
    'Onboarding',
    'Login',
    'SignUp',    
  ];

  if (bottomTabStack.includes(route))
  {
    parent = 'BottomTabStack';
  } else if (singleStack.includes(route))
  {
    parent = 'SingleStack';
  } 
  return parent;
};
