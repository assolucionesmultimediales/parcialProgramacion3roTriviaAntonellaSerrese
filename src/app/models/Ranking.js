import mongoose, { Schema } from 'mongoose';

const rankingSchema = new Schema({
  name: { type: String, required: true },
  mail: { type: String, required: true },
  score: { type: Number, required: true },
});

const Ranking = mongoose.models.Ranking || mongoose.model('Ranking', rankingSchema);

export default Ranking;
