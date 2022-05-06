const tap = require('tap');
const {
  getBaseHour,
  getTimeDiff,
  formatSqlDt,
} = require('./moment-utils');

tap.test('Get base hour', async (t) => {
  const dt = '2022-01-01 10:01:01';
  const baseHour = getBaseHour(dt).format('HH:mm:ss').toString();
  t.equal(baseHour, '10:00:00');
});

tap.test('Get time difference', async (t) => {
  const start = '2022-01-01 10:00:00';
  const end = '2022-01-01 10:01:00';
  const timeDiffSeconds = getTimeDiff(start, end);
  const timeDiffMinutes = getTimeDiff(start, end, 'asMinutes');
  t.equal(timeDiffSeconds, 60);
  t.equal(timeDiffMinutes, 1);
});

tap.test('Format SQL datetime', async (t) => {
  const dt = '2022-01-01';
  const formattedDt = formatSqlDt(dt).toString();
  t.equal(formattedDt, '2022-01-01 00:00:00');
});
