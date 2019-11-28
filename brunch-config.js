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
  modules: {
    autoRequire: {
      'app.js': ['src/app.ts']
    }
  }
}
