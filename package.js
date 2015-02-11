Package.describe({
  version: "0.1.0",
  git: "https://github.com/non-blockhead/meteor-module.git",
  summary: "Basic module system."
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@1.0");

  api.use(['underscore'], ['client', 'server']);

  api.export('Module');

  api.add_files(['module.js', 'mediator.js'], ['client', 'server']);

});
