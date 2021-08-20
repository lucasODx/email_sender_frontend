const express = require('express')
const ss =  require('serve-static')
const path = require('path')


const app = express()
app.use(ss(path.join(__dirname, 'dist')))

const port = 3000
app.listen(port)
