var Routine = require('./model/routine');
var CronJob = require('cron').CronJob;

var settings = require('./config/settings');

new CronJob('* 59 23 * * *', function() {
    Routine.update({checked: true}, {checked: false}, {multi:true}, function(err, num) {
        if (err) console.log(err);
    });
}, null, true, settings.timeZone);
