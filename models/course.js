const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const holeSchema = new Schema({
  holeNum: String,
  yardage: String,
  par: { type: String, required: true, min: 3, max: 5 },
  handicap: String,
  strokes: String,
});

const courseSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  name: String,
  location: String,
  par: { type: String, required: true, min: 34, max: 73 },
  yardage: String,
  slope: String,
  numHoles: String,
  holes: [holeSchema],
});

module.exports = mongoose.model("Course", courseSchema);
