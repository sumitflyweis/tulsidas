const terms = require('../../models/studRegistrationRecieved')


exports.registration = async (req,res) =>{
    try{
   const termsData =    await terms.create({data: req.body.data,studentId:req.body.studentId});
      res.status(200).json({
       // data : policyData,
       message: "  terms Added ", 
       details : termsData
     })
    }
    catch(err)
    {
        console.log(err);
        res.status(400).send({message: err.message})
    }
}




exports.updateregistration = async (req, res ) => {
    try {
       
        const UpdatedTerms = await terms.findOneAndUpdate({_id: req.params.id}, {
            data: req.body.data,studentId:req.body.studentId
        })//.exec();
        console.log(UpdatedTerms);
      return  res.status(200).json({
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



// exports.addDataToregistrationById = async (req, res) => {
//     try {
//       const event = await terms.findByIdAndUpdate({_id:req.params.id},{ $push: { data: req.body.data } },{new:true});
      
//       res.status(200).json(event);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server Error');
//     }
//   };


exports.Deleteregistration = async(req,res) => {
    try {
    const id = req.params.id; 
    await terms.deleteOne({_id: id});
    res.status(200).send({message: "data deleted "})
    }catch(err){
      console.log(err); 
      res.status(400).send({message: err.message})
    }
}

exports.getregistration = async(req,res) => {
    try {
        const data = await terms.find();
        console.log(data);
      return  res.status(200).json({
            terms : data 
        })
        
    }catch(err)
    {
        res.status(400).send({mesage : err.mesage});
    }
}
  
exports.getregistrationbyid = async(req,res) => {
    try {
        const data = await terms.findById({_id:req.params.id})
        console.log(data);
      return  res.status(200).json({
            terms : data
        })
        
    }catch(err)
    {
        res.status(400).send({mesage : err.mesage});
    }
}