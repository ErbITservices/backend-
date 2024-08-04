import mongoose from "mongoose";
import validator from "validator";

const messegeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength:[3,"firsy name must contain at 3 characters"]
    },
    lastName: {
        type: String,
        required: true,
        minLength:[3,"last name must contain at 3 characters"]
    },
    email: {
        type: String,
        required: true, 
        validate:[validator.isEmail,"valid email"]
    },
    phone: {
        type: String,
        required: true,
        minLength:[11,"phone number must contain at 11 characters"],
        mexLength:[11,"phone number must contain at 11 characters"],
    },
    message: {
        type: String,
        required: true,
        minLength:[10,"message must contain at 10 characters"],
    },
});

export const Message = mongoose.model("Message",messegeSchema);

