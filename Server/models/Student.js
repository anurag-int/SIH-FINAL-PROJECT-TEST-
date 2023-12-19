const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    student_id : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        enum : ["Male", "Female"]
    },
    aicte_id : {
        type : String,
        trim : true,
        required : true
    }
});



const student_Schema = mongoose.model("Student", studentSchema);

module.exports = student_Schema;
