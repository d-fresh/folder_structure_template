//environment variables. Keep file seperate like this so people don't see your google credentials.

module.exports = {
  sessionsSecret: "developmentSessionsSecret",
  google: {
    clientID: "832524501320-8uf4ckue5i6k388c54tbvb0ufl34sdc8.apps.googleusercontent.com",
    clientSecret: "iDbkzdKi8W5Z0lBllHW-D4il",
    callbackURL: "http://localhost:3000/auth/google/oauthredirect"
  }
};
