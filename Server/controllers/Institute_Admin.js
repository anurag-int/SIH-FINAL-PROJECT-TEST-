const Faculty = require("../models/faculty");
const Student = require("../models/Student"); 
const { successfullyRegistered } = require("../mail/successfullyRegistration");
const facultyschema = require("../models/faculty");

exports.addStudent = async(req, res) => {
    try{
        const { student_id, name, email, gender, aicte_id } = req.body;

    if(!student_id || !name || !email || !gender || !aicte_id){
        return res.status(401).json({
            success : false,
            message : "All data required"
        })
    }

    const existingStudent = await Student.findOne({ student_id : student_id });
    if(existingStudent){
        return res.status(401).json({
            success : true,
            message : "Already ID registered"
        })
    }


    await Student.create({
        student_id, name, email, gender, aicte_id
    })

    return res.status(200).json({
        success : true,
        message : "Student Registered"
    })
    }
    catch(error){
        console.log(error.message);
        return res.status(400).json({
            success : false,
            message : "Internal Server Error"
        })
    }
    

}


exports.addFaculty = async(req, res, next) => {
    try{
        const { faculty_id, name,  gender, designation, date_of_joining, aicte_id, state } = req.body;

    if(!faculty_id || !name || !gender || !aicte_id || !designation || !date_of_joining || !state ){
        return res.status(401).json({
            success : false,
            message : "All data required"
        })
    }

    const existingFaculty = await Faculty.findOne( { faculty_id } );
    if(existingFaculty){
        return res.status(401).json({
            success : true,
            message : "Already ID registered"
        })
    }


    await Faculty.create({
        faculty_id, name,  gender, designation, date_of_joining, aicte_id, state
    })

    return res.status(200).json({
        success : true,
        message : "Faculty Registered"
    })
    }
    catch(error){
        console.log(error.message);
        return res.status(400).json({
            success : false,
            message : "Internal Server Error"
        })
    }
}