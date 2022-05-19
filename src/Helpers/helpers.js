export const isRol = (rol) => {
  const roles = {
    "6283d02f50ac8e92a7bd50e6": "admin",
    "6283d02f50ac8e92a7bd50e5": "user",
  };

  return roles[rol];
};

export const isEmail = (email) => {
  if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
    return true;
  } else {
    return false;
  }
};
