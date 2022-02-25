const models = require("./../models");
const crypto = require("crypto");
const { resolve } = require("path");

// salt 생성 함수
const createSalt = () =>
  new Promise((resolve, reject) => {
    new Promise((resolve, reject) => {
      crypto.randomBytes(64, (err, buf) => {
        if (err) reject(err);
        resolve(buf.toString("base64"));
      });
    });
  });

// 유저가 입력한 패스워드와 salt를 이용해 문자열 생성
const createSaltedPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    const salt = await createSalt();
    crypto.pbkdf2(password, salt, 9999, 64, "sha512", (err, key) => {
      if (err) reject(err);
      resolve({ saltedPassword: key.toString("base64"), salt });
    });
  });
};

module.exports = {
  signUp: async (req, res) => {
    const { email, password, phoneNum, userName, companyNumbers } = req.body;
    const { saltedPassword, salt } = await createSaltedPassword(password).catch(
      (err) => {
        console.log(err);
      }
    );

    // 사업자 번호 유무에 따라 일반 사용자 / 사업자로 구분한다.
    if (companyNumbers === undefined) {
      const newUser = await models.User.create(
        {
          userName: userName,
          email: email,
          phoneNum: phoneNum,
          role: "general",
          oauthLogin: false,
          saltedPassword: saltedPassword,
          salt: salt,
        },
        {
          raw: true,
        }
      ).catch((err) => {
        console.log(err);
      });

      res.status(201).json({ code: 201, role: newUser.role });
    } else {
      const newUser = await models.User.create(
        {
          userName: userName,
          email: email,
          phoneNum: phoneNum,
          role: "business",
          oauthLogin: false,
          saltedPassword: saltedPassword,
          salt: salt,
        },
        {
          raw: true,
        }
      ).catch((err) => {
        console.log(err);
      });

      res.status(201).json({ code: 201, role: newUser.role });
    }
  },
};
