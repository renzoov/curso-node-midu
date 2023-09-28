const http = require('node:http')
const { findAvailablePort } = require('./13.free-port')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola Mundo')
})

findAvailablePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})
