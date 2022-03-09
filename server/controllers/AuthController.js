require("dotenv").config();
const { createSaltedPassword } = require("./HashFunctions");
const models = require("./../models");
const jwt = require("jsonwebtoken");

module.exports = {
  localSignIn: async (req, res) => {
    const userInfo = await models.User.findOne({
      where: { email: req.body.email },
    }).catch((err) => {
      return res.status(500).json({ code: 500, error: err });
    });

    // DB에 없는 이메일인 경우
    if (!userInfo) {
      return res.status(404).json({ code: 404, error: "not found" });
    }

    const {
      userName,
      email,
      phoneNum,
      role,
      oauthLogin,
      createdAt,
      updatedAt,
      oauthCI,
    } = userInfo;

    const { saltedPassword } = await createSaltedPassword(
      req.body.password,
      userInfo.salt
    ).catch((err) => {
      return res.status(500).json({ code: 500, error: err });
    });

    if (saltedPassword === userInfo.saltedPassword) {
      const accessToken = jwt.sign(
        {
          userName,
          email,
          phoneNum,
          role,
          oauthLogin,
          createdAt,
          updatedAt,
          oauthCI,
        },
        process.env.ACCESS_SECRET,
        { expiresIn: "5h" }
      );
      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: "none",
        secure: true,
      });
      res.status(200).json({ code: 200, role: userInfo.role });
    } else {
      res.status(401).json({ code: 401, error: "unauthorized" });
    }
  },
};
