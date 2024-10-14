import mongoose, { Schema } from 'mongoose';

const answerSchema = new Schema({
  questionId: { type: Number, required: true },
  answerId: { type: Number, required: true },
  correct: { type: Boolean, required: true },
  points: { type: Number, required: true },
});

const Answer = mongoose.models.Answer || mongoose.model('Answer', answerSchema);

export default Answer;
