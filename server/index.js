const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');
const fs = require('fs')

const app = express()
// const signin = require("./controller/sigin");
// const welcome = require("./controller/welcome");
// const refresh = require("./controller/refrash");
const { signIn, welcome, refresh, logout } = require('./controller/handelar')
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

// app.post('/signin', signIn)
// app.get('/welcome', welcome)
// app.post('/refresh', refresh)
// app.get('/logout', logout)

// const test = require("./private.pem");
// private.pem


function isAuthenticated(req, res, next) {
  console.log(req.headers);
  if (typeof req.headers.authorization !== "undefined") {
    // retrieve the authorization header and parse out the
    // JWT using the split function
    let token = req.headers.authorization.split(" ")[1];
    let privateKey = fs.readFileSync('./private.pem', 'utf8');
    // Here we validate that the JSON Web Token is valid and has been 
    // created using the same private pass phrase
    jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, user) => {

      // if there has been an error...
      if (err) {
        // shut them out!
        res.status(500).json({ error: "Not Authorized" });
        throw new Error("Not Authorized");
      }
      // if the JWT is valid, allow them to hit
      // the intended endpoint
      return next();
    });
  } else {
    // No authorization header exists on the incoming
    // request, return not authorized and throw a new error 
    res.status(500).json({ error: "Not Authorized" });
    throw new Error("Not Authorized");
  }
}




app.get('/test', (req, res) => res.send('Hello World!'))

// let's first add a /secret api endpoint that we will be protecting
app.get('/secret', isAuthenticated, (req, res) => {
  res.json({ "message": "THIS IS SUPER SECRET, DO NOT SHARE!" })
})

// and a /readme endpoint which will be open for the world to see 
app.get('/readme', (req, res) => {
  res.json({ "message": "This is open to the world!" })
})










// ... our other endpoints
app.get('/jwt', (req, res) => {
  //let privateKey = fs.readFileSync('./private.pem', 'utf8');
  let token = jwt.sign({ "body": "stuff" }, "MySuperSecretPassPhrase", { algorithm: 'HS256' });
  res.send(token);
})






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
