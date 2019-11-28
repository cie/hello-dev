import moment = require('moment')

class App {
  constructor () {
    this.hello()
  }

  private hello () {
    console.log(`Hello ${this.who} !` + moment)
  }

  private who = 'World :)'
}

export = new App()
