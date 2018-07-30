const moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());


// var date = moment();
// date.add(1, 'year');
// console.log(date.format('MMM Do YYYY'));

var createdAt = moment().valueOf();
var date = moment(createdAt);
console.log(date.format('h:mm a'));

