const express = require('express')
const app = express()

var data = []

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test_database'
})

connection.connect()

connection.query('SELECT * from users', function (err, rows, fields) {
  if (err) throw err
  data = rows
  console.log('The solution is: ', rows)
})

connection.end()

array = [
    {name:"XYZ",class:"11"},
    {name:"PYQ",class:"12"}
]


app.get('/app', (req, res) => { // request => POST , GET
  res.json(data)
})

<<<<<<< HEAD
app.get('/user', (req, res) => { // request => POST , GET
  res.json([{username:"Üser1"},{username:"üser2"}])
})
=======

>>>>>>> c7ccea5f7a3471127fa4bfe48d6be91785ac85b3

const port = process.env.PORT || 3300

app.listen(port, () => {
  console.log(`This app listening at http://localhost:${port}`)
})