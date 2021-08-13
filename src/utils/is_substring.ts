const isSubstring = (mainString = '', testString = ''): boolean => {
  return mainString.toLowerCase().includes(testString.toLowerCase());
};

export default isSubstring;
