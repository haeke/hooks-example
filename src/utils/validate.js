export const validate = values => {
  let errors = {};
  // this function will check to see if the values that we are expecting are not empty. Possible improvements to this function would be to add the ability to validate emails.
  if (!values.firstName) {
    errors.firstName = "The First Name Field is required.";
  }
  if (!values.lastName) {
    errors.lastName = "The Last Name Field is required.";
  }

  return errors;
};
