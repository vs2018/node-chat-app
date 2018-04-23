let socket = io()

socket.on('connect', function () {
  console.log('connected')
})

socket.on('disconnect', function () {
  console.log('User was disconnected');
})

jQuery('#message-form').on('submit', function(e) {
  e.preventDefault()

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function() {

  })
})


socket.on('newMessage', function (message) {
  console.log('newMessage', message);
  let li = jQuery('<li></li>')
  li.text(`${message.from}: ${message.text}`)
  jQuery('#messages').append(li)
})
