module.exports = {
  paths: {
    public: 'dist',
    watched: ['src']
  },
  conventions: {
    assets: 'src/assets/**'
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
