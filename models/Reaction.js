const { Schema, Types } = require("mongoose");
const dateFormat = require("./dateFormat");

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: "Please share your reaction.",
    maxLength: 255,
  },
  username: {
    type: String,
    required: "You are very much in need of a username friend!",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => date(createdAtVal),
  },
});

module.exports = ReactionSchema;
