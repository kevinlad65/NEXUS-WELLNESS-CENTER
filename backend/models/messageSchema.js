import  mongoose  from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: [3,"First Name Must Contain At Least 3 Characters!"],
    },
    lastName:{
        type: String,
        required: true,
        minLength: [3,"First Name Must Contain At Least 3 Characters!"],
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail,"please provide a valid email!"],
    },
    phone:{
        type: String,
        required: true,
        minLength: [11,"phone no must contains exact 11 digit!"],
        maxLength: [11,"phone no must contains exact 11 digit!"],
    },
    message:{
        type: String,
        required: true,
        minLength: [10,"Message Must Contain At Least 10 Characters!"],
    },
})

export const Message = mongoose.model("Message" , messageSchema);