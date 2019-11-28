module.exports = {
  paths: {
    public: 'dist',
    watched: ['src']
  },
  files: {
    javascripts: {
      joinTo: 'app.js'
    }
  },
  npm: {
    enabled: false
  },
  modules: {
    autoRequire: {
      'app.js': ['app']
    }
  }
}
