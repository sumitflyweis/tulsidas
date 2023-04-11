const interview = require("../../../models/oppurtunityParts.js/interview");


exports.getAllinterviewOfStudentByStudent = async (req, res) => {
    try {
        const oppurtunities = await interview.find()
        return  res.status(200).send(oppurtunities);
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.getinterviewOfStudentByIdByStudent = async (req, res) => {
    try {
        const oppurtunity = await interview.findById(req.params.id);
        if (!oppurtunity) {
            return res.status(404).send();
        }
       return  res.send(oppurtunity);
    } catch (err) {
        res.status(500).send(err);
    }
}

