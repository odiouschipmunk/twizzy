var express = require('express')
var app = express()
var server = app.listen(3000, listen)
app.set('view engine', 'ejs')

function listen() {
  var host = server.address().address
  var port = server.address().port
}

app.use(express.static('public'))

var io = require('socket.io')(server)

app.get("/", (req, res)=>{
    res.render("views/head");
})
io.sockets.on(
  'connection',
  function(socket) {
    console.log('We have a new client: ' + socket.id)
    socket.on('disconnect', function() {
      console.log('Client has disconnected')
    })
  }
)
