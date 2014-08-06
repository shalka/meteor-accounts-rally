Meteor.loginWithRally = function(options, callback) {
    // support a callback without options
    if (!callback && typeof options === "function") {
        callback = options;
        options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Rally.requestCredential(options, credentialRequestCompleteCallback);
};
