const seminars = require("../../../models/oppurtunityParts.js/seminars");

exports.createseminarsOfStudentByAdmin = async (req, res) => {
    try {
      const oppurtunity = await seminars.create({data:req.body.data});
       return  res.status(200).send({msg:oppurtunity});
    } catch (err) {
      return  res.status(500).send(err);
    }
}


exports.createAllseminarsOfStudentByAdmin = async (req, res) => {
    try {
        const oppurtunities = await seminars.find()
        return  res.status(200).send({msg:oppurtunities});
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.getseminarsOfStudentByIdByAdmin = async (req, res) => {
    try {
        const oppurtunity = await seminars.findById(req.params.id);
        if (!oppurtunity) {
            return res.status(404).send();
        }
       return  res.send(oppurtunity);
    } catch (err) {
        res.status(500).send(err);
    }
}


exports.updateseminarsOfStudentByAdmin = async (req, res) => {
    try {
        const oppurtunity = await seminars.findByIdAndUpdate({_id:req.params.id},{ data: req.body.data }, { new: true });
        if (!oppurtunity) {
            return res.status(404).send();
        }
      return  res.status(200).send(oppurtunity);
    } catch (err) {
     return   res.status(500).send(err);
    }
}



exports.deleteseminarsOfStudentByAdmin = async (req, res) => {
    try {
        const oppurtunity = await seminars.findByIdAndDelete(req.params.id);
        if (!oppurtunity) {
            return res.status(404).send();
        }
       return res.send(oppurtunity);
    } catch (err) {
        res.status(500).send(err);
    }
}

