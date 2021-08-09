const cron = require('node-cron');

// second minute hour day-of-month month day-of-week
cron.schedule('* * * * *', () => {
    // TODO 실시간 상위랭킹 배치 작업
});


// TODO Alert기능 구현
const alertService = (req, res) => {
    // 데이터베이스 Insert 할 때 Trigger를 데이터베이스에서 발생을 시킬지
    // 아니면 쿼리를 입력하기전에 서버에서 처리를 할지 고민해보기
}