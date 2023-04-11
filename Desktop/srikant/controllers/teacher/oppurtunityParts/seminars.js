const seminars = require("../../../models/oppurtunityParts.js/seminars");

exports.getAllseminarsOfStudentByTeacher = async (req, res) => {
    try {
        const oppurtunities = await seminars.find()
        return  res.status(200).send(oppurtunities);
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.getseminarsOfStudentByIdByTeacher = async (req, res) => {
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