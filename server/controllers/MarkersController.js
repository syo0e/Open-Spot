const models = require("./../models");

module.exports = {
  getAllMarkers: async (req, res) => {
    const result = await models.Marker.findAll({
      raw: true,
    }).catch((err) => {
      console.log(err);
    });
    res.status(200).json(result);
  },
};
