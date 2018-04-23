let socket = io()

socket.on('connect', function () {
  console.log('connected')

  socket.emit('createMessage', {
    from: 'Andrew',
    text: 'hey there john!'
  })
})

socket.on('disconnect', function () {
  console.log('User was disconnected');
})

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
})
