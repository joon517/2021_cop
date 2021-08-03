const cron = require('node-cron');

// second minute hour day-of-month month day-of-week
cron.schedule('* * * * *', () => {
    // TODO 실시간 상위랭킹 배치 작업
});