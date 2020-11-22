const express = require('express')
const { lookup } = require('./lookup')

const app = express()

app.get('/health', (req, res) => {
  return res.json({})
})

app.get('/lookup', async (req, res) => {
  const domainQuery = req.query.domain

  if (!domainQuery) {
    return res.status(400).json({
      ok: false,
      message: 'Bad request'
    })
  }

  const result = await lookup(domainQuery)
  const domainIsUsed = result !== null

  return res.json({
    ok: true,
    message: domainIsUsed ? 'Domain name is registered and used' : 'Domain name does not appear to be used',
    ...(domainIsUsed && { details: result })
  })
})

app.listen(9000, () => {
  console.log('App running on port 9000')
})
