import mongoose from "mongoose";
import validator from "mongoose-validator";
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20,
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    DOB: {
        type: String,
        required: true,
        validate: [
            validator({
              validator: 'matches',
              expression: '([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))',
              message: 'Please use YYYY-MM-DD format for date'
            })
          ]
    },
    isActive: {
        type: Boolean,
        required: true,
        default: false
    },
    createdBy: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


export default mongoose.model("user", userSchema);