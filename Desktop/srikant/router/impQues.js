const express = require("express");
const router = express.Router();
const impQuesController = require("../controllers/teacher/impQues");

router.post("/", impQuesController.createImpQues);

// GET route to retrieve all impQues
router.get("/", impQuesController.getImpQues);

// GET route to retrieve a specific impQues by ID
router.get("/:id", impQuesController.getImpQuesById);

// UPDATE route to update a specific impQues by ID
router.put("/:id", impQuesController.updateImpQues);

// DELETE route to delete a specific impQues by ID
router.delete("/:id", impQuesController.deleteImpQues);

module.exports = router;
