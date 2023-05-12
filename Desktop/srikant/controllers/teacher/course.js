const coarse = require("../../models/course");

exports.createcourse = async (req, res) => {
  try {
    const data = {
      vedio: req.body.vedio,
      Assignment: req.body.Assignment,
      branch: req.body.branch,
      dailyTracker: req.body.dailyTracker,
      cheatsheets: req.body.cheatsheets,
    };
    const coarseData = await coarse.create(data);
    return res.status(200).send({ msg: coarseData });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};


// router.post('/courses', async (req, res) => {
//   try {
//     // Extract video and cheat sheet data from request body
//     const { video, cheatsheets } = req.body;

//     // Create a new course object with the extracted data
//     const newCourse = new Course({ vedio: video, cheatsheets });

//     // Save the new course object to the database
//     const savedCourse = await newCourse.save();

//     // Send the saved course object as response
//     res.json(savedCourse);
//   } catch (error) {
//     // Handle any errors that occur during the operation
//     res.status(500).json({ message: "Failed to create course", error });
//   }
// });





exports.getAllcourse = async (req, res) => {
  try {
    const coarseData = await coarse.find();
    if (!coarseData || coarseData.length === 0) {
      return res.status(400).json({
        message: "No coarseData",
      });
    }
    return res.status(200).json({
      message: "coarseData found",
      data: coarseData,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.updatecourse = async (req, res) => {
  try {
    const data = {
      vedio: req.body.vedio,
      Assignment: req.body.Assignment,
      branch: req.body.branch,
      dailyTracker: req.body.dailyTracker,
      cheatsheets: req.body.cheatsheets,
    };

    const coarseData = await coarse.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: {
          topics: { Assignment: req.body.Assignment, branch: req.body.branch },
        },
      },
      { new: true }
    );
    if (!coarseData) {
      return res.status(400).json({
        message: "coarseData not found",
      });
    }
    return res.status(200).json({
      message: "coarseData updated",
      data: coarseData,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.deletecourse = async (req, res) => {
  try {
    const courseData = await coarse.findOneAndDelete({
      _id: req.params.id,
    });
    if (!courseData) {
      return res.status(400).json({
        message: "courseData not found",
      });
    }
    return res.status(200).json({
      message: "courseData deleted",
      data: courseData,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: "internal server error",
    });
  }
};
