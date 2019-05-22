class Filter {
  constructor() {}

  run(req, res) {
    console.log('filter')
  }
}

const filter = new Filter()

exports.filter = filter