const mongoose = require("mongoose");
const { resetPasswordToken } = require("../controllers/ResetPassword");

const userSchema = mongoose.Schema(
    {
        firstName : {
            type : String,
            required : true,
            trim : true
        },
        lastName : {
            type : String,
            required : true,
            trim : true
        },
        email : {
            type : String,
            required : true,
            trim : true,
        },
        password : {
            type : String,
            required : true,
        },
        additionalDetails: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Profile",
		},
        image : {
            type : String,
            required : true
        },
        accountType : {
            type : String,
            enum : ["Admin", "Institute_Admin"],
            required : true
        },
        token: {
			type: String,
		},
        resetPasswordToken : {
            type: Date,
        }
    }
);

module.exports = mongoose.model("user", userSchema);