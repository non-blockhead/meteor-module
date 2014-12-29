Module = {};

var modules = {};

Module.register = function (name, definition) {
  if (_.has(modules, name))
    throw new Error("Duplicate module: " + name);
  modules[name] = definition;
}

Module.list = function () {
  return modules;
}