Package.describe({
  version: "0.1.0",
  git: "https://github.com/non-blockhead/meteor-module.git",
  summary: "Basic module system."
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");

  api.use(['underscore'], ['client', 'server']);

  api.export('Module');

  api.add_files(['common.js'], ['client', 'server']);

});
