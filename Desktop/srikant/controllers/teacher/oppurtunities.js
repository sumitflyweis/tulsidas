const Oppurtunity = require("../../models/oppurtunities");


exports.getAlloppurtunitiesByTeacher = async (req, res) => {
    try {
        const oppurtunities = await Oppurtunity.find()
        return  res.status(200).send(oppurtunities);
    } catch (err) {
        res.status(500).send(err);
    }
}
