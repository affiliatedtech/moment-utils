'use strict';

const tap = require('tap');
const {
    get_base_hour,
    get_time_diff,
    format_sql_dt,
} = require('./moment-utils');

tap.test('Get base hour', async (t) => {
    const dt = '2022-01-01 10:01:01';
    const base_hour = get_base_hour(dt).format('HH:mm:ss').toString();
    t.equal(base_hour, '10:00:00');
});

tap.test('Get time difference', async (t) => {
    const start = '2022-01-01 10:00:00';
    const end = '2022-01-01 10:01:00';
    const time_diff_seconds = get_time_diff(start, end);
    const time_diff_minutes = get_time_diff(start, end, 'asMinutes');
    t.equal(time_diff_seconds, 60);
    t.equal(time_diff_minutes, 1);
});

tap.test('Format SQL datetime', async (t) => {
    const dt = '2022-01-01';
    const formatted_dt = format_sql_dt(dt).toString();
    t.equal(formatted_dt, '2022-01-01 00:00:00');
});
