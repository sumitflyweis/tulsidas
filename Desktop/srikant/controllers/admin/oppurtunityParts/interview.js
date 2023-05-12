const interview = require("../../../models/oppurtunityParts.js/interview");


exports.createinterviewOfStudentByAdmin = async (req, res) => {
    try {
      const oppurtunity = await interview.create({data:req.body.data});
       return  res.status(200).json(oppurtunity);
    } catch (err) {
      return  res.status(500).send(err);
    }
}


exports.createAllinterviewOfStudentByAdmin = async (req, res) => {
    try {
        const oppurtunities = await interview.find()
        return  res.status(200).send({msg:oppurtunities});
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.getinterviewOfStudentByIdByAdmin = async (req, res) => {
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


// exports.updateinterviewOfStudentByAdmin = async (req, res) => {
//     try {
//         const oppurtunity = await interview.findByIdAndUpdate({_id:req.params.id},{ $push: { data: req.body.data } }, { new: true });
//         if (!oppurtunity) {
//             return res.status(404).send();
//         }
//       return  res.status(200).send(oppurtunity);
//     } catch (err) {
//      return   res.status(500).send(err);
//     }
// }


exports.updateinterviewOfStudentByAdmin = async (req, res) => {
    try {
        const opportunity = await interview.findByIdAndUpdate(req.params.id, { data: req.body.data }, { new: true });
        if (!opportunity) {
            return res.status(404).send();
        }
        return res.status(200).send(opportunity);
    } catch (err) {
        return res.status(500).send(err);
    }
}




exports.deleteinterviewOfStudentByAdmin = async (req, res) => {
    try {
        const oppurtunity = await interview.findByIdAndDelete(req.params.id);
        if (!oppurtunity) {
            return res.status(404).send();
        }
       return res.send(oppurtunity);
    } catch (err) {
        res.status(500).send(err);
    }
}

