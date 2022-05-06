const moment = require('moment');

function getBaseHour(dt) {
  const dateTime = moment(dt);
  const minutesToSeconds = dateTime.minutes() * 60;
  const seconds = dateTime.seconds();
  const totalSeconds = minutesToSeconds + seconds;
  const baseHour = dateTime.subtract(totalSeconds, 'seconds');

  return baseHour;
}

function getTimeDiff(start, end, fnString = 'asSeconds') {
  const [startTime, endTime] = [start, end].map((time) => moment(time));
  const duration = moment.duration(endTime.diff(startTime));

  return duration[fnString]();
}

function formatSqlDt(dt) {
  const dateTime = moment(dt);

  return dateTime.format('YYYY-MM-DD HH:mm:ss');
}

module.exports = {
  getBaseHour,
  getTimeDiff,
  formatSqlDt,
};
