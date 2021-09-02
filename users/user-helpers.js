module.exports = {
  validateUser
};

function validateUser(user) {
  let errors = [];

  if (!user.username || user.username.length < 6) {
    errors.push('Username must contain at least 6 characters');
  }

  if (!user.password || user.password.length < 8) {
    errors.push('Password must contain at least 8 characters');
  }

  return {
    isSuccessful: errors.length > 0 ? false : true,
    errors
  };

} 