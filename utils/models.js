const mongoose = require("mongoose");

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const hourDelay = new Date( Date.now() - 3600000);
hourDelay.setDate(hourDelay.getDate() - 1)
// let author = await mongoose.fetch(`work_${message.guild.id}_${user.id}`)

const memberShema = new mongoose.Schema({
  id: String,
  guildId: String,
  coins: { type: Number, default: 0 },
  inventory: { type: Array, default: [] },
  daily: { type: Date, default: yesterday },
  work: {type: Date , default: hourDelay }
});

const Member = mongoose.model("Member", memberShema);

module.exports = Member;

