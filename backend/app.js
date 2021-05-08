const express = require('express')
const app = express()

array = [
    {name:"XYZ",class:"11"},
    {name:"PYQ",class:"12"}
]


app.get('/app', (req, res) => { // request => POST , GET
  res.json(array)
})

app.get('/user', (req, res) => { // request => POST , GET
  res.json([{username:"Üser1"},{username:"üser2"}])
})

const port = process.env.PORT || 3300

app.listen(port, () => {
  console.log(`This app listening at http://localhost:${port}`)
})