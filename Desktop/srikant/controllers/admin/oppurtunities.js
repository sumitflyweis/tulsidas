const Oppurtunity = require("../../models/oppurtunities");

exports.createoppurtunities = async (req, res) => {
    try {
      const oppurtunity = await Oppurtunity.create({data:req.body.data});
       return  res.status(200).send({msg:oppurtunity});
    } catch (err) {
      return  res.status(500).send(err);
    }
}


exports.getAlloppurtunities = async (req, res) => {
    try {
        const oppurtunities = await Oppurtunity.find()
        return  res.status(200).send(oppurtunities);
    } catch (err) {
        res.status(500).send(err);
    }
}

// // Get a specific oppurtunity by ID
// router.get('/oppurtunities/:id', async (req, res) => {
//     try {
//         const oppurtunity = await Oppurtunity.findById(req.params.id);
//         if (!oppurtunity) {
//             return res.status(404).send();
//         }
//         res.send(oppurtunity);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });


exports.updateoppurtunities = async (req, res) => {
    try {
        const oppurtunity = await Oppurtunity.findByIdAndUpdate(req.params.id, req.body.data, { new: true });
        if (!oppurtunity) {
            return res.status(404).send();
        }
        res.send(oppurtunity);
    } catch (err) {
        res.status(500).send(err);
    }
}



exports.deleteoppurtunities = async (req, res) => {
    try {
        const oppurtunity = await Oppurtunity.findByIdAndDelete(req.params.id);
        if (!oppurtunity) {
            return res.status(404).send();
        }
       return res.send(oppurtunity);
    } catch (err) {
        res.status(500).send(err);
    }
}

