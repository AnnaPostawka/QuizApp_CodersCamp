export default (state) => {
  let username = true;
  let password = true;
  let email = true;
  let correctForm = true;
  if (state.username.length !== 0) {
    username = false;
  }
  if (state.email.length >= 5 && state.email.indexOf("@") !== -1) {
    email = false;
  }
  if (state.password.length >= 6) {
    password = false;
  }
  if (username || email || password) {
    correctForm = false;
  }
  return {
    username,
    email,
    password,
    correctForm
  };
};
