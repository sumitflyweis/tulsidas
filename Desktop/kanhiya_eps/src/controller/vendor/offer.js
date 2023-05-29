const Offer = require("../../model/offer");

module.exports.getALlOfferbyVendor = async (req, res) => {
  try {
    const offers = await Offer.find();
   return res.json(offers);
  } catch (err) {
    console.error(err);
  return  res.status(500).send("Server error");
  }
}


module.exports.getOfferByIdbyVendor = async (req, res) => {
  try {
    const { id } = req.params;
    const offer = await Offer.findById(id);
    return res.json(offer);
  } catch (err) {
    console.error(err);
  return  res.status(500).send("Server error");
  }
}
