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

export const randomAnswer = () => {
  return Math.floor(Math.random() * (4 - 1)) + 0;
};

export const languageOptions = [
  {
    id: 1,
    name: "JavaScript",
    label: "JavaScript",
    value: "javascript",
  },
  {
    id: 2,
    name: "C",
    label: "C",
    value: "c",
  },
  {
    id: 3,
    name: "C++",
    label: "C++",
    value: "cpp",
  },
  {
    id: 4,
    name: "Go",
    label: "Go",
    value: "go",
  },
  {
    id: 5,
    name: "Java",
    label: "Java",
    value: "java",
  },
  {
    id: 6,
    name: "Python",
    label: "Python",
    value: "python",
  },
  {
    id: 7,
    name: "Typescript",
    label: "Typescript",
    value: "typescript",
  },
];

export const stateuser = [
  {
    id: 1,
    description: "In Queue",
  },
  {
    id: 2,
    description: "Processing",
  },
  {
    id: 3,
    description: "Accepted",
  },
  {
    id: 4,
    description: "Wrong Answer",
  },
  {
    id: 5,
    description: "Time Limit Exceeded",
  },
  {
    id: 6,
    description: "Compilation Error",
  },
  {
    id: 7,
    description: "Runtime Error (SIGSEGV)",
  },
  {
    id: 8,
    description: "Runtime Error (SIGXFSZ)",
  },
  {
    id: 9,
    description: "Runtime Error (SIGFPE)",
  },
  {
    id: 10,
    description: "Runtime Error (SIGABRT)",
  },
  {
    id: 11,
    description: "Runtime Error (NZEC)",
  },
  {
    id: 12,
    description: "Runtime Error (Other)",
  },
  {
    id: 13,
    description: "Internal Error",
  },
  {
    id: 14,
    description: "Exec Format Error",
  },
];

export const customStyles = {
  control: (styles) => ({
    ...styles,
    color: "white !important",
    width: "100%",
    maxWidth: "20rem",
    minWidth: "12rem",
    borderRadius: "5px",
    fontSize: "1rem",
    lineHeight: "1.75rem",
    backgroundColor: "#292929",
    cursor: "pointer",
    border: "2px solid #000000",
    boxShadow: "5px 5px 0px 0px rgba(0,0,0);",
    ":hover": {
      border: "2px solid #000000",
      boxShadow: "none",
    },
  }),
  option: (styles) => {
    return {
      ...styles,
      color: "white",
      fontSize: "0.8rem",
      lineHeight: "1.75rem",
      width: "100%",
      background: "#1B1B1B",
      ":hover": {
        backgroundColor: "#FFC300",
        color: "#1B1B1B",
        cursor: "pointer",
      },
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      backgroundColor: "#1B1B1B",
      maxWidth: "20rem",
      border: "2px solid #000000",
      borderRadius: "5px",
      boxShadow: "5px 5px 0px 0px rgba(0,0,0);",
    };
  },
  input: (base, state) => ({
    ...base,
    '[type="text"]': {
      fontFamily: "Helvetica, sans-serif !important",
      fontSize: 13,
      fontWeight: 900,
      color: "white !important",
    },
  }),

  singleValue: (base) => ({
    ...base,
    color: "#ffffff !important",
  }),
};
