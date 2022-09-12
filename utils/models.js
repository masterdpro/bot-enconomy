const mongoose = require("mongoose");

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const hour = Date.now()

// let author = await mongoose.fetch(`work_${message.guild.id}_${user.id}`)

const memberShema = new mongoose.Schema({
  id: String,
  guildId: String,
  coins: { type: Number, default: 0 },
  inventory: { type: Array, default: [] },
  daily: { type: Date, default: yesterday },
  work: {type: Date , default: hour }
});

const Member = mongoose.model("Member", memberShema);

module.exports = Member;

