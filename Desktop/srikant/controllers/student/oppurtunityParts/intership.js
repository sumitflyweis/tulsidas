const internship = require("../../../models/oppurtunityParts.js/internship");


exports.getAllinternshipOfStudentByStudent = async (req, res) => {
    try {
        const oppurtunities = await internship.find()
        return  res.status(200).send(oppurtunities);
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.getinternshipOfStudentByIdByStudent = async (req, res) => {
    try {
        const oppurtunity = await internship.findById(req.params.id);
        if (!oppurtunity) {
            return res.status(404).send();
        }
       return  res.send(oppurtunity);
    } catch (err) {
        res.status(500).send(err);
    }
}
