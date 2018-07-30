var socket = io();

socket.on('connect', function () {
    console.log('Connected to the server.');
});

socket.on('disconnect', function () {
    console.log('Disconnected from the server');
});

socket.on('newMessage', function (message) {
    var formattedTime = moment(message.createdAt).format('h:mm a');
    var template = jQuery('#message-template').html();
    var html = Mustache.render(template, {
        text: message.text,
        from: message.from,
        createdAt: formattedTime
    });

    jQuery('#messages').append(html);
});

socket.on('newLocationMessage', function(message) {
    var formattedTime = moment(message.createdAt).format('h:mm a');

    var template = jQuery('#location-message-template').html();
    var html = Mustache.render(template, {
        url: message.url,
        from: message.from,
        createdAt: formattedTime
    });

    jQuery('#messages').append(html);
});

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  var messageTextbox = jQuery('[name=message]');

  socket.emit('createMessage', {
    from: 'User',
    text: messageTextbox.val()
  }, function () {
    messageTextbox.val('');
  });
});

var locationButton = jQuery('#send-location');
var sendButtonSending = 'Sending location...';
var sendButtonWaiting = 'Send location...';

locationButton.on('click', function () {
    if (!navigator.geolocation) {
        return alert('Geolocation not supported by this browser.');
    }

    locationButton.attr('disabled', 'disabled').text(sendButtonSending);

    navigator.geolocation.getCurrentPosition(function (position) {
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
        locationButton.removeAttr('disabled').text(sendButtonWaiting);
     }, function () {
        locationButton.removeAttr('disabled').text(sendButtonWaiting);
        alert('Unable to fetch location.');
    });
});