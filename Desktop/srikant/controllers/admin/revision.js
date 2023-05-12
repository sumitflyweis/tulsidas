const revision = require("../../models/revision");

exports.createrevision = async (req, res) => {
  try {
    const data = {
        name: req.body.name,
      material: req.body.material,
    };
    const Revision = await revision.create(data);
console.log(Revision)
    return res.status(200).send(Revision);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Get all revision documents
exports.getrevision = async (req, res) => {
  try {
    const revisions = await revision.find();
   return  res.send({msg:revisions});
  } catch (err) {
    res.status(500).send(err);
  }
}

// // Get a revision document by ID
// router.get("/revisions/:id", async (req, res) => {
//   try {
//     const revisionById = await revision.findById(req.params.id);
//     if (!revisionById) {
//       res.status(404).send();
//     } else {
//       res.send(revisionById);
//     }
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });


exports.updaterevision = async (req, res) => {
  try {

    const data = {
        name: req.body.name,
      material: req.body.material,
    };
    const revisionToUpdate = await revision.findByIdAndUpdate(
      req.params.id,
      data,
      { new: true, runValidators: true }
    );
    if (!revisionToUpdate) {
    return  res.status(404).send();
    } else {
     return  res.send(revisionToUpdate);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}


exports.deleterevision = async (req, res) => {
  try {
    const deletedRevision = await revision.findByIdAndDelete(req.params.id);
    if (!deletedRevision) {
     return res.status(404).send();
    } else {
     return res.send(deletedRevision);
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

