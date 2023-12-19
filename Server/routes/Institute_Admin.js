const express = require("express");
const { auth, isInstituteMember } = require("../middlewares/auth");
const router = express.Router();
const { addFaculty, addStudent } = require("../controllers/Institute_Admin");  

router.post("/addFaculty",  auth, isInstituteMember, addFaculty);
router.post("/addStudent", auth, isInstituteMember, addStudent);


module.exports = router;

