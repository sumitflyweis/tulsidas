const job = require("../../../models/oppurtunityParts.js/job");

exports.getAlljobOfStudentByTeacher = async (req, res) => {
    try {
        const oppurtunities = await job.find()
        return  res.status(200).send(oppurtunities);
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.getjobOfStudentByIdByTeacher = async (req, res) => {
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

