# Back-End 구조 소개

## 서버 구동
```
node server
```

## 폴더 구조

> routes
>> upbit, binance 등의 호출 경로를 나누기 위해 생성
>> 이후 증권사 API를 경로에 맞게 index.js 등에 집어 넣으면 됨

> controllers
>> 실제 작동하는 로직을 호출하는 부분

> services
>> 실제 로직이 작동하는 부분

