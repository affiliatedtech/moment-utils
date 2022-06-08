'use strict';

const tap = require('tap');
const {
    get_base_hour,
    get_time_diff,
    format_sql_dt,
    split_dt,
    concat_dt,
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

tap.test('Split date time', async (t) => {
    const date_time = '2020-01-29 00:00:01';

    const { date, time } = split_dt(date_time);

    t.equal(date, '2020-01-29');
    t.equal(time, '00:00:01');
});

tap.test('Concat date time', async (t) => {
    const date = '2020-01-29';
    const time = '00:00:01';

    const date_time = concat_dt(date, time);

    t.equal(date_time, '2020-01-29 00:00:01');
});
