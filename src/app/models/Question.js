import mongoose, { Schema } from "mongoose";

const questionSchema = new Schema({
  questionId: { type: Number, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
});

const Question =
  mongoose.models.Question || mongoose.model("Question", questionSchema);

export default Question;
