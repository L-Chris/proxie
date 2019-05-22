class Dispatcher {
  constructor() {}

  run(req, res) {
    console.log('dispatcher')
  }
}

const dispatcher = new Dispatcher()

exports.dispatcher = dispatcher