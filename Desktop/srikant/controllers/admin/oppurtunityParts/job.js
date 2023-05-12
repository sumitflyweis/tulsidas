const job = require("../../../models/oppurtunityParts.js/job");

exports.createjobOfStudentByAdmin = async (req, res) => {
    try {
      const oppurtunity = await job.create({data:req.body.data});
       return  res.status(200).send({msg:oppurtunity});
    } catch (err) {
      return  res.status(500).send(err);
    }
}


exports.createAlljobOfStudentByAdmin = async (req, res) => {
    try {
        const oppurtunities = await job.find()
        return  res.status(200).send({msg:oppurtunities});
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.getjobOfStudentByIdByAdmin = async (req, res) => {
    try {
        const oppurtunity = await job.findById(req.params.id);
        if (!oppurtunity) {
            return res.status(404).send();
        }
       return  res.send(oppurtunity);
    } catch (err) {
        res.status(500).send(err);
    }
}


exports.updatejobOfStudentByAdmin = async (req, res) => {
    try {
        const oppurtunity = await job.findByIdAndUpdate({_id:req.params.id},{ data: req.body.data }, { new: true });
        if (!oppurtunity) {
            return res.status(404).send();
        }
      return  res.status(200).send(oppurtunity);
    } catch (err) {
     return   res.status(500).send(err);
    }
}



exports.deletejobOfStudentByAdmin = async (req, res) => {
    try {
        const oppurtunity = await job.findByIdAndDelete(req.params.id);
        if (!oppurtunity) {
            return res.status(404).send();
        }
       return res.send(oppurtunity);
    } catch (err) {
        res.status(500).send(err);
    }
}

