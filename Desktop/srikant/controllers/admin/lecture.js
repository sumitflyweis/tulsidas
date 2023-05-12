const Lecture = require('../../models/lecture');

// Get all lectures
exports.getLectures = async (req, res) => {
  try {
    const lectures = await Lecture.find();
    return res.status(200).json({
      message: "lectures found",
      data: lectures,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single lecture
exports.getLecture = async (req, res) => {
  try {
    const lecture = await Lecture.findById(req.params.id);
    if (lecture == null) {
      return res.status(404).json({ message: 'Lecture not found' });
    }
    return res.status(200).json({
      message: "lectures found",
      data: lecture,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new lecture
exports.createLecture = async (req, res) => {
  const lecture = new Lecture({
    vedio: req.body.vedio,
    percentage: req.body.percentage,
    subject: req.body.subject,
    name: req.body.name,
    year: req.body.year,
    semester: req.body.semester,
    duration: req.body.duration,
    desc: req.body.desc
  });

  try {
    const newLecture = await lecture.save();
    res.status(201).send({msg:newLecture});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a lecture
exports.updateLecture = async (req, res) => {
  try {
    const lecture = await Lecture.findById(req.params.id);
    if (lecture == null) {
      return res.status(404).json({ message: 'Lecture not found' });
    }

    if (req.body.vedio != null) {
      lecture.vedio = req.body.vedio;
    }
    if (req.body.percentage != null) {
      lecture.percentage = req.body.percentage;
    }
    if (req.body.subject != null) {
      lecture.subject = req.body.subject;
    }
    if (req.body.name != null) {
      lecture.name = req.body.name;
    }
    if (req.body.year != null) {
      lecture.year = req.body.year;
    }
    if (req.body.semester != null) {
      lecture.semester = req.body.semester;
    }
    if (req.body.duration != null) {
      lecture.duration = req.body.duration;
    }
    if (req.body.desc != null) {
      lecture.desc = req.body.desc;
    }

    const updatedLecture = await lecture.save();
    res.status(200).send({msg:updatedLecture});
    
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a lecture
exports.deleteLecture = async (req, res) => {
  try {
    const lecture = await Lecture.findById(req.params.id);
    if (lecture == null) {
      return res.status(404).json({ message: 'Lecture not found' });
    }
    await lecture.remove();
    res.json({ message: 'Lecture deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
