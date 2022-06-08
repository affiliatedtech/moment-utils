'use strict';

const moment = require('moment');

function get_base_hour(dt) {
    const date_time = moment(dt);
    const minutes_to_seconds = date_time.minutes() * 60;
    const seconds = date_time.seconds();
    const total_seconds = minutes_to_seconds + seconds;
    const base_hour = date_time.subtract(total_seconds, 'seconds');

    return base_hour;
}

function get_time_diff(start, end, fn_string = 'asSeconds') {
    const [start_time, end_time] = [start, end].map((time) => moment(time));
    const duration = moment.duration(end_time.diff(start_time));

    return duration[fn_string]();
}

function format_sql_dt(dt) {
    const date_time = moment(dt);

    return date_time.format('YYYY-MM-DD HH:mm:ss');
}

function split_dt(dt) {
    const date_time = moment(dt);

    return {
        date: date_time.format('YYYY-MM-DD'),
        time: date_time.format('HH:mm:ss'),
    };
}

module.exports = {
    get_base_hour,
    get_time_diff,
    format_sql_dt,
    split_dt,
};
