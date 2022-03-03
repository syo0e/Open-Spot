const models = require("./../models");
const { createSaltedPassword } = require("./HashFunctions");

module.exports = {
  signUp: async (req, res) => {
    const { email, password, phoneNum, userName, companyNumbers } = req.body;
    const { saltedPassword, salt } = await createSaltedPassword(password).catch(
      (err) => {
        console.log(err);
      }
    );

    // 사업자 번호 유무에 따라 일반 사용자 / 사업자로 구분한다
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
