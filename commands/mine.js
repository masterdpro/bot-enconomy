const { SlashCommandBuilder } = require("@discordjs/builders");
const { updateMember } = require("../utils/utilities");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


module.exports = {
  data: new SlashCommandBuilder()
    .setName("work")
    .setDescription("travaille une fois tout les heur"),
  async execute(interaction) {
    interaction.reply(await updateMember(interaction.member));
  },
};