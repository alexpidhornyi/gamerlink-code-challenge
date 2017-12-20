import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  displayName: String,
  lastUpdated: String,
  stats: {
    saves: String,
    goals: String,
    wins: String
  },
  rankings: [{
    rank: String,
    type: {type:String},
    rating: String,
    gamesPlayed: String,
    topPercentile: String,
    rankImage: String
  }]
}, {
  collection: 'users'
});

export default mongoose.model('User', userSchema);
