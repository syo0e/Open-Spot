module.exports = {
  get: (req, res) => {
    const markers = [
      {
        id: 0,
        storeName: "가게명",
        address: "서울시",
        callNum: "010-1234-5678",
        tagName: "카페",
        description: "주택 개조 카페",
        latitude: 33.123,
        longitude: 126.213,
      },
    ];
    res.status(200).json({ markers: markers });
  },
};
