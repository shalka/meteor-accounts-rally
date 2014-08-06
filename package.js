Package.describe({
  summary: "Login service for Rally accounts."
});

Package.on_use(function(api) {
  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('rally-oauth', ['client', 'server']);

  api.imply('accounts-base', ['client', 'server']);
  api.use('rally-oauth', ['client', 'server']);

  api.add_files(['rally_login_button.css'], 'client');

  api.add_files('rally_common.js', ['client', 'server']);
  api.add_files('rally_server.js', 'server');
  api.add_files('rally_client.js', 'client');
});
