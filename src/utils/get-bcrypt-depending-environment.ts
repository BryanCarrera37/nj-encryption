const isNotRunningOnTheBrowser = () => {
  return typeof window === 'undefined';
};

export const get = () => (isNotRunningOnTheBrowser() ? require('bcrypt') : require('bcryptjs'));
