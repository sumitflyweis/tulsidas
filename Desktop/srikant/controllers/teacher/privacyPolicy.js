const privacy = require('../../models/privacyPolicy')

exports.getprivacyByTeacher = async(req,res) => {
    try {
        const data = await privacy.find();
        if(!data) return res.status(404).send({msg:"Not Found"})
        console.log(data);
     return   res.status(200).json({
            terms : data
        })
        
    }catch(err)
    {
    return    res.status(400).send({mesage : err.mesage});
    }
}
