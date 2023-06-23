const Predict = require("../model/predictAndWin"); // Assuming your model file is in the "models" directory

exports.createPredict = async (req, res) => {
  try {
    const predict = new Predict(req.body);
    const savedPredict = await predict.save();
    res.status(200).json(savedPredict);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create predict" });
  }
};


exports.getAllPredict = async (req, res) => {
  try {
    const predict = await Predict.find()
    if (!predict) {
      return res.status(404).json({ error: "Predict not found" });
    }
    res.status(200).json({total:predict.length,msg:predict});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve predict" });
  }
};




exports.getPredictById = async (req, res) => {
  try {
    const predict = await Predict.findById(req.params.id);
    if (!predict) {
      return res.status(404).json({ error: "Predict not found" });
    }
    res.status(200).json({msg:predict})
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve predict" });
  }
};

exports.updatePredictById = async (req, res) => {
  try {
    const predict = await Predict.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!predict) {
      return res.status(404).json({ error: "Predict not found" });
    }
    res.status(200).json(predict);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update predict" });
  }
};

exports.deletePredictById = async (req, res) => {
  try {
    const predict = await Predict.findByIdAndRemove(req.params.id);
    if (!predict) {
      return res.status(404).json({ error: "Predict not found" });
    }
    res.status(200).json({ message: "Predict deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete predict" });
  }
};


// exports.updateUserAnswer = async (req, res) => {
//   try {
//     const { userId, selectedAnswer } = req.body;
//     const predict = await Predict.findById(req.params.id);

//     if (!predict) {
//       return res.status(404).json({ error: "Predict not found" });
//     }

//     const userAnswerExists = predict.detailsOfUser.some(
//       (detail) => detail.userId === userId
//     );

//     if (userAnswerExists) {
//       return res.status(409).json({ error: "User has already submitted their answer" });
//     }

//     if (Object.keys(selectedAnswer)[0] === Object.keys(predict.correctAnswer)[0]) {
//       predict.count += 1;
//       const a = predict.question;
//       predict.detailsOfUser.push({ userId, selectedAnswer, a });
//     }

//     const updatedPredict = await predict.save();

//     res.status(200).json({
//       userId,
//       count: updatedPredict.count,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to update user answer" });
//   }
// };



// exports.updateUserAnswer = async (req, res) => {
//   try {
//     const { userId, selectedAnswer } = req.body;
//     const predict = await Predict.findById(req.params.id);

//     if (!predict) {
//       return res.status(404).json({ error: "Predict not found" });
//     }

//     const userAnswerExists = predict.detailsOfUser.some(
//       (detail) => detail.userId === userId
//     );

//     if (userAnswerExists) {
//       return res.status(409).json({ error: "User has already submitted their answer" });
//     }

//     const correctAnswerKey = Object.keys(predict.correctAnswer)[0];
//     const selectedAnswerKey = Object.keys(selectedAnswer)[0];
//     const isAnswerCorrect = correctAnswerKey === selectedAnswerKey;

//     if (isAnswerCorrect) {
//       predict.count += 1;
//       predict.answer = true; // Set the answer field to true for correct answer
//     } else {
//       predict.answer = false; // Set the answer field to false for wrong answer
//     }

//    // const question = predict.question;
//     const answer = predict.answer 
//     predict.detailsOfUser.push({ userId, selectedAnswer, answer });
//     const updatedPredict = await predict.save();

//     res.status(200).json({
//       userId,
//       answer  ,
//       count: updatedPredict.count,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to update user answer" });
//   }
// };


exports.updateUserAnswer = async (req, res) => {
  try {
    const { userId, selectedAnswer } = req.body;
    const predict = await Predict.findById(req.params.id);

    if (!predict) {
      return res.status(404).json({ error: "Predict not found" });
    }

    const userAnswerExists = predict.detailsOfUser.some(
      (detail) => detail.userId === userId
    );

    if (userAnswerExists) {
      return res.status(409).json({ error: "User has already submitted their answer" });
    }

    const correctAnswerKey = Object.keys(predict.correctAnswer)[0];
    const selectedAnswerKey = Object.keys(selectedAnswer)[0];
    console.log(selectedAnswerKey)
    const isAnswerCorrect = correctAnswerKey === selectedAnswerKey;

    predict.answer = isAnswerCorrect;
    console.log(predict.answer);// Set the answer field to true for correct answer, false otherwise

    if (isAnswerCorrect) {
      predict.count += 1;
    }

    const answer = predict.answer;
    predict.detailsOfUser.push({ userId, selectedAnswer, answer });
    const updatedPredict = await predict.save();

    res.status(200).json({
      userId,
      answer,
      count: updatedPredict.count,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update user answer" });
  }
};

