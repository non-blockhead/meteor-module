Module.register('module' {
  module_settings: {
    /**
     * Settings for the user module are defined here.
     */
    user: {
      /**
       * True if the module has settings that should be part of the user profile page.
       * You should put these settings in a template named "<module>ProfileSettings" where
       * module is the module name used to register.
       */
      profile: false
    }
  }
});