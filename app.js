const express = require('express')
const app = express()
require('dotenv').config()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.get('/health', (req, res) => {
  res.send('ok')
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${5000}`)
})
