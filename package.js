Package.describe({
  summary: "Login service for Rally accounts.",
  version: "0.0.4",
  git: "https://github.com/shalka/meteor-accounts-rally.git"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('shalka:rally-oauth@0.0.4', ['client', 'server']);

  api.imply('accounts-base', ['client', 'server']);
  api.use('shalka:rally-oauth@0.0.4', ['client', 'server']);

  api.add_files(['rally_login_button.css'], 'client');

  api.add_files('rally_common.js', ['client', 'server']);
  api.add_files('rally_server.js', 'server');
  api.add_files('rally_client.js', 'client');
});
