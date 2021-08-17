import mongoose from "mongoose";
const Schema = mongoose.Schema;



const prefSchema = new Schema({
  favouriteMusic:{
    type: String,
    required: true,
  },
  websiteLink: {
    type: String,
    required: true,
  },
  youtubeLink:{
    type: String,
    required: true,
  },
  isActive:{
    type: Boolean,
    required: true,
  },
  userId:{
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
  }
});

export default mongoose.model("pref", prefSchema);