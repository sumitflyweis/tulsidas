const privacy = require('../../models/privacyPolicy')


exports.createPrivacy = async (req,res) =>{
    try{
       
   const input1 =    await privacy.create({data:req.body.data});
   if (!input1) {
    return res.status(400).json({
      message: "Data not found",
    });
  }
   console.log(input1)
    return  res.status(200).json({
            message: " please contact below ", 
       details : input1
     })
    }
    catch(err)
    {
        console.log(err);
      return  res.status(400).send({message: err.message})
    }
}


exports.updateprivacy = async (req, res ) => {
    try {
       
        const UpdatedTerms = await privacy.findOneAndUpdate({_id: req.params.id}, {
            data: req.body.data
        })//.exec();
        console.log(UpdatedTerms);
     return   res.status(200).json({
            message: "Terms Update" ,data:UpdatedTerms
        })
        
        
    }catch(err)
    {
       console.log(err)
     return  res.status(401).json({
        mesage: err.mesage
       })
    }
}


exports.getprivacy = async(req,res) => {
    try {
        const data = await privacy.find();
        console.log(data);
     return   res.status(200).json({
            terms : data
        })
        
    }catch(err)
    {
    return    res.status(400).send({mesage : err.mesage});
    }
}



exports.deleteprivacy = async (req, res) => {
    try {
      const deleteData = await privacy.findOneAndDelete({_id:req.params.id});
      if (!deleteData) {
        return res.status(400).json({
          message: "Data not found",
        });
      }
      return res.status(200).json({
        message: "Data deleted",
        data: deleteData,
      });
    } catch (err) {
      console.log(err.message);
   return  res.status(500).json({
        message: "internal server error",
      });
    }
  };
  
