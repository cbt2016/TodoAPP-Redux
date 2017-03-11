var moment = require('moment');


console.log(moment().format());


var now = moment();
console.log(now.unix());

var timeStamp = 1489108513;
var current = moment.unix(timeStamp);
console.log('current time',current.format('MMM D, YY @ h:mm a'));
console.log('current time',current.format('MMMM Do, YYYY @ h:mm A'));
