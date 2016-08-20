var Routine = require('./model/routine');
var CronJob = require('cron').CronJob;

var settings = require('./config/settings');

//Daily cron
new CronJob('0 0 0 * * *', function() {
    Routine.update({checked: true}, {periodicity: 'daily'}, {checked: false}, {multi:true}, function(err, num) {
        if (err) console.log(err);
    });
}, null, true, settings.timeZone);

//Weekly cron
new CronJob('0 0 0 * * 0', function() {
    Routine.update({checked: true, periodicity: 'weekly'}, {checked: false}, {multi:true}, function(err, num) {
        if (err) console.log(err);
    });
}, null, true, settings.timeZone);

//Monthly cron
new CronJob('0 0 0 1 * *', function() {
    Routine.update({checked: true}, {periodicity: 'monthly'}, {checked: false}, {multi:true}, function(err, num) {
        if (err) console.log(err);
    });
}, null, true, settings.timeZone);
