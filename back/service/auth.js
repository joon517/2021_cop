const express = require('express');
const router = express.Router();
const passport = require('passport')
const KakaoStrategy = require('passport-kakao').Strategy;

passport.use('kakao', new KakaoStrategy({
    // TODO process.env 설정
    clientID: '3e924105724f902b51e10926a437ac89',
    callbackURL: '/app/v1/auth/kakao/callback',     // 위에서 설정한 Redirect URI
  }, async (accessToken, refreshToken, profile, done) => {
    //console.log(profile);
    //TODO BLOCK처리
    console.log(accessToken);
    console.log(refreshToken);
}))

//http://localhost:3000/app/v1/auth/kakao
router.get('/kakao', passport.authenticate('kakao'));

router.get('/kakao/callback', passport.authenticate('kakao', {
  // TODO Fail 경로 설정
  failureRedirect: '/',
}), (res, req) => {
  res.redirect('/auth');
});

module.exports = router;