const express = require ('express');
const phones = require('./phones.json');
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello kire jabi  na World!')
})
app.get('/phones', (req, res) => {
  res.send(phones)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})