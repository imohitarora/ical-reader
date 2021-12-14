const ical = require("node-ical");

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

ical.fromURL('https://www.google.com/calendar/ical/en.usa%23holiday@group.v.calendar.google.com/public/basic.ics', {}, function (err, data) {
    for (let k in data) {
        if (data.hasOwnProperty(k)) {
            const ev = data[k];
            if (data[k].type == 'VEVENT') {
                console.log(`${ev.summary} is on the ${ev.start.getDate()}-${months[ev.start.getMonth()]} at ${ev.start.toLocaleTimeString('en-GB')}`);
            }
        }
    }
});