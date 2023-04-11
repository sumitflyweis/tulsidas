const revision = require("../../models/revision");

exports.getrevisionByTeacher = async (req, res) => {
    try {
      const revisions = await revision.find();
     return  res.send(revisions);
    } catch (err) {
      res.status(500).send(err);
    }
  }