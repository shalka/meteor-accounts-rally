// open for debate on whether or autopublish __any__ fields
Accounts.addAutopublishFields({
  // publish all fields including access token, which can legitimately
  // be used from the client (if transmitted over ssl or on localhost).
  forLoggedInUser: ['profile','services.rally'],
  forOtherUsers: ['profile','services.rally.email','services.rally.picture']
});
