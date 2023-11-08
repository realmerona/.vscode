const express = require('express')
const app = express()

//get-주소창에서 정보전달   post-내부 body에서 전달

//get방식으로 된것을 받겠다는 의미
//라우팅: /function함수(파라미터reqest,response){콜백함수:function 끝나고 실행할 함수}
app.get('/', function (req, res) {
  res.send('Hello World')
})

//서버가 켜져있다
app.listen(3000)