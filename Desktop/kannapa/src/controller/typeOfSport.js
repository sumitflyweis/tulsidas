const TypeOfSport = require('../model/typeOfSport');

exports.createTypeOfSport = async (req, res) => {
  try {
    const { sport } = req.body;

    const newTypeOfSport = new TypeOfSport({ sport });
    const savedTypeOfSport = await newTypeOfSport.save();

    res.status(201).json(savedTypeOfSport);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



exports.getAllTypeOfSport = async (req, res) => {
  try {
    const typeOfSport = await TypeOfSport.find();

    if (!typeOfSport) {
      return res.status(404).json({ error: 'Type of sport not found' });
    }

    res.json({msg:typeOfSport});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



exports.getTypeOfSport = async (req, res) => {
  try {
    const typeOfSport = await TypeOfSport.findById(req.params.id);

    if (!typeOfSport) {
      return res.status(404).json({ error: 'Type of sport not found' });
    }

    res.json({msg:typeOfSport});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTypeOfSport = async (req, res) => {
  try {
    const { sport } = req.body;

    const updatedTypeOfSport = await TypeOfSport.findByIdAndUpdate(
      req.params.id,
      { sport },
      { new: true }
    );

    if (!updatedTypeOfSport) {
      return res.status(404).json({ error: 'Type of sport not found' });
    }

    res.json(updatedTypeOfSport);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTypeOfSport = async (req, res) => {
  try {
    const deletedTypeOfSport = await TypeOfSport.findByIdAndDelete(req.params.id);

    if (!deletedTypeOfSport) {
      return res.status(404).json({ error: 'Type of sport not found' });
    }

    res.json({ message: 'Type of sport deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
