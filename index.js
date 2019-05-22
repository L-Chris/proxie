const http = require('http')
const { dispatcher } = require('./dispatcher')
const { filter } = require('./filter')

const server = http.createServer((req, res) => {
  dispatcher.run(req, res)
  filter.run(req, res)
  res.end()
})

server.listen(8080)