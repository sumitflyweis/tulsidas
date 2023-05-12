const internship = require("../../../models/oppurtunityParts.js/internship");


exports.createinternshipOfStudentByAdmin = async (req, res) => {
    try {
      const oppurtunity = await internship.create({data:req.body.data});
       return  res.status(201).json(oppurtunity);
    } catch (err) {
      return  res.status(500).send(err);
    }
}


exports.createAllinternshipOfStudentByAdmin = async (req, res) => {
    try {
        const oppurtunities = await internship.find()
        return  res.status(200).send({msg:oppurtunities});
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.getinternshipOfStudentByIdByAdmin = async (req, res) => {
    try {
        const oppurtunity = await internship.findById(req.params.id);
        if (!oppurtunity) {
            return res.status(404).send();
        }
       //return  res.send(oppurtunity);
       return res.status(200).json({
        message: oppurtunity,
      });
    } catch (err) {
        res.status(500).send(err);
    }
}


exports.updateinternshipOfStudentByAdmin = async (req, res) => {
    try {
        const oppurtunity = await internship.findByIdAndUpdate({_id:req.params.id}, { data: req.body.data } , { new: true });
        if (!oppurtunity) {
            return res.status(404).send();
        }
      return  res.status(200).send(oppurtunity);
    } catch (err) {
     return   res.status(500).send(err);
    }
}



exports.deleteinternshipOfStudentByAdmin = async (req, res) => {
    try {
        const oppurtunity = await internship.findByIdAndDelete(req.params.id);
        if (!oppurtunity) {
            return res.status(404).send();
        }
       return res.send(oppurtunity);
    } catch (err) {
        res.status(500).send(err);
    }
}

