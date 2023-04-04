const review = require('../Models/review')



exports.AddReview = async(req,res) => {
    try{
    const data = {
        userId: req.body.userId, 
        productId: req.body.productId, 
        rating: parseInt(req.body.rating)
    }
    const result = await review.create(data);
    res.status(200).json({
        message: "Review is Added "
    })
    }catch(err){
        console.log(err.message);
      res.status(500).send({ msg: "internal server error ", error: err.message });
    }
}



exports.getAll = async(req,res) => {
    try{
    const data = await review.find().populate(['userId', "productId"])
    res.status(200).json({
        message: "ok",
        data: data
    })
}catch(err){
        console.log(err.message);
      res.status(500).send({ msg: "internal server error ", error: err.message });
    }
}