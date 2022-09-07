const mongoose = require("mongoose");

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);


// let author = await mongoose.fetch(`work_${message.guild.id}_${user.id}`)

const memberShema = new mongoose.Schema({
  id: String,
  guildId: String,
  coins: { type: Number, default: 0 },
  inventory: { type: Array, default: [] },
  daily: { type: Date, default: yesterday }
});

const Member = mongoose.model("Member", memberShema);

module.exports = Member;