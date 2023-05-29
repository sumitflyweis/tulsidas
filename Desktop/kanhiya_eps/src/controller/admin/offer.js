const Offer = require("../../model/offer");

// Create a new offer
module.exports.createOfferbyAdmin = async (req, res) => {
  try {
    const { UserId, vendorId, existingPrice, offerPrice, startTime, endTime, desc } = req.body;
    const offer = new Offer({ UserId, vendorId, existingPrice, offerPrice, startTime, endTime, desc });
    const savedOffer = await offer.save();
   return res.json(savedOffer);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
}


module.exports.getALlOfferbyAdmin = async (req, res) => {
  try {
    const offers = await Offer.find();
   return res.json(offers);
  } catch (err) {
    console.error(err);
  return  res.status(500).send("Server error");
  }
}


module.exports.getOfferByIdbyAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const offer = await Offer.findById(id);
    return res.json(offer);
  } catch (err) {
    console.error(err);
  return  res.status(500).send("Server error");
  }
}


module.exports.updateOfferBybyAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { UserId, vendorId, existingPrice, offerPrice, startTime, endTime, desc } = req.body;
    const updatedOffer = await Offer.findByIdAndUpdate(
      id,
      { UserId, vendorId, existingPrice, offerPrice, startTime, endTime, desc },
      { new: true }
    );
  return  res.json(updatedOffer);
  } catch (err) {
    console.error(err);
  return  res.status(500).send("Server error");
  }
}


module.exports.deleteOfferBybyAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    await Offer.findByIdAndDelete(id);
   return  res.send("Offer deleted successfully");
  } catch (err) {
    console.error(err);
   return  res.status(500).send("Server error");
  }
}
