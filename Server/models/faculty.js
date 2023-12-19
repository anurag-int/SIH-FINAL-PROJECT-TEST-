const mongoose = require("mongoose");

const faculty_Schema = mongoose.Schema({
    faculty_id : {
        type : String,
        required : true,
        trim : true
    },
    name : {
        type : String,
        required : true,
        trim : true
    },
    gender : {
        type : String,
        enum : ["Male","Female"],
        required : true,
        trim : true
    },
    designation : {
        type : String,
        required : true,
        trim : true,
        enum : ["PROFESSOR", "ASST PROFESSOR", "ASSOCIATE PROFESSOR", "DIRECTOR", "HOD", "INSTRUCTOR", "LECTURER"]
    },
    date_of_joining : {
        type : String,
        trim : true,
        required : true
    },
    aicte_id : {
        type : String,
        trim : true,
        required : true
    },
    state : {
        type : String,
        enum : ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"],
        required : true
    }
})


const facultyschema = mongoose.model("Faculty", faculty_Schema);

module.exports = facultyschema;
