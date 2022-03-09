require("dotenv").config();
const axios = require("axios");
const request = require("request-promise");

module.exports = {
  GetGoogleAPI: {
    issued: (req, res) => {
      /* 일련의 과정
        구글 로그인 버튼을 누른다
        => 클라이언트에서 인가url로 이동하여 확인을 하고, 확인이 되면 authorize_code를 받아서 클라서버에 axios 요청을 한다
        => 클라에서 받은 코드를 가지고 그 외 필요한 정보들(clientID, secret, grant_type 등등)을 포함해서 token 요청을 한다
        => 우리에게 필요한 게 들어있는건 id_token이기 때문에 jwt토큰화된 id_token을 decoding 해줘서 원하는 값을 추출해낸다
        => 추출해낸 값들을 DB에 저장하고, 클라이언트에 보낼 건 보내주고 과정을 마친다
        */

      // console.log(req.body);
      axios
        .post("https://oauth2.googleapis.com/token", {
          client_id: process.env.GOOGLE_CLIENT_ID,
          client_secret: process.env.GOOGLE_CLIENT_SECRET,
          code: req.body.authorizationCode,
          grant_type: "authorization_code",
          redirect_uri: "http://localhost:3000",
        })
        .then((resp) => {
          //   console.log(resp.data);
          const accessToken = resp.data.access_token;
          const idToken = resp.data.id_token;
          res.status(200).json({
            accessToken: accessToken,
            idToken: idToken,
          });
        })
        .catch((err) => {
          return err;
        });
    },
    delete: (req, res) => {
      // req에서 accessToken을 받는다는 전제 하에 코딩한다
    },
  },
  GetNaverAPI: {
    /*
    네이버는 발급인지, 갱신인지, 삭제 요청인지에 따라 달라지는 옵션 값들이 있음
    필수 client_id, client_secret, grant_type
    */

    /*
    발급
        변경 grant_type:'authorization_code'
        생성 code:'req.body.authorizationCode'
        생성 state: 'req.body.state'
    */
    issued: (req, res) => {},

    /*
    갱신
        변경 grant_type: 'refresh_token'
        생성 refresh_token: 네이버 이용자 인증에 성공해 발급받을 때 받은 갱신 토큰
    */
    renewal: (req, res) => {},

    /*
    삭제
        변경 grant_type: 'delete'
        생성 access_token: '발급받은 접근 토큰으로 URL인코딩 적용된 값을 전달해줘야한다'
        생성 service_provider: 'NAVER'
    */
    delete: (req, res) => {},
  },
  GetKakaoAPI: {
    // 로그인, 로그아웃시 요청하는 api가 다르다.
    issued: async (req, res) => {},

    delete: async (req, res) => {
      // req에서 accessToken을 받는다는 전제 하에 코딩한다
    },
  },
};
