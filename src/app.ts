import moment from 'moment'


class App {
  constructor () {
    this.hello()
  }

  private hello () {
    console.log(`Helló ${this.who} !` + moment)
  }

  private who = 'World :%'
}

export = new App()
