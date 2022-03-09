const express = require("express");
const router = express.Router();
const authController = require("../Controllers/AuthController");

router.post("/local", authController.getAllMarkers);

router.post("/google", authController.GetGoogleAPI);
router.post("/naver/issued", authController.GetNaverAPI.issued);
router.post("/naver/renewal", authController.GetNaverAPI.renewal);
router.post("/naver/delete", authController.GetNaverAPI.delete);

router.post("/kakao/Issued", authController.GetKakaoAPI.issued);
router.post("/kakao/delete", authController.GetKakaoAPI.delete);

module.exports = router;
module.exports = router;
