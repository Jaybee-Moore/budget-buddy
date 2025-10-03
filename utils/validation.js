export const required = (field) => value =>
  value ? true : `${field} is required`;

export const validateEmail = value =>
  /\S+@\S+\.\S+/.test(value) ? true : 'Invalid email address';