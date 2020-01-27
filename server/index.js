const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')

const app = express()
const signin = require("./controller/sigin");
//configuring or setting body parser to get and read data coming from frontend
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

//importing my own route which are actually link to the controller
const rout = require('./router')
app.use(rout);

//Testing route at home
app.get('/te', (req, res) => {
  res.send('hello from rout');
});

app.post('/signin', signin)
// app.get('/welcome', welcome)
// app.post('/refresh', refresh)

//static url for images
app.use('/product', express.static('uploads/product'));

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
